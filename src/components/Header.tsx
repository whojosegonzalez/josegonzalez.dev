import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition";
  const linkActive = "bg-slate-900 text-white dark:bg-white dark:text-slate-900";
  const linkInactive = "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800";

  return (
    <header className="sticky top-0 z-50 bg-slate-100/80 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold tracking-tight text-lg">
          josegonzalez.dev
        </Link>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
              Home
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
              Contact
            </NavLink>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="ml-2 p-2 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === "dark" ? (
              // Sun Icon (for Dark Mode)
              <svg className="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Moon Icon (for Light Mode)
              <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}