export const Footer = () => {
  return (
    <footer className="bg-ink text-bone/80">
      <div className="container py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-2xl text-bone">
            Maren <span className="italic font-light text-accent">&amp;</span> Studio
          </div>
          <p className="mt-4 text-sm max-w-xs">
            Quiet, organic interiors for residences and hospitality across Europe.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-bone/50 mb-4">Studio</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#work" className="hover:text-bone">Work</a></li>
            <li><a href="#about" className="hover:text-bone">About</a></li>
            <li><a href="#contact" className="hover:text-bone">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-bone/50 mb-4">Elsewhere</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-bone">Instagram</a></li>
            <li><a href="#" className="hover:text-bone">Pinterest</a></li>
            <li><a href="#" className="hover:text-bone">Journal</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bone/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-bone/50">
          <span>© {new Date().getFullYear()} Maren &amp; Studio. All rights reserved.</span>
          <span>Crafted with care.</span>
        </div>
      </div>
    </footer>
  );
};
