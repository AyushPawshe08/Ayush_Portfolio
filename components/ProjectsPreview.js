import Link from "next/link";
import { projects as allProjects } from "@/lib/projects-data";
import ProjectRow from "@/components/projects/ProjectRow";

const featuredProjects = [...allProjects]
  .sort((a, b) => Number(a.order) - Number(b.order))
  .slice(0, 3);

export default function ProjectsPreview() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-14">
      <div>
        <p className="text-[12px] font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Featured
        </p>
        <h2 className="mt-1 text-[28px] font-bold tracking-tight text-slate-900 dark:text-white">
          Projects
        </h2>
      </div>

      <div className="mt-6 divide-y-0">
        {featuredProjects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-900 px-5 py-2.5 text-[13.5px] font-medium text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-neutral-700 hover:bg-slate-100 dark:hover:bg-neutral-800 transition-all shadow-sm"
        >
          Show all projects{" "}
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
