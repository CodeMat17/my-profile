import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Testimonials />
      <Contact />
      <StructuredData />
    </main>
  );
}
