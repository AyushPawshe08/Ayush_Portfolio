# Ayush Pawshe — Portfolio Home

Next.js (JavaScript, App Router) + Tailwind CSS recreation of the Home route.

## Setup

1. Drop these files into your Next.js project (or run `npx create-next-app@latest --js --tailwind --app` and copy them in over the generated structure).
2. Install the extra packages used by these components:
   ```bash
   npm install lucide-react react-icons
   ```
3. Add your own avatar image at `public/avatar.png` (128×128 or larger, square). The same file is reused at small size in the header.
4. Run it:
   ```bash
   npm run dev
   ```

## Footer & quote card
- `components/SiteFooter.js` (rendered once, in `app/layout.js`, so it's on every page) — the pull-quote card (`components/Quote.js`), a NAVIGATE column, a CONNECT icon grid, and the copyright line.
- NAVIGATE only lists the pages this project actually has (Home, Projects, Resume). Add more `{ label, href }` entries to the `navLinks` array in `SiteFooter.js` as you add pages.
- CONNECT reuses the same four social links as the hero section, now centralized in `lib/socials.js` — edit that one file to update your links everywhere, or add more entries (Instagram, YouTube, etc.) to fill out the grid.
- Swap the quote and attribution text directly in `components/Quote.js`.

## Resume page
- `/resume` embeds your Google Drive file (`app/resume/page.js`) via Drive's `/preview` iframe, plus a **Download Resume** button (Drive's direct-download URL) and an **Open in Drive** button.
- This only works if the file's sharing is set to "Anyone with the link can view" — otherwise the preview and download will fail for visitors.
- To swap the resume, replace `DRIVE_FILE_ID` at the top of `app/resume/page.js` with the new file's ID (the long string in its Drive URL).

## Notes / things to wire up
- `components/Header.js` links to `/projects` and `/resume` — create those routes, or point them elsewhere.
- `components/Hero.js` has placeholder LinkedIn/GitHub/X URLs — update them to your real profiles.
- `components/ProjectsPreview.js` links each project to `/projects/<slug>` — create those pages, or change the `href`s.
- Dark mode toggle stores the choice in `localStorage` and follows system preference on first visit.
- Fonts: uses `next/font/google` Inter, matching the clean sans-serif in the screenshots, loaded as a CSS variable (`--font-sans`) and wired into Tailwind's `font-sans`.
