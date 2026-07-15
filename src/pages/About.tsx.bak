import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";
import debbiePhoto from "@/assets/debbie.jpeg";

const About = () => {
  useEffect(() => {
    document.title = "About Debbie Collins — RÊVE AI";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "About Debbie Collins, founder of RÊVE AI. 25 years of marketing expertise.");
  }, []);

  return (
    <main className="bg-[#FDFAF4] text-[#263238]">
      <Nav />
      <section className="pt-32 pb-24 px-6 md:px-16">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_1.15fr] gap-16 items-center">
          <div>
            <p className="text-xs md:text-sm font-bold tracking-widest text-[#E893AC] mb-6 uppercase">About</p>
            <h1 className="font-['Anton'] text-5xl md:text-6xl leading-tight mb-8">
              Hi, I'm <span className="text-[#E893AC]">Debbie.</span>
            </h1>
            <div className="space-y-6 text-base md:text-lg leading-relaxed opacity-75 max-w-lg">
              <p>
                I've spent 25 years building marketing systems for ecommerce brands. Most of it as a fractional CMO and strategist, helping founders and teams move faster.
              </p>
              <p>
                Over the last few years, I've seen how AI can actually work inside real businesses — not as a toy, but as a system that knows your brand and does real work.
              </p>
              <p>
                That's what RÊVE is. I help ecommerce brands set AI up the right way, so it works for you instead of creating more busywork.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={debbiePhoto}
              alt="Debbie Collins"
              className="w-full rounded-3xl aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
