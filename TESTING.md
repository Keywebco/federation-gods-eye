# TESTING: consumer-v2

Tested 2026-10-05 (about 02:40 to 03:45 AM CDT) from the build sandbox with `curl` (browser user agent, `Origin: https://keywebco.github.io`). Every link, button, embedded panel, script and data feed in the changed pages is listed below with the HTTP code it returned.

## Summary

- Addresses checked over HTTP (counted once per page): **128**. Answered 2xx/3xx: **125**. Other: **3** (all of them are the new `assets/roger-sim-client.js`, which only exists on this branch until it is published; see note 3).
- In-page anchors (sector menu, back links): 12, all point to an id that exists.
- Email links (mailto:): 5. They open the mail app; they have no HTTP code.
- All 20 Gumroad buy links answered **200**. Each price was read from the live Gumroad page (schema.org `offers.price`).
- No address on these pages was invented: every one came from the existing repo, nextxus-brain, Keywebco/roger-sim-api, Keywebco/nextxus-sim, Keywebco/nextxus-chat, or the feed provider's own documented endpoint, and was curl-tested.
- `main` was not touched: its commit was `a04c564faf9b43aafddc32255146ac0e02e840b0` before the work and is the same after. No pull request was opened. `previous-edition.html` has the same blob (`42625dbd…`) on both branches.

## Removed because they did not work

| What | Address | Result 2026-10-05 |
|---|---|---|
| GDELT GEO events (old map data) | `https://api.gdeltproject.org/api/v2/geo/geo?query=...&format=geojson...` | 404 (twice) |
| "GDELT" tab in World Monitor (a Google News search) | RSS2JSON for `https://news.google.com/rss/search?q=GDELT+global+events...` | 500, "Cannot download this RSS feed" (twice) |
| Paste-your-own-key AI providers in world-map.html | api.x.ai, Gemini, DeepSeek, Groq called from the browser with a visitor's key | removed: replaced by the Roger Sim backend, no key in the page |

## index.html

| Kind | Label (what a screen reader says) | Address | HTTP |
|---|---|---|---|
| link | Skip to main content | #main | anchor exists |
| link | ◆ NextXus Federation Hub | https://keywebco.github.io/ | 200 |
| link | Sector 1 WORLD | #world | anchor exists |
| link | Sector 2 TALK | #talk | anchor exists |
| link | Sector 3 STORE | #store | anchor exists |
| link | Sector 4 CONTACT | #contact | anchor exists |
| link | Sector 5 FEDERATION | #federation | anchor exists |
| link | US Geological Survey | https://earthquake.usgs.gov/earthquakes/map/ | 200 |
| link | NASA EONET | https://eonet.gsfc.nasa.gov/ | 200 |
| link | GDACS | https://www.gdacs.org/ | 200 |
| link | RSS2JSON | https://rss2json.com/ | 200 |
| link | Open the world map full screen | https://keywebco.github.io/federation-gods-eye/panels/world-map.html | 200 |
| link | Open the headlines full screen | https://keywebco.github.io/federation-gods-eye/panels/world-monitor.html | 200 |
| link | Back to the sector menu | #sectors | anchor exists |
| link | keywebco.github.io/nextxus-sim/roger-sim.html | https://keywebco.github.io/nextxus-sim/roger-sim.html | 200 |
| email link | keywebco@gmail.com | mailto:keywebco@gmail.com | mailto (not an HTTP address; opens the mail app) |
| link | Meeting Room | https://keywebco.github.io/federation-meeting-room-outer/ | 200 |
| link | Nextxus Truth Channel on Telegram | https://t.me/+r8utxPPLMw40Mzkx | 200 |
| link | Buy The AI Practical Guide on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/djgvjx | 200 |
| link | Buy Artificial Intelligence Bible (3-in-1) on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/sgtcze | 200 |
| link | Buy Master Generative AI & Deep Learning on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/ovbmcs | 200 |
| link | Buy DeepSeek Architecture & Deployment on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/nadrc | 200 |
| link | Buy AI + The New Human Frontier on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/ysbzfe | 200 |
| link | Buy The Mirror in the Black Box: What AI Reveals About the Nature of Mind on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/ahfwii | 200 |
| link | Buy The Ascendence of Synthetic Intelligence on Gumroad for 5 dollars | https://keywebster.gumroad.com/l/kbycd | 200 |
| link | Buy The Immutable HumanCodex NextXus on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/benjxd | 200 |
| link | Buy The NexTxuS Human Codex: A Blueprint for Truth in AI on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/qzgjhs | 200 |
| link | Buy HumanCodex V2 Cathedral on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/jeeynk | 200 |
| link | Buy Book 2: NexTxuS – The Federated Middleware of Sentience on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/oihjh | 200 |
| link | Buy The Sovereign Mesh Protocol on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/auiqnf | 200 |
| link | Buy Science and the Scientific Method – The Codex Edition on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/veyzvd | 200 |
| link | Buy Heart of the Gate on Gumroad for 5 dollars | https://keywebster.gumroad.com/l/bdtad | 200 |
| link | Buy Rick And Dee on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/akvgn | 200 |
| link | Buy The Gravity of Us: Complete Poetry Collection on Gumroad for 5 dollars | https://keywebster.gumroad.com/l/rnhbhi | 200 |
| link | Buy 112 Sacred Directives on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/qrjhdm | 200 |
| link | Buy Understanding Haiku: Structure, Value, and Analysis of Original Poems on Gumroad for 10 dollars | https://keywebster.gumroad.com/l/gpowew | 200 |
| link | Buy The Big Gay, Bi, & Straight Dating Guide on Gumroad for 5 dollars | https://keywebster.gumroad.com/l/wffrtf | 200 |
| link | Buy Keyserling Emotion Equations on Gumroad for 5 dollars | https://keywebster.gumroad.com/l/pcbjfk | 200 |
| link | Nextxus Truth Channel | https://t.me/+r8utxPPLMw40Mzkx | 200 |
| email link | Write an email now | mailto:keywebco@gmail.com?subject=Hello%20from%20God%27s%20Eye | mailto (not an HTTP address; opens the mail app) |
| link | Join on Telegram | https://t.me/+r8utxPPLMw40Mzkx | 200 |
| link | nextxus.online | https://nextxus.online | 200 |
| link | nextxus.tech | https://nextxus.tech | 200 |
| link | nextxus.studio | https://nextxus.studio | 200 |
| link | nextxus.org | https://nextxus.org | 200 |
| link | nextxus.space | https://nextxus.space | 200 |
| link | nextxus.help | https://nextxus.help | 200 |
| link | next-xus.com | https://next-xus.com | 200 |
| link | keywebco.github.io | https://keywebco.github.io/ | 200 |
| link | open the Meeting Room | https://keywebco.github.io/federation-meeting-room-outer/ | 200 |
| link | NextXus Sims | https://keywebco.github.io/nextxus-sim/ | 200 |
| link | AI Minds Lab | https://keywebco.github.io/nextxus-ai-minds-lab/ | 200 |
| link | Aria Sanctuary (plain-text edition) | https://keywebco.github.io/aria-sanctuary-static/ | 200 |
| link | Ring of 12 | https://keywebco.github.io/ring-of-12/ | 200 |
| link | Sovereign Tools | https://keywebco.github.io/sovereigntools/ | 200 |
| link | NextXus Chat | https://keywebco.github.io/nextxus-chat/ | 200 |
| link | The full repository inventory (earlier edition) | https://keywebco.github.io/federation-gods-eye/previous-edition.html | 200 |
| link | All Federation code on GitHub | https://github.com/Keywebco | 200 |
| link | #world | #world | anchor exists |
| link | #talk | #talk | anchor exists |
| link | #store | #store | anchor exists |
| link | #contact | #contact | anchor exists |
| link | #federation | #federation | anchor exists |
| link | https://earthquake.usgs.gov/earthquakes/map/ | https://earthquake.usgs.gov/earthquakes/map/ | 200 |
| link | https://eonet.gsfc.nasa.gov/ | https://eonet.gsfc.nasa.gov/ | 200 |
| link | https://www.gdacs.org/ | https://www.gdacs.org/ | 200 |
| link | https://rss2json.com/ | https://rss2json.com/ | 200 |
| link | https://keywebco.github.io/federation-gods-eye/panels/world-map.html | https://keywebco.github.io/federation-gods-eye/panels/world-map.html | 200 |
| link | https://keywebco.github.io/federation-gods-eye/panels/world-monitor.html | https://keywebco.github.io/federation-gods-eye/panels/world-monitor.html | 200 |
| link | https://keywebco.github.io/nextxus-sim/roger-sim.html | https://keywebco.github.io/nextxus-sim/roger-sim.html | 200 |
| email link | mailto:keywebco@gmail.com | mailto:keywebco@gmail.com | mailto (not an HTTP address; opens the mail app) |
| link | https://keywebco.github.io/federation-meeting-room-outer/ | https://keywebco.github.io/federation-meeting-room-outer/ | 200 |
| link | https://t.me/+r8utxPPLMw40Mzkx | https://t.me/+r8utxPPLMw40Mzkx | 200 |
| link | https://keywebster.gumroad.com/l/djgvjx | https://keywebster.gumroad.com/l/djgvjx | 200 |
| link | https://keywebster.gumroad.com/l/sgtcze | https://keywebster.gumroad.com/l/sgtcze | 200 |
| link | https://keywebster.gumroad.com/l/ovbmcs | https://keywebster.gumroad.com/l/ovbmcs | 200 |
| link | https://keywebster.gumroad.com/l/nadrc | https://keywebster.gumroad.com/l/nadrc | 200 |
| link | https://keywebster.gumroad.com/l/ysbzfe | https://keywebster.gumroad.com/l/ysbzfe | 200 |
| link | https://keywebster.gumroad.com/l/ahfwii | https://keywebster.gumroad.com/l/ahfwii | 200 |
| link | https://keywebster.gumroad.com/l/kbycd | https://keywebster.gumroad.com/l/kbycd | 200 |
| link | https://keywebster.gumroad.com/l/benjxd | https://keywebster.gumroad.com/l/benjxd | 200 |
| link | https://keywebster.gumroad.com/l/qzgjhs | https://keywebster.gumroad.com/l/qzgjhs | 200 |
| link | https://keywebster.gumroad.com/l/jeeynk | https://keywebster.gumroad.com/l/jeeynk | 200 |
| link | https://keywebster.gumroad.com/l/oihjh | https://keywebster.gumroad.com/l/oihjh | 200 |
| link | https://keywebster.gumroad.com/l/auiqnf | https://keywebster.gumroad.com/l/auiqnf | 200 |
| link | https://keywebster.gumroad.com/l/veyzvd | https://keywebster.gumroad.com/l/veyzvd | 200 |
| link | https://keywebster.gumroad.com/l/bdtad | https://keywebster.gumroad.com/l/bdtad | 200 |
| link | https://keywebster.gumroad.com/l/akvgn | https://keywebster.gumroad.com/l/akvgn | 200 |
| link | https://keywebster.gumroad.com/l/rnhbhi | https://keywebster.gumroad.com/l/rnhbhi | 200 |
| link | https://keywebster.gumroad.com/l/qrjhdm | https://keywebster.gumroad.com/l/qrjhdm | 200 |
| link | https://keywebster.gumroad.com/l/gpowew | https://keywebster.gumroad.com/l/gpowew | 200 |
| link | https://keywebster.gumroad.com/l/wffrtf | https://keywebster.gumroad.com/l/wffrtf | 200 |
| link | https://keywebster.gumroad.com/l/pcbjfk | https://keywebster.gumroad.com/l/pcbjfk | 200 |
| email link | mailto:keywebco@gmail.com?subject=Hello%20from%20God%27s%20Eye | mailto:keywebco@gmail.com?subject=Hello%20from%20God%27s%20Eye | mailto (not an HTTP address; opens the mail app) |
| link | https://nextxus.online | https://nextxus.online | 200 |
| link | https://nextxus.tech | https://nextxus.tech | 200 |
| link | https://nextxus.studio | https://nextxus.studio | 200 |
| link | https://nextxus.org | https://nextxus.org | 200 |
| link | https://nextxus.space | https://nextxus.space | 200 |
| link | https://nextxus.help | https://nextxus.help | 200 |
| link | https://next-xus.com | https://next-xus.com | 200 |
| link | https://keywebco.github.io/ | https://keywebco.github.io/ | 200 |
| link | https://keywebco.github.io/nextxus-sim/ | https://keywebco.github.io/nextxus-sim/ | 200 |
| link | https://keywebco.github.io/nextxus-ai-minds-lab/ | https://keywebco.github.io/nextxus-ai-minds-lab/ | 200 |
| link | https://keywebco.github.io/aria-sanctuary-static/ | https://keywebco.github.io/aria-sanctuary-static/ | 200 |
| link | https://keywebco.github.io/ring-of-12/ | https://keywebco.github.io/ring-of-12/ | 200 |
| link | https://keywebco.github.io/sovereigntools/ | https://keywebco.github.io/sovereigntools/ | 200 |
| link | https://keywebco.github.io/nextxus-chat/ | https://keywebco.github.io/nextxus-chat/ | 200 |
| link | https://keywebco.github.io/federation-gods-eye/previous-edition.html | https://keywebco.github.io/federation-gods-eye/previous-edition.html | 200 |
| link | https://github.com/Keywebco | https://github.com/Keywebco | 200 |
| link | Return to the Federation Hub | https://keywebco.github.io/ | 200 |
| link | Source on GitHub | https://github.com/Keywebco/federation-gods-eye | 200 |
| embedded panel | Live world map: earthquakes, storms, wildfires and disaster alerts | https://keywebco.github.io/federation-gods-eye/panels/world-map.html | 200 |
| embedded panel | World headlines from BBC, Al Jazeera, NPR, AI news and GDACS | https://keywebco.github.io/federation-gods-eye/panels/world-monitor.html | 200 |
| script/style | roger-sim-client.js | https://keywebco.github.io/federation-gods-eye/assets/roger-sim-client.js | 404 on live Pages today (new file, exists only on branch consumer-v2; byte-for-byte match there, see note 3) |
| button | Send to Roger Sim | (runs in the page) | see "Buttons" note |

## panels/world-map.html

| Kind | Label (what a screen reader says) | Address | HTTP |
|---|---|---|---|
| link | USGS | https://earthquake.usgs.gov/earthquakes/map/ | 200 |
| link | NASA EONET | https://eonet.gsfc.nasa.gov/ | 200 |
| link | GDACS | https://www.gdacs.org/ | 200 |
| link | USGS earthquakes | https://earthquake.usgs.gov/earthquakes/map/ | 200 |
| link | God's Eye | https://keywebco.github.io/federation-gods-eye/ | 200 |
| script/style | leaflet.css | https://unpkg.com/leaflet@1.9.4/dist/leaflet.css | 200 |
| script/style | leaflet.js | https://unpkg.com/leaflet@1.9.4/dist/leaflet.js | 200 |
| script/style | roger-sim-client.js | https://keywebco.github.io/federation-gods-eye/assets/roger-sim-client.js | 404 on live Pages today (new file, exists only on branch consumer-v2; byte-for-byte match there, see note 3) |
| button | Refresh the map | (runs in the page) | see "Buttons" note |
| button | TEXT LIST | (runs in the page) | see "Buttons" note |
| button | ASK ROGER SIM | (runs in the page) | see "Buttons" note |
| button | Close the text list | (runs in the page) | see "Buttons" note |
| button | Close Roger Sim | (runs in the page) | see "Buttons" note |
| button | SEND | (runs in the page) | see "Buttons" note |
| data feed | USGS earthquakes, last 24 hours | https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson | 200 |
| data feed | NASA EONET open storms and wildfires | https://eonet.gsfc.nasa.gov/api/v3/events/geojson?status=open&days=30&category=severeStorms,wildfires,volcanoes,floods,landslides,earthquakes,dustHaze,drought,tempExtremes | 200 |
| data feed | GDACS disaster alerts | https://www.gdacs.org/gdacsapi/api/events/geteventlist/EVENTS4APP | 200 |
| data feed | Map tile sample (CARTO dark) | https://b.basemaps.cartocdn.com/dark_all/2/1/1.png | 200 |

## panels/world-monitor.html

| Kind | Label (what a screen reader says) | Address | HTTP |
|---|---|---|---|
| link | BBC News World | https://www.bbc.com/news/world | 200 |
| link | Al Jazeera English | https://www.aljazeera.com/ | 200 |
| link | NPR News | https://www.npr.org/sections/news/ | 200 |
| link | Google News: artificial intelligence | https://news.google.com/search?q=artificial%20intelligence&hl=en-US&gl=US&ceid=US:en | 302 |
| link | GDACS disaster alerts | https://www.gdacs.org/ | 200 |
| link | RSS2JSON | https://rss2json.com/ | 200 |
| link | God's Eye | https://keywebco.github.io/federation-gods-eye/ | 200 |
| button | ALL FEEDS | (runs in the page) | see "Buttons" note |
| button | BBC World | (runs in the page) | see "Buttons" note |
| button | Al Jazeera | (runs in the page) | see "Buttons" note |
| button | NPR | (runs in the page) | see "Buttons" note |
| button | AI / Tech | (runs in the page) | see "Buttons" note |
| button | Disaster Alerts | (runs in the page) | see "Buttons" note |
| button | REFRESH FEEDS | (runs in the page) | see "Buttons" note |
| RSS feed via RSS2JSON | BBC News World | https://feeds.bbci.co.uk/news/world/rss.xml | 200, status ok, 10 items |
| RSS feed via RSS2JSON | Al Jazeera English | https://www.aljazeera.com/xml/rss/all.xml | 200, status ok, 10 items |
| RSS feed via RSS2JSON | NPR News | https://feeds.npr.org/1001/rss.xml | 200, status ok, 10 items |
| RSS feed via RSS2JSON | Google News: AI/Tech | https://news.google.com/rss/search?q=artificial+intelligence&hl=en-US&gl=US&ceid=US:en | 200, status ok, 10 items |
| RSS feed via RSS2JSON | GDACS Disaster Alerts | https://www.gdacs.org/xml/rss.xml | 200, status ok, 10 items |

## panels/sim.html

| Kind | Label (what a screen reader says) | Address | HTTP |
|---|---|---|---|
| link | God's Eye | https://keywebco.github.io/federation-gods-eye/ | 200 |
| email link | keywebco@gmail.com | mailto:keywebco@gmail.com | mailto (not an HTTP address; opens the mail app) |
| embedded panel | World Monitor Feed | https://keywebco.github.io/federation-gods-eye/panels/world-monitor.html | 200 |
| script/style | roger-sim-client.js | https://keywebco.github.io/federation-gods-eye/assets/roger-sim-client.js | 404 on live Pages today (new file, exists only on branch consumer-v2; byte-for-byte match there, see note 3) |
| button | SEND | (runs in the page) | see "Buttons" note |

## assets/roger-sim-client.js

| Kind | Label (what a screen reader says) | Address | HTTP |
|---|---|---|---|
| data feed | Roger Sim health (GET) | https://roger-sim-api.onrender.com/health | 200 |
| data feed | Roger Sim chat (CORS preflight only, no message sent) | https://roger-sim-api.onrender.com/proxy/chat | 204 (OPTIONS) |

## Notes

1. **Buttons** (REFRESH, TEXT LIST, ASK ROGER SIM, CLOSE, SEND, Send to Roger Sim, the World Monitor feed tabs) run inside the page, so they have no HTTP code. I ran every page in jsdom (a scripted browser engine) with live network: the map loaded 205 earthquakes, 53 storms and fires and 100 disaster alerts; TEXT LIST and ASK ROGER SIM opened their panels and closed each other; all five World Monitor feeds showed "Live"; the Roger Sim status read "online" on index.html and sim.html. Leaflet cannot draw map circles in jsdom (it has no SVG or canvas), so the drawing itself was not seen; the code keeps the text list working even if drawing fails.
2. **Roger Sim chat**: only the harmless `GET /health` (200, `status: online`, `corpus_loaded: true`) and a CORS preflight `OPTIONS /proxy/chat` (204, allows `https://keywebco.github.io`) were sent. No chat message was POSTed, to avoid spending the Federation's model budget. In the jsdom test the POST was intercepted and answered by a stub, which proved the page's send, reply and error paths, not the server's answer.
3. **assets/roger-sim-client.js** returns 404 on the live site today because it is a new file and Pages serves `main`. Its copy on branch `consumer-v2` was fetched through the GitHub contents API (ref=consumer-v2) and matched the local file byte for byte, as did index.html, the three panels and README.md. It will answer once the branch is published. The panel pages on keywebco.github.io answer 200 today, but until then they still serve the old main versions.
4. The raw NPR feed address refuses direct curl (403) but RSS2JSON reads it (200, 10 items), so it stays in the script; the visible source link points to https://www.npr.org/sections/news/ (200) instead.
5. Not tested: clicking in a real browser with a screen reader, the look on a phone, and buying (no purchase was made).
