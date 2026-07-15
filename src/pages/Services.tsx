import Nav from "@/components/site/Nav";
import ServicesHero from "@/components/site/ServicesHero";
import ServiceCards from "@/components/site/ServiceCards";
import WhatWeBuild from "@/components/site/WhatWeBuild";
import FounderCtaBand from "@/components/site/FounderCtaBand";
import ServicesFAQ from "@/components/site/ServicesFAQ";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    document.title = "Services — RÊVE AI";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "AI Marketing Services: Audit, Foundation & Build, and Growth Partnership for ecommerce brands.";
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
      <ServicesHero />
      <ServiceCards />
      <WhatWeBuild />
      <FounderCtaBand />
      <ServicesFAQ />
      <Footer />
    </main>
  );
};

export default Services;
