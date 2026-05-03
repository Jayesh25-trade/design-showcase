import { useEffect } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Process } from "@/components/site/Process";
import { Testimonial } from "@/components/site/Testimonial";
import team from "@/assets/studio-team.jpg";
import flat from "@/assets/materials-flatlay.jpg";
import about from "@/assets/about.jpg";
import { Link } from "react-router-dom";

const stats = [
  ["12", "Years in practice"],
  ["62", "Completed projects"],
  ["9", "Countries"],
  ["4", "Studio members"],
];

const Studio = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = "Studio — Maren & Studio";
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Nav />

      <section className="pt-32 md:pt-40 pb-12">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">The studio</p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl text-balance"
          >
            We build rooms that <span className="italic font-light text-clay">slow you down</span>.
          </motion.h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground text-pretty">
            Maren &amp; Studio is a four-person practice based between Lisbon and Copenhagen, working on
            residences, hotels, restaurants and quiet retail spaces across Europe and beyond.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container grid md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-7 relative rounded-3xl overflow-hidden shadow-image grain h-[420px] md:h-[560px]">
            <img src={team} alt="The studio team" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="md:col-span-5 grid grid-rows-2 gap-6 md:gap-8">
            <div className="relative rounded-3xl overflow-hidden shadow-image grain">
              <img src={flat} alt="Material flatlay" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-image grain">
              <img src={about} alt="Maren, founder" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-earth">
        <div className="container grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Manifesto</p>
            <h2 className="font-display text-3xl md:text-4xl leading-[1.15] text-balance">
              Five things we believe.
            </h2>
          </div>
          <ul className="space-y-7">
            {[
              "A room is a story, not a moodboard.",
              "Few things, chosen well, outlast everything else.",
              "Light is the first material. Plaster is the second.",
              "We design for the 10th year, not the opening photo.",
              "Craftspeople are co-authors, not subcontractors.",
            ].map((line, i) => (
              <li key={line} className="flex gap-5 border-b border-foreground/10 pb-6">
                <span className="font-display italic text-clay text-xl pt-1">0{i + 1}</span>
                <span className="font-display text-xl md:text-2xl leading-snug">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(([n, l]) => (
            <div key={l} className="border-t border-foreground/15 pt-6">
              <div className="font-display text-5xl md:text-6xl text-clay">{n}</div>
              <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <Process />
      <Testimonial />

      <section className="py-20 md:py-24 text-center">
        <div className="container max-w-2xl">
          <h3 className="font-display text-3xl md:text-4xl leading-tight text-balance">
            Curious about working together? <span className="italic font-light text-clay">Tell us about your space.</span>
          </h3>
          <Link
            to="/#contact"
            className="mt-8 inline-flex px-7 py-3.5 rounded-full bg-ink text-bone text-sm hover:bg-clay-deep transition-colors duration-300"
          >
            Begin a project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Studio;
