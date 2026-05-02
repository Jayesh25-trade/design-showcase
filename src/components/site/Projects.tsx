import { motion } from "framer-motion";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

type Project = {
  title: string;
  meta: string;
  category: string;
  image: string;
  span: string;
  height: string;
};

const projects: Project[] = [
  { title: "Villa Aria", meta: "Residential · Mallorca · 2024", category: "Residential", image: p1, span: "md:col-span-7", height: "h-[460px] md:h-[580px]" },
  { title: "Café Oro", meta: "Hospitality · Lisbon · 2024", category: "Commercial", image: p2, span: "md:col-span-5", height: "h-[460px] md:h-[580px]" },
  { title: "Casa Travertino", meta: "Residential · Como · 2023", category: "Residential", image: p3, span: "md:col-span-6", height: "h-[420px] md:h-[520px]" },
  { title: "Atelier Soma", meta: "Retail · Copenhagen · 2023", category: "Commercial", image: p4, span: "md:col-span-6", height: "h-[420px] md:h-[520px]" },
  { title: "Bagno Olivo", meta: "Residential · Puglia · 2023", category: "Residential", image: p5, span: "md:col-span-5", height: "h-[440px] md:h-[560px]" },
  { title: "Hotel Terra", meta: "Hospitality · Marrakech · 2022", category: "Commercial", image: p6, span: "md:col-span-7", height: "h-[440px] md:h-[560px]" },
];

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
          <a href="#contact" className="text-sm underline underline-offset-8 decoration-clay/60 hover:decoration-clay">
            Inquire about a project →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group ${p.span} col-span-1`}
            >
              <div className={`relative overflow-hidden rounded-3xl shadow-soft ${p.height} grain`}>
                <img
                  src={p.image}
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
                <div className="absolute bottom-6 left-6 right-6 text-bone">
                  <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
                  <p className="text-xs uppercase tracking-widest opacity-80 mt-1">{p.meta}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
