"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsGrid({ projects }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query, projects]);

  return (
    <>
      <div className="relative mt-8 max-w-md">
        <Search
          size={16}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects"
          className="w-full rounded-lg border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-900 py-2.5 pl-10 pr-4 text-[15px] text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-neutral-700"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-[15px] text-slate-500 dark:text-slate-400">
          No projects match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
