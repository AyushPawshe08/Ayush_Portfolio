import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { IoPlayCircleSharp } from "react-icons/io5";
import { projects, getProjectBySlug } from "@/lib/projects-data";
import { TECH } from "@/lib/tech-icons";
import TechIcon from "@/components/TechIcon";
import ProjectCover from "@/components/projects/ProjectCover";
import ScrollTracker from "@/components/projects/ScrollTracker";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
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

function Section({ title, children }) {
  return (
    <section data-scroll-section data-section-title={title} className="mt-9">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <div className="mt-4 text-[16px] leading-relaxed text-slate-600 dark:text-slate-400">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-slate-400">
      {items.map((item, index) => <li key={index} className="pl-1">{item}</li>)}
    </ul>
  );
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const orderedProjects = [...projects].sort((a, b) => a.order.localeCompare(b.order));
  const projectIndex = orderedProjects.findIndex((item) => item.slug === project.slug);
  const previousProject = orderedProjects[(projectIndex - 1 + orderedProjects.length) % orderedProjects.length];
  const nextProject = orderedProjects[(projectIndex + 1) % orderedProjects.length];
  const stack = project.stack
    .map((key) => ({ key, tech: TECH[key] || TECH[key.toLowerCase()] || TECH[key.toUpperCase()] }))
    .filter(({ tech }) => tech);
  const liveUrl = project.liveUrl?.includes(".example.com") ? null : project.liveUrl;

  return (
    <main>
      <div className="mx-auto max-w-4xl px-6 py-14">
        <Link href="/projects" className="inline-flex items-center gap-2 text-[16px] font-semibold text-slate-700 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <div className="mt-6 aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800">
          <ProjectCover cover={project.cover} />
        </div>

        <header className="mt-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.detailHeading || project.title}</h1>
          <p className="mt-3 text-[16px] leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[17px]">
            {project.description}
          </p>
        </header>

        <hr className="my-6 border-slate-200 dark:border-neutral-800" />

        <div className="flex flex-wrap gap-3">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-[16px] font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50 dark:border-neutral-600 dark:bg-white dark:text-neutral-900 dark:hover:bg-slate-100">
              <IoPlayCircleSharp size={16} /> Demo
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-5 py-2.5 text-[16px] font-semibold text-slate-800 transition-colors hover:bg-slate-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-slate-100 dark:hover:bg-neutral-800">
              <Globe size={16} /> Live Demo
            </a>
          )}
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-[16px] font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:border-neutral-800 dark:text-slate-100 dark:hover:bg-neutral-900">
              <FaGithub size={16} /> Source Code
            </a>
          )}
        </div>

        {stack.length > 0 && (
          <section data-scroll-section data-section-title="Tech Stack" aria-labelledby="tech-stack-heading" className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-neutral-800 dark:bg-neutral-900/70">
            <h2 id="tech-stack-heading" className="text-lg font-bold tracking-tight">Tech Stack</h2>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {stack.map(({ key, tech }) => (
                <span key={key} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[13px] font-medium dark:border-neutral-700 dark:bg-neutral-950">
                  <TechIcon tech={tech} size={14} /> {tech.label}
                </span>
              ))}
            </div>
          </section>
        )}

        <Section title="About">
          {project.about?.length === 1 ? <p>{project.about[0]}</p> : <div className="space-y-3">{project.about?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>}
        </Section>

        {project.keyFeatures?.length > 0 && <Section title="Key Features"><BulletList items={project.keyFeatures} /></Section>}
        {project.whyIBuiltThis?.filter(Boolean).length > 0 && <Section title="Why I Built This"><p>{project.whyIBuiltThis.filter(Boolean).join(" ")}</p></Section>}

        {project.techArchImage && (
          <>
            <Section title="Tech Architecture Diagram">
              <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
                <Image src={project.techArchImage} alt={`${project.title} system architecture diagram`} width={1536} height={1024} sizes="(min-width: 1024px) 832px, 100vw" className="h-auto w-full object-contain" />
              </figure>
            </Section>
            {project.techArchExplanation?.length > 0 && <Section title="Architecture Explanation"><BulletList items={project.techArchExplanation} /></Section>}
          </>
        )}

        <nav aria-label="Project navigation" className="mt-10 grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2">
          <Link href={`/projects/${previousProject.slug}`} className="group flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:bg-slate-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <ChevronLeft size={20} className="shrink-0 text-slate-500 transition-transform group-hover:-translate-x-1 dark:text-slate-400" />
            <span className="min-w-0"><span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Previous project</span><span className="mt-1 block truncate font-semibold">{previousProject.title}</span></span>
          </Link>
          <Link href={`/projects/${nextProject.slug}`} className="group flex min-w-0 items-center justify-end gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-right transition-colors hover:bg-slate-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <span className="min-w-0"><span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Next project</span><span className="mt-1 block truncate font-semibold">{nextProject.title}</span></span>
            <ChevronRight size={20} className="shrink-0 text-slate-500 transition-transform group-hover:translate-x-1 dark:text-slate-400" />
          </Link>
        </nav>
      </div>
      <ScrollTracker />
    </main>
  );
}
