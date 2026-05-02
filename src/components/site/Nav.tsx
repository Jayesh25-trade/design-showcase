import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "Studio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bone/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-20">
        <a href="#top" className="font-display text-xl tracking-tight">
          Maren <span className="italic font-light text-clay">&amp;</span> Studio
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-foreground/80 hover:text-clay transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-clay after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-bone text-sm hover:bg-clay-deep transition-colors duration-300"
        >
          Begin a project
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`w-6 h-px bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`w-6 h-px bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-bone border-t border-border">
          <ul className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-lg font-display">
                  {l.label}
                </a>
              </li>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex w-fit px-5 py-2.5 rounded-full bg-ink text-bone text-sm">
              Begin a project
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};
