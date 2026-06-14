import { useEffect, useState } from "react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import debbieBeach from "@/assets/debbie-beach.jpeg";
import debbieHusbandBw from "@/assets/debbie-husband-bw.jpeg";
import debbieMallFlorals from "@/assets/debbie-mall-solo.jpeg";
import debbieCollins from "@/assets/debbie-collins.jpeg";

const marquee = [
  "Body. Food. Feedback.",
  "Not another diet",
  "Not more willpower",
  "Built for midlife",
  "See the pattern",
  "Stop guessing",
  "Start learning",
  "Your BFF, every day",
  "One question. One answer.",
  "Small shifts",
  "AI in your corner",
];

const motivational = [
  "Your body has changed — learn what it responds to",
  "You are not broken",
  "Small shifts beat big overhauls",
  "Better feedback. Better decisions.",
  "Stop guessing. Start knowing.",
  "Progress over perfection",
  "Trust the data. Trust yourself.",
  "Body. Food. Feedback.",
];

const learnItems = [
  "Why midlife bodies need better feedback",
  "How food timing and tiny habits can add up",
  "How to use body composition data without obsessing",
  "How to set up your BFF",
  "How to ask better questions",
  "How to review your week and tweak one thing",
];

const forYou = [
  "Your body changed and the old tricks are not working",
  'You are doing “healthy” things but not seeing clear progress',
  "You feel like your weight, body fat or energy no longer makes sense",
  "You want to use AI in a practical way",
  "You are tired of guessing what to eat or change",
  "You want a simple system, not another strict plan",
];

const notForYou = [
  "You want a meal plan handed to you",
  "You want someone to tell you exactly what to eat forever",
  "You are looking for a quick fix",
  "You do not want to track anything at all",
  "You want medical advice or a diagnosis",
];

const needList = [
  "Your BFF (we set it up together)",
  "Body data",
  "A few simple daily food notes",
  "A willingness to look at patterns without judging yourself",
];

const faqs = [
  {
    q: "Do I need to know how to use AI?",
    a: "No. This is beginner-friendly. I will show you how to get started and exactly what to do.",
  },
  {
    q: "Do I need a smart scale?",
    a: "A body composition or smart scale makes the feedback much more useful. You can still join and learn the system without one.",
  },
  {
    q: "Is this a diet?",
    a: "No. BFF is a feedback system — a simple way to understand your patterns. No meal plan, no calorie counting.",
  },
  {
    q: "Will you tell me exactly what to eat?",
    a: "No. I will show you how to use AI to support your own decisions based on your food notes, body data and real life.",
  },
  {
    q: "Is this medical advice?",
    a: "No. This workshop is educational and based on my personal system. It is not medical advice, diagnosis or treatment.",
  },
  {
    q: "Will I get the exact setup?",
    a: "Yes. I will walk you through the full BFF setup live so you can use it in your own life after the workshop.",
  },
];

const CtaButton = ({
  onClick,
  label = "Save my spot",
  size = "lg",
}: {
  onClick: () => void;
  label?: string;
  size?: "lg" | "xl";
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`group inline-flex items-center justify-center gap-2 md:gap-3 bg-primary text-primary-foreground font-bold uppercase tracking-[0.15em] md:tracking-[0.18em] rounded-full hover:scale-[1.02] hover:opacity-95 transition-all shadow-2xl whitespace-nowrap ${
      size === "xl"
        ? "px-8 py-5 text-xs md:px-12 md:py-7 md:text-base"
        : "px-7 py-4 text-xs md:px-10 md:py-6 md:text-sm"
    }`}
  >
    <span>{label}</span>
    <span className="font-serif italic normal-case tracking-normal text-lg md:text-xl opacity-90">
      · $69
    </span>
    <span className="transition-transform group-hover:translate-x-1">→</span>
  </button>
);

const StickyBar = ({ onClick }: { onClick: () => void }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 inset-x-0 z-40 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-[#0A0A0A] text-[#F7F4EE] border-b border-[#EBB7C2]/30 shadow-xl">
        <div className="container-wide flex flex-wrap items-center justify-between gap-3 py-3 px-6">
          <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
            <span className="font-mono uppercase tracking-[0.25em] text-[#EBB7C2]">
              AI Body Workshop
            </span>
            <span className="font-serif italic text-base md:text-xl">
              Meet your BFF
            </span>
            <span className="hidden md:inline font-mono uppercase tracking-[0.25em] opacity-70">
              Coming Soon
            </span>
          </div>
          <button
            type="button"
            onClick={onClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#EBB7C2] text-[#0A0A0A] font-bold uppercase tracking-[0.2em] rounded-full text-[11px] md:text-xs hover:scale-[1.03] transition-transform shadow-lg"
          >
            Save my spot · $69 →
          </button>
        </div>
      </div>
    </div>
  );
};

const Eyebrow = ({
  children,
  tone = "primary",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "primary" | "ink";
  className?: string;
}) => (
  <span
    className={`inline-block font-mono text-xs md:text-sm uppercase tracking-[0.25em] font-bold px-4 py-2 rounded-full ${
      tone === "ink"
        ? "bg-[hsl(348_56%_82%)] text-[hsl(0_0%_4%)]"
        : "bg-primary text-primary-foreground"
    } ${className}`}
  >
    {children}
  </span>
);

const WorkshopBanner = () => (
  <div className="inline-flex items-center gap-3 md:gap-4 px-5 md:px-6 py-2.5 md:py-3 bg-[hsl(0_0%_4%)] text-[hsl(40_27%_95%)] rounded-full shadow-xl">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(348_56%_82%)] opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(348_56%_82%)]" />
    </span>
    <span className="font-mono uppercase tracking-[0.3em] font-medium text-[10px] md:text-xs">
      AI Body Workshop
    </span>
    <span className="w-px h-3 md:h-4 bg-[hsl(40_27%_95%)]/30" />
    <span className="font-mono uppercase tracking-[0.3em] font-medium text-[10px] md:text-xs text-[hsl(348_56%_82%)]">
      Coming Soon
    </span>
  </div>
);

const BFFPhone = ({ className = "" }: { className?: string }) => (
  <div className={`relative mx-auto ${className}`}>
    <div className="relative w-[240px] sm:w-[260px] md:w-[300px] aspect-[9/19] rounded-[2.5rem] bg-[#0A0A0A] p-3 shadow-2xl border-4 border-[#0A0A0A]">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0A0A0A] rounded-b-2xl z-20" />
      <div className="relative w-full h-full rounded-[2rem] bg-gradient-to-b from-[#F5D5DC] via-[#F7F4EE] to-[#EBB7C2]/60 overflow-hidden flex flex-col">
        <div className="flex justify-between items-center px-5 pt-3 pb-1 text-[10px] font-mono text-[#0A0A0A]/70">
          <span>9:41</span>
          <span>● ● ●</span>
        </div>
        <div className="px-5 pt-3 pb-4 text-center">
          <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#0A0A0A]/60">
            The Method
          </div>
          <div className="mt-1 font-serif text-3xl text-[#0A0A0A] leading-none">
            BFF
          </div>
          <div className="mt-1 font-serif italic text-[11px] text-[#0A0A0A]/70">
            Body. Food. Feedback.
          </div>
        </div>

        <div className="px-4 space-y-2.5 flex-1">
          <div className="bg-white/85 backdrop-blur rounded-2xl px-3 py-2.5 shadow-sm">
            <div className="flex justify-between items-baseline">
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#0A0A0A]/60">Body</span>
              <span className="font-mono text-[9px] text-[#0A0A0A]/50">today</span>
            </div>
            <div className="mt-1 font-serif text-lg text-[#0A0A0A] leading-tight">
              25.7% <span className="font-sans text-[10px] text-[#0A0A0A]/60">body fat</span>
            </div>
            <div className="mt-1 h-1 bg-[#EBB7C2]/30 rounded-full overflow-hidden">
              <div className="h-full w-[68%] bg-[#0A0A0A]" />
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur rounded-2xl px-3 py-2.5 shadow-sm">
            <div className="flex justify-between items-baseline">
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#0A0A0A]/60">Food</span>
              <span className="font-mono text-[9px] text-[#0A0A0A]/50">2 notes</span>
            </div>
            <div className="mt-1 font-serif italic text-[11px] text-[#0A0A0A]/85 leading-snug">
              "matcha + eggs, walk after"
            </div>
          </div>

          <div className="bg-[#0A0A0A] text-[#F7F4EE] rounded-2xl px-3 py-2.5 shadow-sm">
            <div className="flex justify-between items-baseline">
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#EBB7C2]">Feedback</span>
              <span className="font-mono text-[9px] opacity-60">AI</span>
            </div>
            <div className="mt-1 font-serif italic text-[11px] leading-snug">
              "Late dinners are the pattern. Try one earlier this week."
            </div>
          </div>
        </div>

        <div className="px-4 pb-4 pt-2">
          <div className="flex items-center gap-2 bg-white/90 rounded-full px-3 py-2 shadow">
            <span className="text-[#EBB7C2] text-sm">✦</span>
            <span className="font-serif italic text-[11px] text-[#0A0A0A]/60 flex-1 truncate">
              Ask your BFF...
            </span>
            <span className="w-6 h-6 rounded-full bg-[#0A0A0A] text-[#EBB7C2] grid place-items-center text-[10px]">↑</span>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -top-4 left-0 sm:-left-4 rotate-[-8deg] bg-[#0A0A0A] text-[#F7F4EE] px-4 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.25em] shadow-xl">
      Body
    </div>
    <div className="absolute top-1/2 -right-2 sm:-right-6 md:-right-10 rotate-[6deg] bg-[#EBB7C2] text-[#0A0A0A] px-4 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.25em] shadow-xl">
      Food
    </div>
    <div className="absolute -bottom-3 left-0 sm:-left-3 md:-left-6 rotate-[-4deg] bg-white text-[#0A0A0A] border-2 border-[#0A0A0A] px-4 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.25em] shadow-xl">
      Feedback
    </div>
  </div>
);

const LoseWeightAI = () => {
  useEffect(() => {
    document.title = "AI Body Workshop — Reve AI";
    const desc = "A practical AI body workshop for midlife women. Learn to use AI to see your patterns, stop guessing and understand what your body responds to now.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  const handleCheckout = () => {
    window.open("https://buy.stripe.com/3cI5kC3V2cxJ3XC4XsaR201", "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Nav />
      <StickyBar onClick={handleCheckout} />

      {/* HERO, Blush */}
      <section className="theme-blush bg-background text-foreground relative pt-32 pb-20 md:pt-36 md:pb-28 px-6 overflow-hidden">
        <div className="absolute top-10 -left-32 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute top-28 right-8 md:right-24 font-serif italic text-primary/40 text-6xl md:text-8xl select-none rotate-12">✦</div>
        <div className="absolute bottom-20 left-8 md:left-24 font-serif italic text-primary/30 text-5xl md:text-7xl select-none -rotate-12">✿</div>

        <div className="container-wide relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 relative z-10">
              <div className="mb-10">
                <WorkshopBanner />
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1] [text-wrap:balance]">
                Your body has{" "}
                <em className="italic text-primary">changed.</em>
              </h1>
              <p className="mt-4 font-serif text-2xl md:text-3xl lg:text-4xl text-foreground/85 italic leading-snug [text-wrap:balance]">
                Now learn what it responds to.
              </p>

              <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed [text-wrap:balance]">
                A practical AI body workshop for midlife women who are done guessing,
                starting over and trying harder without clear feedback.
              </p>

              <ul className="mt-8 space-y-2 font-serif text-xl md:text-2xl text-foreground/90">
                <li className="flex gap-3"><span className="text-primary">✦</span> See the tiny patterns you've been missing</li>
                <li className="flex gap-3"><span className="text-primary">✦</span> Build your BFF: Body. Food. Feedback.</li>
                <li className="flex gap-3"><span className="text-primary">✦</span> Learn how to adjust without starting over</li>
              </ul>

              <div className="mt-10">
                <CtaButton onClick={handleCheckout} size="xl" />
              </div>
              <p className="mt-3 font-mono text-[11px] md:text-xs uppercase tracking-[0.3em] text-foreground/70">
                First invites open soon.
              </p>
            </div>

            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="absolute -top-6 right-2 md:right-6 z-20">
                  <div className="bg-[#0A0A0A] text-[#F7F4EE] px-6 py-3 rounded-full font-serif text-lg md:text-xl shadow-xl flex items-center gap-2">
                    Hi, I'm Deb <span className="text-[#EBB7C2] text-xl">✦</span>
                  </div>
                </div>
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-full border border-primary/40 shadow-2xl">
                  <img
                    src={debbieCollins}
                    alt="Debbie Collins, founder of the AI Body Workshop"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="flex absolute -bottom-6 -right-2 md:-right-5 rotate-[6deg] bg-white text-[#0A0A0A] border-2 border-[#0A0A0A] px-5 py-2.5 rounded-full font-mono text-[11px] md:text-xs uppercase tracking-[0.25em] shadow-xl items-center gap-2">
                  FOUNDER OF REVE.AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-[hsl(0_0%_4%)] text-[hsl(40_27%_95%)] py-6 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-[scroll_45s_linear_infinite]">
          {[...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="font-serif italic text-2xl md:text-3xl flex items-center gap-12">
              {m}
              <span className="text-[hsl(348_56%_82%)]">✦</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-33.333%); }
          }
        `}</style>
      </section>

      {/* RELATABLE PROBLEM, Ink */}
      <section className="bg-[hsl(0_0%_4%)] text-[hsl(40_27%_95%)] py-28 md:py-36 px-6 relative overflow-hidden">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 font-serif italic text-[10rem] md:text-[14rem] leading-none text-[hsl(348_56%_82%)] opacity-15 select-none pointer-events-none">
          "
        </div>
        <div className="container-narrow max-w-4xl relative">
          <Eyebrow tone="ink">The story</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            <span className="block">I tried everything.</span>
            <span className="block">Still <em className="italic text-[hsl(348_56%_82%)]">nothing moved!</em></span>
          </h2>

          <div className="mt-10 space-y-5 text-lg md:text-xl text-[hsl(40_27%_95%)]/85 leading-relaxed">
            <p>I was doing ALL the things people tell you to do.</p>
          </div>

          <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 font-serif text-base md:text-xl">
            {[
              { e: "🏋️‍♀️", t: "Gym 4x a week" },
              { e: "🚶‍♀️", t: "Daily walking" },
              { e: "💧", t: "Drinking water" },
              { e: "🌸", t: "Hormones" },
              { e: "🥩", t: "More protein" },
              { e: "🧘‍♀️", t: "Meditating" },
              { e: "🥗", t: "Eating well" },
              { e: "✨", t: "A fancier gym" },
            ].map((item) => (
              <li key={item.t} className="flex items-center gap-2 border border-[hsl(348_56%_82%)]/25 rounded-full px-3 py-2 text-center text-[hsl(40_27%_95%)]/90 justify-center">
                <span className="text-xl leading-none">{item.e}</span>
                <span className="text-sm md:text-base">{item.t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 space-y-3 font-serif italic text-2xl md:text-3xl">
            <p>It wasn't effort I was missing.</p>
            <p className="text-[hsl(348_56%_82%)]">It was the pattern.</p>
          </div>
        </div>
      </section>

      {/* BIG IDEA, Plum */}
      <section className="theme-plum bg-background text-foreground py-28 px-6 relative overflow-hidden">
        <div className="absolute top-10 right-10 font-serif italic text-primary text-7xl opacity-30 select-none">✦</div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="container-narrow max-w-5xl relative">
          <Eyebrow>The shift</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            Your body has changed.{" "}
            <em className="italic text-primary">So the old tricks don't work the same way anymore.</em>
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="relative rounded-3xl border border-foreground/20 bg-background/40 p-6 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">Before</div>
              <div className="mt-3 font-serif text-2xl md:text-3xl leading-snug">
                Effort in → results out
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40 border border-foreground/10 px-3 py-1.5 rounded-full">Effort</span>
                <span className="text-foreground/20">→</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40 border border-foreground/10 px-3 py-1.5 rounded-full">Results</span>
              </div>
              <p className="mt-5 text-sm md:text-base text-foreground/70 italic">
                You worked harder, the scale moved.
              </p>
            </div>
            <div className="relative rounded-3xl border-2 border-primary bg-primary/10 p-6 md:p-8 shadow-xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Now</div>
              <div className="mt-3 font-serif text-2xl md:text-3xl leading-snug text-primary">
                Pattern in → response out
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/70 border border-primary/20 px-3 py-1.5 rounded-full">Pattern</span>
                <span className="text-primary/30">→</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/70 border border-primary/20 px-3 py-1.5 rounded-full">Response</span>
              </div>
              <p className="mt-5 text-sm md:text-base text-foreground/80 italic">
                Your body responds to patterns — not punishment.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-5 text-lg md:text-xl text-foreground/85 leading-relaxed">
            <p>Midlife changes how your body responds.</p>
            <p>
              Food, timing, stress, sleep, hormones, movement and tiny daily habits can all start
              showing up differently.
            </p>
            <p className="font-serif italic text-2xl md:text-3xl text-foreground">
              So the goal is not to punish yourself.
            </p>
            <p className="font-serif italic text-2xl md:text-3xl text-primary">
              The goal is to learn what your body responds to now.
            </p>
          </div>
        </div>
      </section>

      {/* BFF — THE METHOD, Paper with phone */}
      <section className="theme-paper bg-background text-foreground py-28 md:py-36 px-6 relative overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>The method</Eyebrow>
              <h2 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
                This is not a diet.
                <span className="block">This is your{" "}
                  <em className="italic text-primary">BFF.</em>
                </span>
              </h2>
              <p className="mt-6 font-serif italic text-2xl md:text-3xl text-foreground/85">
                Body. Food. Feedback.
              </p>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                A simple way to connect what you're doing with what your body is showing you.
              </p>

              <ul className="mt-8 space-y-2 font-serif text-xl md:text-2xl text-foreground/90">
                <li>Your body gives you signals.</li>
                <li>Your food gives you clues.</li>
                <li>Your feedback loop helps you see the patterns.</li>
              </ul>

              <p className="mt-8 font-serif italic text-xl md:text-2xl text-foreground">
                That is what we'll build in the workshop.
              </p>

              <div className="mt-10">
                <CtaButton onClick={handleCheckout} label="Meet your BFF" size="xl" />
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center py-8 lg:py-0">
              <BFFPhone />
            </div>
          </div>
        </div>
      </section>

      {/* DAILY SUPPORT, Blush */}
      <section className="theme-blush bg-background text-foreground py-28 px-6 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="container-narrow max-w-5xl relative">
          <Eyebrow>Every day</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] [text-wrap:balance]">
            <span className="block">When you hire support, they usually check in once a month.</span>
            <span className="block italic text-primary">Your BFF is there every day.</span>
          </h2>

          <div className="mt-10 space-y-5 text-lg md:text-xl text-foreground/85 leading-relaxed">
            <p>Because the small choices happen daily.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <div className="rounded-3xl border-2 border-foreground/15 bg-background/50 p-6 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">Most support</div>
              <div className="mt-2 font-serif italic text-2xl md:text-3xl">Once a month</div>
              <div className="mt-5 grid grid-cols-7 gap-1.5">
                {Array.from({ length: 28 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-5 rounded-md ${i === 14 ? "bg-foreground" : "bg-foreground/10"}`}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-3xl border-2 border-primary bg-primary/15 p-6 md:p-8 shadow-xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Your BFF</div>
              <div className="mt-2 font-serif italic text-2xl md:text-3xl text-primary">Every day</div>
              <div className="mt-5 grid grid-cols-7 gap-1.5">
                {Array.from({ length: 28 }).map((_, i) => (
                  <span key={i} className="h-5 rounded-md bg-primary" />
                ))}
              </div>
            </div>
          </div>

          <ul className="mt-10 grid grid-cols-2 lg:grid-cols-5 gap-3 font-serif text-base md:text-lg text-foreground/90">
            {[
              { e: "🍪", t: "The snack" },
              { e: "🍵", t: "The matcha" },
              { e: "🌙", t: "The late dinner" },
              { e: "🍷", t: "The weekend" },
              { e: "🤫", t: "The “doesn’t count” bite" },
            ].map((it) => (
              <li key={it.t} className="flex items-center gap-2 rounded-2xl bg-background/60 border border-foreground/15 px-3 py-3">
                <span className="text-xl shrink-0">{it.e}</span>
                <span className="text-sm md:text-base">{it.t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-2 font-serif italic text-2xl md:text-3xl">
            <p>That is where the pattern lives.</p>
            <p className="text-primary">And that is where your BFF helps.</p>
          </div>
        </div>
      </section>

      {/* MOTIVATIONAL TICKER */}
      <section className="bg-[hsl(348_56%_82%)] text-[hsl(0_0%_4%)] py-5 overflow-hidden border-y border-[hsl(0_0%_4%)]/10">
        <div className="flex gap-10 whitespace-nowrap animate-[scroll_55s_linear_infinite]">
          {[...motivational, ...motivational, ...motivational].map((m, i) => (
            <span key={i} className="font-serif italic text-xl md:text-2xl flex items-center gap-10">
              {m}
              <span className="text-[hsl(0_0%_4%)]/60">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* PERSONAL PROOF, Paper */}
      <section className="theme-paper bg-background text-foreground py-28 px-6">
        <div className="container-narrow">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[3/4] overflow-hidden rounded-t-full border border-primary/30 shadow-xl">
                <img
                  src={debbieBeach}
                  alt="Debbie Collins"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <Eyebrow>What changed for me</Eyebrow>
              <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.05]">
                At 54, I finally started{" "}
                <em className="italic text-primary">seeing the pattern.</em>
              </h2>

              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                In three months, I:
              </p>

              <ul className="mt-6 space-y-3 font-serif text-xl md:text-2xl text-foreground/90">
                <li className="flex gap-3"><span className="text-primary">—</span> lost 7.8 lbs total</li>
                <li className="flex gap-3"><span className="text-primary">—</span> reduced 7 lbs of body fat</li>
                <li className="flex gap-3"><span className="text-primary">—</span> lowered body fat from 32.3% to 25.7%</li>
                <li className="flex gap-3"><span className="text-primary">—</span> supported muscle while losing fat</li>
              </ul>

              <div className="mt-8 space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>But the biggest change was not the number.</p>
                <p className="text-foreground font-serif italic text-2xl md:text-3xl">
                  The biggest change was that I finally understood what was working.
                </p>
              </div>

              <p className="mt-8 text-sm md:text-base text-muted-foreground italic leading-relaxed border-l-2 border-primary/40 pl-4">
                Your results will be different because your body, food, habits and data are different.
                That is the point. This workshop is not about copying my exact plan — it is about
                learning your pattern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN, Blush */}
      <section className="theme-blush bg-background text-foreground py-28 px-6">
        <div className="container-narrow max-w-4xl">
          <Eyebrow>What you'll learn</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            Inside the workshop, I'll show you{" "}
            <em className="italic text-primary">how it works.</em>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            You'll learn how I used AI, simple food notes and body composition data to finally
            understand what my body was responding to.
          </p>

          <ul className="mt-10 space-y-4">
            {learnItems.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-5 border-t-2 border-foreground/15 pt-5"
              >
                <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-primary pt-2 shrink-0 w-10">
                  0{i + 1}
                </span>
                <span className="font-serif text-xl md:text-2xl text-foreground/90 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-10 font-serif italic text-xl md:text-2xl text-foreground/85">
            This is practical, simple and beginner-friendly. You do not need to be an AI expert.
          </p>

          <div className="mt-10">
            <CtaButton onClick={handleCheckout} size="xl" />
          </div>
        </div>
      </section>

      {/* REASSURANCE, Plum */}
      <section className="theme-plum bg-background text-foreground py-28 px-6">
        <div className="container-narrow max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <Eyebrow>Reassurance</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">
                You do not need to be{" "}
                <em className="italic text-primary">perfect.</em>
              </h2>
              <div className="mt-8 space-y-5 text-lg md:text-xl text-foreground/85 leading-relaxed">
                <p>You just need enough information to see the pattern.</p>
                <p>This is not about tracking every almond forever.</p>
                <p>It is about learning what matters, what does not and what to adjust.</p>
                <p className="font-serif italic text-2xl md:text-3xl text-foreground">
                  Once you can see the pattern, you can make better choices without starting over every
                  Monday.
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative p-8 rounded-3xl border border-foreground/10 bg-foreground/5">
                <div className="grid grid-cols-6 gap-3">
                  {Array.from({ length: 36 }).map((_, i) => {
                    const pattern = [7, 8, 13, 14, 15, 19, 20, 21, 22, 26, 27, 28];
                    const active = pattern.includes(i);
                    return (
                      <span
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all ${active ? "bg-primary shadow-[0_0_8px_hsl(348_56%_82%/0.4)]" : "bg-foreground/10"}`}
                      />
                    );
                  })}
                </div>
                <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40">
                  Enough to see it
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR / NOT FOR, Paper */}
      <section className="theme-paper bg-background text-foreground py-28 px-6">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Eyebrow>This is for you if…</Eyebrow>
              <h2 className="mt-6 font-serif text-3xl md:text-4xl leading-[1.1]">
                You are a woman in midlife{" "}
                <em className="italic text-primary">and:</em>
              </h2>
              <ul className="mt-8 space-y-3">
                {forYou.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base md:text-lg text-foreground/85"
                  >
                    <span className="text-primary font-serif text-lg leading-none mt-1 shrink-0">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Eyebrow>This is not for you if…</Eyebrow>
              <h2 className="mt-6 font-serif text-3xl md:text-4xl leading-[1.1]">
                You're looking for something{" "}
                <em className="italic text-primary">this isn't.</em>
              </h2>
              <ul className="mt-8 space-y-3">
                {notForYou.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base md:text-lg text-foreground/85"
                  >
                    <span className="text-primary text-lg leading-none mt-1 shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm md:text-base text-muted-foreground italic leading-relaxed border-l-2 border-primary/40 pl-4">
                This is not medical advice. It is a practical AI feedback system to help you
                understand your own patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AI, Ink */}
      <section className="bg-[hsl(0_0%_4%)] text-[hsl(40_27%_95%)] py-28 px-6">
        <div className="container-narrow max-w-4xl">
          <Eyebrow tone="ink">Why AI</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            Why{" "}
            <em className="italic text-[hsl(348_56%_82%)]">AI?</em>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-[hsl(40_27%_95%)]/85 leading-relaxed">
            Because AI can help connect the dots.
          </p>
          <p className="mt-4 text-lg md:text-xl text-[hsl(40_27%_95%)]/85 leading-relaxed">
            Most of us have information everywhere.
          </p>
          <ul className="mt-6 space-y-2 font-serif text-xl md:text-2xl">
            <li>Food in one place.</li>
            <li>Weight in another.</li>
            <li>Body data somewhere else.</li>
            <li>Notes in our head.</li>
          </ul>
          <p className="mt-8 text-lg md:text-xl text-[hsl(40_27%_95%)]/85 leading-relaxed">
            AI helps bring it together so you can see what is actually happening.
          </p>
          <p className="mt-6 font-serif italic text-2xl md:text-3xl text-[hsl(348_56%_82%)]">
            Not perfectly. But clearly enough to make the next smart move.
          </p>
        </div>
      </section>

      {/* WHAT YOU NEED, Blush */}
      <section className="theme-blush bg-background text-foreground py-24 px-6">
        <div className="container-narrow max-w-4xl">
          <Eyebrow>What you'll need</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">
            A simple kit. <em className="italic text-primary">Nothing fancy.</em>
          </h2>
          <ul className="mt-10 grid sm:grid-cols-2 gap-4 font-serif text-xl md:text-2xl">
            {needList.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-3 border-t border-foreground/20 pt-4"
              >
                <span className="text-primary text-lg shrink-0">✦</span>
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-1 font-serif italic text-lg md:text-xl text-foreground/85">
            <p>You do not need to be perfect.</p>
            <p>You do not need to track forever.</p>
            <p>You just need enough information to learn.</p>
          </div>
        </div>
      </section>

      {/* Landscape image band */}
      <section className="relative h-[50vh] md:h-[80vh] w-full overflow-hidden bg-[hsl(0_0%_4%)]">
        <img
          src={debbieHusbandBw}
          alt="Debbie Collins"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative h-full flex items-end">
          <div className="container-narrow w-full pb-12 md:pb-16 px-6">
            <p className="font-serif italic text-2xl md:text-6xl text-white max-w-3xl drop-shadow-lg leading-[1.05]">
              Your body has changed.{" "}
              <em className="italic text-[#EBB7C2]">Now you have a better way to understand it.</em>
            </p>
            <div className="mt-8">
              <CtaButton onClick={handleCheckout} size="xl" />
            </div>
          </div>
        </div>
      </section>

      {/* MEET DEB, Blush */}
      <section className="theme-blush bg-background text-foreground py-28 md:py-36 px-6">
        <div className="container-narrow">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
            <div className="md:col-span-2 flex justify-center md:justify-start py-8 md:py-0">
              <BFFPhone />
            </div>

            <div className="md:col-span-3">
              <Eyebrow>Why I built this</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                I built this because I{" "}
                <em className="italic text-primary">needed it.</em>
              </h2>
              <div className="mt-8 space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  I have worked in wellness, supplements, gyms and natural health for years. I have
                  been health-conscious most of my adult life. And still, midlife changed the rules.
                </p>
                <p>
                  So I built BFF — a simple way to use AI, body data and food notes to finally see
                  the pattern.
                </p>
              </div>

              <ul className="mt-8 space-y-2 font-serif text-xl md:text-2xl">
                <li className="text-muted-foreground">Not as a doctor.</li>
                <li className="text-muted-foreground">Not as a guru.</li>
                <li className="text-foreground italic">
                  As a woman in midlife who finally found a better feedback loop.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ, Plum */}
      <section className="theme-plum bg-background text-foreground py-28 px-6">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl">
              Questions you might <em className="italic">have.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border border-border rounded-2xl p-6 hover:border-primary transition-colors bg-card h-fit"
              >
                <summary className="font-serif text-lg md:text-xl cursor-pointer flex justify-between items-start list-none gap-4">
                  <span>{f.q}</span>
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform shrink-0 leading-none">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP DETAILS, Paper */}
      <section className="theme-paper bg-background text-foreground py-28 px-6">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <Eyebrow>Workshop details</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.02]">
              Join the <em className="italic text-primary">live workshop.</em>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              I'll walk you through the simple AI setup I created to stop guessing and start
              understanding what my body responds to now. You'll leave knowing how BFF works, what
              data to bring and how to start using it in your own life.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { l: "Date", v: "Soon", sub: "Coming" },
              { l: "Format", v: "Live", sub: "online" },
              { l: "Price", v: "$69", sub: "One-time" },
              { l: "Spots", v: "Few", sub: "Limited" },
            ].map((d) => (
              <div
                key={d.l}
                className="p-5 md:p-8 rounded-2xl border-2 border-foreground/15 bg-background/60 backdrop-blur text-center"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                  {d.l}
                </div>
                <div className="mt-3 font-serif text-3xl md:text-6xl leading-none">
                  <em className="italic">{d.v}</em>
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {d.sub}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CtaButton onClick={handleCheckout} size="xl" />
          </div>
        </div>
      </section>

      {/* FINAL CTA, Landscape background */}
      <section className="relative text-white py-28 md:py-48 px-6 overflow-hidden">
        <img
          src={debbieMallFlorals}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

        <div className="container-narrow text-center relative z-10">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#EBB7C2] text-[#0A0A0A] rounded-full shadow-xl mb-8">
            <span className="font-mono uppercase tracking-[0.3em] font-bold text-xs md:text-sm">
              AI Body Workshop · Coming Soon
            </span>
          </div>
          <h2 className="mt-2 font-serif text-4xl md:text-7xl leading-[1.05] text-white drop-shadow-lg">
            Ready to meet your{" "}
            <em className="italic text-[#EBB7C2]">BFF?</em>
          </h2>
          <p className="mt-6 font-serif italic text-xl md:text-3xl text-[#EBB7C2]">
            Body. Food. Feedback.
          </p>
          <p className="mt-6 text-white/85 max-w-2xl mx-auto text-lg md:text-xl drop-shadow leading-relaxed">
            A simple AI setup to help you stop guessing and start learning what your body
            responds to now.
          </p>

          <div className="mt-12">
            <CtaButton onClick={handleCheckout} size="xl" />
          </div>
          <p className="mt-5 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/70">
            First invites open soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LoseWeightAI;
