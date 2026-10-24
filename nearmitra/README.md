# NearMitra product site

Static GitHub Pages website at https://coderbaba0.github.io/nearmitra/.

14 self-contained HTML pages share `assets/site.css` and `assets/site.js`. No build, JavaScript framework, CDN or external font is required. Content remains readable with JavaScript disabled. Keep this folder next to the existing `biofold/` folder.

## Preview

From the GitHub Pages repository root, run `python -m http.server 8080` and open `http://localhost:8080/nearmitra/`.

## Update

Edit page HTML directly. Keep unique titles/descriptions, canonicals, social metadata and visible page content consistent. Add pages to `sitemap.xml` and the shared navigation/footer. Update download links only when verified release assets are actually published; the current links intentionally lead to GitHub Releases.

Images are optimized copies of the NearMitra source repository's own app icon and screenshots; see `assets/images/SOURCES.md`. Historical UI labels are not feature/security guarantees. No Firebase project values, app data, signing material, APK or EXE are included.

The site has no analytics or tracking scripts. GitHub Pages handles hosting. Sitemap: https://coderbaba0.github.io/nearmitra/sitemap.xml . The origin-root `robots.txt` advertises the root sitemap and NearMitra sitemap. The root sitemap includes the existing portfolio and BioFold landing routes as well as the NearMitra pages.

App source: https://github.com/coderbaba0/nearmitra (GPL-3.0-only).

## Theme behavior

Light is the first-visit default, regardless of operating-system theme. A deliberate dark/light selection is saved in browser localStorage and shared across all pages. Theme code is loaded separately from gallery/animation code. CSS and scripts have content-versioned URLs; internal page links also carry a release version to avoid stale HTML during navigation.

Each of the 14 pages uses the same accessible sun/moon icon button. The chosen theme is loaded before styles paint, and the interactive controller is independent of the rest of the site JavaScript.

## Release download buttons

Android: https://github.com/coderbaba0/nearmitra/releases/download/v1.0.3/NearMitra-Android-1.0.3.apk

Windows: https://github.com/coderbaba0/nearmitra/releases/download/v2.1.23/NearMitra_Setup_2.1.23_x64.exe

Download buttons open the exact maintainer-supplied release URLs in a new tab with `noopener noreferrer`. Source links remain pointed at the source repository. Release accessibility follows GitHub repository/release permissions; no visibility changes are made by this site.

## Publisher and search metadata

Published by FlutterFever. Each page has a unique title/description, a clean canonical URL, social previews, a connected JSON-LD graph and crawlable internal links. Schema entities include Organization, WebSite, WebPage/CollectionPage, BreadcrumbList, SiteNavigationElement, SoftwareSourceCode and separate Android/Windows SoftwareApplication entries with release versions and free-download offers. No ratings or reviews are fabricated. The FAQ markup matches visible questions.

After publication, the site owner can verify `https://coderbaba0.github.io/` in Google Search Console and submit `https://coderbaba0.github.io/nearmitra/sitemap.xml`. Use URL Inspection for key pages and the Google Rich Results Test to review eligibility. Search indexing, rich-result display and rankings are controlled by Google. No Search Console verification token or submission is implied by these source changes.

The overview contains a responsive YouTube walkthrough directly before the footer; the screenshots page has the same video above its gallery. Playback uses YouTube privacy-enhanced embedding.
