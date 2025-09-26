import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import StructuredData from "@/components/StructuredData";
import PagePattern from "@/components/PagePattern";

export default function Home() {
  return (
    <main className='min-h-screen '>
      <PagePattern />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />     
      <Contact />
      <StructuredData />
    </main>
  );
}
