import type { ReactNode } from "react";

interface ShowcaseLayoutProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly children: ReactNode;
}

export default function ShowcaseLayout({ title, subtitle, children }: ShowcaseLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16 space-y-8">
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
      
      {/* This is where your write-up content will go */}
      <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-6">
        {children}
      </div>
    </article>
  );
}