/* Trip data. Edit this file to change the plan.
   Coordinates are approximate map markers. Drive times marked "est." are rough estimates;
   check them in Google Maps for your travel date. */

window.TRIP = {
  title: 'Southwest Family Road Trip',
  subtitle: 'Austin → Grand Canyon → Page → White Sands → Austin · Dec 25 – Jan 1 · 8 days, family-paced',
  defaultStart: '2026-12-25',
  home: { name: 'Austin, TX', lat: 30.2672, lon: -97.7431 }
};

window.DAYS = [
  {
    n: 1, title: 'Austin to Amarillo', color: '#c2410c',
    drive: '~7.5 hrs', driveNote: 'est.', zones: ['TX', 'TX'],
    wx: { label: 'Amarillo', lat: 35.2220, lon: -101.8313, tz: 'America/Chicago' },
    route: [[30.2672, -97.7431], [31.4638, -100.4370], [33.5779, -101.8552], [35.2220, -101.8313]],
    plan: [
      ['6:30 AM', 'Leave Austin. Stop about every 2 hours for feeds, diaper changes and leg stretches.'],
      ['Midday', 'Lunch around Lubbock, then drive through the baby’s nap.'],
      ['Late afternoon', 'Cadillac Ranch before sunset (around 5:40 PM in late December).'],
      ['Evening', 'Easy dinner and early bed.']
    ],
    stops: [
      { name: 'Lubbock (lunch)', lat: 33.5779, lon: -101.8552, kind: 'stretch' },
      { name: 'Cadillac Ranch', lat: 35.1872, lon: -101.9871, kind: 'main',
        note: 'Short walk across a field that can be muddy. Your 8-year-old can bring a can of spray paint to add to the cars.' }
    ],
    hotels: {
      area: 'West Amarillo near I-40 and Soncy Rd, closest to Cadillac Ranch',
      options: [
        { name: 'Country Inn & Suites by Radisson Amarillo I-40 West', q: 'Country Inn & Suites by Radisson Amarillo I-40 West' },
        { name: 'Comfort Inn & Suites Amarillo West', q: 'Comfort Inn & Suites Amarillo West near Medical Center' }
      ]
    },
    flags: []
  },
  {
    n: 2, title: 'Amarillo to Albuquerque', color: '#b45309',
    drive: '~4.5 hrs', driveNote: 'est.', zones: ['TX', 'NM'],
    wx: { label: 'Sandia Peak / Albuquerque', lat: 35.0961, lon: -106.6703, tz: 'America/Denver' },
    route: [[35.2220, -101.8313], [35.1717, -103.7250], [34.9387, -104.6827], [35.0961, -106.6703]],
    plan: [
      ['8:30 AM', 'Leave Amarillo (you gain an hour entering New Mexico).'],
      ['Lunch', 'Tucumcari or Santa Rosa on old Route 66, then nap on the drive.'],
      ['Afternoon', 'Check in and rest.'],
      ['Sunset', 'Sandia Peak Tramway to the top. It is far colder than the city, so bundle the baby and bring hats and gloves.']
    ],
    stops: [
      { name: 'Tucumcari (Route 66 murals, lunch)', lat: 35.1717, lon: -103.7250, kind: 'stretch' },
      { name: 'Sandia Peak Tramway', lat: 35.1903, lon: -106.4797, kind: 'main', url: 'https://sandiapeak.com/',
        note: 'Ride up about an hour before sunset. Use a front carrier for the baby at the top.' },
      { name: 'Old Town Albuquerque (backup)', lat: 35.0961, lon: -106.6703, kind: 'optional',
        note: 'Flat plaza for an evening stroll if the tram is closed or windy.' }
    ],
    hotels: {
      area: 'Old Town, with a flat plaza for an evening stroll',
      options: [
        { name: 'Hotel Albuquerque at Old Town', q: 'Hotel Albuquerque at Old Town' },
        { name: 'Holiday Inn Express & Suites Albuquerque Historic Old Town', q: 'Holiday Inn Express Albuquerque Historic Old Town' }
      ]
    },
    flags: ['tram']
  },
  {
    n: 3, title: 'Albuquerque to Sedona', color: '#a16207',
    drive: '~5.5 hrs', driveNote: 'est.', zones: ['NM', 'AZ'],
    wx: { label: 'Sedona', lat: 34.8697, lon: -111.7610, tz: 'America/Phoenix' },
    route: [[35.0961, -106.6703], [35.5281, -108.7426], [35.1983, -111.6513], [34.8697, -111.7610]],
    plan: [
      ['8:30 AM', 'Leave Albuquerque on I-40 west.'],
      ['Lunch', 'Flagstaff (about 7,000 ft; check for snow on I-40), then down to Sedona.'],
      ['Afternoon', 'Walk around Tlaquepaque Village, with courtyards and fountains your 8-year-old can explore.'],
      ['Sunset', 'Red rock sunset from the Airport Mesa overlook (small lot, arrive early) or from your hotel.']
    ],
    stops: [
      { name: 'Flagstaff (lunch)', lat: 35.1983, lon: -111.6513, kind: 'stretch' },
      { name: 'Tlaquepaque Arts & Shopping Village', lat: 34.8627, lon: -111.7634, kind: 'main' },
      { name: 'Airport Mesa overlook', lat: 34.8520, lon: -111.7880, kind: 'optional', note: 'Small parking lot that fills before sunset.' }
    ],
    hotels: {
      area: 'Near Tlaquepaque on Hwy 89A',
      options: [
        { name: 'Best Western Plus Arroyo Roble Hotel & Creekside Villas', q: 'Best Western Plus Arroyo Roble Sedona', note: 'Close to Tlaquepaque; confirm walking distance.' },
        { name: 'Club Wyndham Sedona', q: 'Club Wyndham Sedona' }
      ]
    },
    flags: ['snow']
  },
  {
    n: 4, title: 'Sedona to Grand Canyon South Rim', color: '#4d7c0f',
    drive: '~2.25 hrs', driveNote: 'est.', zones: ['AZ', 'AZ'],
    wx: { label: 'Grand Canyon South Rim', lat: 36.0617, lon: -112.1077, tz: 'America/Phoenix' },
    route: [[34.8697, -111.7610], [34.9930, -111.7480], [35.1983, -111.6513], [35.9700, -112.1260], [36.0617, -112.1077]],
    plan: [
      ['Morning', 'Slow start. Optional quick stop at the Chapel of the Holy Cross.'],
      ['11:00 AM', 'Drive north through Oak Creek Canyon (scenic and winding). If snow or ice is forecast, take I-17 to Flagstaff instead.'],
      ['Afternoon', 'Rim Trail from Mather Point to Yavapai Geology Museum: paved and level, good for the stroller. Watch for icy patches.'],
      ['Sunset', 'Watch sunset at Yavapai Point or Mather Point. Stay behind the railings and keep a hand on your 8-year-old.']
    ],
    stops: [
      { name: 'Chapel of the Holy Cross', lat: 34.8325, lon: -111.7666, kind: 'optional' },
      { name: 'Mather Point', lat: 36.0617, lon: -112.1077, kind: 'main' },
      { name: 'Yavapai Geology Museum / Point', lat: 36.0657, lon: -112.1180, kind: 'main',
        note: 'The Mather to Yavapai stretch of the Rim Trail is paved and level; shuttles let you skip walking back. Ask for a Junior Ranger booklet at the visitor center.' }
    ],
    hotels: {
      area: 'Inside the park is easiest for sunset; Tusayan is just outside the south entrance',
      options: [
        { name: 'Yavapai Lodge (in park)', q: 'Yavapai Lodge Grand Canyon', note: 'Family-friendly, near Market Plaza groceries.' },
        { name: 'The Squire at Grand Canyon (Tusayan)', q: 'The Squire at Grand Canyon Tusayan', note: 'Indoor and outdoor pools.' }
      ]
    },
    flags: ['rim', 'snow']
  },
  {
    n: 5, title: 'Grand Canyon to Page', color: '#0f766e',
    drive: '~2.5 hrs + stops', driveNote: 'est.', zones: ['AZ', 'AZ'],
    wx: { label: 'Page / Horseshoe Bend', lat: 36.9147, lon: -111.4558, tz: 'America/Phoenix' },
    route: [[36.0617, -112.1077], [36.0441, -111.8261], [35.8753, -111.4128], [36.9147, -111.4558]],
    plan: [
      ['8:30 AM', 'Drive the Desert View Drive east along the rim (it can close briefly after snow).'],
      ['Morning', 'Desert View Watchtower, the last big canyon view.'],
      ['Lunch', 'Cameron Trading Post, then nap on the drive north to Page.'],
      ['Afternoon', 'Check in and rest, or swim if your hotel has an indoor pool.'],
      ['Late afternoon', 'Horseshoe Bend: 0.6 mi each way on a graded, stroller-friendly path. $10 parking. Go about an hour before sunset; the gate stops entry at sunset.']
    ],
    stops: [
      { name: 'Desert View Watchtower', lat: 36.0441, lon: -111.8261, kind: 'main' },
      { name: 'Cameron Trading Post (lunch)', lat: 35.8753, lon: -111.4128, kind: 'stretch' },
      { name: 'Horseshoe Bend', lat: 36.8791, lon: -111.5104, kind: 'main', url: 'https://horseshoebend.com/hike-horseshoe-bend/',
        note: 'Some uphill packed sand may need a push. Most of the rim has no railing: keep the baby buckled in and your 8-year-old close.' }
    ],
    hotels: {
      area: 'Central Page, close to Horseshoe Bend and tour check-ins',
      options: [
        { name: 'Hyatt Place Page Lake Powell', q: 'Hyatt Place Page Lake Powell', note: 'Pool and free breakfast.' },
        { name: 'Best Western View of Lake Powell', q: 'Best Western View of Lake Powell Page', note: 'Large pool and breakfast buffet.' }
      ]
    },
    flags: ['navajo']
  },
  {
    n: 6, title: 'Antelope Canyon, then Page to Gallup', color: '#0369a1',
    drive: '~4–5 hrs', driveNote: 'est.', zones: ['AZ', 'NM'],
    wx: { label: 'Page (morning tour)', lat: 36.8619, lon: -111.3743, tz: 'America/Phoenix' },
    route: [[36.9147, -111.4558], [35.8753, -111.4128], [35.1983, -111.6513], [35.0222, -110.6973], [35.0657, -109.7826], [35.5281, -108.7426]],
    plan: [
      ['Early', 'Upper Antelope Canyon tour. Bathroom first: there are none at the canyon.'],
      ['10:00 AM', 'Leave Page. Lunch in Flagstaff, then east on I-40. The direct drive is about 4 hours; the Flagstaff lunch route adds roughly an hour.'],
      ['Afternoon', 'Optional: Painted Desert overlooks at Petrified Forest’s north entrance (I-40 exit 311). The park road closes at 5 PM, so only if you are there by about 3:30.'],
      ['Before dark', 'Arrive in Gallup well before sunset, so no mountain driving in the dark.']
    ],
    stops: [
      { name: 'Upper Antelope Canyon', lat: 36.8619, lon: -111.3743, kind: 'main',
        note: 'Guided tours only. Strollers and backpack carriers are not allowed; carry the baby in your arms. One operator asks you to bring a car seat for the ride to the canyon. The canyon is ground level and about 300 ft long.' },
      { name: 'Flagstaff (lunch)', lat: 35.1983, lon: -111.6513, kind: 'stretch' },
      { name: 'Standin’ on the Corner Park, Winslow', lat: 35.0222, lon: -110.6973, kind: 'stretch' },
      { name: 'Petrified Forest National Park (north entrance)', lat: 35.0657, lon: -109.7826, kind: 'optional',
        note: 'Open 8 AM–5 PM Arizona time. A short drive along the Painted Desert rim works well with kids.' }
    ],
    hotels: {
      area: 'Gallup, right on I-40 for an early start',
      options: [
        { name: 'El Rancho Hotel (historic Route 66)', q: 'El Rancho Hotel Gallup', note: 'Classic 1930s lodge; check room sizes for a family.' },
        { name: 'Chain hotels along I-40', q: 'hotels near I-40 Gallup New Mexico' }
      ]
    },
    flags: ['slot', 'navajo', 'snow']
  },
  {
    n: 7, title: 'Gallup to White Sands to Roswell', color: '#7c3aed',
    drive: '~7.5 hrs (5h 16m + 2h 22m)', driveNote: 'Google Maps',
    driveSrc: 'https://www.google.com/maps/dir/Gallup,+NM,+USA/White+Sands+National+Park,+New+Mexico,+United+States/',
    zones: ['NM', 'NM'],
    wx: { label: 'White Sands', lat: 32.7797, lon: -106.1717, tz: 'America/Denver' },
    route: [[35.5281, -108.7426], [35.0844, -106.6504], [33.9178, -106.8653], [33.6830, -105.9200], [32.8995, -105.9603], [32.7797, -106.1717], [33.0737, -106.0186], [33.3290, -105.6033], [33.3943, -104.5230]],
    plan: [
      ['7:30 AM', 'Leave Gallup. I-40 east past Albuquerque, then south (about 5 hours, 340 mi).'],
      ['Late morning', 'Optional quick stretch: Valley of Fires, a paved ¾-mile loop over a lava flow near Carrizozo ($5 per vehicle).'],
      ['Midday', 'Lunch in Alamogordo, then White Sands. Dunes Drive, the Interdune Boardwalk and sledding. Expect cool, bright weather rather than warm.'],
      ['3:00 PM', 'Leave the dunes. US-70 climbs into the Sacramento Mountains through Mescalero and Ruidoso, and sunset is around 5 PM, so leaving at 3 rather than 4 gets most of the mountain stretch done in daylight.'],
      ['Evening', 'Arrive in Roswell (about 2h 22m, 132 mi) and ring in the New Year.']
    ],
    stops: [
      { name: 'Valley of Fires Recreation Area', lat: 33.6830, lon: -105.9200, kind: 'optional', url: 'https://blm.gov/visit/valley-fires-recreation-area' },
      { name: 'Alamogordo (lunch)', lat: 32.8995, lon: -105.9603, kind: 'stretch' },
      { name: 'White Sands National Park', lat: 32.7797, lon: -106.1717, kind: 'main', url: 'https://www.nps.gov/whsa/planyourvisit/park-closures.htm',
        note: 'Open every day except Thanksgiving and Christmas. Missile tests or winter weather can close Dunes Drive, so check the closure page the day before. Saucer sleds are sold at the visitor center.' },
      { name: 'Ruidoso (mountain stretch of US-70)', lat: 33.3290, lon: -105.6033, kind: 'stretch',
        note: 'Check nmroads.com for snow or ice before leaving White Sands.' }
    ],
    hotels: {
      area: 'Roswell, for New Year’s Eve and an early start home',
      options: [
        { name: 'Family hotels in Roswell', q: 'family hotels Roswell New Mexico', note: 'Book early for New Year’s Eve and check for a late check-in policy.' }
      ]
    },
    flags: ['dunes', 'snow']
  },
  {
    n: 8, title: 'Roswell to Austin', color: '#be123c',
    drive: '~9 hrs (552–594 mi)', driveNote: 'checked', driveSrc: 'https://wanderlog.com/drive/between/59130/58163/roswell-to-austin-drive',
    zones: ['NM', 'TX'],
    wx: { label: 'Roswell (morning)', lat: 33.3943, lon: -104.5230, tz: 'America/Denver' },
    route: [[33.3943, -104.5230], [32.8423, -104.4033], [32.4207, -104.2288], [31.4229, -103.4932], [30.8940, -102.8793], [30.4894, -99.7720], [30.2672, -97.7431]],
    plan: [
      ['Morning', 'Quick stroll past the alien-themed storefronts on Main Street. Check whether the UFO museum opens on New Year’s Day before planning on it.'],
      ['By 8:30 AM', 'Leave Roswell; the earlier you go, the less you drive after dark. Two route sites put this drive at about 9 to 10 hours, a little longer than from Las Cruces, because more of it is two-lane highway.'],
      ['Afternoon', 'Photo stop at Paisano Pete, the giant roadrunner in Fort Stockton, then I-10 east.'],
      ['Evening', 'Home after dark (you lose an hour entering Texas). Split the driving and take real breaks.']
    ],
    stops: [
      { name: 'Downtown Roswell (alien storefronts)', lat: 33.3943, lon: -104.5230, kind: 'main' },
      { name: 'International UFO Museum', lat: 33.3922, lon: -104.5225, kind: 'optional', note: 'Check New Year’s Day hours.' },
      { name: 'Carlsbad (lunch)', lat: 32.4207, lon: -104.2288, kind: 'stretch' },
      { name: 'Paisano Pete, Fort Stockton', lat: 30.8846, lon: -102.8790, kind: 'stretch' }
    ],
    hotels: null,
    flags: []
  }
];

window.CHECKLIST = [
  { id: 'gc-lodging', text: 'Book Grand Canyon lodging (night 4). In-park rooms over the holidays go first.' },
  { id: 'page-hotel', text: 'Book a Page hotel (night 5).' },
  { id: 'antelope', text: 'Book an Upper Antelope Canyon tour for day 6. Confirm infants are allowed and whether you need a car seat for the tour vehicle.' },
  { id: 'nye', text: 'Book the Roswell hotel for New Year’s Eve, and a dinner spot if you want one.' },
  { id: 'xmas', text: 'Day 1 is Christmas Day: many restaurants close, so pack lunch and snacks for the drive.' },
  { id: 'tram', text: 'Check Sandia Peak Tramway hours for Dec 26.' },
  { id: 'hotels-rest', text: 'Book the remaining hotels (Amarillo, Albuquerque, Sedona, Gallup) with free cancellation.' },
  { id: 'pass', text: 'Consider an America the Beautiful annual pass (covers Grand Canyon, Petrified Forest and White Sands). Horseshoe Bend parking and Antelope Canyon tours are separate.' },
  { id: 'roads', text: 'Each morning, check road conditions for snow and ice: az511.gov in Arizona, nmroads.com in New Mexico.' },
  { id: 'whitesands', text: 'Dec 30: check the White Sands closure page for Dec 31.' },
  { id: 'car', text: 'Car check: tires, wipers, washer fluid, and an emergency blanket. Some stretches have long gaps between services.' }
];

window.PACKING = [
  'Infant car seat (also needed for the Antelope Canyon tour vehicle, per one operator)',
  'Front carrier for the tram summit and crowded spots; stroller for the Rim Trail, Horseshoe Bend and Old Town',
  'Real winter layers, hats and gloves: nights on the Grand Canyon rim and the Sandia summit drop well below freezing',
  'Baby sunscreen, sun hats and sunglasses (sun off the white sand is bright, even in winter)',
  'Sand toys; saucer sleds for White Sands (also sold at the visitor center)',
  'Diapers, wipes and formula or feeding supplies for long stretches between towns',
  'For your 8-year-old: a tablet with downloaded shows, audiobooks, and a road-trip bingo card',
  'Water, car snacks and a cooler for Christmas Day',
  'Small first-aid kit and any medicines',
  'Card for entrance fees (some stations are card-only) and cash for small stops'
];
