import { useEffect } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import flat from "@/assets/materials-flatlay.jpg";
import team from "@/assets/studio-team.jpg";
import p3d from "@/assets/p3-d.jpg";
import p10c from "@/assets/p10-c.jpg";
import p7a from "@/assets/p7-a.jpg";
import p8a from "@/assets/p8-a.jpg";

const entries = [
  { date: "March 2026", title: "On lime plaster, and why we keep coming back to it", excerpt: "Notes from a recent visit to a lime kiln in Andalusia, and why this 4,000-year-old material still outperforms modern paints.", image: flat, tag: "Material" },
  { date: "January 2026", title: "Sourcing diary — Marrakech, day three", excerpt: "Three days in the souk with a notebook, two empty suitcases, and a brief for a hotel in Mallorca.", image: p10c, tag: "Travel" },
  { date: "November 2025", title: "How we light a small kitchen", excerpt: "A quiet rule of thumb, four fixtures, and one mistake we made (and won't make again).", image: p3d, tag: "Lighting" },
  { date: "September 2025", title: "Designing for the tenth year", excerpt: "Why we ignore the trend cycle, and the three questions we ask before specifying anything.", image: team, tag: "Practice" },
  { date: "July 2025", title: "A pool deck without a pool deck", excerpt: "Casa Palma's outdoor room, and the architectural sleight-of-hand that made it disappear.", image: p7a, tag: "Project" },
  { date: "May 2025", title: "Five botanicals we used at Ubud Wellness", excerpt: "A planting list, with notes on light, humidity, and how each one ages.", image: p8a, tag: "Material" },
];

const JournalIndex = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = "Journal — Maren & Studio";
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Nav />

      <section className="pt-32 md:pt-40 pb-14">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Journal</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl text-balance"
          >
            Field notes from the <span className="italic font-light text-clay">studio</span>.
          </motion.h1>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {entries.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-soft grain h-[320px] md:h-[380px]">
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-bone/85 backdrop-blur-sm">
                  {e.tag}
                </span>
              </div>
              <div className="mt-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">{e.date}</div>
              <h2 className="mt-3 font-display text-2xl leading-snug group-hover:text-clay transition-colors duration-500">
                {e.title}
              </h2>
              <p className="mt-3 text-muted-foreground text-pretty">{e.excerpt}</p>
              <span className="mt-5 inline-block text-xs uppercase tracking-widest text-clay">Read →</span>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default JournalIndex;
