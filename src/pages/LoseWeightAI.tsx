import { useEffect, useState } from "react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import debbiePhoto from "@/assets/debbie-collins.jpeg";
import debbieParisPark from "@/assets/debbie-paris-park.jpeg";
import debbieBeach from "@/assets/debbie-beach.jpeg";
import debbieHusbandBw from "@/assets/debbie-husband-bw.jpeg";
import debbieMallFlorals from "@/assets/debbie-mall-solo.jpeg";

const marquee = [
  "Not another diet",
  "Not a workout plan",
  "Not more willpower",
  "Real food, real life",
  "Built for midlife",
  "Better feedback",
  "Better decisions",
  "Less guessing",
  "Your coach in your pocket",
  "One question. One answer.",
  "Small shifts",
  "AI in your corner",
];

const motivational = [
  "You are not broken",
  "Your body changed — that's information, not failure",
  "Small shifts beat big overhauls",
  "Better feedback. Better decisions.",
  "Midlife is not the end of the story",
  "You deserve a coach who's always there",
  "Stop guessing. Start knowing.",
  "Progress over perfection",
  "Trust the data. Trust yourself.",
  "One question away from an answer",
];

const learnItems = [
  "Understand what your food notes may be telling you",
  "Use body data without spiralling or obsessing",
  "Spot patterns across meals, timing, movement and weekly changes",
  "Make better food decisions at home and at restaurants",
  "Know what to adjust when you feel stuck",
  "Create a simple rhythm you can keep using after the workshop",
];

const forYou = [
  "Your body feels different than it used to and you are not sure why",
  "You are tired of guessing what is working",
  "You want to use AI but need a simple, practical place to start",
  "You like the idea of data but do not want to obsess over it",
  "You want support for everyday food decisions, not another diet to follow",
];

const notForYou = [
  "You want a strict meal plan",
  "You want a workout program",
  "You are looking for medical advice",
  "You want a quick fix",
  "You have no interest in using any kind of body data",
];

const needList = [
  "ChatGPT or Claude",
  "A smart body composition scale (recommended, not required)",
  "A few days of simple food notes",
  "Curiosity over perfection",
];

const faqs = [
  {
    q: "Do I need to know how to use AI?",
    a: "No. This is beginner-friendly. I will show you how to get started and exactly what to do.",
  },
  {
    q: "Do I need a smart scale?",
    a: "I recommend one because it makes the feedback more useful. But you can still join and learn the full system without it.",
  },
  {
    q: "Is this a diet?",
    a: "No. It is a feedback system — a way to understand your patterns and make better choices. No meal plan, no calorie counting.",
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
    a: "Yes. I will walk you through the full setup live so you can use it in your own life after the workshop.",
  },
];

const CtaButton = ({
  onClick,
  label = "Claim my spot",
  size = "lg",
}: {
  onClick: () => void;
  label?: string;
  size?: "lg" | "xl";
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`group inline-flex items-center justify-center gap-2 md:gap-3 bg-primary text-primary-foreground font-bold uppercase tracking-[0.12em] md:tracking-[0.18em] rounded-full hover:scale-[1.02] hover:opacity-95 transition-all shadow-2xl whitespace-nowrap ${
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
              Live workshop
            </span>
            <span className="font-serif italic text-base md:text-xl">
              Build Your AI Body Coach
            </span>
            <span className="hidden md:inline font-mono uppercase tracking-[0.25em] opacity-70">
              June 15, 2026
            </span>
          </div>
          <button
            type="button"
            onClick={onClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#EBB7C2] text-[#0A0A0A] font-bold uppercase tracking-[0.2em] rounded-full text-[11px] md:text-xs hover:scale-[1.03] transition-transform shadow-lg"
          >
            Claim my spot · $69 →
          </button>
        </div>
      </div>
    </div>
  );
};

const Underline = () => (
  <svg
    className="absolute left-0 -bottom-3 md:-bottom-4 w-full h-4 md:h-6 pointer-events-none text-primary"
    viewBox="0 0 300 20"
    preserveAspectRatio="none"
    fill="none"
  >
    <path
      d="M4,12 C 70,4 160,18 296,8"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

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
  <div className="inline-flex items-center gap-4 md:gap-6 px-6 md:px-8 py-3 md:py-4 bg-[hsl(0_0%_4%)] text-[hsl(40_27%_95%)] rounded-full shadow-xl">
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(348_56%_82%)] opacity-75" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[hsl(348_56%_82%)]" />
    </span>
    <span className="font-mono uppercase tracking-[0.3em] font-bold text-sm md:text-lg">
      Live Workshop
    </span>
    <span className="hidden sm:inline w-px h-5 md:h-6 bg-[hsl(40_27%_95%)]/30" />
    <span className="font-mono uppercase tracking-[0.3em] font-bold text-sm md:text-lg text-[hsl(348_56%_82%)]">
      June 15, 2026
    </span>
  </div>
);

const LoseWeightAI = () => {
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

              <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] tracking-tight leading-[0.95]">
                <span className="block whitespace-nowrap">Your body</span>
                <span className="block whitespace-nowrap">changed the <em className="italic text-primary">rules.</em></span>
              </h1>
              <p className="mt-6 font-serif italic text-2xl md:text-3xl lg:text-4xl text-foreground/85 leading-tight max-w-2xl">
                I built an AI coach to help you read them.
              </p>

              <p className="mt-10 text-xl md:text-2xl text-foreground/85 max-w-xl font-light leading-relaxed">
                Grab your phone. Ask your coach. Know exactly what to do.
              </p>

              <ul className="mt-8 space-y-1 font-serif text-2xl md:text-3xl text-foreground/85">
                <li>Not another diet.</li>
                <li>Not a workout plan.</li>
                <li>Not more willpower.</li>
              </ul>

              <p className="mt-8 text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed [text-wrap:balance]">
                A practical setup workshop for midlife women who want better feedback and real answers — every meal, every restaurant, <span className="whitespace-nowrap">every day.</span>
              </p>

              <div className="mt-10">
                <CtaButton onClick={handleCheckout} size="xl" />
              </div>
              <p className="mt-3 font-mono text-[11px] md:text-xs uppercase tracking-[0.3em] text-foreground/70">
                Live June 15 · Beginner-friendly · Smart scale recommended
              </p>
            </div>

            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                <div className="absolute -top-8 -left-6 md:-left-10 z-20 rotate-[-6deg] bg-[hsl(0_0%_4%)] text-[hsl(40_27%_95%)] px-7 py-4 rounded-full font-serif italic text-2xl md:text-3xl shadow-2xl">
                  Hi, I'm Deb ✦
                </div>
                <div className="absolute -bottom-5 -right-4 md:-right-10 z-20 rotate-[4deg] bg-background border-2 border-foreground px-6 py-3 rounded-full font-mono text-xs md:text-sm uppercase tracking-[0.18em] font-bold shadow-xl text-center max-w-[18rem]">
                  Founder of Reve.ai
                </div>

                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[50%] rounded-b-3xl border-2 border-foreground/20 shadow-2xl bg-primary/20">
                  <img
                    src={debbiePhoto}
                    alt="Debbie Collins, founder of Reve AI"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE under hero */}
      <section className="bg-[hsl(0_0%_4%)] text-[hsl(40_27%_95%)] py-6 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-[scroll_45s_linear_infinite]">
          {[...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="font-serif italic text-2xl md:text-3xl flex items-center gap-12">
              {m}
              <span className="text-[hsl(348_56%_82%)]">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* POCKET MOMENT — front-loaded "aha", Ink */}
      <section className="bg-[hsl(0_0%_4%)] text-[hsl(40_27%_95%)] py-14 md:py-24 lg:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 font-serif italic text-[10rem] md:text-[14rem] leading-none text-[hsl(348_56%_82%)] opacity-15 select-none pointer-events-none">
          "
        </div>
        <div className="container-narrow max-w-5xl text-center relative">
          <Eyebrow tone="ink">A coaching moment</Eyebrow>
          <div className="mt-10 space-y-6 font-serif italic text-2xl md:text-3xl lg:text-4xl leading-[1.3]">
            <p>You are at a Thai restaurant. You do not know what to order.</p>
            <p>
              You grab your phone. You type{" "}
              <span className="text-[hsl(348_56%_82%)] whitespace-nowrap">"What should I get?"</span>
            </p>
            <p>Your coach tells you exactly what to order and what to skip.</p>
          </div>
        </div>
      </section>

      {/* PROBLEM, Plum */}
      <section className="theme-plum bg-background text-foreground py-16 md:py-28 px-6 relative">
        <div className="absolute top-10 right-10 font-serif italic text-primary text-7xl opacity-30 select-none">✦</div>
        <div className="container-narrow relative">
          <div className="max-w-5xl">
            <Eyebrow>The problem</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Your body changed. The old feedback{" "}
              <em className="italic text-primary">stopped working.</em>
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Left: "what you're doing" */}
            <div className="border border-primary/30 rounded-3xl p-8 md:p-10 bg-foreground/[0.03]">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-2xl text-primary">✓</span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary/90">You're doing the work</span>
              </div>
              <ul className="space-y-4 font-serif text-xl md:text-2xl text-foreground/90">
                <li className="flex gap-3"><span className="text-primary/60">—</span> Eating well</li>
                <li className="flex gap-3"><span className="text-primary/60">—</span> Walking</li>
                <li className="flex gap-3"><span className="text-primary/60">—</span> Lifting weights</li>
                <li className="flex gap-3"><span className="text-primary/60">—</span> Doing what used to work</li>
              </ul>
            </div>

            {/* Right: "what's happening" */}
            <div className="border border-primary/30 rounded-3xl p-8 md:p-10 bg-foreground/[0.03]">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-2xl text-primary">⚠</span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary/90">But your body…</span>
              </div>
              <ul className="space-y-4 font-serif text-xl md:text-2xl text-foreground/90">
                <li className="flex gap-3"><span className="text-primary/60">—</span> Scale moves for no reason</li>
                <li className="flex gap-3"><span className="text-primary/60">—</span> Waist feels different at the same weight</li>
                <li className="flex gap-3"><span className="text-primary/60">—</span> Meals don't hold you anymore</li>
                <li className="flex gap-3"><span className="text-primary/60">—</span> You're guessing again</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="font-serif text-2xl md:text-3xl text-foreground/80">This is not about trying harder.</p>
            <p className="mt-3 font-serif italic text-3xl md:text-5xl text-primary leading-tight">
              It's about getting better feedback.
            </p>
          </div>
        </div>
      </section>

      {/* MOTIVATIONAL TICKER — blush */}
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

      {/* COACH-IN-YOUR-POCKET, Paper */}
      <section className="theme-paper bg-background text-foreground py-16 md:py-28 px-6">
        <div className="container-narrow max-w-4xl">
          <Eyebrow>The shift</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] [text-wrap:balance]">
            <span className="block md:whitespace-nowrap">Most support checks in once a month.</span>
            <span className="block italic text-primary md:whitespace-nowrap">Your AI coach helps you all day.</span>
          </h2>

          {/* Visual contrast: then vs now */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-0 md:divide-x divide-foreground/15 border-y-2 border-foreground/15">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-3xl">📅</span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Once a month</span>
              </div>
              <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground/70 line-through decoration-primary/60 decoration-2">
                Book the appointment. Wait. Hope you remember the question.
              </p>
            </div>
            <div className="p-8 md:p-10 bg-primary/10">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-3xl">📱</span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Every day</span>
              </div>
              <p className="font-serif italic text-2xl md:text-3xl leading-snug text-foreground">
                Grab your phone. Ask in the moment. Get a real answer.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              A nutritionist or wellness coach can be genuinely helpful. But you don't make food
              decisions once a month — you make them in the grocery store, at the restaurant, when
              you're tired, when you're travelling, when your body feels different and you're not
              sure why.
            </p>
            <p className="text-foreground font-serif italic text-2xl md:text-3xl [text-wrap:balance]">
              Your coach is in your pocket. <span className="whitespace-nowrap">The workshop shows you how to set it up.</span>
            </p>
          </div>
        </div>
      </section>

      {/* MARQUEE, Ink */}
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

      {/* RESULTS, Paper */}
      <section className="theme-paper bg-background text-foreground py-16 md:py-28 px-6">
        <div className="container-narrow">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="relative w-full max-w-md mx-auto aspect-[3/4] overflow-hidden rounded-t-full border border-primary/30 shadow-xl">
                <img
                  src={debbieBeach}
                  alt="Debbie Collins on the beach"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <Eyebrow>What changed when I stopped guessing</Eyebrow>
              <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] md:whitespace-nowrap">
                At 54, I lost 7.8 lbs of <em className="italic text-primary">pure fat.</em>
              </h2>

              <div className="mt-8 space-y-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>But the number on the scale was not the real shift.</p>
                <p>
                  The real shift was learning to read what my body was actually telling me — through
                  food notes, meal timing and simple body data — and using AI to help me see the
                  patterns I had been missing.
                </p>
                <p className="text-foreground font-serif italic text-2xl md:text-3xl">
                  That is what this workshop teaches.
                </p>
                <p className="font-serif italic text-xl md:text-2xl text-foreground/80">
                  Your coach is now available every time you need her — not just once a month.
                </p>
              </div>

              <div className="mt-10">
                <CtaButton onClick={handleCheckout} size="xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN, Blush */}
      <section className="theme-blush bg-background text-foreground py-16 md:py-28 px-6">
        <div className="container-narrow max-w-4xl">
          <Eyebrow>What you'll learn</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            What we'll work through{" "}
            <em className="italic text-primary">inside the workshop.</em>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            Inside the workshop, I'll show you how to use AI to help you:
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

          <div className="mt-12 space-y-3 font-serif italic text-xl md:text-2xl text-foreground/85">
            <p className="text-primary not-italic font-serif">One question. One answer. Every time.</p>
            <p>You do not need to be technical.</p>
            <p>You do not need to be perfect.</p>
            <p>You just need a better way to see what is working.</p>
          </div>

          <div className="mt-12">
            <CtaButton onClick={handleCheckout} size="xl" />
          </div>
        </div>
      </section>

      {/* MOTIVATIONAL TICKER — paper */}
      <section className="theme-paper bg-background text-foreground py-5 overflow-hidden border-y border-foreground/15">
        <div className="flex gap-10 whitespace-nowrap animate-[scroll_55s_linear_infinite]">
          {[...motivational, ...motivational, ...motivational].map((m, i) => (
            <span key={i} className="font-serif italic text-xl md:text-2xl flex items-center gap-10">
              {m}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* SETUP, Plum */}
      <section className="theme-plum bg-background text-foreground py-16 md:py-28 px-6">
        <div className="container-narrow max-w-4xl">
          <Eyebrow>The setup</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            I will show you the setup{" "}
            <em className="italic text-primary">live.</em>
          </h2>

          <div className="mt-10 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>This is not a lecture about AI. It is a guided setup.</p>
            <p>
              I will walk you through how I use AI, body data and simple daily notes to make better
              decisions without turning health into a full-time job.
            </p>
            <p>
              You will see how to structure it, what to pay attention to and how to use it in real
              life.
            </p>
            <p className="text-foreground font-serif italic text-2xl md:text-3xl">
              Grab your phone. That is where your coach lives.
            </p>
            <p className="text-foreground font-serif italic text-xl md:text-2xl">
              The goal is not more tracking. The goal is{" "}
              <em className="italic text-primary">better feedback.</em>
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR / NOT FOR, Paper */}
      <section className="theme-paper bg-background text-foreground py-16 md:py-28 px-6">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Eyebrow>This workshop is for you if…</Eyebrow>
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
                    <span className="text-primary font-serif text-lg leading-none mt-1">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-1 font-serif italic text-lg md:text-xl text-muted-foreground">
                <p>You do not need to know AI.</p>
                <p>You do not need to track everything.</p>
                <p>You do not need to start over.</p>
              </div>
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
                    <span className="text-primary text-lg leading-none mt-1">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-serif italic text-lg md:text-xl text-foreground/85">
                This workshop is for women who want to understand their body better and make
                smarter daily decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU NEED, Blush */}
      <section className="theme-blush bg-background text-foreground py-14 md:py-24 px-6">
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
                <span className="text-primary text-lg">✦</span>
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-serif italic text-lg md:text-xl text-foreground/85">
            If you are brand new to AI, that is fine. I will show you where to start.
          </p>
        </div>
      </section>

      {/* Landscape image band */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-[hsl(0_0%_4%)]">
        <img
          src={debbieHusbandBw}
          alt="Debbie Collins with her husband on the beach"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative h-full flex items-end">
          <div className="container-narrow w-full pb-16 px-6">
            <p className="font-serif italic text-3xl md:text-6xl text-white max-w-3xl drop-shadow-lg leading-[1.05]">
              At 54, the best shape of my life,{" "}
              <em className="italic text-[#EBB7C2]">on my own terms.</em>
            </p>
            <div className="mt-8">
              <CtaButton onClick={handleCheckout} label="I'm in" size="xl" />
            </div>
          </div>
        </div>
      </section>

      {/* YOUR STORY / MEET DEB, Blush */}
      <section className="theme-blush bg-background text-foreground py-16 md:py-28 lg:py-36 px-6">
        <div className="container-narrow">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[3/4] overflow-hidden rounded-t-full border border-primary/30 shadow-xl">
                <img
                  src={debbieParisPark}
                  alt="Debbie Collins, founder of Reve AI"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-primary/60" />
                <Eyebrow>I built this because I needed it</Eyebrow>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                I have worked in wellness for years. And still, in midlife, my body{" "}
                <em className="italic text-primary">started responding differently.</em>
              </h2>

              <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  I have worked in wellness, supplements, gyms and natural health for years. I have
                  been health-conscious most of my adult life.
                </p>
                <p>
                  At 54, I stopped trying to be more disciplined and started looking for better
                  feedback. I used AI, body data and simple daily notes to understand what was
                  actually happening — not through a stricter diet, not through more effort, but
                  through better information.
                </p>
                <p>
                  Now I use AI to help me make better decisions throughout the week and throughout
                  the day.
                </p>
                <p className="text-foreground font-serif italic text-xl md:text-2xl">
                  That is what I want to show you.
                </p>
              </div>

              <ul className="mt-8 space-y-2 font-serif text-xl md:text-2xl">
                <li className="text-muted-foreground">Not as a doctor.</li>
                <li className="text-muted-foreground">Not as a guru.</li>
                <li className="text-foreground italic">
                  As a woman in midlife who finally found a better feedback loop.
                </li>
              </ul>

              <div className="mt-10">
                <CtaButton onClick={handleCheckout} label="I'm in" size="xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ, Plum */}
      <section className="theme-plum bg-background text-foreground py-16 md:py-28 px-6">
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
      <section className="theme-paper bg-background text-foreground py-16 md:py-28 px-6">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <Eyebrow>Workshop details</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.02]">
              Join the <em className="italic text-primary">live workshop.</em>
            </h2>
            <p className="mt-6 font-serif italic text-2xl md:text-3xl text-foreground/85">
              Build Your AI Body Coach for Midlife
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { l: "Date", v: "Jun 15", sub: "2026" },
              { l: "Format", v: "Live", sub: "online" },
              { l: "Level", v: "Easy", sub: "beginner-friendly" },
              { l: "Price", v: "$69", sub: "One-time" },
            ].map((d) => (
              <div
                key={d.l}
                className="p-6 md:p-8 rounded-2xl border-2 border-foreground/15 bg-background/60 backdrop-blur text-center"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                  {d.l}
                </div>
                <div className="mt-3 font-serif text-4xl md:text-6xl leading-none">
                  <em className="italic">{d.v}</em>
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {d.sub}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto text-center font-serif italic text-lg md:text-xl text-muted-foreground space-y-1">
            <p>Best for women in perimenopause, menopause and post-menopause.</p>
            <p>Focus: food notes, meal timing, movement, body data and better daily decisions.</p>
            <p>Recommended: a smart body composition scale.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA, Landscape background */}
      <section className="relative text-white py-20 md:py-36 lg:py-48 px-6 overflow-hidden">
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
            <span className="font-mono uppercase tracking-[0.3em] font-bold text-sm">
              Live Workshop · June 15, 2026
            </span>
          </div>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl leading-[1.05] text-white drop-shadow-lg">
            Your coach is in your pocket.{" "}
            <em className="italic text-[#EBB7C2]">Let's set her up.</em>
          </h2>
          <p className="mt-8 text-white/85 max-w-2xl mx-auto text-lg md:text-xl drop-shadow leading-relaxed">
            Learn how to use AI to support the daily food, timing, movement and body-data decisions
            that shape your results.
          </p>

          <div className="mt-10 font-serif italic text-2xl md:text-3xl text-white/95 space-y-1">
            <p>No calorie counting.</p>
            <p>No obsession.</p>
            <p>No starting over.</p>
            <p className="text-[#EBB7C2]">Just better feedback for your midlife body.</p>
          </div>

          <div className="mt-12">
            <CtaButton onClick={handleCheckout} label="I'm in" size="xl" />
          </div>
          <p className="mt-5 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/70">
            Live June 15 · Beginner-friendly · Smart scale recommended
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LoseWeightAI;
