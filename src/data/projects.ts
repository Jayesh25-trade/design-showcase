import p1 from "@/assets/project-1.jpg";
import p1a from "@/assets/p1-a.jpg";
import p1b from "@/assets/p1-b.jpg";
import p1c from "@/assets/p1-c.jpg";
import p2 from "@/assets/project-2.jpg";
import p2a from "@/assets/p2-a.jpg";
import p2b from "@/assets/p2-b.jpg";
import p2c from "@/assets/p2-c.jpg";
import p3 from "@/assets/project-3.jpg";
import p3a from "@/assets/p3-a.jpg";
import p3b from "@/assets/p3-b.jpg";
import p3c from "@/assets/p3-c.jpg";
import p4 from "@/assets/project-4.jpg";
import p4a from "@/assets/p4-a.jpg";
import p4b from "@/assets/p4-b.jpg";
import p4c from "@/assets/p4-c.jpg";
import p5 from "@/assets/project-5.jpg";
import p5a from "@/assets/p5-a.jpg";
import p5b from "@/assets/p5-b.jpg";
import p5c from "@/assets/p5-c.jpg";
import p6 from "@/assets/project-6.jpg";
import p6a from "@/assets/p6-a.jpg";
import p6b from "@/assets/p6-b.jpg";
import p6c from "@/assets/p6-c.jpg";

export type GalleryImage = { src: string; caption: string; tall?: boolean };

export type Project = {
  slug: string;
  title: string;
  meta: string;
  category: "Residential" | "Commercial";
  year: string;
  location: string;
  area: string;
  services: string[];
  cover: string;
  span: string;
  height: string;
  intro: string;
  brief: string;
  materials: string[];
  gallery: GalleryImage[];
};

export const projects: Project[] = [
  {
    slug: "villa-aria",
    title: "Villa Aria",
    meta: "Residential · Mallorca · 2024",
    category: "Residential",
    year: "2024",
    location: "Mallorca, Spain",
    area: "320 m²",
    services: ["Full interior design", "Custom furniture", "Art curation"],
    cover: p1,
    span: "md:col-span-7",
    height: "h-[460px] md:h-[580px]",
    intro: "A quiet retreat shaped by Mediterranean light and a love of soft, lived-in materials.",
    brief:
      "Villa Aria is a private residence reimagined for a young family relocating from Northern Europe. We stripped the home back to its bones — recovering original beams, replastering walls in warm lime, and laying smoked oak throughout — then layered it with bouclé, linen and a few singular ceramic finds.",
    materials: ["Lime plaster", "Smoked oak", "Travertine", "Bouclé wool", "Hand-loomed linen"],
    gallery: [
      { src: p1, caption: "Master bedroom — morning light", tall: true },
      { src: p1a, caption: "South-facing arched window" },
      { src: p1b, caption: "Bedside vignette — oak & ceramic", tall: true },
      { src: p1c, caption: "Passage to ensuite bath" },
    ],
  },
  {
    slug: "cafe-oro",
    title: "Café Oro",
    meta: "Hospitality · Lisbon · 2024",
    category: "Commercial",
    year: "2024",
    location: "Lisbon, Portugal",
    area: "140 m²",
    services: ["Concept", "Interior design", "Brand integration"],
    cover: p2,
    span: "md:col-span-5",
    height: "h-[460px] md:h-[580px]",
    intro: "An espresso bar that wraps guests in warm clay, brass and the smell of fresh bread.",
    brief:
      "Café Oro occupies a former hardware shop in Príncipe Real. The brief was simple — make it feel like Sunday morning. A curved plaster banquette anchors the room; brass pendants pool warm light over a single oak counter where everything happens.",
    materials: ["Curved lime plaster", "Tan saddle leather", "Aged brass", "Reclaimed oak", "Terracotta tile"],
    gallery: [
      { src: p2, caption: "Curved banquette and bar", tall: true },
      { src: p2a, caption: "Wide view from entrance" },
      { src: p2b, caption: "Table-top still life", tall: true },
      { src: p2c, caption: "Arched entrance threshold" },
    ],
  },
  {
    slug: "casa-travertino",
    title: "Casa Travertino",
    meta: "Residential · Como · 2023",
    category: "Residential",
    year: "2023",
    location: "Lake Como, Italy",
    area: "260 m²",
    services: ["Kitchen design", "Joinery", "Lighting"],
    cover: p3,
    span: "md:col-span-6",
    height: "h-[420px] md:h-[520px]",
    intro: "A monolithic travertine kitchen at the heart of a lakeside family home.",
    brief:
      "We designed Casa Travertino around its kitchen — a single block of Italian travertine that doubles as island, table and gathering point. Oak cabinetry disappears into the walls; brass plumbing is the only ornament.",
    materials: ["Travertine Romano", "Rift-cut oak", "Antique brass", "Lime-washed plaster"],
    gallery: [
      { src: p3, caption: "Travertine island — morning" },
      { src: p3a, caption: "Adjacent dining nook", tall: true },
      { src: p3b, caption: "Brass tap detail", tall: true },
      { src: p3c, caption: "Open plan towards living" },
    ],
  },
  {
    slug: "atelier-soma",
    title: "Atelier Soma",
    meta: "Retail · Copenhagen · 2023",
    category: "Commercial",
    year: "2023",
    location: "Copenhagen, Denmark",
    area: "95 m²",
    services: ["Retail concept", "Joinery", "Visual merchandising"],
    cover: p4,
    span: "md:col-span-6",
    height: "h-[420px] md:h-[520px]",
    intro: "A boutique built as a series of arched niches, each framing a single object.",
    brief:
      "For Atelier Soma we treated the storefront as a quiet gallery. Eight curved oak niches, lit from within, slow customers down and make the act of selecting something feel ceremonial.",
    materials: ["European oak", "Beige micro-cement", "Terrazzo", "Sage-painted plaster"],
    gallery: [
      { src: p4, caption: "Niche corridor", tall: true },
      { src: p4a, caption: "View through the arches" },
      { src: p4b, caption: "Backlit oak detail", tall: true },
      { src: p4c, caption: "Linen-curtained fitting room" },
    ],
  },
  {
    slug: "bagno-olivo",
    title: "Bagno Olivo",
    meta: "Residential · Puglia · 2023",
    category: "Residential",
    year: "2023",
    location: "Puglia, Italy",
    area: "28 m²",
    services: ["Bathroom design", "Stone sourcing", "Joinery"],
    cover: p5,
    span: "md:col-span-5",
    height: "h-[440px] md:h-[560px]",
    intro: "A bathing room that opens, through a single arched window, onto an ancient olive grove.",
    brief:
      "A standalone bathing pavilion attached to a Pugliese masseria. We carved a stone tub from one block of travertine and let the room stay otherwise empty — the olive tree outside does the rest of the work.",
    materials: ["Solid travertine", "Aged brass", "Tadelakt plaster", "Eucalyptus"],
    gallery: [
      { src: p5, caption: "Stone tub & olive view", tall: true },
      { src: p5a, caption: "Side elevation with arched window" },
      { src: p5b, caption: "Brass tap & basin detail", tall: true },
      { src: p5c, caption: "Walk-in shower with skylight" },
    ],
  },
  {
    slug: "hotel-terra",
    title: "Hotel Terra",
    meta: "Hospitality · Marrakech · 2022",
    category: "Commercial",
    year: "2022",
    location: "Marrakech, Morocco",
    area: "1,400 m²",
    services: ["Concept & FF&E", "Lighting", "Material library"],
    cover: p6,
    span: "md:col-span-7",
    height: "h-[440px] md:h-[560px]",
    intro: "A 22-room boutique hotel in the medina — sculptural, earthy, deeply still.",
    brief:
      "Hotel Terra sits inside a restored riad. We layered hand-applied tadelakt in seven warm tones, commissioned a sculptural rattan chandelier from a local maker, and designed every piece of joinery to fit the room it lives in.",
    materials: ["Tadelakt", "Hand-woven rattan", "Travertine", "Boucle", "Olive wood"],
    gallery: [
      { src: p6, caption: "Lobby — rattan chandelier" },
      { src: p6a, caption: "Lounge seating area" },
      { src: p6b, caption: "Reception — guest book", tall: true },
      { src: p6c, caption: "Vaulted hallway", tall: true },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
