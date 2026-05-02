import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { projects } from "@/data/projects";

const WorkIndex = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = "Selected Work — Maren & Studio";
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Nav />

      <section className="pt-32 md:pt-40 pb-12">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">All projects</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl text-balance">
            The full <span className="italic font-light text-clay">archive</span>.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {projects.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.08 }}
              >
                <Link to={`/work/${p.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-3xl shadow-soft grain h-[440px] md:h-[560px]">
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-bone/85 backdrop-blur-sm">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl">{p.title}</h2>
                      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{p.meta}</p>
                    </div>
                    <span className="shrink-0 text-xs uppercase tracking-widest text-clay group-hover:translate-x-1 transition-transform">
                      View →
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WorkIndex;
