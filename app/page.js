import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsPreview />
      <About />
      <Stack />
      <Certifications />
    </main>
  );
}
