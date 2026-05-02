import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Selected work</p>
            <h2 className="font-display text-4xl md:text-5xl xl:text-6xl leading-[1.05] max-w-2xl text-balance">
              A decade of <span className="italic font-light text-clay">considered</span> interiors.
            </h2>
          </div>
          <Link to="/work" className="text-sm underline underline-offset-8 decoration-clay/60 hover:decoration-clay">
            View all projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group ${p.span} col-span-1`}
            >
              <Link to={`/work/${p.slug}`} className="block">
                <div className={`relative overflow-hidden rounded-3xl shadow-soft ${p.height} grain`}>
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-transparent opacity-90" />
                  <div className="absolute top-5 left-5">
                    <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-bone/85 text-foreground backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-bone flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
                      <p className="text-xs uppercase tracking-widest opacity-80 mt-1">{p.meta}</p>
                    </div>
                    <span className="shrink-0 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
