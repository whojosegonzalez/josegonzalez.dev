import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <h1 className="text-9xl font-black text-slate-200 dark:text-slate-800 select-none">
        404
      </h1>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Page not found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          Sorry, I couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
      </div>
      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
}