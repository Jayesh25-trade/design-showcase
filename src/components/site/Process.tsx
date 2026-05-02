import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Listen", body: "We begin with a conversation about how you want to live, work or gather. No assumptions — only attention." },
  { n: "02", title: "Imagine", body: "Concept, palette, materials and floor plans take shape together, presented with mood, light and movement in mind." },
  { n: "03", title: "Refine", body: "Bespoke furnishings, art curation and finishes are sourced and prototyped. Every detail is reviewed in person." },
  { n: "04", title: "Reveal", body: "We oversee installation through styling day, delivering a space that feels considered down to the last linen." },
];

export const Process = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">How we work</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.08] text-balance">
            A slow, <span className="italic font-light text-clay">human</span> process.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="relative p-7 rounded-3xl bg-cream/60 border border-border/60 hover:bg-cream transition-colors duration-500"
            >
              <div className="font-display italic text-clay text-2xl">{s.n}</div>
              <h3 className="font-display text-2xl mt-3">{s.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
