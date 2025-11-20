import { site } from "../config/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600 dark:text-slate-300 flex items-center justify-between">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <div className="flex gap-4">
          <a className="hover:underline" href={`mailto:${site.email}`}>Email</a>
          <a className="hover:underline" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          {/* LinkedIn placeholder until you provide the URL */}
          <a
            className="hover:underline opacity-60 pointer-events-none"
            title="Add LinkedIn URL in src/config/site.ts"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
