import { motion } from "framer-motion";

const entries = [
  { date: "March 2026", title: "On lime plaster, and why we keep coming back to it", excerpt: "Notes from a recent visit to a lime kiln in Andalusia, and why this 4,000-year-old material still outperforms modern paints." },
  { date: "January 2026", title: "Sourcing diary — Marrakech, day three", excerpt: "Three days in the souk with a notebook, two empty suitcases, and a brief for a hotel in Mallorca." },
  { date: "November 2025", title: "How we light a small kitchen", excerpt: "A quiet rule of thumb, four fixtures, and one mistake we made (and won't make again)." },
];

export const Journal = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border/60">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Journal</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.08] max-w-xl text-balance">
              Field notes from the <span className="italic font-light text-clay">studio</span>.
            </h2>
          </div>
          <a href="#" className="text-sm underline underline-offset-8 decoration-clay/60 hover:decoration-clay">
            Read the journal →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {entries.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group"
            >
              <a href="#" className="block">
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{e.date}</div>
                <h3 className="mt-3 font-display text-2xl md:text-[1.65rem] leading-snug group-hover:text-clay transition-colors duration-500">
                  {e.title}
                </h3>
                <p className="mt-4 text-muted-foreground text-pretty">{e.excerpt}</p>
                <span className="mt-5 inline-block text-xs uppercase tracking-widest text-clay">Read →</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
