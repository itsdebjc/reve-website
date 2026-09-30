import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";
import { setCanonical } from "@/lib/seo";
import { CALENDLY_URL } from "@/lib/links";

const CASES = [
  {
    tag: "01 · Advisory Firm",
    stat: "60% faster proposals",
    problem:
      "Senior partners were spending 8 plus hours on every proposal. AI drafts sounded generic and still needed heavy editing.",
    built:
      "A proposal system tied to the firm's voice, offers, proof and sales process.",
    result:
      "Proposal time dropped 60%, and the quality went up on their biggest pursuits.",
    accent: "#5FC2E8",
  },
  {
    tag: "02 · Boutique Agency",
    stat: "3x more publishing",
    problem:
      "Strong ideas, but their thought leadership sounded different from every person who wrote it.",
    built:
      "A system that captured their voice, point of view and content rules, plus a repeatable publishing workflow.",
    result: "They tripled how often they publish, and it all sounds like them.",
    accent: "#E893AC",
  },
  {
    tag: "03 · B2B Software Team",
    stat: "80% less editing",
    problem:
      "The team was using AI but spent more time fixing the output than using it.",
    built:
      "An end to end workflow for case studies, launch content and campaign drafts.",
    result: "Editing rounds went from five to one, and the work got stronger.",
    accent: "#C96E8C",
  },
];

const CaseStudiesPage = () => {
  useEffect(() => {
    document.title = "Case Studies · Reve";
    setCanonical("/case-studies");
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Real systems, real results. How expert-led teams use AI to do real work, in their voice, on their terms."
    );
  }, []);

  return (
    <main className="bg-[#20262A]">
      <Nav />

      <section className="relative overflow-hidden pt-36 pb-20 px-6 md:px-16">
        <div
          aria-hidden
          className="absolute rounded-full pointer-events-none"
          style={{
            left: "-160px",
            top: "-100px",
            width: "480px",
            height: "480px",
            background: "radial-gradient(circle, rgba(232,147,172,0.22), transparent 70%)",
            filter: "blur(6px)",
          }}
        />
        <div className="relative mx-auto max-w-[820px]">
          <span
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
            className="inline-flex items-center gap-2 text-[#5FC2E8] text-xs uppercase mb-6"
          >
            Case Studies
          </span>
          <h1
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
            className="text-[#F2E4D8] text-[clamp(38px,5.6vw,64px)] leading-[1.05] mb-7"
          >
            Real systems. <em className="not-italic italic text-[#E893AC]">Real results.</em>
          </h1>
          <p className="font-['Inter'] text-[#F2E4D8]/75 text-lg leading-relaxed max-w-[560px]">
            A look at how expert led teams use AI to do real work, in their voice, on their terms.
          </p>
        </div>
      </section>

      <section className="bg-[#F2E4D8] px-6 md:px-16 py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] space-y-8">
          {CASES.map((c) => (
            <article
              key={c.tag}
              className="bg-white rounded-[28px] border border-[#20262A]/12 p-9 md:p-12"
            >
              <div className="flex items-start justify-between gap-6 flex-wrap mb-8">
                <p
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.1em", color: c.accent }}
                  className="text-xs font-bold uppercase"
                >
                  {c.tag}
                </p>
                <div
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, color: c.accent }}
                  className="text-2xl md:text-3xl leading-tight"
                >
                  {c.stat}
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-8 font-['Inter']">
                <div>
                  <p
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
                    className="text-[#20262A]/45 text-[11px] uppercase mb-3"
                  >
                    The Problem
                  </p>
                  <p className="text-[#20262A]/78 text-[15px] leading-relaxed">{c.problem}</p>
                </div>
                <div>
                  <p
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
                    className="text-[#20262A]/45 text-[11px] uppercase mb-3"
                  >
                    What We Built
                  </p>
                  <p className="text-[#20262A]/78 text-[15px] leading-relaxed">{c.built}</p>
                </div>
                <div>
                  <p
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
                    className="text-[#20262A]/45 text-[11px] uppercase mb-3"
                  >
                    The Result
                  </p>
                  <p className="text-[#20262A]/78 text-[15px] leading-relaxed">{c.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#20262A] py-20 md:py-28 px-6 text-center">
        <div className="mx-auto max-w-[720px]">
          <h2
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
            className="text-[#F2E4D8] text-[clamp(28px,3.6vw,42px)] leading-[1.15] mb-6"
          >
            Want to see what this could look like in your business?
          </h2>
          <p className="font-['Inter'] text-[#F2E4D8]/75 text-lg leading-relaxed mb-9 max-w-[560px] mx-auto">
            Tell me what feels slow, scattered or hard to keep consistent. I'll help you find the system that belongs underneath it.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
            className="inline-flex items-center rounded-full bg-[#E893AC] text-[#20262A] text-[13px] font-bold px-[30px] py-[15px] hover:opacity-90 transition-opacity"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudiesPage;
