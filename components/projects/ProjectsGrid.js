"use client";

import { useMemo, useState } from "react";
import ProjectRow from "@/components/projects/ProjectRow";

// ─── Category filter pill ───────────────────────────────────────────────────
function FilterPill({ label, count, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all ${
        active
          ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
          : "border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-neutral-700 hover:bg-slate-50 dark:hover:bg-neutral-800"
      }`}
    >
      {label}
      <span
        className={`rounded-full px-1.5 py-0.5 text-[11px] font-semibold leading-none ${
          active
            ? "bg-white/20 dark:bg-slate-900/20"
            : "bg-slate-100 dark:bg-neutral-800 text-slate-500 dark:text-slate-400"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

// ─── Main grid (filtered row list) ─────────────────────────────────────────
const CATEGORY_ORDER = [
  "All Projects",
  "Full Stack",
  "AI",
  "Frontend",
  "Backend",
  "Machine Learning",
];

export default function ProjectsGrid({ projects }) {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  // Build category counts
  const categoryCounts = useMemo(() => {
    const counts = { "All Projects": projects.length };
    for (const p of projects) {
      if (p.category) {
        counts[p.category] = (counts[p.category] || 0) + 1;
      }
    }
    return counts;
  }, [projects]);

  // Build pill list (only categories that exist + have count)
  const pills = useMemo(() => {
    return CATEGORY_ORDER.filter(
      (cat) => cat === "All Projects" || (categoryCounts[cat] && categoryCounts[cat] > 0)
    );
  }, [categoryCounts]);

  // Filter projects
  const filtered = useMemo(() => {
    const sorted = [...projects].sort(
      (a, b) => Number(a.order) - Number(b.order)
    );
    if (activeCategory === "All Projects") return sorted;
    return sorted.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <>
      {/* ── Filter pills ── */}
      <div className="mt-8 flex flex-wrap gap-2">
        {pills.map((cat) => (
          <FilterPill
            key={cat}
            label={cat}
            count={categoryCounts[cat] ?? 0}
            active={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          />
        ))}
      </div>

      {/* ── Result count ── */}
      <div className="mt-6 flex items-baseline justify-between border-b border-slate-100 dark:border-neutral-800 pb-4">
        <h2 className="text-[15px] font-semibold tracking-tight">
          Selected Projects
        </h2>
        <span className="text-[13px] text-slate-400 dark:text-slate-500">
          Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* ── Row list ── */}
      {filtered.length === 0 ? (
        <p className="mt-10 text-[14.5px] text-slate-500 dark:text-slate-400">
          No projects in this category yet.
        </p>
      ) : (
        <div className="divide-y-0">
          {filtered.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
