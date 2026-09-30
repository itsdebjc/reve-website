import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import FinalCtaSection from "@/components/site/FinalCtaSection";
import { useEffect } from "react";
import debbiePhoto from "@/assets/debbie-collins.jpeg";
import { setCanonical } from "@/lib/seo";

const About = () => {
  useEffect(() => {
    document.title = "About Debbie Collins · Reve";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "About Debbie Collins, founder of Reve. 25 years of marketing expertise, three deep in AI."
    );
    setCanonical("/about");
  }, []);

  return (
    <main className="bg-[#20262A]">
      <Nav />
      <section className="relative overflow-hidden pt-36 pb-24 px-6 md:px-16">
        <div
          aria-hidden
          className="absolute rounded-full pointer-events-none"
          style={{
            left: "-160px",
            top: "-100px",
            width: "480px",
            height: "480px",
            background: "radial-gradient(circle, rgba(95,194,232,0.2), transparent 70%)",
            filter: "blur(6px)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] grid md:grid-cols-[1fr_1.05fr] gap-16 items-center">
          <div>
            <span
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
              className="inline-flex items-center gap-2 text-[#5FC2E8] text-xs uppercase mb-6"
            >
              About
            </span>
            <h1
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
              className="text-[#F2E4D8] text-[clamp(38px,5.6vw,64px)] leading-[1.05] mb-8"
            >
              Hi, I'm <em className="not-italic italic text-[#E893AC]">Debbie.</em>
            </h1>
            <div className="font-['Inter'] space-y-5 text-base md:text-lg leading-relaxed text-[#F2E4D8]/75 max-w-lg">
              <p>
                I've spent 25 years in marketing and the last three deep in
                AI, in a hands on AI mastermind the whole way. I also run my
                own businesses, so I know what it takes to make marketing
                work with a small team and a real budget.
              </p>
              <p>
                Most people bring one of those. I bring all three. Senior
                marketing, real AI depth and the scars of building a
                business.
              </p>
              <p>
                When AI showed up, I figured the trick was better prompts. I
                was wrong. The real win was setting AI up to know my
                business and do the actual work, in my voice, with my
                knowledge. It made everything faster, clearer and lighter.
              </p>
              <p>
                Now I do that for expert led teams. Better marketing, and a
                team that actually knows how to use AI. I'm not a
                developer. I'm a marketing expert who gets what your
                business needs, and I set up AI to do it with you.
              </p>
            </div>
          </div>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 h-full w-full bg-[#E893AC] rounded-2xl"
            />
            <img
              src={debbiePhoto}
              alt="Debbie Collins"
              className="relative w-full rounded-2xl aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F2E4D8] py-24 md:py-28 px-6 text-center">
        <p
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
          className="text-[#20262A] text-[clamp(28px,3.8vw,44px)] leading-[1.2] max-w-[720px] mx-auto"
        >
          Great marketing starts with expertise.
        </p>
      </section>

      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default About;
