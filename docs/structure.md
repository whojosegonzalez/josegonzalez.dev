# Project Structure – josegonzalez.dev

A living map of all key folders and files.

---

## Root
| Path | Purpose |
|------|----------|
| `/index.html` | Vite entry HTML |
| `/vite.config.ts` | Vite config (includes Tailwind v4 plugin) |
| `/package.json` | Dependencies and scripts |
| `/tsconfig.json` | TypeScript settings |
| `/public/assets/` | Static images (project covers, logos) |
---

## src/
| Path | Purpose |
|------|----------|
| `/src/main.tsx` | App entry, sets up React Router and global providers |
| `/src/index.css` | Imports Tailwind base styles |
| `/src/config/site.ts` | Global site config (email, links, name) |

### src/layouts/
| Path | Purpose |
|------|----------|
| `/src/layouts/RootLayout.tsx` | Main wrapper (Header, Footer, Outlet) |
| `/src/layouts/ShowcaseLayout.tsx` | **NEW**: Generic wrapper for static project write-ups (standardizes titles/typography) |

### src/components/
| Path | Purpose |
|------|---------|
| `/src/components/Header.tsx` | Navigation bar with active links |
| `/src/components/Footer.tsx` | Footer with contact links |
| `/src/components/ProjectCard.tsx` | Reusable card component for the Projects grid |
| `/src/components/ScrollToTop.tsx` | **NEW**: Utility that forces scroll to top on route change |

### src/pages/
| Path | Purpose |
|------|----------|
| `/src/pages/Home.tsx` | Landing page (Hero, About, Featured, Downloads) |
| `/src/pages/Projects.tsx` | Full grid of all projects |
| `/src/pages/Contact.tsx` | Contact cards (Email, GitHub, LinkedIn) |
| `/src/pages/MovieAggregator.tsx` | **NEW**: Static write-up for Movie project |
| `/src/pages/NeXusTrade.tsx` | **NEW**: Static write-up for Trading Bot project |
| `/src/pages/MinuteFlow.tsx` | **NEW**: Landing page for MinuteFlow desktop app |

---

## docs/
| Path | Purpose |
|------|----------|
| `/docs/structure.md` | This file — keeps track of project architecture and additions |

---

## data/
| Path | Purpose |
|------|---------|
| `/src/data/projects.ts` | Typed source of truth for all project cards |