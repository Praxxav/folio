import About from "@/components/about";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
   <div className="w-full">
   <main className="flex w-full flex-col items-center">

      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />

    </main>
   </div>
  );
}
