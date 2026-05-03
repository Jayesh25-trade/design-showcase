import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const services = [
  {
    title: "Full Interior Design",
    summary: "From plan to last cushion. Concept, joinery, lighting, art, FF&E.",
    deliverables: ["Concept book", "Plans & elevations", "Material library", "FF&E sourcing", "Site supervision"],
    starts: "From €40,000",
  },
  {
    title: "Hospitality Design",
    summary: "Hotels, restaurants, cafés and wellness — built to age and stay loved.",
    deliverables: ["Brand-led concept", "Operational layouts", "Custom furniture", "Tableware & FF&E", "Opening support"],
    starts: "From €80,000",
  },
  {
    title: "Workplace & Retail",
    summary: "Quiet, functional commercial interiors with material integrity.",
    deliverables: ["Workplace strategy", "Acoustic design", "Retail merchandising", "Signage & wayfinding"],
    starts: "From €30,000",
  },
  {
    title: "Material & Art Consulting",
    summary: "A focused engagement to refine palette, art and finishes for an existing brief.",
    deliverables: ["Material library", "Lighting review", "Art curation", "Two on-site visits"],
    starts: "From €6,500",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = "Services — Maren & Studio";
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Nav />

      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Services</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl text-balance"
          >
            Four ways to <span className="italic font-light text-clay">work with us</span>.
          </motion.h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Every engagement begins with a conversation, a site visit, and a written proposal —
            no two projects are scoped the same way.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className="group relative bg-cream/60 border border-foreground/10 rounded-3xl p-8 md:p-10 hover:border-clay/40 transition-colors duration-500"
            >
              <div className="flex items-baseline justify-between gap-4 mb-5">
                <span className="font-display italic text-clay text-sm">0{i + 1}</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{s.starts}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl leading-snug">{s.title}</h2>
              <p className="mt-4 text-muted-foreground text-pretty">{s.summary}</p>
              <ul className="mt-7 space-y-2 text-sm">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 border-b border-foreground/10 pb-2">
                    <span className="text-clay">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-clay group-hover:gap-3 transition-all"
              >
                Enquire <span>→</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 bg-clay text-bone grain relative overflow-hidden">
        <div className="container max-w-3xl text-center relative">
          <p className="text-xs uppercase tracking-[0.3em] text-bone/60 mb-5">Engagement</p>
          <h3 className="font-display text-4xl md:text-5xl leading-tight">
            We take on roughly <span className="italic font-light">six</span> commissions a year.
          </h3>
          <p className="mt-6 text-bone/80 text-lg">
            We&rsquo;re currently booking projects starting Q3 2026.
          </p>
          <Link
            to="/#contact"
            className="mt-10 inline-flex px-8 py-4 rounded-full bg-bone text-ink text-sm hover:bg-cream transition-colors duration-300"
          >
            Begin a conversation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
