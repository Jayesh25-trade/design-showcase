import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Projects } from "@/components/site/Projects";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Testimonial } from "@/components/site/Testimonial";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Maren & Studio — Organic Interior Design for Homes & Hospitality";
    const desc = "Award-winning interior design studio crafting warm, organic spaces for residences, hotels, cafés and boutiques across Europe.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Process />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
