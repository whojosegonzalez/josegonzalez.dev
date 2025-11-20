import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="text-center space-y-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        Hello, I'm Jose.
      </motion.h1>

      <motion.p
        className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.35 }}
      >
        Building clean, secure, and performant apps. This site is my hub.
      </motion.p>

      <motion.div
        className="flex items-center justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.35 }}
      >
        <a
          href="/projects"
          className="px-4 py-2 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700"
        >
          Contact
        </a>
      </motion.div>

      <div className="text-xs text-slate-500">Hero animation wired ✅</div>
    </section>
  );
}
