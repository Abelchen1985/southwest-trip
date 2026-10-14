(function () {
  'use strict';

  var RT = window.RT, TRIP = window.TRIP, DAYS = window.DAYS;

  /* ---------- helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function el(tag, props, kids) {
    var n = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      var v = props[k];
      if (v == null || v === false) return;
      if (k === 'class') n.className = v;
      else if (k === 'text') n.textContent = v;
      else if (k === 'style') n.setAttribute('style', v);
      else if (k.slice(0, 2) === 'on') n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? '' : v);
    });
    (kids || []).forEach(function (c) {
      if (c == null || c === false) return;
      n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return n;
  }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  function lsGet(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  function link(href, text, cls) { return el('a', { href: href, target: '_blank', rel: 'noopener', class: cls, text: text }); }
  function deg(n) { return n == null ? '–' : Math.round(n) + '°'; }

  function todayISO() {
    var d = new Date();
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }

  /* ---------- state ---------- */
  var params = new URLSearchParams(location.search);
  var startParam = params.get('start');
  var state = {
    start: RT.parseISO(startParam) ? startParam
      : RT.parseISO(lsGet('sw-start')) ? lsGet('sw-start')
      : (RT.parseISO(TRIP.defaultStart) ? TRIP.defaultStart : null),
    sel: null,
    wx: null,          // array of date->day maps, one per DAYS entry
    wxError: null,
    done: lsGet('sw-checklist') || {}
  };

  function dateFor(i) { return state.start ? RT.addDays(state.start, i) : null; }
  function wxFor(i) {
    var d = dateFor(i);
    return d && state.wx && state.wx[i] ? (state.wx[i][d] || null) : null;
  }

  /* ---------- header ---------- */
  $('title').textContent = TRIP.title;
  $('subtitle').textContent = TRIP.subtitle;
  document.title = TRIP.title;

  var startInput = $('start');
  if (state.start) startInput.value = state.start;
  startInput.addEventListener('change', function () {
    setStart(RT.parseISO(startInput.value) ? startInput.value : null);
  });
  $('clear-start').addEventListener('click', function () { startInput.value = ''; setStart(null); });
  if (window.PREVIEW_MODE) $('print').hidden = true; // printing is unavailable in the preview frame
  else $('print').addEventListener('click', function () { window.print(); });

  function setStart(v) {
    state.start = v;
    lsSet('sw-start', v);
    var p = new URLSearchParams(location.search);
    if (v) p.set('start', v); else p.delete('start');
    var qs = p.toString();
    try { history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash); } catch (e) { /* ignore */ }
    render();
  }

  function setStatus(msg, retry) {
    var s = $('status');
    clear(s);
    if (!msg) return;
    s.appendChild(document.createTextNode(msg + ' '));
    if (retry) s.appendChild(el('button', { type: 'button', class: 'btn small', text: 'Retry', onclick: retry }));
  }

  /* ---------- map ---------- */
  var PREVIEW = !!window.PREVIEW_MODE; // preview builds can't load map tiles or live forecasts
  var map = L.map('map', { scrollWheelZoom: false });
  if (!PREVIEW) {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

  var allBounds = L.latLngBounds([[TRIP.home.lat, TRIP.home.lon]]);
  var lines = [];

  L.marker([TRIP.home.lat, TRIP.home.lon], {
    title: TRIP.home.name, zIndexOffset: 1000,
    icon: L.divIcon({ className: 'pin-wrap', html: '<span class="pin home">Home</span>', iconSize: [46, 22], iconAnchor: [23, 11] })
  }).addTo(map);

  DAYS.forEach(function (day, i) {
    var line = L.polyline(day.route, { color: day.color, weight: 4, opacity: 0.85 }).addTo(map);
    line.on('click', function () { selectDay(i, true); });
    lines.push(line);
    day.route.forEach(function (p) { allBounds.extend(p); });

    day.stops.forEach(function (s) {
      L.marker([s.lat, s.lon], {
        title: s.name,
        icon: L.divIcon({ className: 'pin-wrap', html: '<span class="stop-dot" style="display:block;background:' + day.color + '"></span>', iconSize: [12, 12], iconAnchor: [6, 6] })
      }).bindTooltip('Day ' + day.n + ': ' + s.name).on('click', function () { selectDay(i, true); }).addTo(map);
    });

    if (day.hotels) {
      var end = day.route[day.route.length - 1];
      L.marker(end, {
        title: 'Night ' + day.n,
        zIndexOffset: 500,
        icon: L.divIcon({ className: 'pin-wrap', html: '<span class="pin" style="background:' + day.color + '">' + day.n + '</span>', iconSize: [28, 28], iconAnchor: [14, 14] })
      }).bindTooltip('Night ' + day.n + ': ' + day.hotels.area).on('click', function () { selectDay(i, true); }).addTo(map);
    }
  });

  map.fitBounds(allBounds, { padding: [20, 20] });

  function selectDay(i, scroll) {
    state.sel = state.sel === i && !scroll ? null : i;
    lines.forEach(function (ln, j) {
      ln.setStyle({ weight: state.sel === j ? 7 : 4, opacity: state.sel == null || state.sel === j ? 0.9 : 0.35 });
    });
    if (state.sel != null) {
      map.fitBounds(L.latLngBounds(DAYS[i].route), { padding: [30, 30], maxZoom: 9 });
      if (scroll) {
        var card = $('day-' + DAYS[i].n);
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      map.fitBounds(allBounds, { padding: [20, 20] });
    }
    renderGlance();
    document.querySelectorAll('.day').forEach(function (c, j) { c.classList.toggle('sel', state.sel === j); });
  }

  /* ---------- weather ---------- */
  var CACHE_KEY = 'sw-wx-v1', CACHE_MS = 30 * 60 * 1000;
  var SIG = DAYS.map(function (d) { return d.wx.lat + ',' + d.wx.lon; }).join('|');

  function loadWeather(force) {
    if (PREVIEW) {
      state.wxError = 'preview only: live forecasts and map tiles load on the hosted site';
      render();
      return;
    }
    var cached = force ? null : lsGet(CACHE_KEY);
    if (cached && cached.sig === SIG && Date.now() - cached.t < CACHE_MS && Array.isArray(cached.data)) {
      state.wx = cached.data; state.wxError = null; render(); return;
    }
    setStatus('Loading forecasts…');
    var ctrl = typeof AbortController === 'function' ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 20000);
    fetch(RT.buildForecastUrl(DAYS.map(function (d) { return d.wx; })), ctrl ? { signal: ctrl.signal } : undefined)
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (json) {
        state.wx = RT.parseForecast(json, DAYS.length);
        state.wxError = null;
        lsSet(CACHE_KEY, { t: Date.now(), sig: SIG, data: state.wx });
        render();
      })
      .catch(function (err) {
        state.wxError = (err && err.message) || 'network error';
        render();
      })
      .then(function () { clearTimeout(timer); });
  }

  function updateStatus() {
    if (PREVIEW) { setStatus('Preview: live forecasts and the map background load once the page is hosted.'); return; }
    if (!state.start) { setStatus('Pick a start date to see dates, clock changes, seasonal notes and forecasts.'); return; }
    var ahead = RT.daysBetween(todayISO(), state.start);
    var lastDay = ahead + DAYS.length - 1;
    if (ahead != null && lastDay < 0) { setStatus('That start date is in the past.'); return; }
    if (ahead != null && ahead >= RT.MAX_FORECAST_DAYS) {
      setStatus('Forecasts show up about two weeks before each day. Check back closer to the trip.');
      return;
    }
    if (state.wxError) {
      setStatus('Could not load forecasts (' + state.wxError + '). The plan still works without them.', function () { loadWeather(true); });
      return;
    }
    if (!state.wx) { setStatus('Loading forecasts…'); return; }
    if (lastDay >= RT.MAX_FORECAST_DAYS) setStatus('Forecasts are shown for the days within the next two weeks; later days fill in as the trip gets closer.');
    else setStatus('');
  }

  function wxMini(i) {
    var w = wxFor(i);
    if (!w) return null;
    return RT.weatherInfo(w.code).icon + ' ' + deg(w.tmax) + '/' + deg(w.tmin);
  }

  function wxBlock(day, i) {
    var w = wxFor(i);
    var box = el('div', { class: 'wx' });
    box.appendChild(el('div', { class: 'sub-h', style: 'margin-top:0', text: 'Weather · ' + day.wx.label }));
    if (!w) {
      var dayAhead = state.start ? RT.daysBetween(todayISO(), dateFor(i)) : null;
      var msg = !state.start ? 'Set a start date above to see the forecast.'
        : PREVIEW ? 'Live forecast shows on the hosted site.'
        : dayAhead != null && dayAhead >= RT.MAX_FORECAST_DAYS ? 'Forecast appears about two weeks before this day.'
        : state.wxError ? 'Forecast unavailable right now.'
        : 'Forecast appears about two weeks before this day.';
      box.appendChild(el('div', { class: 'meta', text: msg }));
      return box;
    }
    var info = RT.weatherInfo(w.code);
    box.appendChild(el('div', { class: 'row' }, [
      el('span', { class: 'big', 'aria-hidden': 'true', text: info.icon }),
      el('span', { class: 'temps', text: deg(w.tmax) + ' / ' + deg(w.tmin) }),
      el('span', { text: info.text })
    ]));
    box.appendChild(el('div', { class: 'meta', text: 'Rain chance ' + (w.pop == null ? '–' : Math.round(w.pop) + '%') +
      ' · gusts ' + (w.gust == null ? '–' : Math.round(w.gust) + ' mph') +
      ' · sunset ' + RT.fmtClock(w.sunset) + ' local' }));
    var adv = RT.weatherAdvice(day.flags, w);
    if (adv.length) box.appendChild(el('ul', {}, adv.map(function (a) { return el('li', { text: a }); })));
    return box;
  }

  /* ---------- glance ---------- */
  function renderGlance() {
    var ol = $('glance');
    clear(ol);
    DAYS.forEach(function (day, i) {
      var date = dateFor(i);
      ol.appendChild(el('li', {}, [
        el('button', { type: 'button', 'aria-pressed': state.sel === i ? 'true' : 'false', onclick: function () { selectDay(i, true); } }, [
          el('span', { class: 'dot', style: 'background:' + day.color, text: String(day.n) }),
          el('span', {}, [
            el('span', { class: 't', text: day.title }), el('br'),
            el('span', { class: 'd', text: (date ? RT.fmtDate(date) + ' · ' : '') + day.drive })
          ]),
          el('span', { class: 'w', text: wxMini(i) || '' })
        ])
      ]));
    });
  }

  /* ---------- day cards ---------- */
  function renderDays() {
    var box = $('days');
    clear(box);
    DAYS.forEach(function (day, i) {
      var date = dateFor(i);
      var card = el('article', { class: 'day' + (state.sel === i ? ' sel' : ''), id: 'day-' + day.n, style: '--c:' + day.color });

      var drivePill = el('span', { class: 'pill' }, ['🚗 ' + day.drive + ' ',
        day.driveSrc ? link(day.driveSrc, '(' + day.driveNote + ')') : el('span', { class: 'meta', text: '(' + day.driveNote + ')' })]);
      card.appendChild(el('div', { class: 'day-head' }, [
        el('span', { class: 'kicker', text: 'Day ' + day.n + (date ? ' · ' + RT.fmtDate(date) : '') }),
        el('h3', { text: day.title }),
        drivePill
      ]));

      var left = el('div', {});
      left.appendChild(el('ul', { class: 'plan' }, day.plan.map(function (p) {
        return el('li', {}, [el('span', { class: 'when', text: p[0] }), el('span', { text: p[1] })]);
      })));

      left.appendChild(el('div', { class: 'sub-h', text: 'Stops' }));
      left.appendChild(el('ul', { class: 'stops' }, day.stops.map(function (s) {
        var label = s.kind === 'main' ? 'Main' : s.kind === 'optional' ? 'Optional' : 'Quick stop';
        return el('li', {}, [
          el('span', { class: 'tag ' + s.kind, text: label }),
          link(RT.gmapsSearch(s.name.replace(/\s*\(.*\)\s*/g, ' ').trim()), s.name),
          s.url ? el('span', {}, [' · ', link(s.url, 'info')]) : null,
          s.note ? el('span', { class: 'note', text: s.note }) : null
        ]);
      })));

      var right = el('div', {});
      right.appendChild(wxBlock(day, i));

      var notes = [];
      if (date) {
        var cc = RT.clockChange(day.zones[0], day.zones[1], date);
        if (cc) notes.push('🕒 ' + cc);
        RT.seasonNotes(day.flags, date).forEach(function (s) { notes.push('📅 ' + s); });
      } else if (day.zones[0] !== day.zones[1]) {
        notes.push('🕒 Time zone change today. Set a start date to see whether clocks change.');
      }
      if (notes.length) right.appendChild(el('ul', { class: 'notes' }, notes.map(function (t) { return el('li', { text: t }); })));

      right.appendChild(el('div', { class: 'sub-h', text: 'Tonight' }));
      if (day.hotels) {
        right.appendChild(el('div', { class: 'hotel' }, [
          el('div', { text: day.hotels.area }),
          el('ul', {}, day.hotels.options.map(function (h) {
            return el('li', {}, [link(RT.gmapsSearch(h.q), h.name), h.note ? el('span', { class: 'meta', text: ' – ' + h.note }) : null]);
          }))
        ]));
      } else {
        right.appendChild(el('div', { class: 'hotel', text: 'Home.' }));
      }

      card.appendChild(el('div', { class: 'day-body' }, [left, right]));

      var routePts = [{ lat: day.route[0][0], lon: day.route[0][1] }]
        .concat(day.stops.filter(function (s) { return s.kind !== 'optional'; }).map(function (s) { return { lat: s.lat, lon: s.lon }; }))
        .concat([{ lat: day.route[day.route.length - 1][0], lon: day.route[day.route.length - 1][1] }]);
      card.appendChild(el('div', { class: 'actions' }, [
        link(RT.gmapsRoute(routePts), 'Open in Google Maps', 'btn primary'),
        el('button', { type: 'button', class: 'btn', text: 'Show on map', onclick: function () {
          selectDay(i, false);
          $('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
        } })
      ]));

      box.appendChild(card);
    });
  }

  /* ---------- checklist & packing ---------- */
  function renderChecklist() {
    var ul = $('checklist');
    clear(ul);
    var total = window.CHECKLIST.length;
    var done = window.CHECKLIST.filter(function (c) { return state.done[c.id]; }).length;
    var prog = document.querySelector('.progress');
    if (!prog) { prog = el('p', { class: 'progress' }); ul.parentNode.insertBefore(prog, ul); }
    prog.textContent = done + ' of ' + total + ' done (saved in this browser)';
    window.CHECKLIST.forEach(function (c) {
      var box = el('input', { type: 'checkbox', id: 'chk-' + c.id, onchange: function (e) {
        if (e.target.checked) state.done[c.id] = true; else delete state.done[c.id];
        lsSet('sw-checklist', state.done);
        renderChecklist();
      } });
      box.checked = !!state.done[c.id];
      ul.appendChild(el('li', {}, [el('label', { for: 'chk-' + c.id }, [box, el('span', { text: c.text })])]));
    });
  }

  function renderPacking() {
    var ul = $('packing');
    clear(ul);
    window.PACKING.forEach(function (p) { ul.appendChild(el('li', { text: p })); });
  }

  function render() {
    updateStatus();
    renderGlance();
    renderDays();
  }

  renderChecklist();
  renderPacking();
  render();
  loadWeather(false);
})();
