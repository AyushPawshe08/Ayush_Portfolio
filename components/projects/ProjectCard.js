import Link from "next/link";
import { TECH } from "@/lib/tech-icons";
import ProjectCover from "@/components/projects/ProjectCover";

export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800">
      <div className="aspect-[4/3] sm:aspect-[16/11]">
        <ProjectCover cover={project.cover} />
      </div>

      <div className="bg-slate-50 dark:bg-neutral-900 px-5 py-5">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-semibold text-emerald-600 dark:text-emerald-400">
            {project.order}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[13px] text-slate-500 dark:text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {project.status}
          </span>
        </div>

        <h3 className="mt-2 text-[17px] font-bold">{project.title}</h3>
        <p className="mt-1.5 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.cardIcons.map((key) => {
              const Icon = TECH[key].icon;
              return (
                <Icon
                  key={key}
                  size={16}
                  className="text-slate-400 dark:text-slate-500"
                  aria-label={TECH[key].label}
                />
              );
            })}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-[14px] font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
          >
            Read more <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
