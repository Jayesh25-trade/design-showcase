import { motion } from "framer-motion";
import hero from "@/assets/hero.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="container grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
        <div className="lg:col-span-6 xl:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
          >
            Interior Design Studio · Est. 2014
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-display text-5xl md:text-6xl xl:text-7xl leading-[1.02] text-balance"
          >
            Spaces that{" "}
            <span className="italic font-light text-clay">breathe,</span>{" "}
            interiors that <span className="italic font-light">remember</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="mt-8 max-w-md text-lg text-muted-foreground text-pretty"
          >
            We design residential homes and hospitality spaces in a quiet, organic
            language — material, light, and the people who live within.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="px-7 py-3.5 rounded-full bg-ink text-bone text-sm hover:bg-clay-deep transition-colors duration-300"
            >
              View the portfolio
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full border border-foreground/20 text-sm hover:bg-foreground/5 transition-colors duration-300"
            >
              Start a conversation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              ["80+", "Projects"],
              ["12", "Countries"],
              ["10y", "Of practice"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl">{n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-6 xl:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative arch-top overflow-hidden shadow-image grain">
              <img
                src={hero}
                alt="Sunlit organic modern living room with terracotta walls, an olive tree, and bouclé sofa"
                className="w-full h-[520px] md:h-[640px] object-cover"
                width={1080}
                height={1920}
              />
            </div>

            {/* floating caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="absolute -bottom-8 -left-4 md:left-8 bg-bone/95 backdrop-blur-sm border border-border/60 rounded-2xl px-5 py-4 shadow-soft max-w-xs"
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Featured</div>
              <div className="font-display text-lg leading-tight mt-1">Casa Oliveto — Tuscany, IT</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
