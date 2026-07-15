import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const SparkleIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10">
    <path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" fill="#E893AC" />
  </svg>
);

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FDFAF4] border-b border-[rgba(38,50,56,0.08)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="font-['Anton'] text-2xl text-[#263238] leading-none">RÊVE</span>
            <SparkleIcon />
          </div>
          <div className="text-[9px] font-bold tracking-widest text-[#263238] opacity-60">
            AI MARKETING STUDIO FOR ECOMMERCE BRANDS
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="/services" className="text-sm font-bold text-[#263238] hover:text-[#E893AC] transition-colors">
            SERVICES
          </a>
          <a href="/case-studies" className="text-sm font-bold text-[#263238] hover:text-[#E893AC] transition-colors">
            CASE STUDIES
          </a>
          <a href="/learning" className="text-sm font-bold text-[#263238] hover:text-[#E893AC] transition-colors">
            BLOG
          </a>
          <a href="#about" className="text-sm font-bold text-[#263238] hover:text-[#E893AC] transition-colors">
            ABOUT
          </a>
        </div>

        <a
          href="/services"
          className="hidden md:inline-flex font-['Anton'] text-xs font-bold bg-[#4F8577] text-white px-7 py-3 rounded-[10px] hover:opacity-90 transition-opacity leading-none"
        >
          GET AN AUDIT
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#263238] hover:text-[#E893AC] transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFAF4] border-t border-[rgba(38,50,56,0.08)]">
          <div className="px-6 py-6 flex flex-col gap-6">
            <a
              href="/services"
              onClick={closeMobileMenu}
              className="text-sm font-bold text-[#263238] hover:text-[#E893AC] transition-colors"
            >
              SERVICES
            </a>
            <a
              href="/case-studies"
              onClick={closeMobileMenu}
              className="text-sm font-bold text-[#263238] hover:text-[#E893AC] transition-colors"
            >
              CASE STUDIES
            </a>
            <a
              href="/learning"
              onClick={closeMobileMenu}
              className="text-sm font-bold text-[#263238] hover:text-[#E893AC] transition-colors"
            >
              BLOG
            </a>
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="text-sm font-bold text-[#263238] hover:text-[#E893AC] transition-colors"
            >
              ABOUT
            </a>
            <a
              href="/services"
              onClick={closeMobileMenu}
              className="font-['Anton'] text-xs font-bold bg-[#4F8577] text-white px-7 py-3 rounded-[10px] text-center hover:opacity-90 transition-opacity"
            >
              GET AN AUDIT
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
