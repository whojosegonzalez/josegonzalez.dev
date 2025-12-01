import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const skills = [
  "React 19", "TypeScript", "Tailwind CSS", "Node.js", "Python", "Java", "Git/GitHub"
];

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
  const downloadProjects = projects.filter((p) => p.kind === "download");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="space-y-24">
      {/* HERO SECTION */}
      <section className="text-center space-y-8 py-12 md:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-6"
        >
          {/* NAME RESTORED HERE */}
          <motion.div variants={fadeInUp}>
            <span className="text-sm md:text-base font-bold tracking-widest text-slate-500 uppercase">
              Jose Manuel Gonzalez
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            variants={fadeInUp}
          >
            Bridge the gap between <br className="hidden sm:block" />
            <span className="text-indigo-600 dark:text-indigo-400">Engineering</span> & <span className="text-emerald-600 dark:text-emerald-400">Execution</span>.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Combining a B.S. in Computer Science with years of Project Management experience to build software that is structured, scalable, and delivered on time.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            variants={fadeInUp}
          >
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-md shadow-indigo-500/20"
            >
              View My Work
            </Link>
            <Link
              to="/resume"
              className="w-full sm:w-auto px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              View Resume
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* TECH STACK STRIP (FIXED) 
         Using 'w-screen' and negative margins to break out of the max-w-6xl container 
      */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-screen relative left-[calc(-50vw+50%)] border-y border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 py-12"
      >
        <div className="text-center max-w-6xl mx-auto px-4">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">
            Core Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-200 px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ABOUT ME SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
        className="max-w-3xl mx-auto text-center space-y-6 px-4"
      >
        <h2 className="text-3xl font-bold">The "PM-Engineer" Advantage</h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
          Most developers just write code. Coming from a background managing multi-million dollar 
          construction projects, I understand that <strong>code is just one part of the delivery</strong>.
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Whether it's automating workflows with Python, building dashboards in React, or architecting 
          data pipelines with Java, I bring the same rigor to software that I brought to physical infrastructure: 
          <br></br><strong> meticulous planning, clear communication, and a focus on the end-user.</strong>
        </p>
      </motion.section>

      {/* FEATURED PROJECTS SECTION */}
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

      {/* DOWNLOADABLE TOOLS SECTION */}
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