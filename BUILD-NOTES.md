# God's Eye — Build Notes

## RSS Feed Proxy: AllOrigins Outage — Resolved via RSS2JSON

**Date:** 2026-09-16

### What Happened
During the initial deployment of the World Monitor panel, all RSS feeds displayed `Failed to fetch` errors in the browser. The root cause was a CORS restriction — browsers block direct cross-origin fetch calls to external RSS endpoints.

The first proxy selected, **AllOrigins** (`api.allorigins.win`), was confirmed offline (error 522, Cloudflare connection timeout) at the time of deployment. A second candidate, **corsproxy.io**, had removed its free keyless tier and now requires an API key.

### Resolution
Switched to **RSS2JSON** (`api.rss2json.com`) — confirmed live, no API key required on the free tier.

- Feed pattern: `https://api.rss2json.com/v1/api.json?rss_url=ENCODED_URL`
- Response: `{ status, feed, items[] }` — no XML parsing needed
- BBC World, Reuters, AP News, AI/Tech, and GDELT all tested successfully

### Recommendation for Future Builders
For any static GitHub Pages project fetching external RSS or data feeds, always verify your chosen CORS proxy before shipping. Free proxies can go offline without notice. RSS2JSON has proven reliable and its JSON response format simplifies the fetch logic considerably.

### Status
Resolved — `world-monitor.html` and `sim.html` updated and committed.

Live at: https://keywebco.github.io/federation-gods-eye/panels/world-monitor.html
