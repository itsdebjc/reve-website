import Nav from "@/components/site/Nav";
import HeroNewDesign from "@/components/site/HeroNewDesign";
import HonestSection from "@/components/site/HonestSection";
import WhatChangesSection from "@/components/site/WhatChangesSection";
import EcommerceStackSection from "@/components/site/EcommerceStackSection";
import ProofSection from "@/components/site/ProofSection";
import FinalCtaSection from "@/components/site/FinalCtaSection";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "RÊVE — AI Marketing Studio for Ecommerce Brands";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "AI that knows your brand. We help ecommerce brands use AI to sell more, in your voice, across your store, your email and your ads.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="bg-[#FDFAF4] text-[#263238]">
      <Nav />
      <HeroNewDesign />
      <HonestSection />
      <WhatChangesSection />
      <EcommerceStackSection />
      <ProofSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default Index;
