import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Where do you take on projects?", a: "We work across Europe and accept a small number of commissions further afield each year. Most of our projects are in Spain, Portugal, Italy, France and Morocco." },
  { q: "What is your typical project size?", a: "Residential commissions begin at around 90 m². For hospitality and retail we work from 70 m² up to full hotels. We are happiest with projects that allow real depth of detail." },
  { q: "How long does a project take?", a: "From first conversation to install day, residential projects typically take 9–14 months. Hospitality runs 12–24 months depending on scope and construction." },
  { q: "Do you work alongside an architect?", a: "Yes — happily. We collaborate with the client's architect or recommend trusted partners when needed. We are also comfortable leading interior architecture ourselves." },
  { q: "What does a project cost?", a: "Our design fee is structured as a percentage of the project value, with a minimum engagement. We'll share a detailed proposal after our first conversation." },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Common questions</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.08] text-balance">
            Things <span className="italic font-light text-clay">worth</span> asking.
          </h2>
        </div>
        <div className="lg:col-span-8 lg:col-start-6">
          <ul className="border-t border-foreground/15">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-foreground/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-baseline justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl md:text-2xl">{f.q}</span>
                    <span className={`font-display italic text-clay text-2xl transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-12 text-muted-foreground max-w-2xl text-pretty">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
