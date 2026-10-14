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
      ['6:30 AM', 'Leave Austin. Stop about every 2 hours.'],
      ['On the road', 'Many restaurants are closed on Christmas Day, so pack a big cooler with a festive holiday lunch and snacks.'],
      ['Late afternoon', 'Let the kids stretch at Cadillac Ranch before sunset (around 5:40 PM).'],
      ['Dinner', 'Christmas dinner at The Big Texan Steak Ranch, which stays open 365 days a year.']
    ],
    stops: [
      { name: 'Lubbock (rest stop)', lat: 33.5779, lon: -101.8552, kind: 'stretch' },
      { name: 'Cadillac Ranch', lat: 35.1872, lon: -101.9871, kind: 'main',
        note: 'Short walk across a field that can be muddy. Bring a can of spray paint if the kids want to add to the cars.' },
      { name: 'The Big Texan Steak Ranch', lat: 35.1925, lon: -101.7536, kind: 'main', url: 'https://bigtexan.com/pages/restaurant',
        note: 'Open on Christmas by long tradition; call ahead for the evening rush.' }
    ],
    hotels: {
      area: 'Amarillo along I-40, between Cadillac Ranch and the Big Texan',
      options: [
        { name: 'Country Inn & Suites by Radisson Amarillo I-40 West', q: 'Country Inn & Suites by Radisson Amarillo I-40 West' },
        { name: 'Comfort Inn & Suites Amarillo West', q: 'Comfort Inn & Suites Amarillo West near Medical Center' },
        { name: 'Big Texan Motel (next to the restaurant)', q: 'Big Texan Motel Amarillo' }
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
      ['Morning', 'Leave Amarillo. You gain an hour entering Mountain Time.'],
      ['Lunch', 'Tucumcari or Santa Rosa on old Route 66.'],
      ['Afternoon', 'Check in and rest.'],
      ['Sunset', 'Sunset ride on the Sandia Peak Tramway. Bundle up: the summit is over 10,000 ft and will be freezing.']
    ],
    stops: [
      { name: 'Tucumcari (Route 66 murals, lunch)', lat: 35.1717, lon: -103.7250, kind: 'stretch' },
      { name: 'Sandia Peak Tramway', lat: 35.1903, lon: -106.4797, kind: 'main', url: 'https://sandiapeak.com/',
        note: 'Ride up about an hour before sunset. Use a carrier for your 3-year-old at the top.' },
      { name: 'Old Town Albuquerque (backup)', lat: 35.0961, lon: -106.6703, kind: 'optional',
        note: 'Flat plaza for an evening stroll if the tram is closed or too windy.' }
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
      ['Morning', 'Leave Albuquerque on I-40 west.'],
      ['Lunch', 'Flagstaff, to break up the drive (about 7,000 ft; check for snow on I-40).'],
      ['Mid-afternoon', 'Arrive in Sedona.'],
      ['Sunset', 'Bring the stroller to Tlaquepaque Arts & Shopping Village and wander its car-free, festive paths as the red rocks light up.']
    ],
    stops: [
      { name: 'Flagstaff (lunch)', lat: 35.1983, lon: -111.6513, kind: 'stretch' },
      { name: 'Tlaquepaque Arts & Shopping Village', lat: 34.8627, lon: -111.7634, kind: 'main' }
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
      ['Morning', 'Relaxed morning in Sedona.'],
      ['Late morning', 'Head north. Oak Creek Canyon is scenic but winding; if snow or ice is forecast, take I-17 to Flagstaff instead.'],
      ['Afternoon', 'Walk the paved, level Rim Trail from Mather Point to Yavapai Point. Keep a tight grip on your 3-year-old’s hand: stubborn patches of trail ice are common.'],
      ['Sunset', 'Watch sunset from Yavapai or Mather Point, behind the railings.']
    ],
    stops: [
      { name: 'Mather Point', lat: 36.0617, lon: -112.1077, kind: 'main' },
      { name: 'Yavapai Point', lat: 36.0657, lon: -112.1180, kind: 'main',
        note: 'Shuttles let you skip walking back. Ask for a Junior Ranger booklet at the visitor center.' }
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
    drive: '~2.5 hrs', driveNote: 'est.', zones: ['AZ', 'AZ'],
    wx: { label: 'Page / Horseshoe Bend', lat: 36.9147, lon: -111.4558, tz: 'America/Phoenix' },
    route: [[36.0617, -112.1077], [36.0441, -111.8261], [35.8753, -111.4128], [36.9147, -111.4558]],
    plan: [
      ['Morning', 'Desert View Watchtower on the way out of the park.'],
      ['Lunch', 'Arrive in Page for a late lunch and a nap for your 3-year-old.'],
      ['3:30 PM', 'Horseshoe Bend: a 1.2-mile round trip on a wide, sandy, graded trail. $10 parking.'],
      ['At the rim', 'There are no railings at most of the edge. Keep your 3-year-old buckled in the stroller or held tightly.']
    ],
    stops: [
      { name: 'Desert View Watchtower', lat: 36.0441, lon: -111.8261, kind: 'main' },
      { name: 'Cameron Trading Post', lat: 35.8753, lon: -111.4128, kind: 'stretch' },
      { name: 'Horseshoe Bend', lat: 36.8791, lon: -111.5104, kind: 'main', url: 'https://horseshoebend.com/hike-horseshoe-bend/',
        note: 'Some uphill packed sand may need a push. The gate stops entry at sunset.' }
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
    route: [[36.9147, -111.4558], [35.8753, -111.4128], [35.1983, -111.6513], [35.0222, -110.6973], [35.5281, -108.7426]],
    plan: [
      ['8:30 or 9:30 AM', 'Upper Antelope Canyon tour (about an hour). Use the bathroom first: there are none at the canyon.'],
      ['The 3-year-old rule', 'Strollers and kid backpacks are not allowed in the canyon. Your 3-year-old walks the flat, sandy floor or rides in your arms. Dress them in heavy winter layers; the canyon floor stays cold.'],
      ['11:30 AM', 'Leave Page, with lunch in Flagstaff, then east on I-40.'],
      ['Before dark', 'Check in at Gallup. With the Flagstaff lunch this is roughly a 5-hour drive and sunset is around 5 PM, so if you can, take the 8:30 tour and leave by 10:30 to stay ahead of dark and black ice.']
    ],
    stops: [
      { name: 'Upper Antelope Canyon', lat: 36.8619, lon: -111.3743, kind: 'main',
        url: 'https://antelopecanyon.az/tours/antelope-canyon-tour-packages/',
        note: 'Guided tours only. Book well ahead for the holidays and confirm the operator’s child policy.' },
      { name: 'Flagstaff (lunch)', lat: 35.1983, lon: -111.6513, kind: 'stretch' },
      { name: 'Standin’ on the Corner Park, Winslow', lat: 35.0222, lon: -110.6973, kind: 'stretch' }
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
    route: [[35.5281, -108.7426], [35.0844, -106.6504], [33.9178, -106.8653], [33.6417, -105.8772], [32.8995, -105.9603], [32.7797, -106.1717], [33.0737, -106.0186], [33.3290, -105.6033], [33.3943, -104.5230]],
    plan: [
      ['7:30 AM', 'Leave Gallup early.'],
      ['On the way', 'Stop at a grocery store for two plastic snow sleds and a block of sled wax (the visitor center also sells them).'],
      ['Noon', 'Arrive at White Sands. Your 3-year-old can ride on your lap as you slide down the dunes together.'],
      ['4:00 PM', 'Drive about 2.5 hours east to Roswell. US-70 climbs through the Sacramento Mountains near Ruidoso, and sunset is around 5 PM, so this stretch will be in the dark. Check nmroads.com before you leave the dunes.'],
      ['Evening', 'Ring in the New Year in quirky, alien-themed Roswell.']
    ],
    stops: [
      { name: 'Alamogordo (groceries, sleds)', lat: 32.8995, lon: -105.9603, kind: 'stretch' },
      { name: 'White Sands National Park', lat: 32.7797, lon: -106.1717, kind: 'main', url: 'https://www.nps.gov/whsa/planyourvisit/park-closures.htm',
        note: 'Open every day except Thanksgiving and Christmas. Missile tests or winter weather can close Dunes Drive, so check the closure page the day before.' },
      { name: 'Ruidoso (mountain stretch of US-70)', lat: 33.3290, lon: -105.6033, kind: 'stretch' }
    ],
    hotels: {
      area: 'Roswell, for New Year’s Eve and an early start home',
      options: [
        { name: 'Family hotels in Roswell', q: 'family hotels Roswell New Mexico', note: 'Book early for New Year’s Eve and check the late check-in policy.' }
      ]
    },
    flags: ['dunes', 'snow']
  },
  {
    n: 8, title: 'Roswell to Austin', color: '#be123c',
    drive: '~8–10 hrs (552–594 mi)', driveNote: 'checked', driveSrc: 'https://wanderlog.com/drive/between/59130/58163/roswell-to-austin-drive',
    zones: ['NM', 'TX'],
    wx: { label: 'Roswell (morning)', lat: 33.3943, lon: -104.5230, tz: 'America/Denver' },
    route: [[33.3943, -104.5230], [32.8423, -104.4033], [32.4207, -104.2288], [31.4229, -103.4932], [30.8940, -102.8793], [30.4894, -99.7720], [30.2672, -97.7431]],
    plan: [
      ['Morning', 'Funny family photos with the alien spaceships and green storefronts downtown.'],
      ['Early', 'Head east across West Texas. Leave as early as you can: two route sites put this drive at about 9 to 10 hours, and you lose an hour entering Central Time.'],
      ['Afternoon', 'Photo stop at Paisano Pete, the giant roadrunner in Fort Stockton.'],
      ['Evening', 'Home in Austin.']
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
  { id: 'antelope', text: 'Book an 8:30 or 9:30 AM Upper Antelope Canyon tour for Dec 30, and confirm the operator’s rules for 3-year-olds.' },
  { id: 'bigtexan', text: 'Plan Christmas dinner at The Big Texan; call ahead about the evening wait.' },
  { id: 'nye', text: 'Book the Roswell hotel for New Year’s Eve, and a dinner spot if you want one.' },
  { id: 'xmas', text: 'Pack the cooler for Christmas Day: holiday lunch, snacks and drinks.' },
  { id: 'tram', text: 'Check Sandia Peak Tramway hours for Dec 26.' },
  { id: 'hotels-rest', text: 'Book the remaining hotels (Amarillo, Albuquerque, Sedona, Gallup) with free cancellation.' },
  { id: 'pass', text: 'Consider an America the Beautiful annual pass (covers Grand Canyon and White Sands). Horseshoe Bend parking and Antelope Canyon tours are separate.' },
  { id: 'roads', text: 'Each morning, check road conditions for snow and ice: az511.gov in Arizona, nmroads.com in New Mexico.' },
  { id: 'whitesands', text: 'Dec 30: check the White Sands closure page for Dec 31.' },
  { id: 'car', text: 'Car check: tires, wipers, washer fluid, and an emergency blanket. Some stretches have long gaps between services.' }
];

window.PACKING = [
  'Heavy winter layers, hats and gloves: the Sandia summit, Grand Canyon rim and Antelope Canyon floor are all cold in late December',
  'Stroller for Tlaquepaque, the Rim Trail and Horseshoe Bend (not allowed in Antelope Canyon)',
  'A carrier for the tram summit (kid backpacks are not allowed in Antelope Canyon)',
  'Kids’ sunscreen, sun hats and sunglasses (the white sand is bright, even in winter)',
  'Two plastic snow sleds and sled wax for White Sands (or buy them on the way)',
  'A big cooler for Christmas Day, plus water and car snacks for the whole trip',
  'Car activities: a tablet with downloaded shows, audiobooks, and road-trip games',
  'Small first-aid kit and any medicines',
  'Card for entrance fees (some stations are card-only) and cash for small stops'
];
