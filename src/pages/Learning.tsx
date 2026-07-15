import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import KlaviyoSignup from "@/components/site/KlaviyoSignup";
import { useEffect } from "react";

const Learning = () => {
  useEffect(() => {
    document.title = "Blog — RÊVE AI";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Blog and insights on AI for ecommerce. Frameworks, case studies, and thinking on AI in real business.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#FDFAF4] text-[#263238]">
      <Nav />
      <section className="pt-32 pb-24 px-6 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs md:text-sm font-bold tracking-widest text-[#E893AC] mb-6 uppercase">Blog</p>
          <h1 className="font-['Anton'] text-5xl md:text-6xl leading-tight mb-8">
            Insights on AI in ecommerce.
          </h1>
          <p className="text-base md:text-lg leading-relaxed opacity-65 max-w-2xl">
            Frameworks, case studies and thinking on how to make AI work inside a real business.
          </p>
        </div>
      </section>
      
      <section className="bg-[#F5EEDD] py-24 px-6 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs md:text-sm font-bold tracking-widest text-[#E893AC] mb-6 uppercase">— Subscribe</p>
          <h2 className="font-['Anton'] text-3xl md:text-4xl mb-6">
            Get insights on AI that actually works.
          </h2>
          <p className="text-base md:text-lg leading-relaxed opacity-65 mb-12">
            One short email a month with frameworks, case studies and notes from inside real AI builds. No hype. No tool-chasing. Just useful thinking on how to make AI work inside a real business.
          </p>
          <KlaviyoSignup variant="hero" />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Learning;
