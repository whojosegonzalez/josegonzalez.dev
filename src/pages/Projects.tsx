import { useState } from "react";
import { projects, type ProjectType } from "../data/projects"; 
import ProjectCard from "../components/ProjectCard";

// Define our filter categories
type FilterType = "all" | ProjectType;

const tabs: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Desktop", value: "download" },
  { label: "Showcase", value: "showcase" },
  { label: "Bots", value: "bot" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<FilterType>("all");

  // Filter logic
  const visibleProjects = projects.filter((p) => 
    activeTab === "all" ? true : p.kind === activeTab
  );

  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
          A collection of live applications, static analysis, and developer tools 
          I've built. Filter by category to find exactly what you're looking for.
        </p>
      </header>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
              ${
                activeTab === tab.value
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {visibleProjects.length > 0 ? (
          visibleProjects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))
        ) : (
          <p className="text-slate-500 italic py-10 col-span-full text-center">
            No projects found in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}