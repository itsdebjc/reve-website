import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const learningItems = [
  { label: "Articles", href: "/learning" },
  { label: "Case Studies", href: "/case-studies" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [learningOpen, setLearningOpen] = useState(false);
  const [mobileLearningOpen, setMobileLearningOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileLearningOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-hairline" : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <a href="/" className="font-serif italic text-foreground text-2xl md:text-3xl tracking-wide">
          Reve <span className="text-primary not-italic font-mono text-sm ml-1">/ AI</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <a href="/services" className="label-mono text-foreground/70 hover:text-primary transition-colors">
            Services
          </a>

          <div
            className="relative"
            onMouseEnter={() => setLearningOpen(true)}
            onMouseLeave={() => setLearningOpen(false)}
          >
            <button className="label-mono text-foreground/70 hover:text-primary transition-colors flex items-center gap-1">
              Learning <ChevronDown size={12} className={`transition-transform duration-200 ${learningOpen ? "rotate-180" : ""}`} />
            </button>
            {learningOpen && (
              <div className="absolute top-full left-0 pt-3">
                <div className="bg-background border border-hairline rounded-sm py-2 min-w-[160px]">
                  {learningItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-2.5 label-mono text-foreground/70 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          </a>
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
            <a
              href="/services"
              onClick={closeMobileMenu}
              className="label-mono text-foreground/70 hover:text-primary transition-colors"
            >
              Services
            </a>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => setMobileLearningOpen(!mobileLearningOpen)}
                className="label-mono text-foreground/70 hover:text-primary transition-colors flex items-center gap-1 text-left"
              >
                Learning <ChevronDown size={12} className={`transition-transform duration-200 ${mobileLearningOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileLearningOpen && (
                <div className="pl-4 flex flex-col gap-4 border-l border-hairline">
                  {learningItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="label-mono text-foreground/50 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              onClick={closeMobileMenu}
              className="label-mono text-foreground/70 hover:text-primary transition-colors"
            >
            </a>

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
