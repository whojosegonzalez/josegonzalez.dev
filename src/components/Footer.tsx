export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600 dark:text-slate-300 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Jose Gonzalez</span>
        <div className="flex gap-4">
          <a className="hover:underline" href="mailto:jose@josegonzalez.dev">Email</a>
          <a className="hover:underline" href="https://github.com/whojosegonzalez" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
