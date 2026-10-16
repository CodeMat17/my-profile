import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Hero />
      <Projects />
      <Services />
      <Testimonials />
      <About />
      <Skills />
      <Contact />
      <StructuredData />
    </main>
  );
}
