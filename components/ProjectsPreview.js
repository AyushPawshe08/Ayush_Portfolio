import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { projects as allProjects } from "@/lib/projects-data";

const projects = allProjects.slice(0, 3).map((p) => ({
  title: p.title,
  description: p.description,
  href: `/projects/${p.slug}`,
}));

export default function ProjectsPreview() {
  return (
    <section className="mx-auto max-w-4xl border-t border-slate-200 dark:border-neutral-800 px-6 py-14">
      <SectionHeading>Projects</SectionHeading>

      <div className="mt-8 space-y-9">
        {projects.map((project) => (
          <div key={project.title}>
            <h3 className="text-[17px] font-bold">{project.title}</h3>
            <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
              {project.description}
            </p>
            <Link
              href={project.href}
              className="mt-2 inline-flex items-center gap-1 text-[15px] text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Read more <span aria-hidden>→</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="rounded-md bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 px-4 py-2 text-[14px] font-semibold hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
        >
          Show all projects
        </Link>
      </div>
    </section>
  );
}
