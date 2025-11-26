import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  /**
   * Data Logic:
   * 1. Featured: Automatically grabs the first 2 projects to show as "Featured".
   * 2. Downloads: Filters specifically for items marked as "download" (like MinuteFlow)
   * to fulfill the "Downloadable Tools" requirement from Phase 1.
   */
  const featuredProjects = projects.slice(0, 2);
  const downloadProjects = projects.filter((p) => p.kind === "download");

  /**
   * Animation Variants:
   * A simple "Fade In + Slide Up" effect used for scroll reveals.
   * hidden: Starting state (invisible, slightly shifted down)
   * visible: End state (fully visible, natural position)
   */
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-24">
      {/* HERO SECTION 
        - Uses immediate animations (no scroll trigger) because it's "above the fold".
        - Staggers the appearance of Title -> Text -> Buttons using the `delay` prop.
      */}
      <section className="text-center space-y-6 py-12 md:py-20">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          Hello, I'm Jose.
        </motion.h1>

        <motion.p
          className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.35 }}
        >
          Building clean, secure, and performant apps. This site is my hub for 
          projects, tools, and experiments.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.35 }}
        >
          <Link
            to="/projects"
            className="px-6 py-2.5 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium hover:opacity-90 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </section>

      {/* ABOUT ME SECTION 
        - Triggers animation only when the user scrolls into view.
        - viewport={{ once: true }} ensures it doesn't re-animate if the user scrolls up and down.
      */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          I am a software engineer focused on solving real-world problems through code. 
          My goal with **josegonzalez.dev** is to move away from expensive website builders 
          and create a centralized, custom-built home for all my software, including 
          web apps, desktop tools, and automation bots.
        </p>
      </motion.section>

      {/* FEATURED PROJECTS SECTION 
        - Shows the top 2 projects.
        - Includes a "View all" link to the full /projects page.
      */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={fadeInUp}
        className="space-y-8"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link to="/projects" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
            View all &rarr;
          </Link>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </motion.section>

      {/* DOWNLOADABLE TOOLS SECTION 
        - Conditionally rendered: Only appears if there are projects with kind="download".
        - This ensures the UI doesn't break if you haven't released a tool yet.
      */}
      {downloadProjects.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeInUp}
          className="space-y-8"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Tools & Downloads</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {downloadProjects.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
}