import Nav from "@/components/site/Nav";
import ServicesHero from "@/components/site/ServicesHero";
import ServiceCards from "@/components/site/ServiceCards";
import AIImplementation from "@/components/site/AIImplementation";
import StrategicProjects from "@/components/site/StrategicProjects";
import WhichOneNeeded from "@/components/site/WhichOneNeeded";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";
import { setCanonical } from "@/lib/seo";

const Services = () => {
  useEffect(() => {
    document.title = "Services · Reve";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "AI Marketing Roadmap, AI Implementation, and standalone Strategic Projects like Website Strategy and Build, AI Search Visibility Audit and Klaviyo Email Marketing.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
    setCanonical("/services");
  }, []);

  return (
    <main className="bg-[#20262A]">
      <Nav />
      <ServicesHero />
      <ServiceCards />
      <AIImplementation />
      <StrategicProjects />
      <WhichOneNeeded />
      <Footer />
    </main>
  );
};

export default Services;
