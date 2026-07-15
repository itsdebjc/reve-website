import { Linkedin } from "lucide-react";
import KlaviyoSignup from "./KlaviyoSignup";

const TikTokIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.85a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#FDFAF4] pt-16 pb-8 border-t border-[rgba(38,50,56,0.08)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-12">
          <div>
            <div className="font-['Anton'] text-2xl text-[#263238] mb-2">RÊVE</div>
            <div className="text-xs font-bold tracking-widest text-[#263238] opacity-55 mb-4">
              AI MARKETING STUDIO FOR ECOMMERCE BRANDS
            </div>
            <div className="text-sm opacity-65 mb-2">By Debbie. Marketing expertise, powered by AI.</div>
            <div className="text-sm opacity-65">Vancouver, beautiful British Columbia, Canada.</div>
          </div>

          <div className="hidden md:flex gap-8 font-bold text-sm">
            <a href="/services" className="text-[#263238] hover:text-[#E893AC] transition-colors">
              SERVICES
            </a>
            <a href="/case-studies" className="text-[#263238] hover:text-[#E893AC] transition-colors">
              CASE STUDIES
            </a>
            <a href="/learning" className="text-[#263238] hover:text-[#E893AC] transition-colors">
              BLOG
            </a>
            <a href="#about" className="text-[#263238] hover:text-[#E893AC] transition-colors">
              ABOUT
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/debbiejcollins/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#263238] hover:text-[#E893AC] transition-colors"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.tiktok.com/@itsdigitaldeb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-[#263238] hover:text-[#E893AC] transition-colors"
            >
              <TikTokIcon size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-[rgba(38,50,56,0.12)] pt-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <p className="text-xs font-bold tracking-widest text-[#E893AC] mb-4 uppercase">
                — Subscribe
              </p>
              <p className="text-sm opacity-65 mb-4 max-w-md">
                One short email a month with insights on AI in ecommerce. No hype. No tool-chasing. Just useful thinking on how to make AI work inside a real business.
              </p>
            </div>
            <KlaviyoSignup variant="footer" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-55">
            <p>© 2026 RÊVE · Site built with AI</p>
            <a href="/bff-coach" className="hover:text-[#E893AC] transition-colors flex items-center gap-1">
              <span>❤️</span> BFF Workshop
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
