# NearMitra product site

Static GitHub Pages website at https://coderbaba0.github.io/nearmitra/.

13 self-contained HTML pages share `assets/site.css` and `assets/site.js`. No build, JavaScript framework, CDN or external font is required. Content remains readable with JavaScript disabled. Keep this folder next to the existing `biofold/` folder.

## Preview

From the GitHub Pages repository root, run `python -m http.server 8080` and open `http://localhost:8080/nearmitra/`.

## Update

Edit page HTML directly. Keep unique titles/descriptions, canonicals, social metadata and visible page content consistent. Add pages to `sitemap.xml` and the shared navigation/footer. Update download links only when verified release assets are actually published; the current links intentionally lead to GitHub Releases.

Images are optimized copies of the NearMitra source repository's own app icon and screenshots; see `assets/images/SOURCES.md`. Historical UI labels are not feature/security guarantees. No Firebase project values, app data, signing material, APK or EXE are included.

The site has no analytics or tracking scripts. GitHub Pages handles hosting. Sitemap: https://coderbaba0.github.io/nearmitra/sitemap.xml . A subfolder `robots.txt` is not used because robots directives must live at the origin root; the existing root site is preserved.

App source: https://github.com/coderbaba0/farmitra_nearby_flutter (GPL-3.0-only).
