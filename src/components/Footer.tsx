import { site } from "../config/site";
const ext = (u: string) => (u.startsWith("http") ? u : `https://${u}`);

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-12 print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600 dark:text-slate-300 flex items-center justify-between">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <div className="flex gap-4">
          <a className="hover:underline" href={`mailto:${site.email}`}>Email</a>
          <a className="hover:underline" href={ext(site.github)} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:underline" href={ext(site.linkedin)} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}