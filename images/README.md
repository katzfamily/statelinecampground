# Images

Most photo slots now use **real photography** (optimized JPGs). A few slots that
still lack a real photo keep a lightweight branded **SVG placeholder** so they
look intentional. Every image is wired into the page with descriptive `alt`
text, fixed `width`/`height` (to prevent layout shift), and lazy loading (except
the hero, which is eager + `fetchpriority="high"`).

## Where each image is used
| File | Page / slot |
| --- | --- |
| `hero.jpg` | Home hero (1600px wide, `object-fit:cover`) |
| `hero-camp-dusk.jpg` | Social-share image (1200x630) — every page's `og:image`/`twitter:image` and the JSON-LD `image` |
| `about-sunset.jpg` | Home About mosaic — sunset over the park |
| `about-playground.jpg` | Home About mosaic — on-site playground |
| `about-family.jpg` | Home About mosaic — child at an RV site |
| `about-laundry.jpg` | Home About mosaic — laundry room sign |
| `band-grounds.jpg` | Home full-width band — sunset panorama of the grounds |
| `swim.jpg` | Things-to-do bento + home Local adventures — swimming pool |
| `eats.jpg` | Things-to-do bento + home Local adventures — local restaurant |
| `park.jpg` | Things-to-do bento + home Local adventures — Mason-Dixon Park (Almost Heaven WV sign) |
| `pond.jpg` | Things-to-do bento + home Local adventures — Lake Wilma |
| `library.jpg` | Things-to-do bento + home Local adventures — local library kids area |
| `icon.svg` | Favicon / brand mark (campfire badge); source for `/favicon.ico` |
| `apple-touch-icon.png` | iOS home-screen icon (180x180), from `icon.svg` |
| `logo.svg` | Full badge logo, used in the page footers |
| `logo.png` | 512x512 raster of the badge, used for the JSON-LD `logo` |

## How to swap in a real photo (e.g. to replace `park.svg` / `pond.svg`)
1. Drop the real photo in this folder.
2. Update the matching `<img src>` in the page(s) to point at it, and set the
   `width`/`height` to the new file's dimensions (tiles are ~700x520).
3. Keep the `alt` text accurate to the new photo.
4. If you replace the hero, also re-export `hero-camp-dusk.jpg` as a 1200x630
   crop so link previews match.

## Guidance
- Use photos you own or have permission to use. Avoid photos of other
  campgrounds that could mislead visitors.
- Compress before committing. Aim for under ~300 KB each (optimized JPG or
  WebP). Netlify's Image CDN can also resize on the fly.
- The amenity icons in the page are inline SVG line icons, not photos, so they
  do not need image files.
