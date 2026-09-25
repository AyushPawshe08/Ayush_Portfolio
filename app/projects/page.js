import { projects } from "@/lib/projects-data";
import SectionHeading from "@/components/SectionHeading";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata = {
  title: "Projects — Ayush Pawshe",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <SectionHeading>Projects</SectionHeading>
      <p className="mt-3 text-[15px] text-slate-500 dark:text-slate-400">
        A collection of things I&apos;ve built, shipped, and learned from.
      </p>

      <ProjectsGrid projects={projects} />
    </main>
  );
}
