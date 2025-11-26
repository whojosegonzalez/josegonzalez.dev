import type { Project } from "../data/projects";

const badgeColor: Record<Project["status"], string> = {
  live: "bg-emerald-600",
  demo: "bg-sky-600",
  static: "bg-indigo-600",
  wip:  "bg-amber-600",
};

// Fix 1: Added 'readonly' to the prop definition
export default function ProjectCard({ p }: { readonly p: Project }) {
  return (
    <article
      className="group rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 hover:shadow-lg transition"
      aria-labelledby={`${p.slug}-title`}
    >
      <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 overflow-hidden">
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.image}
            alt={`${p.title} cover`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : null}
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h3 id={`${p.slug}-title`} className="text-lg font-semibold">
            {p.title}
          </h3>
          <span className={`text-xs text-white px-2 py-1 rounded ${badgeColor[p.status]}`}>
            {p.status.toUpperCase()}
          </span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300">{p.blurb}</p>

        <div className="flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {p.links.map((l) => (
            <a
              key={l.label}
              href={l.href} // Fix 2: Removed redundant conditional check
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-sm font-medium px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}