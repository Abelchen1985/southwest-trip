/* Pure helpers (no DOM) so they can be tested in Node.
   Dates are handled as 'YYYY-MM-DD' strings in UTC to avoid browser time-zone drift. */
(function (root) {
  'use strict';

  function parseISO(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || '');
    if (!m) return null;
    var d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
    return isNaN(d.getTime()) ? null : d;
  }

  function toISO(d) {
    return d.getUTCFullYear() + '-' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + d.getUTCDate()).slice(-2);
  }

  function addDays(iso, n) {
    var d = parseISO(iso);
    if (!d) return null;
    d.setUTCDate(d.getUTCDate() + n);
    return toISO(d);
  }

  function daysBetween(aIso, bIso) {
    var a = parseISO(aIso), b = parseISO(bIso);
    if (!a || !b) return null;
    return Math.round((b - a) / 86400000);
  }

  var WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function fmtDate(iso) {
    var d = parseISO(iso);
    if (!d) return '';
    return WEEKDAYS[d.getUTCDay()] + ', ' + MONTHS[d.getUTCMonth()] + ' ' + d.getUTCDate();
  }

  /* ---------- US daylight saving (2nd Sunday of March to 1st Sunday of November) ---------- */
  function nthSunday(year, month0, n) {
    var first = new Date(Date.UTC(year, month0, 1)).getUTCDay();
    return 1 + ((7 - first) % 7) + 7 * (n - 1);
  }

  function isUSDST(iso) {
    var d = parseISO(iso);
    if (!d) return false;
    var y = d.getUTCFullYear();
    var start = Date.UTC(y, 2, nthSunday(y, 2, 2));
    var end = Date.UTC(y, 10, nthSunday(y, 10, 1));
    return d.getTime() >= start && d.getTime() < end;
  }

  // Clock offsets from UTC. Arizona (outside the Navajo Nation) stays on standard time all year.
  function utcOffset(zone, iso) {
    var dst = isUSDST(iso);
    if (zone === 'TX') return dst ? -5 : -6;
    if (zone === 'NM') return dst ? -6 : -7;
    if (zone === 'AZ') return -7;
    return null;
  }

  var ZONE_NAMES = { TX: 'Texas (Central)', NM: 'New Mexico (Mountain)', AZ: 'Arizona' };

  // Returns a sentence about the clock change when driving from zone a to zone b, or null.
  function clockChange(a, b, iso) {
    if (!a || !b || a === b) return null;
    var diff = utcOffset(b, iso) - utcOffset(a, iso);
    if (diff === 0) return 'Entering ' + ZONE_NAMES[b] + ': no clock change on this date.';
    var n = Math.abs(diff);
    var hrs = n === 1 ? '1 hour' : n + ' hours';
    if (diff < 0) return 'Entering ' + ZONE_NAMES[b] + ': set clocks back ' + hrs + ' (you gain ' + hrs + ').';
    return 'Entering ' + ZONE_NAMES[b] + ': set clocks forward ' + hrs + ' (you lose ' + hrs + ').';
  }

  /* ---------- Weather ---------- */
  function weatherInfo(code) {
    if (code === 0) return { icon: '☀️', text: 'Clear' };
    if (code === 1) return { icon: '🌤️', text: 'Mostly clear' };
    if (code === 2) return { icon: '⛅', text: 'Partly cloudy' };
    if (code === 3) return { icon: '☁️', text: 'Overcast' };
    if (code === 45 || code === 48) return { icon: '🌫️', text: 'Fog' };
    if (code >= 51 && code <= 57) return { icon: '🌦️', text: 'Drizzle' };
    if (code >= 61 && code <= 67) return { icon: '🌧️', text: 'Rain' };
    if (code >= 71 && code <= 77) return { icon: '🌨️', text: 'Snow' };
    if (code >= 80 && code <= 82) return { icon: '🌦️', text: 'Showers' };
    if (code === 85 || code === 86) return { icon: '🌨️', text: 'Snow showers' };
    if (code === 95) return { icon: '⛈️', text: 'Thunderstorms' };
    if (code === 96 || code === 99) return { icon: '⛈️', text: 'Storms with hail' };
    return { icon: '❓', text: 'Unknown' };
  }

  var MAX_FORECAST_DAYS = 16;
  var DAILY = ['weather_code', 'temperature_2m_max', 'temperature_2m_min', 'precipitation_probability_max',
    'wind_gusts_10m_max', 'sunrise', 'sunset'];

  // points: [{lat, lon, tz}] where tz is an IANA zone name
  function buildForecastUrl(points) {
    return 'https://api.open-meteo.com/v1/forecast' +
      '?latitude=' + points.map(function (p) { return p.lat.toFixed(4); }).join(',') +
      '&longitude=' + points.map(function (p) { return p.lon.toFixed(4); }).join(',') +
      '&daily=' + DAILY.join(',') +
      '&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch' +
      '&timezone=' + points.map(function (p) { return encodeURIComponent(p.tz); }).join(',') +
      '&forecast_days=' + MAX_FORECAST_DAYS;
  }

  // Returns one { 'YYYY-MM-DD': dayObj } map per requested point, in order.
  function parseForecast(json, count) {
    if (json && json.error) throw new Error(json.reason || 'Weather service error');
    var arr = Array.isArray(json) ? json : [json];
    if (arr.length !== count) throw new Error('Unexpected weather response');
    return arr.map(function (r) {
      var d = r && r.daily;
      if (!d || !Array.isArray(d.time)) throw new Error('Unexpected weather response');
      var out = {};
      d.time.forEach(function (t, i) {
        function at(k) { return d[k] && d[k][i] != null ? d[k][i] : null; }
        out[t] = {
          date: t, code: at('weather_code'), tmax: at('temperature_2m_max'), tmin: at('temperature_2m_min'),
          pop: at('precipitation_probability_max'), gust: at('wind_gusts_10m_max'),
          sunrise: at('sunrise'), sunset: at('sunset')
        };
      });
      return out;
    });
  }

  // '2026-10-17T18:12' -> '6:12 PM' without converting time zones (the API already returns local time).
  function fmtClock(isoLocal) {
    var m = /T(\d{2}):(\d{2})/.exec(isoLocal || '');
    if (!m) return '–';
    var h = +m[1], ap = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return h + ':' + m[2] + ' ' + ap;
  }

  // Practical tips driven by the forecast and the day's activities (flags).
  function weatherAdvice(flags, w) {
    flags = flags || [];
    var out = [];
    if (!w) return out;
    function has(f) { return flags.indexOf(f) !== -1; }
    var pop = w.pop || 0, gust = w.gust || 0;
    if (has('slot') && pop >= 30) out.push('Rain in the area: slot canyon tours can be cancelled for flash-flood risk. Keep your tour operator’s contact handy.');
    if (has('tram') && gust >= 35) out.push('Strong gusts: the tram can pause in high wind. Old Town is the backup plan.');
    if (has('dunes') && gust >= 30) out.push('Windy dunes mean blowing sand: bring sunglasses and a stroller cover.');
    if (has('rim') && w.tmin != null && w.tmin <= 40) out.push('Cold on the rim after sunset: pack warm layers and hats for the kids.');
    else if (w.tmin != null && w.tmin <= 35) out.push('Near-freezing night: pack warm layers.');
    if (w.tmax != null && w.tmax >= 90) out.push('Hot afternoon: do outdoor stops early or late, with shade and extra water.');
    if (!has('slot') && pop >= 50) out.push('Rain likely: keep the backup plan for this day in mind.');
    if (w.code === 95 || w.code === 96 || w.code === 99) out.push('Thunderstorms possible: stay off exposed overlooks and rim edges when you hear thunder.');
    return out;
  }

  // Date-dependent notes (closures, seasons) for a day's flags.
  function seasonNotes(flags, iso) {
    flags = flags || [];
    var d = parseISO(iso);
    if (!d) return [];
    var m = d.getUTCMonth() + 1, day = d.getUTCDate();
    var out = [];
    function has(f) { return flags.indexOf(f) !== -1; }
    if (has('tram') && ((m === 10 && day >= 10) || (m === 11 && day <= 20))) {
      out.push('Your date is close to the tram’s usual fall maintenance closure (Oct 21–31 in 2024, Nov 3–13 in 2025). Check sandiapeak.com before you count on it.');
    }
    if (has('cranes')) {
      if (m === 11 || m === 12 || m === 1) out.push('Crane season: Bosque del Apache is worth the short detour off I-25 (go early morning or late afternoon).');
      else if (m === 10 && day >= 20) out.push('Cranes may just be arriving at Bosque del Apache (they typically start in late October).');
    }
    var winter = m === 12 || m === 1 || m === 2;
    if (has('snow') && winter) out.push('Winter driving: check az511.gov (Arizona) or nmroads.com (New Mexico) for snow and ice before you leave.');
    if (has('rim') && winter) out.push('Winter on the rim: expect icy patches on the Rim Trail and nights well below freezing.');
    if (m === 12 && day === 24) out.push('Christmas Eve: many restaurants close early.');
    if (m === 12 && day === 25) out.push('Christmas Day: many restaurants and some shops are closed. Pack lunch and snacks, and fill up on gas when you can.');
    if (m === 12 && day === 31) out.push('New Year’s Eve: book dinner ahead, and be extra careful on the roads after dark.');
    if (m === 1 && day === 1) out.push('New Year’s Day: some restaurants and attractions open late or stay closed.');
    if (has('navajo') && isUSDST(iso)) {
      out.push('Daylight saving is on: the Navajo Nation (where Antelope Canyon is) observes it but the rest of Arizona doesn’t, so it is 1 hour ahead of Page. Confirm which time your tour uses.');
    }
    return out;
  }

  function gmapsSearch(q) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
  }

  function gmapsRoute(points) { // points: [{lat, lon}], first = origin, last = destination
    if (!points || points.length < 2) return null;
    function ll(p) { return p.lat.toFixed(5) + ',' + p.lon.toFixed(5); }
    var via = points.slice(1, -1).slice(0, 9);
    var url = 'https://www.google.com/maps/dir/?api=1&travelmode=driving' +
      '&origin=' + encodeURIComponent(ll(points[0])) +
      '&destination=' + encodeURIComponent(ll(points[points.length - 1]));
    if (via.length) url += '&waypoints=' + via.map(function (p) { return encodeURIComponent(ll(p)); }).join('%7C');
    return url;
  }

  var RT = {
    parseISO: parseISO, toISO: toISO, addDays: addDays, daysBetween: daysBetween, fmtDate: fmtDate,
    isUSDST: isUSDST, utcOffset: utcOffset, clockChange: clockChange,
    weatherInfo: weatherInfo, MAX_FORECAST_DAYS: MAX_FORECAST_DAYS, buildForecastUrl: buildForecastUrl,
    parseForecast: parseForecast, fmtClock: fmtClock, weatherAdvice: weatherAdvice, seasonNotes: seasonNotes,
    gmapsSearch: gmapsSearch, gmapsRoute: gmapsRoute
  };

  if (typeof module === 'object' && module.exports) module.exports = RT;
  else root.RT = RT;
})(typeof window !== 'undefined' ? window : this);
