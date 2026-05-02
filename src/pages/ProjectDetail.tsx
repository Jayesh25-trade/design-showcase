import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Lightbox, useLightbox } from "@/components/site/Lightbox";
import { getProject, getNextProject, projects } from "@/data/projects";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  const next = project ? getNextProject(slug) : null;
  const lb = useLightbox();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    if (!project) return;
    document.title = `${project.title} — Maren & Studio`;
    const desc = `${project.intro} ${project.location}, ${project.year}.`;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);
  }, [project]);

  if (!project) return <NotFound />;

  const images = project.gallery.map((g) => ({ src: g.src, caption: g.caption }));

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="container">
          <Link to="/#work" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-clay transition-colors">
            ← All work
          </Link>
          <div className="mt-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.3em] text-clay mb-5">{project.category}</p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="font-display text-5xl md:text-6xl xl:text-7xl leading-[1.02] text-balance"
              >
                {project.title}
              </motion.h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">{project.intro}</p>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-6">
              <Meta label="Location" value={project.location} />
              <Meta label="Year" value={project.year} />
              <Meta label="Area" value={project.area} />
              <Meta label="Type" value={project.category} />
            </div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="pb-12 md:pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative overflow-hidden rounded-3xl shadow-image grain cursor-zoom-in"
            onClick={() => lb.open(0)}
          >
            <img src={project.cover} alt={project.title} className="w-full h-[60vh] md:h-[80vh] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Brief + materials */}
      <section className="py-16 md:py-24 bg-gradient-earth">
        <div className="container grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 lg:col-start-1">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">The brief</p>
            <p className="font-display text-2xl md:text-3xl leading-[1.3] text-balance">
              {project.brief}
            </p>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Materials</p>
            <ul className="space-y-3">
              {project.materials.map((m) => (
                <li key={m} className="flex items-baseline gap-3 border-b border-foreground/10 pb-3">
                  <span className="font-display italic text-clay text-sm">—</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-10 mb-5">Services</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {project.services.map((s) => <li key={s}>· {s}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">Gallery</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {project.gallery.map((g, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.08 }}
                className={`group cursor-zoom-in ${i % 3 === 0 ? "md:col-span-2" : ""}`}
                onClick={() => lb.open(i)}
              >
                <div
                  className={`relative overflow-hidden rounded-3xl shadow-soft grain ${
                    i % 3 === 0 ? "h-[420px] md:h-[640px]" : g.tall ? "h-[520px] md:h-[680px]" : "h-[360px] md:h-[480px]"
                  }`}
                >
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} · {g.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      {next && next.slug !== project.slug && (
        <section className="py-20 md:py-28 bg-clay text-bone grain relative overflow-hidden">
          <div className="container relative">
            <p className="text-xs uppercase tracking-[0.3em] text-bone/60 mb-6">Next project</p>
            <Link to={`/work/${next.slug}`} className="group block">
              <h3 className="font-display text-5xl md:text-7xl leading-[1.02] group-hover:italic transition-all duration-500">
                {next.title} <span className="opacity-60">→</span>
              </h3>
              <p className="mt-4 text-bone/70 text-sm uppercase tracking-widest">{next.meta}</p>
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-24 text-center">
        <div className="container max-w-2xl">
          <h3 className="font-display text-3xl md:text-4xl leading-tight text-balance">
            Have a space in mind? <span className="italic font-light text-clay">Let&rsquo;s talk.</span>
          </h3>
          <Link
            to="/#contact"
            className="mt-8 inline-flex px-7 py-3.5 rounded-full bg-ink text-bone text-sm hover:bg-clay-deep transition-colors duration-300"
          >
            Begin a project
          </Link>
        </div>
      </section>

      <Footer />

      <Lightbox images={images} index={lb.index} onClose={lb.close} onNavigate={lb.navigate} />
    </main>
  );
};

const Meta = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{label}</div>
    <div className="font-display text-lg leading-tight">{value}</div>
  </div>
);

// Pre-warm linker for seo / sitemap-ish
export const allProjectSlugs = projects.map((p) => p.slug);

export default ProjectDetail;
