const items = [
  "Architectural Digest",
  "Elle Decor",
  "Dezeen",
  "Wallpaper*",
  "Kinfolk",
  "Dwell",
  "House & Garden",
];

export const Marquee = () => {
  const loop = [...items, ...items];
  return (
    <section aria-label="Featured in" className="py-14 border-y border-border/60 bg-cream/40 overflow-hidden">
      <div className="container mb-6 flex items-center justify-center">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">As featured in</span>
      </div>
      <div className="relative">
        <div className="flex gap-16 whitespace-nowrap animate-marquee w-max">
          {loop.map((p, i) => (
            <span key={i} className="font-display italic text-2xl md:text-3xl text-foreground/70">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
