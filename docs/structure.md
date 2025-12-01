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
| `/src/main.tsx` | App entry. **Update:** Added `/resume` route. |
| `/src/index.css` | Imports Tailwind base styles & Theme variants |
| `/src/config/site.ts` | Global site config (email, links, name) |

### src/context/
| Path | Purpose |
|------|---------|
| `/src/context/ThemeContext.tsx` | Handles Dark/Light mode persistence & toggling |

### src/hooks/
| Path | Purpose |
|------|---------|
| `/src/hooks/usePageTitle.ts` | Updates browser tab title based on current route |
| `/src/hooks/useTheme.ts` | Helper hook for theme logic |

### src/layouts/
| Path | Purpose |
|------|----------|
| `/src/layouts/RootLayout.tsx` | Main wrapper. **Update:** Added `print:` modifiers to strip styles for PDF generation. |
| `/src/layouts/ShowcaseLayout.tsx` | Generic wrapper for static project write-ups |

### src/components/
| Path | Purpose |
|------|---------|
| `/src/components/Header.tsx` | Nav bar. **Update:** Added "Resume" link; hides on print. |
| `/src/components/Footer.tsx` | Footer with contact links; hides on print. |
| `/src/components/ProjectCard.tsx` | Reusable card component for the Projects grid |
| `/src/components/ContactForm.tsx` | Netlify-ready contact form with validation |
| `/src/components/ScrollToTop.tsx` | Utility that forces scroll to top on route change |
| `/src/components/ThemeToggle.tsx` | Dark/Light mode switch button |

### src/pages/
| Path | Purpose |
|------|----------|
| `/src/pages/Home.tsx` | Landing page (Hero, About, Featured, Downloads) |
| `/src/pages/Resume.tsx` | **NEW**: Interactive resume with "Print to PDF" functionality. |
| `/src/pages/Projects.tsx` | Full grid of all projects with category filtering |
| `/src/pages/Contact.tsx` | Contact cards + Contact Form |
| `/src/pages/NotFound.tsx` | Custom 404 Error page |
| `/src/pages/MovieAggregator.tsx` | Static write-up for Movie project |
| `/src/pages/NeXusTrade.tsx` | Static write-up for Trading Bot project |
| `/src/pages/MinuteFlow.tsx` | Landing page for MinuteFlow desktop app |

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