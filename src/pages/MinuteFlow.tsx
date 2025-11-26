import ShowcaseLayout from "../layouts/ShowcaseLayout";

export default function MinuteFlow() {
  return (
    <ShowcaseLayout
      title="MinuteFlow"
      subtitle="A purpose-built desktop application for managing construction meeting minutes."
    >
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <a 
          href="https://github.com/whojosegonzalez/minuteflow/releases" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          Download for Windows (.exe)
        </a>
        <a 
          href="https://github.com/whojosegonzalez/minuteflow" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
        >
          View Source Code
        </a>
      </div>

      <h3>The Problem</h3>
      <p>
        Construction projects live and die by documentation. Standard tools like Word or Excel are flexible 
        but lack structure, leading to inconsistent formatting and lost action items. MinuteFlow bridges 
        this gap with a dedicated interface for tracking attendees, discussion topics, and deadlines.
      </p>

      <h3>Key Features</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Template Engine:</strong> Pre-loaded templates for OAC (Owner-Architect-Contractor) meetings.</li>
        <li><strong>One-Click PDF:</strong> Generates professionally formatted PDFs instantly.</li>
        <li><strong>Agenda Builder:</strong> Carry over open items from previous meetings automatically.</li>
        <li><strong>Local First:</strong> All data is stored locally—no cloud subscription required.</li>
      </ul>

      <h3>Tech Stack</h3>
      <p>
        Built using <strong>Electron</strong> for cross-platform capabilities, with a <strong>React</strong> frontend 
        and a <strong>Node.js</strong> backend handling file system operations and PDF generation.
      </p>
    </ShowcaseLayout>
  );
}