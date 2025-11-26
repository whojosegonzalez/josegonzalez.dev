import { site } from "../config/site";

export default function Contact() {
  return (
    <section className="space-y-8 max-w-3xl mx-auto">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Get in Touch</h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-lg leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your visions.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        {/* Email Card */}
        <a
          href={`mailto:${site.email}`}
          className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition duration-300"
        >
          <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            Email
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Shoot me a message
          </span>
        </a>

        {/* GitHub Card */}
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-white hover:shadow-lg transition duration-300"
        >
          <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
            GitHub
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Check my code
          </span>
        </a>

        {/* LinkedIn Card */}
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-lg transition duration-300"
        >
          <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            LinkedIn
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Let's connect
          </span>
        </a>
      </div>
    </section>
  );
}