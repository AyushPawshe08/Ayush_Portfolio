import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects-data";
import { TECH } from "@/lib/tech-icons";
import ProjectCover from "@/components/projects/ProjectCover";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  return { title: project ? `${project.title} — Ayush Pawshe` : "Project not found" };
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main>
      <div className="mx-auto max-w-4xl px-6 py-14">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[15px] font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-8 aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800">
          <ProjectCover cover={project.cover} />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 px-5 py-2.5 text-[15px] font-semibold hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-neutral-800 px-5 py-2.5 text-[15px] font-semibold hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors"
          >
            <Github size={16} />
            Source Code
          </a>
        </div>

        <div className="mt-10 border-t border-slate-200 dark:border-neutral-800 pt-10">
          <h2 className="text-xl font-bold tracking-tight">About</h2>
          <div className="mt-5 space-y-5">
            {project.about.map((paragraph, i) => (
              <p
                key={i}
                className="max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-400"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 dark:border-neutral-800 pt-10">
          <h2 className="text-xl font-bold tracking-tight">Tech Stack</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.stack.map((key) => {
              const { label, icon: Icon, color } = TECH[key];
              return (
                <span
                  key={key}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 px-3.5 py-1.5 text-[14px] font-medium"
                >
                  <Icon size={15} color={color} />
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
