import { useEffect } from "react";
import { site } from "../config/site";

export default function Resume() {
  useEffect(() => {
    document.title = `Resume | ${site.name}`;
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8 print:space-y-0 print:max-w-none">
      {/* Print Button - Hidden in Print Mode */}
      <div className="flex justify-end print:hidden">
        <button
          onClick={() => globalThis.print()} 
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-sm cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print / Save PDF
        </button>
      </div>

      {/* Resume Paper Layout */}
      {/* CHANGED: 'print:p-0' -> 'print:p-12' to add margins */}
      <article className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 print:shadow-none print:border-none print:p-12 print:bg-white print:text-black">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start border-b border-slate-200 dark:border-slate-700 pb-6 mb-8 print:flex-row print:mb-6 print:border-slate-300">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white print:text-black">
              Jose Manuel Gonzalez Alfaro
            </h1>
            <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium mt-2 print:text-slate-700">
              Software Engineer & Project Manager
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right text-sm text-slate-600 dark:text-slate-400 leading-relaxed print:text-right print:text-slate-600">
            <p>Inglewood, CA</p>
            <p>(310) 908-4953</p>
            <a href={`mailto:${site.email}`} className="hover:underline block">{site.email}</a>
            <a href="https://josegonzalez.dev" className="hover:underline block">josegonzalez.dev</a>
          </div>
        </header>

        <div className="space-y-8 print:space-y-6">
          
          {/* SUMMARY */}
          <section>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 border-b border-slate-200 dark:border-slate-800 pb-1 print:text-black print:border-slate-300">
              Professional Summary
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed print:text-slate-700 text-sm">
              Detail-oriented professional transitioning from construction project management to software engineering. 
              Holding a B.S. in Computer Science and currently pursuing an M.S. in CS, combining strong technical 
              foundations in React, TypeScript, and Python with proven experience in budget tracking, contract administration, 
              and stakeholder communication. Seeking to leverage this unique blend of engineering discipline and project 
              leadership to build robust, scalable software solutions.
            </p>
          </section>

          {/* EDUCATION */}
          <section>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-800 pb-1 print:text-black print:border-slate-300">
              Education
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white print:text-black">California State University, Fullerton</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm print:text-slate-700 print:font-medium">M.S., Computer Science</p>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 font-mono print:text-slate-600">Expected Dec 2026</span>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white print:text-black">California State University, Dominguez Hills</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm print:text-slate-700 print:font-medium">B.S., Computer Science</p>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 font-mono print:text-slate-600">Aug 2021</span>
              </div>
            </div>
          </section>

          {/* TECHNICAL SKILLS */}
          <section>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-800 pb-1 print:text-black print:border-slate-300">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 print:text-black">Languages & Frontend</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 print:text-slate-700">
                  <li>JavaScript (ES6+), TypeScript</li>
                  <li>React 19, Vite, Next.js, Tailwind CSS</li>
                  <li>HTML5, CSS3, Framer Motion</li>
                  <li>Python, Java, C++</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 print:text-black">Tools & Methodologies</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 print:text-slate-700">
                  <li>Git, GitHub, Version Control</li>
                  <li>REST APIs, WebSockets</li>
                  <li>Agile / Scrum, UX/UI Design Principles</li>
                  <li>VS Code, Linux/Unix Command Line</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PROFESSIONAL EXPERIENCE */}
          <section>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-800 pb-1 print:text-black print:border-slate-300">
              Professional Experience
            </h2>
            <div className="space-y-6">
              
              {/* CSUDH */}
              <div className="break-inside-avoid">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white print:text-black">Administrative Coordinator (FPDC)</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-mono print:text-slate-600">Jan 2023 - Present</span>
                </div>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2 print:text-slate-700">CSU Dominguez Hills</p>
                <ul className="list-disc list-outside ml-4 text-sm text-slate-700 dark:text-slate-300 space-y-1 leading-relaxed print:text-slate-700">
                  <li>Coordinate planning, design, and construction projects with Project Managers and campus stakeholders.</li>
                  <li>Draft and execute Project Agreements; serve as Job Order Contract (JOC) Coordinator tracking timelines.</li>
                  <li>Manage financial workflows: process contracts, requisitions, and evaluate invoices in CSU CFIS.</li>
                  <li>Maintain FPDC website updates and ensure compliance with Chancellor's Office requirements.</li>
                </ul>
              </div>

              {/* Bluewave */}
              <div className="break-inside-avoid">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white print:text-black">WordPress Web Developer</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-mono print:text-slate-600">Feb 2019 - Jan 2020</span>
                </div>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2 print:text-slate-700">Bluewave Printing Co. (Remote)</p>
                <ul className="list-disc list-outside ml-4 text-sm text-slate-700 dark:text-slate-300 space-y-1 leading-relaxed print:text-slate-700">
                  <li>Designed and maintained company website and customer database to improve communication flow.</li>
                  <li>Optimized site layout and forms to streamline customer orders and inquiries.</li>
                </ul>
              </div>

              {/* Previous Roles Summary */}
              <div className="break-inside-avoid pt-2">
                <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                  Additional experience: Purchasing Assistant @ CSUDH (2019-2021), Sales Associate @ T-Mobile (2020-2021)
                </p>
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section className="break-inside-avoid">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-800 pb-1 print:text-black print:border-slate-300">
              Certifications & Training
            </h2>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 print:text-slate-700">
              <li className="flex flex-col sm:flex-row sm:justify-between">
                <span><strong>Meta Front-End Developer Professional Certificate</strong> (Coursera)</span>
                <span className="text-slate-500 dark:text-slate-400 font-mono text-xs sm:text-sm">2024</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between">
                <span><strong>Construction Project Management Certificate</strong> (CSUDH)</span>
                <span className="text-slate-500 dark:text-slate-400 font-mono text-xs sm:text-sm">2025</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between">
                <span><strong>Google Project Management Professional Certificate</strong> (Coursera)</span>
                <span className="text-slate-500 dark:text-slate-400 font-mono text-xs sm:text-sm">2024</span>
              </li>
            </ul>
          </section>

          {/* CONSTRUCTION SKILLS (Secondary) */}
          <section className="break-inside-avoid">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 border-b border-slate-200 dark:border-slate-800 pb-1 print:text-black print:border-slate-300">
              Project Management Skills
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed print:text-slate-700">
              Capital Projects, JOC Coordination, Schedule & Budget Tracking, Risk & Compliance, 
              Construction Accounting, Smartsheet, Bluebeam, CSU CFIS.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
}