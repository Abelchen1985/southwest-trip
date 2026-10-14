# Southwest Family Road Trip

A one-page trip planner for an 8-day, family-paced road trip (Dec 25 to Jan 1):
Austin → Amarillo → Albuquerque → Sedona → Grand Canyon → Page (Antelope Canyon, Horseshoe Bend) → Gallup → White Sands → Roswell → Austin.

Plain HTML, CSS and JavaScript. No build step, no API keys, no backend.

## Features

- Route map with each day in its own color, numbered overnight stops, and every planned stop.
- Day cards with a suggested schedule, stops (main, optional and quick leg-stretches), hotel options
  with Google Maps links, and an "Open in Google Maps" route for that day.
- Pick a start date to get:
  - real dates on every day,
  - time-zone notes (Arizona skips daylight saving; New Mexico and Texas don't),
  - date-based notes (Sandia tram fall maintenance window, crane season, Navajo Nation time for Antelope Canyon),
  - forecasts and weather tips for each day once it is within about two weeks.
- A pre-trip checklist (saved in your browser) and a packing list for an infant and an 8-year-old.
- Defaults to a Dec 25 start; change it with the date picker.
- Shareable link: the start date is kept in the URL (`?start=YYYY-MM-DD`).
- Print button for a paper copy.

## Publish on GitHub Pages

Option A: its own repo
1. Create a new **public** repository, for example `southwest-trip`.
2. Upload `index.html`, `style.css`, `app.js`, `logic.js`, `trip.js` to the top level.
3. Settings > Pages > Deploy from a branch > `main`, `/ (root)` > Save.
4. It will be live at `https://<your-username>.github.io/southwest-trip/`.

Option B: inside your Hill Country road-trip repo
- Put these files in a `southwest/` folder. The page will be at `.../<repo>/southwest/`.

From a Windows command prompt in the project folder:

```
git init
git add .
git commit -m "Southwest road trip page"
git branch -M main
git remote add origin https://github.com/<your-username>/southwest-trip.git
git push -u origin main
```

## Edit the plan

Everything about the trip lives in `trip.js`: days, schedule, stops, hotels, checklist and packing list.
Drive times marked `est.` are rough estimates; the two marked `checked` link to their source.

## Data and accuracy

- Forecasts: [Open-Meteo](https://open-meteo.com/) (free for non-commercial use; attribution in the footer). Cached in the browser for 30 minutes.
- Map tiles: OpenStreetMap contributors.
- Hotel names come from public listings and were not checked for price or availability. Book with free cancellation.
- Hours, closures, tour rules and fees change. Confirm with the official source before you go.
