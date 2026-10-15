import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects-data";
import { TECH } from "@/lib/tech-icons";
import TechIcon from "@/components/TechIcon";
import ProjectCover from "@/components/projects/ProjectCover";
import { FaArrowUpRightFromSquare , FaGithub } from "react-icons/fa6";
import { IoPlayCircleSharp } from "react-icons/io5";


export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Ayush Pawshe`,
      description: project.description,
      images: project.cover?.image ? [{ url: project.cover.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ayush Pawshe`,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  if (!project) notFound();

  const orderedProjects = [...projects].sort((a, b) => a.order.localeCompare(b.order));
  const projectIndex = orderedProjects.findIndex((item) => item.slug === project.slug);
  const previousProject = orderedProjects[(projectIndex - 1 + orderedProjects.length) % orderedProjects.length];
  const nextProject = orderedProjects[(projectIndex + 1) % orderedProjects.length];

  return (
    <main>
      <div className="mx-auto max-w-4xl px-6 py-14">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[16px] font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          {project.one_word_desc && (
            <span className="rounded-full border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-900 px-3 py-1 text-[13px] font-medium text-slate-600 dark:text-slate-400">
              {project.one_word_desc}
            </span>
          )}
        </div>
        <p className="mt-3 text-[16px] sm:text-[17px] leading-relaxed text-slate-500 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-8 aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800">
          <ProjectCover cover={project.cover} />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-200 dark:bg-neutral-800 border border-slate-300 dark:border-neutral-700 px-5 py-2.5 text-[16px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-neutral-700 transition-colors"
            >
              <IoPlayCircleSharp size={16} />
              Demo
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 px-5 py-2.5 text-[16px] font-semibold hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <FaArrowUpRightFromSquare size={16} />
              Live Demo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-neutral-800 px-5 py-2.5 text-[16px] font-semibold hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors"
            >
              <FaGithub size={16} />
              Source Code
            </a>
          )}
        </div>

        <div className="mt-10 border-t border-slate-200 dark:border-neutral-800 pt-10">
  <h2 className="text-2xl font-bold tracking-tight">About</h2>
  
  {/* Changed space-y-5 to space-y-3 for standard bullet spacing, added list type and padding */}
  <ul className="mt-5 list-disc list-inside space-y-3">
    {project.about.map((point, i) => (
      <li
        key={i}
        className="text-[16px] sm:text-[17px] leading-relaxed text-slate-600 dark:text-slate-400"
      >
        {point}
      </li>
    ))}
  </ul>
</div>


        <div className="mt-10 border-t border-slate-200 dark:border-neutral-800 pt-10">
          <h2 className="text-2xl font-bold tracking-tight">Technologies & Tools</h2>
          <div className="mt-6 flex flex-wrap gap-2.5 ">
            {project.stack.map((key) => {
              const tech = TECH[key] || TECH[key.toLowerCase()] || TECH[key.toUpperCase()];
              if (!tech) return null;
              return (
                <span
                  key={key}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 px-4 py-2 text-[15px] font-medium"
                >
                  <TechIcon tech={tech} size={16} />
                  {tech.label}
                </span>
              );
            })}
          </div>
        </div>

        <nav aria-label="Project navigation" className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 dark:border-neutral-800">
          <Link
            href={`/projects/${previousProject.slug}`}
            className="group flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:bg-slate-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          >
            <ChevronLeft size={20} className="shrink-0 text-slate-500 transition-transform group-hover:-translate-x-1 dark:text-slate-400" />
            <span className="min-w-0">
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Previous project</span>
              <span className="mt-1 block truncate font-semibold">{previousProject.title}</span>
            </span>
          </Link>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex min-w-0 items-center justify-end gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-right transition-colors hover:bg-slate-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          >
            <span className="min-w-0">
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Next project</span>
              <span className="mt-1 block truncate font-semibold">{nextProject.title}</span>
            </span>
            <ChevronRight size={20} className="shrink-0 text-slate-500 transition-transform group-hover:translate-x-1 dark:text-slate-400" />
          </Link>
        </nav>
      </div>
    </main>
  );
}
