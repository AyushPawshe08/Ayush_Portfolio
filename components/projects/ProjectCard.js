import Link from "next/link";
import { TECH } from "@/lib/tech-icons";
import TechIcon from "@/components/TechIcon";
import ProjectCover from "@/components/projects/ProjectCover";

export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800">
      <div className="aspect-[4/3] sm:aspect-[16/11]">
        <ProjectCover cover={project.cover} />
      </div>

      <div className="bg-slate-50 dark:bg-neutral-900 px-5 py-5">
        {project.one_word_desc && (
          <div className="flex items-center">
            <span className="rounded border border-slate-200 dark:border-neutral-800 px-2.5 py-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              {project.one_word_desc}
            </span>
          </div>
        )}

        <h3 className="mt-2 text-[17px] font-semibold">{project.title}</h3>
        <p className="mt-1.5 text-[14.5px] leading-relaxed text-slate-500 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.cardIcons?.map((key) => {
              const tech = TECH[key] || TECH[key.toLowerCase()] || TECH[key.toUpperCase()];
              if (!tech) return null;
              return (
                <span
                  key={key}
                  title={tech.label}
                  className="inline-flex items-center justify-center transition-transform hover:scale-110"
                >
                  <TechIcon tech={tech} size={18} />
                </span>
              );
            })}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="group shrink-0 inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3.5 py-1.5 text-[13px] font-medium text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-neutral-600 hover:bg-slate-50 dark:hover:bg-neutral-700/60 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
          >
            View project <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
