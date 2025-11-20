# Project Structure – josegonzalez.dev

A living map of all key folders and files.

---

## Root
| Path | Purpose |
|------|----------|
| `/index.html` | Vite entry HTML |
| `/vite.config.ts` | Vite config |
| `/package.json` | Dependencies and scripts |
| `/tsconfig.json` | TypeScript settings |

---

## src/
| Path | Purpose |
|------|----------|
| `/src/main.tsx` | App entry, sets up React Router |
| `/src/index.css` | Imports Tailwind base styles |
| `/src/config/site.ts` | Global site config (email, links, name) |
| `/src/components/Header.tsx` | Navigation bar with active links |
| `/src/components/Footer.tsx` | Footer with contact links |
| `/src/layouts/RootLayout.tsx` | Shared layout wrapper (Header, Footer, Outlet) |
| `/src/pages/Home.tsx` | Landing hero section |
| `/src/pages/Projects.tsx` | Placeholder for project cards |
| `/src/pages/Contact.tsx` | Contact info page |

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

---

## components/
| Path | Purpose |
|------|---------|
| `/src/components/ProjectCard.tsx` | Reusable card component for the Projects grid |