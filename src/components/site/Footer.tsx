import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1D2224] pt-16 pb-8 border-t border-white/10">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          <div>
            <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }} className="text-3xl text-[#F2E4D8] mb-3">
              Reve
            </div>
            <div style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }} className="text-lg text-[#F2E4D8]/80 mb-2">
              An AI ready marketing studio.
            </div>
            <div className="font-['Inter'] text-sm text-[#F2E4D8]/60">Located in beautiful British Columbia.</div>
          </div>

          <div className="hidden md:flex gap-8 font-['Inter'] font-bold text-sm">
            <a href="/services" className="text-[#F2E4D8] hover:text-[#E893AC] transition-colors">
              SERVICES
            </a>
            <a href="/case-studies" className="text-[#F2E4D8] hover:text-[#E893AC] transition-colors">
              CASE STUDIES
            </a>
            <a href="/learning" className="text-[#F2E4D8] hover:text-[#E893AC] transition-colors">
              LEARNING
            </a>
            <a href="/about" className="text-[#F2E4D8] hover:text-[#E893AC] transition-colors">
              ABOUT
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/debbiejcollins/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#F2E4D8] hover:text-[#E893AC] transition-colors"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-['Inter'] text-xs text-[#F2E4D8]/50">
          <p>© 2026 REVE</p>
          <a href="/bff-coach" className="hover:text-[#E893AC] transition-colors flex items-center gap-1">
            <span>❤️</span> Tuni Workshop
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
