import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";


export default function Header() {
  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition";
  const linkActive = "bg-slate-900 text-white dark:bg-white dark:text-slate-900";
  const linkInactive = "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800";

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold tracking-tight text-lg">
          josegonzalez.dev
        </Link>
        <div className="flex items-center gap-3">
          <NavLink to="/" end
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
            Home
          </NavLink>
          <NavLink to="/projects"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
            Projects
          </NavLink>
          <NavLink to="/contact"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
            Contact
          </NavLink>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
