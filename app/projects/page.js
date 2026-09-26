import { projects } from "@/lib/projects-data";
import SectionHeading from "@/components/SectionHeading";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata = {
  title: "Projects",
  description:
    "Explore engineering and AI/ML projects built by Ayush Pawshe, featuring RAG systems, multimodal AI, LLMs, and high-performance backend platforms.",
  openGraph: {
    title: "Projects | Ayush Pawshe",
    description:
      "Explore engineering and AI/ML projects built by Ayush Pawshe, featuring RAG systems, multimodal AI, LLMs, and high-performance backend platforms.",
    url: "https://ayushpawshe.dev/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <SectionHeading>Projects</SectionHeading>
      <p className="mt-3 text-[16px] sm:text-[17px] text-slate-500 dark:text-slate-400">
        A collection of things I&apos;ve built, shipped, and learned from.
      </p>

      <ProjectsGrid projects={projects} />
    </main>
  );
}
