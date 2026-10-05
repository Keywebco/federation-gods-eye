# federation-gods-eye
NextXus Federation — God's Eye View. Full sovereign system overview from GitHub. Every node. Every status. One page.

## consumer-v2 changes
Branch `consumer-v2` (2026-10-05). Not published: GitHub Pages still serves `main`. Roger reviews before anything goes live.

God's Eye becomes the Federation's front desk: where people watch the world, talk, buy and get in touch.

- **index.html** rebuilt around five fixed sectors, always in this order: 1 WORLD, 2 TALK, 3 STORE, 4 CONTACT, 5 FEDERATION. Every sector has a big heading a screen reader reaches first, a "Back to the sector menu" link, and fixed-size boxes for anything live, so nothing moves or reflows while it loads.
  - WORLD: the live map and the headlines, embedded at fixed heights, with full-screen links.
  - TALK: a chat with Roger Sim (the real Federation backend) plus a short "Ask the Federation" note pointing to the Meeting Room, Telegram and email.
  - STORE: 20 books, only items in nextxus-brain `04-builds/products.yaml` and `books.yaml`, each with its exact Gumroad link (every link answered HTTP 200), the price Gumroad shows, and one plain line. Written into the HTML (plus schema.org Product data), so it is readable without JavaScript.
  - CONTACT: keywebco@gmail.com, a ready-to-send mailto button, the Nextxus Truth Channel on Telegram (link taken from Keywebco/nextxus-chat), the Meeting Room.
  - FEDERATION: the 8 live sites (from nextxus-brain `04-builds/sites.yaml`), the Meeting Room, the Three Minds, more Federation pages and the full inventory.
  - At the bottom: a plain-text section listing every sector and every link, with each address written out.
- **assets/roger-sim-client.js** (new): one small shared client for the Roger Sim backend `https://roger-sim-api.onrender.com` (repo Keywebco/roger-sim-api). It uses `GET /health` and `POST /proxy/chat`. The server adds its own credentials, so **no API key is in any page**. When the server is asleep or unreachable, visitors get a short, friendly message and the email address.
- **panels/world-map.html**: the "API key required" box is gone. ASK ROGER SIM now talks to the Federation's backend and tells Roger Sim which events are on the map. The broken GDELT GEO call (HTTP 404 on 2026-10-05) is replaced by three keyless feeds checked with curl: USGS earthquakes (24 h), NASA EONET open storms and wildfires, and GDACS disaster alerts. New TEXT LIST button: every event as a list of links, for screen readers. Larger type, map credits for OpenStreetMap and CARTO, and the plain-text summary is now readable by screen readers too (before, it was hidden from them).
- **panels/world-monitor.html**: RSS2JSON kept. The "GDELT" tab (a Google News search that RSS2JSON could not read, HTTP 500) is replaced by GDACS disaster alerts. BBC now uses https. Larger type, and a visible "Where these headlines come from" list replaces the hidden HTML comment.
- **panels/sim.html**: the canned, pre-written "Roger AI" replies and the fixed "SIM: ACTIVE" badge are replaced by the real Roger Sim backend and a live status. The feed list no longer names feeds that are not used (Reuters, AP).
- **previous-edition.html**: untouched.
- All motion is decoration only (CSS glow, drifting stars, marker pulse), with no layout shift, and it switches off under `prefers-reduced-motion`.
- Every link and its HTTP code: see **TESTING.md**.

Note: the Roger Sim server only accepts browser calls from `https://keywebco.github.io`, so the chat works once this is published on Pages. It will not work from a raw GitHub file view or a preview on another domain.
