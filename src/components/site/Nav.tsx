const links = [
  { label: "Services", href: "/services" },
  { label: "Learning", href: "/learning" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/#about" },
];

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-hairline" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <a href="/" className="font-serif italic text-foreground text-2xl md:text-3xl tracking-wide">
          Reve <span className="text-primary not-italic font-mono text-sm ml-1">/ AI</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label-mono text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="https://calendly.com/deb-xjsk/callwithdeb"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex label-mono text-foreground hover:text-primary transition-colors"
        >
          Book a Call →
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-hairline">
          <div className="mx-auto max-w-[1400px] px-6 py-6 flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMobileMenu}
                className="label-mono text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://calendly.com/deb-xjsk/callwithdeb"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="label-mono text-foreground hover:text-primary transition-colors"
            >
              Book a Call →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
