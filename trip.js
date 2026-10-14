/* Trip data. Edit this file to change the plan.
   Coordinates are approximate map markers. Drive times marked "est." are rough estimates;
   check them in Google Maps for your travel date. */

window.TRIP = {
  title: 'Southwest Family Road Trip',
  subtitle: 'Austin → Grand Canyon → Page → White Sands → Austin · 8 days, toddler-paced',
  home: { name: 'Austin, TX', lat: 30.2672, lon: -97.7431 }
};

window.DAYS = [
  {
    n: 1, title: 'Austin to Amarillo', color: '#c2410c',
    drive: '~7.5 hrs', driveNote: 'est.', zones: ['TX', 'TX'],
    wx: { label: 'Amarillo', lat: 35.2220, lon: -101.8313, tz: 'America/Chicago' },
    route: [[30.2672, -97.7431], [31.4638, -100.4370], [33.5779, -101.8552], [35.2220, -101.8313]],
    plan: [
      ['6:30 AM', 'Leave Austin. Stop every ~2 hours to let your toddler move around.'],
      ['Midday', 'Lunch around Lubbock, then drive through nap time.'],
      ['Late afternoon', 'Cadillac Ranch at golden hour.'],
      ['Evening', 'Easy dinner and early bed.']
    ],
    stops: [
      { name: 'Lubbock (lunch)', lat: 33.5779, lon: -101.8552, kind: 'stretch' },
      { name: 'Cadillac Ranch', lat: 35.1872, lon: -101.9871, kind: 'main',
        note: 'Short walk across a field; it can be muddy after rain. Bring a can of spray paint if you want to add to the cars.' }
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
      ['Sunset', 'Sandia Peak Tramway to the top. Bring warm layers; it is much colder up there.']
    ],
    stops: [
      { name: 'Tucumcari (Route 66 murals, lunch)', lat: 35.1717, lon: -103.7250, kind: 'stretch' },
      { name: 'Sandia Peak Tramway', lat: 35.1903, lon: -106.4797, kind: 'main', url: 'https://sandiapeak.com/',
        note: 'Ride up about an hour before sunset. Use a carrier, not a stroller, at the top.' },
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
      ['Lunch', 'Flagstaff, then down to Sedona. Arizona may be an hour behind New Mexico (see clock note).'],
      ['Afternoon', 'Walk around Tlaquepaque Village, with fountains and courtyards a toddler can explore.'],
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
    flags: []
  },
  {
    n: 4, title: 'Sedona to Grand Canyon South Rim', color: '#4d7c0f',
    drive: '~2.25 hrs', driveNote: 'est.', zones: ['AZ', 'AZ'],
    wx: { label: 'Grand Canyon South Rim', lat: 36.0617, lon: -112.1077, tz: 'America/Phoenix' },
    route: [[34.8697, -111.7610], [34.9930, -111.7480], [35.1983, -111.6513], [35.9700, -112.1260], [36.0617, -112.1077]],
    plan: [
      ['Morning', 'Slow start. Optional quick stop at the Chapel of the Holy Cross.'],
      ['11:00 AM', 'Drive north through Oak Creek Canyon (scenic but winding; go easy if your toddler gets carsick). Nap on the way.'],
      ['Afternoon', 'Rim Trail from Mather Point to Yavapai Geology Museum: paved and level, good for a stroller.'],
      ['Sunset', 'Watch sunset at Yavapai Point or Mather Point. Stay behind the railings.']
    ],
    stops: [
      { name: 'Chapel of the Holy Cross', lat: 34.8325, lon: -111.7666, kind: 'optional' },
      { name: 'Mather Point', lat: 36.0617, lon: -112.1077, kind: 'main' },
      { name: 'Yavapai Geology Museum / Point', lat: 36.0657, lon: -112.1180, kind: 'main',
        note: 'The Mather to Yavapai stretch of the Rim Trail is paved and level; shuttles let you skip walking back.' }
    ],
    hotels: {
      area: 'Inside the park is easiest for sunset; Tusayan is just outside the south entrance',
      options: [
        { name: 'Yavapai Lodge (in park)', q: 'Yavapai Lodge Grand Canyon', note: 'Family-friendly, near Market Plaza groceries.' },
        { name: 'The Squire at Grand Canyon (Tusayan)', q: 'The Squire at Grand Canyon Tusayan', note: 'Indoor and outdoor pools.' }
      ]
    },
    flags: ['rim']
  },
  {
    n: 5, title: 'Grand Canyon to Page', color: '#0f766e',
    drive: '~2.5 hrs + stops', driveNote: 'est.', zones: ['AZ', 'AZ'],
    wx: { label: 'Page / Horseshoe Bend', lat: 36.9147, lon: -111.4558, tz: 'America/Phoenix' },
    route: [[36.0617, -112.1077], [36.0441, -111.8261], [35.8753, -111.4128], [36.9147, -111.4558]],
    plan: [
      ['8:30 AM', 'Drive the Desert View Drive east along the rim.'],
      ['Morning', 'Desert View Watchtower, the last big canyon view.'],
      ['Lunch', 'Cameron Trading Post, then nap on the drive north to Page.'],
      ['Afternoon', 'Check in, rest or swim.'],
      ['Late afternoon', 'Horseshoe Bend: 0.6 mi each way on a graded, stroller-friendly path. $10 parking. The gate stops entry at sunset.']
    ],
    stops: [
      { name: 'Desert View Watchtower', lat: 36.0441, lon: -111.8261, kind: 'main' },
      { name: 'Cameron Trading Post (lunch)', lat: 35.8753, lon: -111.4128, kind: 'stretch' },
      { name: 'Horseshoe Bend', lat: 36.8791, lon: -111.5104, kind: 'main', url: 'https://horseshoebend.com/hike-horseshoe-bend/',
        note: 'Some uphill packed sand may need a push. No railing along most of the rim; keep your toddler buckled in.' }
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
    n: 6, title: 'Antelope Canyon, then Page to Albuquerque', color: '#0369a1',
    drive: '~7 hrs (449 mi)', driveNote: 'checked', driveSrc: 'https://wanderlog.com/drive/between/58476/58191/page-to-albuquerque-drive',
    zones: ['AZ', 'NM'],
    wx: { label: 'Page (morning tour)', lat: 36.8619, lon: -111.3743, tz: 'America/Phoenix' },
    route: [[36.9147, -111.4558], [35.8753, -111.4128], [35.1983, -111.6513], [35.0222, -110.6973], [34.9050, -110.1625], [35.5281, -108.7426], [35.0961, -106.6703]],
    plan: [
      ['Early', 'Earliest Upper Antelope Canyon tour you can book. Bathroom first: there are none at the canyon.'],
      ['10:00 AM', 'Leave Page. Lunch in Flagstaff and nap on I-40.'],
      ['Afternoon', 'Leg stretches: Standin’ on the Corner in Winslow, then the Wigwam Motel in Holbrook for a photo.'],
      ['Evening', 'Arrive Albuquerque (lose an hour if daylight saving is on). Dinner in Old Town.']
    ],
    stops: [
      { name: 'Upper Antelope Canyon', lat: 36.8619, lon: -111.3743, kind: 'main',
        note: 'Guided tours only. Strollers and backpack carriers are not allowed inside; carry your toddler. The canyon is ground level and about 300 ft long.' },
      { name: 'Standin’ on the Corner Park, Winslow', lat: 35.0222, lon: -110.6973, kind: 'stretch' },
      { name: 'Wigwam Motel, Holbrook (photo)', lat: 34.9050, lon: -110.1625, kind: 'stretch' }
    ],
    hotels: {
      area: 'Old Town Albuquerque again (same as night 2, so you can repeat a hotel you liked)',
      options: [
        { name: 'Hotel Albuquerque at Old Town', q: 'Hotel Albuquerque at Old Town' },
        { name: 'Holiday Inn Express & Suites Albuquerque Historic Old Town', q: 'Holiday Inn Express Albuquerque Historic Old Town' }
      ]
    },
    flags: ['slot', 'navajo']
  },
  {
    n: 7, title: 'Albuquerque to White Sands to Las Cruces', color: '#7c3aed',
    drive: '~5.5 hrs total', driveNote: 'est.', zones: ['NM', 'NM'],
    wx: { label: 'White Sands', lat: 32.7797, lon: -106.1717, tz: 'America/Denver' },
    route: [[35.0961, -106.6703], [33.9000, -106.8650], [33.6830, -105.9200], [32.8995, -105.9603], [32.7797, -106.1717], [32.2737, -106.7948]],
    plan: [
      ['8:00 AM', 'I-25 south, then US-380 east. Optional crane detour to Bosque del Apache in season.'],
      ['Late morning', 'Valley of Fires: a paved, accessible ¾-mile loop over a lava flow. $5 per vehicle.'],
      ['Lunch', 'Alamogordo.'],
      ['Afternoon', 'White Sands: Interdune Boardwalk, sledding and sand play, then stay for sunset.'],
      ['Evening', 'About an hour to Las Cruces, then dinner on Old Mesilla Plaza.']
    ],
    stops: [
      { name: 'Bosque del Apache NWR (Nov–Jan)', lat: 33.8040, lon: -106.8910, kind: 'optional', url: 'https://www.fws.gov/refuge/bosque-del-apache',
        note: 'Cranes typically arrive in late October and peak from early November to late January.' },
      { name: 'Valley of Fires Recreation Area', lat: 33.6830, lon: -105.9200, kind: 'main', url: 'https://blm.gov/visit/valley-fires-recreation-area' },
      { name: 'Alamogordo (lunch)', lat: 32.8995, lon: -105.9603, kind: 'stretch' },
      { name: 'White Sands National Park', lat: 32.7797, lon: -106.1717, kind: 'main', url: 'https://www.nps.gov/whsa/planyourvisit/park-closures.htm',
        note: 'Missile tests can close Dunes Drive and US-70 for up to 3 hours, sometimes with only a day’s notice. Check the closure page the day before.' },
      { name: 'Old Mesilla Plaza (dinner)', lat: 32.2737, lon: -106.7948, kind: 'stretch' }
    ],
    hotels: {
      area: 'Las Cruces near Old Mesilla, for an easy plaza dinner and breakfast',
      options: [
        { name: 'Hotel Encanto de Las Cruces', q: 'Hotel Encanto de Las Cruces' },
        { name: 'Lodging in Mesilla', q: 'hotels Mesilla New Mexico' }
      ]
    },
    flags: ['dunes', 'cranes']
  },
  {
    n: 8, title: 'Las Cruces to Austin', color: '#be123c',
    drive: '~8 h 48 min (663 mi)', driveNote: 'checked', driveSrc: 'https://wanderlog.com/list/distance/12242085/distance-from-austin-to-las-cruces',
    zones: ['NM', 'TX'],
    wx: { label: 'Fort Stockton (midway)', lat: 30.8940, lon: -102.8793, tz: 'America/Chicago' },
    route: [[32.2737, -106.7948], [31.7619, -106.4850], [30.8846, -102.8790], [30.4894, -99.7720], [30.2672, -97.7431]],
    plan: [
      ['7:00 AM', 'Breakfast near the Mesilla plaza and leave by 7:30.'],
      ['Lunch', 'El Paso.'],
      ['Afternoon', 'Photo stop at Paisano Pete, the giant roadrunner in Fort Stockton.'],
      ['Evening', 'Home around 6–7 PM (you lose an hour entering Texas).']
    ],
    stops: [
      { name: 'El Paso (lunch)', lat: 31.7619, lon: -106.4850, kind: 'stretch' },
      { name: 'Paisano Pete, Fort Stockton', lat: 30.8846, lon: -102.8790, kind: 'stretch' },
      { name: 'Balmorhea State Park pool (optional)', lat: 30.9445, lon: -103.7870, kind: 'optional',
        url: 'https://tpwd.texas.gov/state-parks/balmorhea',
        note: 'Spring-fed pool, 72–76°F year-round. Day passes use fixed time slots and can sell out. Adds about 2 hours, so only if a slot fits.' }
    ],
    hotels: null,
    flags: []
  }
];

window.CHECKLIST = [
  { id: 'gc-lodging', text: 'Book Grand Canyon lodging (night 4). In-park rooms go first.' },
  { id: 'page-hotel', text: 'Book a Page hotel (night 5).' },
  { id: 'antelope', text: 'Book the earliest Upper Antelope Canyon tour for day 6, and confirm its child policy and which time zone it uses.' },
  { id: 'tram', text: 'Check Sandia Peak Tramway hours and its fall maintenance closure for day 2.' },
  { id: 'hotels-rest', text: 'Book the remaining hotels (Amarillo, Albuquerque x2, Sedona, Las Cruces) with free cancellation.' },
  { id: 'pass', text: 'Consider an America the Beautiful annual pass (covers Grand Canyon and White Sands). Horseshoe Bend parking and Antelope Canyon tours are separate.' },
  { id: 'whitesands', text: 'Day before White Sands: check the park closure page for missile-test closures.' },
  { id: 'balmorhea', text: 'Optional: reserve a Balmorhea day-pass slot for day 8.' },
  { id: 'car', text: 'Car check: tires, oil, wipers. Some stretches of I-40 and I-10 have long gaps between services.' }
];

window.PACKING = [
  'Stroller (Rim Trail, Horseshoe Bend, Valley of Fires, Old Town)',
  'Front carrier for the tram summit (no carriers allowed inside Antelope Canyon)',
  'Warm layers and hats: the Grand Canyon rim and Sandia summit get cold at night',
  'Sun hats, toddler sunscreen and sunglasses',
  'Sand toys; saucer sleds for the White Sands dunes',
  'Refillable water bottles and car snacks',
  'Car activities, a tablet with downloaded shows, and spare clothes within reach',
  'Small first-aid kit and any medicines',
  'Card for entrance fees (some stations are card-only) and cash for small stops'
];
