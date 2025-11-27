import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

interface ShowcaseLayoutProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly children: ReactNode;
  readonly currentSlug?: string; // New prop to identify the current page
}

export default function ShowcaseLayout({ title, subtitle, children, currentSlug }: ShowcaseLayoutProps) {
  // 1. Find the index of the current project
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  
  // 2. Determine the next project (if it exists)
  const nextProject = currentIndex >= 0 && currentIndex < projects.length - 1 
    ? projects[currentIndex + 1] 
    : null;

  // 3. Helper to find the internal "Info" link for the next project
  const getNextLink = () => {
    if (!nextProject) return null;
    const infoLink = nextProject.links.find((l) => l.label === "Info");
    // Only link if it's an internal route (starts with /)
    return infoLink?.href.startsWith("/") ? infoLink.href : null;
  };

  const nextLinkHref = getNextLink();

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16 space-y-8">
      {/* TOP NAVIGATION: Breadcrumbs */}
      <nav>
        <Link 
          to="/projects" 
          className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 transition-colors"
        >
          &larr; Back to Projects
        </Link>
      </nav>

      {/* HEADER */}
      <header className="space-y-4 text-center border-b border-slate-200 dark:border-slate-800 pb-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </header>
      
      {/* CONTENT */}
      <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-6">
        {children}
      </div>

      {/* BOTTOM NAVIGATION: Next Project */}
      {nextProject && nextLinkHref && (
        <footer className="border-t border-slate-200 dark:border-slate-800 mt-16 pt-8 flex justify-end">
          <Link 
            to={nextLinkHref}
            className="group text-right"
          >
            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Next Project
            </div>
            <div className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline inline-flex items-center gap-2">
              {nextProject.title} &rarr;
            </div>
          </Link>
        </footer>
      )}
    </article>
  );
}