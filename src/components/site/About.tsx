import { motion } from "framer-motion";
import about from "@/assets/about.jpg";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-earth">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5"
        >
          <div className="relative arch-top overflow-hidden shadow-image grain max-w-md mx-auto lg:mx-0">
            <img src={about} alt="Portrait of Maren, founder" loading="lazy" className="w-full h-[560px] object-cover" />
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">The studio</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.08] text-balance">
            Designing with{" "}
            <span className="italic font-light text-clay">restraint,</span> intention, and a
            love for raw materials.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground max-w-xl text-pretty">
            <p>
              Founded by Maren Halvorsen in 2014, our practice is rooted in the belief that
              interiors should feel inevitable — quietly answering how a space wants to be
              lived in.
            </p>
            <p>
              We work in lime plaster, oak, travertine and linen. We choose few things, and
              we choose them well. Every commission begins with listening.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              ["Residential", "Homes & villas"],
              ["Hospitality", "Hotels & cafés"],
              ["Retail", "Boutique spaces"],
              ["Consulting", "Material & art"],
            ].map(([t, s]) => (
              <div key={t} className="border-t border-foreground/15 pt-4">
                <div className="font-display text-lg">{t}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
