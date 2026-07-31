# Stateline Campground

Marketing site for **Stateline Campground**, a family-owned RV park in
Blacksville, WV, on the West Virginia / Pennsylvania border.

It is a static site — plain HTML, one stylesheet, and a small JS file — built
to load fast and rank well for local "RV camping" and "campgrounds near…"
searches. This repository mirrors exactly what is published, with every file at
the repository root so it can be deployed as-is.

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | Home page |
| `faq/` | Frequently asked questions |
| `things-to-do/` | Things to do near the campground |
| `campgrounds-near-waynesburg-pa/` | Local landing page (Waynesburg, PA / Greene County) |
| `rv-camping-near-waynesburg-pa/` | Local landing page (RV camping, Waynesburg, PA) |
| `rv-camping-near-morgantown-wv/` | Local landing page (RV camping, Morgantown, WV) |
| `assets/` | `styles.css` and `site.js` |
| `images/` | Logo, favicon source, hero, and section artwork (see `images/README.md`) |
| `_headers` | Netlify cache and security headers |
| `robots.txt`, `sitemap.xml` | Crawl and indexing hints |

## Deploying

The site needs no build step. Point a static host (Netlify, etc.) at the
repository root and publish. On Netlify the `_headers` file is applied
automatically.

## Editing photos

The site ships with lightweight SVG placeholders alongside the real raster
assets. See `images/README.md` for how each image is used and how to swap in
real photography.
