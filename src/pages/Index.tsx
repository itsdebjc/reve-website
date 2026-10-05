import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Ticker from "@/components/site/Ticker";
import WhatWeDo from "@/components/site/WhatWeDo";
import Problem from "@/components/site/Problem";
import WhatChangesSection from "@/components/site/WhatChangesSection";
import ProofSection from "@/components/site/ProofSection";
import EmailCapture from "@/components/site/EmailCapture";
import Testimonial from "@/components/site/Testimonial";
import FAQ from "@/components/site/FAQ";
import FinalCtaSection from "@/components/site/FinalCtaSection";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";
import { setCanonical } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    document.title = "Reve · AI Ready Marketing Studio";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Reve is an AI ready marketing studio. Marketing strategy and AI implementation for expert led businesses, consultants, agencies and B2B teams. Start with an AI Marketing Roadmap.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
    setCanonical("/");
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("main > section:not(:first-child) > div:not([aria-hidden]):not(.marquee)")
    ).filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    targets.forEach((el) => el.classList.add("reveal-pending"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="bg-[#20262A]">
      <Nav />
      <Hero />
      <Ticker />
      <WhatWeDo />
      <Problem />
      <WhatChangesSection />
      <ProofSection />
      <EmailCapture />
      <Testimonial />
      <FAQ />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default Index;
