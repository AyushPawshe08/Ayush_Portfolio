import Link from "next/link";
import { projects as allProjects } from "@/lib/projects-data";

const projects = [...allProjects]
  .sort((a, b) => Number(a.order) - Number(b.order))
  .slice(0, 3)
  .map((p) => ({
    title: p.title,
    description: p.description,
    href: `/projects/${p.slug}`,
  }));

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

      <div className="mt-8 space-y-9">
        {projects.map((project) => (
          <div key={project.title}>
            <h3 className="text-[17px] font-semibold">{project.title}</h3>
            <p className="mt-1.5  text-[14.5px] leading-relaxed text-slate-500 dark:text-slate-400">
              {project.description}
            </p>
            <Link
              href={project.href}
              className="mt-2 inline-flex items-center gap-1 text-[13.5px] font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Read more <span aria-hidden>→</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="rounded-md bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 px-4 py-2 text-[13.5px] font-medium hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
        >
          Show all projects
        </Link>
      </div>
    </section>
  );
}
