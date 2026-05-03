import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projects, categories, type Project } from "@/data/projects";

export const Projects = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [hovered, setHovered] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
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

        {/* Filter chips */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`relative px-5 py-2.5 rounded-full text-xs uppercase tracking-widest transition-colors duration-300 border ${
                filter === c
                  ? "bg-ink text-bone border-ink"
                  : "bg-transparent text-foreground/70 border-foreground/15 hover:text-clay hover:border-clay/40"
              }`}
            >
              {c}
              <span className="ml-2 opacity-60 text-[10px]">
                {c === "All" ? projects.length : projects.filter((p) => p.category === c).length}
              </span>
            </button>
          ))}
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHovered(p)}
                onMouseLeave={() => setHovered(null)}
                className={`group ${p.span} col-span-1`}
              >
                <Link to={`/work/${p.slug}`} className="block">
                  <div className={`relative overflow-hidden rounded-3xl shadow-soft ${p.height} grain`}>
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-[1400ms] ease-out group-hover:scale-[1.06] group-hover:brightness-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/0 to-transparent" />
                    <div className="absolute top-5 left-5 flex gap-2">
                      <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-bone/85 text-foreground backdrop-blur-sm">
                        {p.category}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-ink/40 text-bone backdrop-blur-sm">
                        {p.year}
                      </span>
                    </div>

                    {/* Image preview strip on hover */}
                    <div className="absolute bottom-24 left-6 right-6 hidden md:flex gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {p.gallery.slice(0, 3).map((g, idx) => (
                        <div key={idx} className="w-16 h-16 rounded-lg overflow-hidden ring-1 ring-bone/30 shadow-elegant">
                          <img src={g.src} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                      <div className="w-16 h-16 rounded-lg bg-bone/15 backdrop-blur-md text-bone flex items-center justify-center text-[10px] uppercase tracking-widest">
                        +{p.gallery.length - 3}
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-bone flex items-end justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
                        <p className="text-xs uppercase tracking-widest opacity-80 mt-1">
                          {p.location} · {p.area}
                        </p>
                      </div>
                      <span className="shrink-0 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-500">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Live caption — desktop only */}
        <div className="hidden md:block mt-10 h-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <AnimatePresence mode="wait">
            <motion.div
              key={hovered?.slug ?? "idle"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {hovered ? `${hovered.title} — ${hovered.intro}` : `Hover a project to preview · ${filtered.length} shown`}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
