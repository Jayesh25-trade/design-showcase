import { motion } from "framer-motion";

export const Testimonial = () => {
  return (
    <section className="py-24 md:py-32 bg-clay text-bone relative overflow-hidden grain">
      <div className="container relative">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-display text-3xl md:text-5xl leading-[1.15] text-balance">
            <span className="italic text-bone/80">“</span>Maren created a home that feels like
            it was always ours — the kind of place you don&rsquo;t want to leave, even
            for breakfast.<span className="italic text-bone/80">”</span>
          </p>
          <footer className="mt-10 text-sm uppercase tracking-[0.3em] text-bone/70">
            Eleni &amp; Marco · Private Residence, Athens
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};
