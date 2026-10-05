import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import BrandsBand from "@/components/site/BrandsBand";
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
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

  useScrollReveal();

  return (
    <main className="bg-[#20262A]">
      <Nav />
      <Hero />
      <Ticker />
      <WhatWeDo />
      <Problem />
      <WhatChangesSection />
      <ProofSection />
      <BrandsBand />
      <EmailCapture />
      <Testimonial />
      <FAQ />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default Index;
