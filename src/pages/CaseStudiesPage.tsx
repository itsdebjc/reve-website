import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import ProofSection from "@/components/site/ProofSection";
import { useEffect } from "react";

const CaseStudiesPage = () => {
  useEffect(() => {
    document.title = "Case Studies — RÊVE AI";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Case studies from RÊVE AI clients: DTC skincare, apparel, home goods brands.");
  }, []);

  return (
    <main className="bg-[#FDFAF4] text-[#263238]">
      <Nav />
      <section className="pt-32 pb-24 px-6 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs md:text-sm font-bold tracking-widest text-[#E893AC] mb-6 uppercase">Case Studies</p>
          <h1 className="font-['Anton'] text-5xl md:text-6xl leading-tight mb-8">
            Real brands, real results.
          </h1>
          <p className="text-base md:text-lg leading-relaxed opacity-65 max-w-2xl mb-16">
            AI that knows your brand works. Here's how it's worked for our clients.
          </p>
        </div>
      </section>
      <ProofSection />
      <section className="bg-[#FDFAF4] py-24 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-base opacity-65 mb-8">Case studies coming soon. For now, let's talk about your store.</p>
          <a href="/services" className="font-['Anton'] text-sm bg-[#4F8577] text-white px-8 py-4 rounded-lg inline-block hover:opacity-90">
            BOOK AN AUDIT
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CaseStudiesPage;
