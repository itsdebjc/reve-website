import { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Nav from "@/components/site/Nav";
import Testimonial from "@/components/site/Testimonial";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";
import heroImg from "@/assets/hero-cherry-blossom.jpg";

const calendly = "https://calendly.com/deb-xjsk/callwithdeb";

const overview = [
  {
    n: "01",
    title: "The AI Build",
    chip: "Custom build · Team training",
    italic: "A custom AI marketing system built around how your business thinks.",
    body: "We capture the knowledge behind your business, build the workflows your team needs and train them to use the system inside real work.",
    sub: "Best for: Founder-led service firms that want a working AI system their team can use every week.",
    href: "#build",
  },
  {
    n: "02",
    title: "AI Strategy Session",
    chip: "90-minute working session",
    italic: "A 90-minute working session to show you where AI fits, what to stop doing manually and what to build first.",
    body: "",
    sub: "Best for: Founders who want clarity before committing to a full build.",
    href: "#session",
  },
];

const whatWeBuild = [
  {
    n: "01",
    title: "Brand Intelligence Foundation",
    lead: "This is the base of the system.",
    body: "We gather the source material behind your brand, voice, offers, clients and marketing. Then we turn it into a structured brand intelligence hub your team can use. This gives AI the context it needs to create work that sounds like your business, not a generic version of your industry.",
  },
  {
    n: "02",
    title: "Custom Marketing Workflows",
    lead: "Once the foundation is built, we turn it into action.",
    body: "We build workflows for the marketing work your team repeats most. Each workflow pulls from your business context, so the output starts closer to useful. Examples include LinkedIn content, case studies, email drafts, campaign planning, proposal content, client-facing content and website copy.",
  },
  {
    n: "03",
    title: "Team Training",
    lead: "We train your team inside the system using real work.",
    body: "Your team learns where to find the right inputs, how to use the workflows, how to review the output and how to keep the work aligned with your standards. The goal is simple: your team can use the system without waiting for the founder to explain, rewrite or approve every detail.",
  },
  {
    n: "04",
    title: "Keep It Current",
    lead: "Your AI system gets better when the business keeps feeding it.",
    body: "We show your team how to add new inputs, refine messaging, improve voice guidance and turn new ideas into repeatable workflows. This keeps the system useful as your business changes.",
  },
];

const commonWorkflows = [
  "Thought leadership and LinkedIn content",
  "Case studies and client stories",
  "Email and newsletter drafts",
  "Campaign planning",
  "Proposal and sales content",
  "Website and service page copy",
];

const process = [
  { n: "01", title: "Gather", body: "We collect the source material that shapes your business, voice and marketing." },
  { n: "02", title: "Build", body: "We turn that material into a brand intelligence foundation." },
  { n: "03", title: "Create", body: "We build the workflows your team needs most." },
  { n: "04", title: "Train", body: "We train your team using real work." },
  { n: "05", title: "Maintain", body: "We show you how to keep the system current." },
];

const sessionLeaveWith = [
  "A clear view of where AI fits in your marketing",
  "A list of tasks your team can stop doing manually",
  "Your three highest-value workflow opportunities",
  "A recommended first build",
  "A clear next step",
];

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="grid grid-cols-[auto_1fr] gap-3 items-start text-foreground/90 leading-relaxed">
    <span className="mt-[10px] h-[6px] w-[6px] rounded-full bg-primary inline-block" />
    <span>{children}</span>
  </li>
);

const Services = () => {
  useEffect(() => {
    document.title = "Services — AI workflows for founder-led service firms | Reve";
    const desc =
      "We help founder-led service firms capture their voice, thinking and marketing process, then build the workflows their team needs to create better work with less founder review.";
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

      {/* HERO */}
      <section className="relative isolate pt-40 pb-24 md:pt-52 md:pb-32 border-b border-hairline overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="label-eyebrow mb-6">— Services</p>
          <h1 className="display-serif text-5xl md:text-7xl mb-8 leading-[1.05]">
            Turn your business knowledge into <span className="display-italic">AI workflows</span> you can use.
          </h1>
          <p className="text-foreground/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            We help founder-led service firms capture their voice, thinking and marketing process, then build the workflows their team needs to create better work with less founder review.
          </p>
          <a
            href={calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 label-mono hover:bg-pink-soft transition-colors"
          >
            Book a Call →
          </a>
        </div>
      </section>

      {/* TWO WAYS — OVERVIEW */}
      <section className="py-24 md:py-32 border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="label-eyebrow mb-6">— Two Ways</p>
            <h2 className="display-serif text-4xl md:text-5xl">
              Two ways to <span className="display-italic">work together.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {overview.map((s) => (
              <article
                key={s.n}
                className="relative bg-surface border border-hairline rounded-3xl p-8 md:p-12 flex flex-col overflow-hidden"
              >
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                <span className="absolute -bottom-6 right-4 display-serif text-[140px] md:text-[180px] leading-none text-primary/10 select-none pointer-events-none">
                  {s.n}
                </span>
                <div className="relative flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="label-mono text-primary">Service {s.n}</span>
                    <span className="label-mono text-foreground/60 border border-hairline rounded-full px-3 py-1">{s.chip}</span>
                  </div>
                  <h3 className="display-serif text-3xl md:text-4xl mb-5">{s.title}</h3>
                  <p className="font-serif italic text-primary text-xl md:text-2xl leading-snug mb-6">{s.italic}</p>
                  <div className="hairline w-12 mb-6" />
                  {s.body && <p className="text-foreground/80 leading-relaxed mb-4">{s.body}</p>}
                  {s.sub && <p className="text-foreground/65 leading-relaxed text-sm md:text-base mb-8">{s.sub}</p>}
                  <a
                    href={s.href}
                    aria-label={`See more about ${s.title}`}
                    className="mt-auto inline-flex items-center justify-center h-11 w-11 rounded-full border border-hairline text-foreground hover:text-primary hover:border-primary transition-colors animate-bounce"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE AI BUILD — DEEP DIVE */}
      <section id="build" className="py-32 md:py-44 border-b border-hairline bg-surface">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="label-eyebrow mb-6">— Service 01</p>
            <h2 className="display-serif text-4xl md:text-6xl mb-6">
              The <span className="display-italic">AI Build</span>
            </h2>
            <p className="font-serif italic text-primary text-xl md:text-2xl leading-snug mb-8">
              We build your AI marketing system, then train your team to run it.
            </p>
            <div className="hairline w-12 mb-8 mx-auto" />
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              The AI Build is for founder-led service firms that want more than prompts, tools or another AI workshop — we turn your business knowledge into a working marketing system your team can use for content, campaigns and client-facing work.
            </p>
          </div>

          {/* What we build */}
          <p className="label-eyebrow text-center mb-4">— What We Build</p>
          <h3 className="display-serif text-3xl md:text-4xl text-center mb-12">
            The four <span className="display-italic">pieces</span> of the system.
          </h3>
          <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline mb-24">
            {whatWeBuild.map((it) => (
              <div key={it.n} className="bg-background p-8 md:p-10 flex flex-col">
                <p className="label-mono text-primary mb-4">{it.n}</p>
                <h4 className="display-serif text-2xl md:text-3xl mb-4">{it.title}</h4>
                <div className="hairline w-10 mb-4" />
                <p className="font-serif italic text-foreground/85 text-lg mb-3 leading-snug">{it.lead}</p>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base">{it.body}</p>
              </div>
            ))}
          </div>

          {/* Who it is for */}
          <div className="bg-primary/5 border border-primary/30 rounded-2xl p-10 md:p-14 mb-24 max-w-3xl mx-auto text-center">
            <p className="label-eyebrow mb-6">— Who It Is For</p>
            <p className="font-serif italic text-primary text-2xl md:text-3xl leading-snug mb-6">
              The AI Build is for founder-led businesses with small teams.
            </p>
            <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
              It works best for service firms and DTC brands that create marketing, content, campaigns or customer-facing work regularly.
            </p>
          </div>

          {/* Common workflows */}
          <p className="label-eyebrow text-center mb-4">— Common Workflows</p>
          <h3 className="display-serif text-3xl md:text-4xl text-center mb-12">
            What teams <span className="display-italic">build</span> most.
          </h3>
          <div className="grid sm:grid-cols-2 gap-px bg-hairline border border-hairline mb-24">
            {commonWorkflows.map((w, i) => (
              <div key={w} className="bg-background p-6 md:p-8 flex items-baseline gap-5">
                <p className="label-mono text-primary shrink-0">{String(i + 1).padStart(2, "0")}</p>
                <p className="font-serif text-lg md:text-xl text-foreground/90 leading-snug">{w}</p>
              </div>
            ))}
          </div>

          {/* Process — horizontal timeline */}
          <p className="label-eyebrow text-center mb-4">— How It Works</p>
          <h3 className="display-serif text-3xl md:text-4xl text-center mb-16">
            How the <span className="display-italic">build</span> moves.
          </h3>
          <div className="relative mb-20">
            {/* connecting line */}
            <div aria-hidden className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px bg-hairline" />
            <div aria-hidden className="hidden md:block absolute top-5 left-[10%] h-px bg-primary/60" style={{ width: "80%" }} />
            <ol className="grid md:grid-cols-5 gap-12 md:gap-6 relative">
              {process.map((p, i) => (
                <li key={p.n} className="relative flex flex-col md:items-center md:text-center">
                  {/* dot */}
                  <span className="hidden md:flex h-10 w-10 rounded-full bg-background border-2 border-primary items-center justify-center mb-6 relative z-10">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <span className="label-mono text-primary mb-2 md:mb-3">Step {p.n}</span>
                  <h4 className="display-serif text-2xl md:text-3xl mb-3 md:mb-4">
                    {p.title}
                    {i < process.length - 1 && (
                      <span className="display-italic text-primary/60"> →</span>
                    )}
                  </h4>
                  <p className="text-foreground/70 leading-relaxed text-sm md:text-[15px] md:px-2">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="text-center">
            <a
              href={calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 label-mono hover:bg-pink-soft transition-colors"
            >
              Book a Call →
            </a>
          </div>
        </div>
      </section>

      {/* AI STRATEGY SESSION */}
      <section id="session" className="py-32 md:py-44 border-b border-hairline">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="label-eyebrow mb-6">— Service 02</p>
            <h2 className="display-serif text-4xl md:text-6xl mb-6">
              AI <span className="display-italic">Strategy Session</span>
            </h2>
            <p className="font-serif italic text-primary text-xl md:text-2xl leading-snug mb-8">
              A 90-minute working session to show you where AI fits and what to build first.
            </p>
            <div className="hairline w-12 mb-8 mx-auto" />
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg mb-4">
              This is for founders who want clarity before they commit to a larger project.
            </p>
            <p className="text-foreground/70 leading-relaxed text-base md:text-lg">
              We look at your business, your team and your current marketing process. Then we identify where AI can help, where it will waste time and which workflows are worth building first.
            </p>
          </div>

          <div className="border border-hairline bg-surface rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <p className="label-eyebrow mb-6">— You Leave With</p>
            <ul className="space-y-3">
              {sessionLeaveWith.map((b) => <Bullet key={b}>{b}</Bullet>)}
            </ul>
          </div>
        </div>
      </section>

      <Testimonial />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Services;
