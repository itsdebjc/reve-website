import { useEffect } from "react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import TrustedLogos from "@/components/site/TrustedLogos";
import heroImg from "@/assets/hero-cherry-blossom.jpg";
import { CALENDLY_URL } from "@/lib/links";

type CaseStudy = {
  n: string;
  client: string;
  industry: string;
  stat: string;
  statLabel: string;
  challenge: string;
  build: string;
  outcome: string;
};

const cases: CaseStudy[] = [
  {
    n: "Case 01",
    client: "Advisory Firm",
    industry: "Professional Services",
    stat: "60%",
    statLabel: "Faster Proposals",
    challenge:
      "Senior partners were spending 8+ hours on each proposal. AI drafts sounded generic and still needed heavy editing.",
    build:
      "A proposal workflow tied to the firm's voice, offers, proof points and sales process.",
    outcome:
      "Proposal drafting time dropped by 60% while improving quality on high-value pursuits.",
  },
  {
    n: "Case 02",
    client: "Boutique Agency",
    industry: "Creative & Strategy",
    stat: "3×",
    statLabel: "Publishing Cadence",
    challenge:
      "The team had strong ideas, but thought leadership sounded inconsistent across senior contributors.",
    build:
      "A brand intelligence system that captured voice, point of view, content rules and repeatable publishing workflows.",
    outcome:
      "The agency tripled its publishing cadence while keeping the voice clear and consistent.",
  },
  {
    n: "Case 03",
    client: "B2B SaaS",
    industry: "Technology",
    stat: "80%",
    statLabel: "Less Editing",
    challenge:
      "The marketing team was using AI, but spent more time fixing output than producing useful work.",
    build:
      "An end-to-end workflow for case studies, launch content and campaign drafts.",
    outcome:
      "Editing rounds dropped from five to one, and the team created stronger content faster.",
  },
];

const CaseStudiesPage = () => {
  useEffect(() => {
    document.title = "Case Studies — Reve AI";
    const desc =
      "Real systems, real outcomes. See how expert-led teams use Reve AI to make AI a dependable part of their marketing and business workflow.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative isolate pt-44 pb-32 md:pt-56 md:pb-40 border-b border-hairline overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background" />

        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="label-eyebrow mb-6">— Case Studies</p>
          <h1 className="display-serif text-5xl md:text-7xl mb-8 leading-[1.05]">
            Real systems.{" "}
            <span className="display-italic">Real outcomes.</span>
          </h1>
          <p className="text-foreground/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A look at how expert-led teams use Reve AI to make AI a dependable
            part of their marketing and business workflow.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-24 md:py-32 border-b border-hairline">
        <div className="mx-auto max-w-5xl px-6">
          {cases.map((c, i) => (
            <div key={c.n}>
              <article
                className={`grid md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-20 ${
                  i !== 0 ? "border-t border-hairline" : ""
                }`}
              >
                {/* Left: meta + stat */}
                <div className="md:col-span-5">
                  <p className="label-mono text-foreground/55 mb-4">{c.n}</p>
                  <h2 className="display-serif text-3xl md:text-4xl mb-2">
                    {c.client}
                  </h2>
                  <p className="label-mono text-foreground/55 mb-12">
                    {c.industry}
                  </p>

                  <p className="display-serif text-5xl md:text-6xl text-foreground leading-none mb-3">
                    {c.stat}
                  </p>
                  <p className="label-mono text-foreground/55">{c.statLabel}</p>
                </div>

                {/* Right: challenge + build + outcome */}
                <div className="md:col-span-7 md:pt-2 space-y-8">
                  <div>
                    <p className="label-mono text-foreground/55 mb-3">Challenge</p>
                    <p className="text-foreground/85 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="label-mono text-foreground/55 mb-3">Build</p>
                    <p className="text-foreground/85 leading-relaxed">{c.build}</p>
                  </div>
                  <div>
                    <p className="label-mono text-foreground/55 mb-3">Outcome</p>
                    <p className="text-foreground/85 leading-relaxed">{c.outcome}</p>
                  </div>
                </div>
              </article>
              {i === 2 && (
                <div className="border-t border-hairline py-16 md:py-20">
                  <TrustedLogos />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative isolate py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, hsl(350 70% 90%) 0%, hsl(350 65% 86%) 60%, hsl(350 55% 80%) 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center text-[hsl(0_0%_0%)]">
          <h2 className="display-serif text-3xl md:text-5xl mb-5 text-[hsl(0_0%_0%)]">
            Want to see what this could look like{" "}
            <span className="display-italic !text-[hsl(0_0%_0%)]">in your business?</span>
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed text-[hsl(0_0%_0%)] mb-8">
            Tell us what feels slow, scattered or hard to keep consistent. We will help
            you identify the system that belongs underneath it.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[hsl(0_0%_0%)] text-[hsl(30_25%_96%)] px-10 py-3.5 font-mono text-[13px] md:text-[12px] tracking-[0.22em] uppercase hover:bg-[hsl(0_0%_15%)] transition-colors"
          >
            Book a Strategy Call →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudiesPage;
