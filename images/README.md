# Images

The site ships with lightweight branded **SVG placeholders** so every photo
slot looks intentional before real photography arrives. Each one is wired into
the page with descriptive `alt` text, fixed `width`/`height` (to prevent layout
shift), and lazy loading.

## How to swap in real photos
1. Drop the real photo in this folder.
2. Either reuse the placeholder's name with a real extension and update the
   `src` (for example change `hero-camp-dusk.svg` to `hero-camp-dusk.jpg`), or
   keep your own name and update the `src` in the matching page.
3. Re-export the social-share image. `hero-camp-dusk.jpg` is a 1200x630 raster
   generated from `hero-camp-dusk.svg` and is what every page's `og:image` and
   `twitter:image` point at. Replace it with a 1200x630 crop of the real photo
   so link previews show photography instead of the placeholder artwork.
4. Keep the `alt` text accurate to the new photo.

## Where each image is used
| File | Page / slot |
| --- | --- |
| `hero-camp-dusk.svg` | Home hero |
| `hero-camp-dusk.jpg` | Social share image (1200x630) and JSON-LD `image`, generated from the SVG |
| `about-sunset.svg`, `about-campfire.svg`, `about-trees.svg`, `about-fishing.svg` | Home About mosaic |
| `image-break.svg` | Home full-width band |
| `park.svg`, `pond.svg`, `swim.svg`, `eats.svg` | Things-to-do bento + home Local adventures |
| `icon.svg` | Favicon / brand mark (campfire badge), also the source for `/favicon.ico` |
| `apple-touch-icon.png` | iOS home-screen icon (180x180), generated from `icon.svg` |
| `logo.svg` | Full badge logo, used in the page footers |
| `logo.png` | 512x512 raster of the badge, used for the JSON-LD `logo` |

## Guidance
- Only use photos provided by the client or generic nature/lifestyle shots.
  Never use photos of other campgrounds that could mislead visitors.
- Compress before committing. Aim for under ~300 KB each (optimized JPG or
  WebP). Netlify Image CDN can also resize on the fly.
- The amenity icons in the page are inline SVG line icons, not photos, so they
  do not need image files.
