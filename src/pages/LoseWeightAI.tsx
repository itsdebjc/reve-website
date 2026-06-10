import { useEffect, useState } from "react";
import { toast } from "sonner";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import debbiePhoto from "@/assets/debbie-collins.jpeg";
import debbieParis from "@/assets/debbie-paris.jpg";
import debbiePortrait from "@/assets/debbie-portrait.jpg";
import debbieLandscape from "@/assets/debbie-landscape.png";
import debbieBlossoms from "@/assets/debbie-blossoms.jpeg";
import debbieBlossomPortrait from "@/assets/debbie-blossom-portrait.jpeg";
import debbieParisPark from "@/assets/debbie-paris-park.jpeg";
import debbieBeach from "@/assets/debbie-beach.jpeg";
import debbieHusbandBw from "@/assets/debbie-husband-bw.jpeg";
import debbieMallFlorals from "@/assets/debbie-mall-solo.jpeg";
import cherryBlossomLandscape from "@/assets/cherry-blossom-landscape.jpg";

const marquee = [
  "Not another diet",
  "No 5am bootcamps",
  "No guilt",
  "Real food, real life",
  "Built for midlife",
  "Better feedback",
  "Better decisions",
  "Less guessing",
  "Weekly check-ins",
  "Your body is not random",
  "Small shifts",
  "AI in your corner",
];

const personalResult = [
  { n: "7.8 lbs", l: "Lost in 3 months" },
  { n: "7 lbs", l: "Fat lost" },
  { n: "32% → 26%", l: "Body fat" },
  { n: "+ Muscle", l: "Gained while losing fat" },
];

const loopSteps = [
  { n: "1", label: "Start", d: "Begin with your real life, your habits, your goals and what has not been working." },
  { n: "2", label: "Notice", d: "Pay attention to the simple progress signals that help you understand what is changing." },
  { n: "3", label: "Check In", d: "Use simple notes to give AI the context it needs, without tracking every bite." },
  { n: "4", label: "Review", d: "Look at what worked, what felt hard and what patterns are starting to show up." },
  { n: "5", label: "Adjust", d: "Choose one simple thing to test next, based on feedback, not guessing." },
];

const setupItems = [
  { t: "Your Starting Point", d: "A simple snapshot of where you are now, what you want and what has not been working." },
  { t: "Your Progress Signals", d: "The few markers worth paying attention to, so you are not relying on one random number." },
  { t: "Simple Check-ins", d: "Quick notes that help AI understand your real life, without tracking every bite." },
  { t: "Your AI Coach Setup", d: "A way to use AI for feedback, reflection and better decisions." },
  { t: "Weekly Reviews", d: "A simple rhythm for seeing what changed and what to adjust next." },
  { t: "Small Experiments", d: "Tiny shifts you can test without blowing up your life." },
];

const forYou = [
  "Understand your body better",
  "Lose body fat without making it your whole personality",
  "Build or keep muscle",
  "Improve your energy",
  "See your patterns more clearly",
  "Make calmer decisions around food and habits",
  "Use AI in a simple, useful way",
  "Feel like yourself again",
];

const notForYou = [
  "Medical advice",
  "A guaranteed weight-loss promise",
  "A strict meal plan",
  "Someone to tell you exactly what to eat every day",
  "A punishing fitness plan",
  "Another all-or-nothing plan",
  "A program that does the work for you",
  "A reason to obsess over every number",
];

const leaveWith = [
  "My AI setup prompt",
  "A simple daily check-in template",
  "My weekly review prompt",
  "A personal coach-style AI setup",
  "A simple way to review your week",
  "A clear way to spot patterns",
  "One small next step you can use right away",
];

const different = [
  { a: "Most programs tell you what to do.", b: "This helps you understand what is working." },
  { a: "Most plans give you rules.", b: "This gives you feedback." },
  { a: "Most apps make you track everything.", b: "This helps you notice the patterns that matter." },
  { a: "Most weight-loss advice makes you feel like you failed.", b: "This helps you make the next decision." },
];

const faqs = [
  {
    q: "Is this a diet?",
    a: "No. This is not a diet plan. It is a workshop that teaches you how to use AI, simple notes and progress signals to understand what is working for your body.",
  },
  {
    q: "Do I need to be good with AI?",
    a: "No. I'll walk you through the setup in plain language. You do not need to be technical.",
  },
  {
    q: "Will you tell me exactly what to eat?",
    a: "No. This is not a meal plan. You'll learn how to use AI as a personal coach to help you make better decisions based on your own patterns.",
  },
  {
    q: "Is this medical advice?",
    a: "No. This is educational only. It is not medical advice, diagnosis or treatment.",
  },
  {
    q: "What happens after I pay?",
    a: "You'll get a confirmation email with the workshop details. I'll send the link, prep notes and reminders before we go live.",
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
    className={`group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-bold uppercase tracking-[0.18em] rounded-full hover:scale-[1.02] hover:opacity-95 transition-all shadow-2xl ${
      size === "xl"
        ? "px-12 py-7 text-sm md:text-base"
        : "px-10 py-6 text-xs md:text-sm"
    }`}
  >
    <span>{label}</span>
    <span className="font-serif italic normal-case tracking-normal text-base md:text-lg opacity-90">
      · $69 CAD
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
              Your Body Makes Sense
            </span>
            <span className="hidden md:inline font-mono uppercase tracking-[0.25em] opacity-70">
              June 15, 2026 · $69 CAD
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

const CtaBand = ({
  onClick,
  headline,
  sub,
}: {
  onClick: () => void;
  headline: string;
  sub?: string;
}) => (
  <section className="bg-[hsl(348_56%_82%)] text-[hsl(0_0%_4%)] py-16 md:py-20 px-6">
    <div className="container-narrow text-center">
      <h3 className="font-serif text-3xl md:text-5xl leading-[1.05]">
        {headline}
      </h3>
      {sub && (
        <p className="mt-4 font-mono text-xs md:text-sm uppercase tracking-[0.25em] font-bold">
          {sub}
        </p>
      )}
      <div className="mt-8">
        <CtaButton onClick={onClick} size="xl" />
      </div>
    </div>
  </section>
);

const PullQuote = ({
  children,
  tone = "blush",
  attribution,
}: {
  children: React.ReactNode;
  tone?: "blush" | "plum" | "ink";
  attribution?: string;
}) => {
  const toneClass =
    tone === "ink"
      ? "bg-[hsl(0_0%_4%)] text-[hsl(40_27%_95%)]"
      : tone === "plum"
      ? "theme-plum bg-background text-foreground"
      : "theme-blush bg-background text-foreground";
  const accent = tone === "ink" ? "text-[hsl(348_56%_82%)]" : "text-primary";
  return (
    <section className={`${toneClass} py-20 md:py-28 px-6 relative overflow-hidden`}>
      <div className={`absolute top-6 left-1/2 -translate-x-1/2 font-serif italic text-[10rem] md:text-[14rem] leading-none ${accent} opacity-20 select-none pointer-events-none`}>
        “
      </div>
      <div className="container-narrow max-w-4xl text-center relative">
        <p className="font-serif italic text-3xl md:text-5xl lg:text-6xl leading-[1.1]">
          {children}
        </p>
        {attribution && (
          <p className={`mt-8 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.35em] ${accent}`}>
           , {attribution}
          </p>
        )}
      </div>
    </section>
  );
};

const LoseWeightAI = () => {
  const [email, setEmail] = useState("");

  const handleCheckout = () => {
    window.open("https://buy.stripe.com/3cI5kC3V2cxJ3XC4XsaR201", "_blank", "noopener,noreferrer");
  };

  const onEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("You're on the list ✨");
    setEmail("");
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
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/50 rounded-full mb-8 bg-background/40">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-primary">
                  Your First Live Workshop
                </span>
              </div>

              <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] tracking-tight leading-[0.95]">
                So… my body
                <br />
                <span className="relative inline-block">
                  <em className="italic relative z-10">changed the rules.</em>
                  <Underline />
                </span>
              </h1>

              <p className="mt-10 text-lg md:text-xl text-foreground/80 max-w-xl font-light leading-relaxed">
                I used AI to understand the weight struggle I couldn't crack for 6 years. At 54, I
                got into the best shape of my life, not from a magic diet, sudden discipline or
                another strict plan.
              </p>

              <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl font-light leading-relaxed">
                Just AI, simple notes and my own progress signals, finally seeing what was
                actually working for my body.
              </p>

              {/* Big price + date callout */}
              <div className="mt-10 inline-flex items-stretch rounded-2xl border-2 border-foreground/15 bg-background/60 backdrop-blur shadow-xl overflow-hidden">
                <div className="px-6 py-5 text-left border-r-2 border-foreground/10">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">
                    Live workshop
                  </div>
                  <div className="mt-1 font-serif text-2xl md:text-3xl leading-tight">
                    Jun <em className="italic text-primary">15</em>, 2026
                  </div>
                </div>
                <div className="px-6 py-5 text-left">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">
                    Intro price
                  </div>
                  <div className="mt-1 font-serif text-3xl md:text-4xl leading-tight">
                    <em className="italic text-primary">$69</em>{" "}
                    <span className="text-base md:text-lg text-foreground/70 align-middle">CAD</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <CtaButton onClick={handleCheckout} size="xl" />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">
                Secure checkout · Limited first-workshop spots
              </p>
            </div>

            <div className="lg:col-span-5 relative">
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


      {/* THE DETAILS, Plum, oversized */}
      <section className="theme-plum bg-background text-foreground py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="container-narrow relative">
          <div className="text-center mb-12">
            <Eyebrow>The details</Eyebrow>
            <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02]">
              Your body <em className="italic text-primary">makes sense.</em>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A live workshop on using AI as your personal body coach, so you can stop guessing
              and start making better decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-14">
            {[
              { l: "Date", v: "Jun 15", sub: "2026" },
              { l: "Format", v: "Live", sub: "online" },
              { l: "Length", v: "90", sub: "minutes" },
              { l: "Price", v: "$69", sub: "CAD" },
            ].map((d) => (
              <div
                key={d.l}
                className="p-6 md:p-8 rounded-2xl border-2 border-foreground/15 bg-background/30 backdrop-blur text-center"
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

          <div className="mt-14 text-center">
            <CtaButton onClick={handleCheckout} size="xl" />
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">
              Secure checkout · Limited first live workshop spots
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

      {/* MY PERSONAL RESULT, Paper */}
      <section className="theme-paper bg-background text-foreground py-28 px-6">
        <div className="container-narrow">
          <div className="max-w-4xl">
            <Eyebrow>My personal result</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
              After years of trying, I finally had{" "}
              <em className="italic text-primary">better feedback.</em>
            </h2>

            <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>I had been trying to figure this out for years.</p>
              <div className="font-serif italic text-xl md:text-2xl text-foreground/80 space-y-1">
                <p>I was eating well.</p>
                <p>I was moving my body.</p>
                <p>I was doing a lot of the "right" things.</p>
              </div>
              <p>But I still felt like I was guessing.</p>
              <p className="text-foreground font-serif italic text-xl md:text-2xl">
                When I started using AI to help me see my patterns more clearly, things finally
                started to make sense.
              </p>
            </div>
          </div>

          {/* My results, four across */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {personalResult.map((s, i) => (
              <div
                key={s.l}
                className={`relative text-left p-6 md:p-8 rounded-3xl shadow-xl transition-transform hover:-translate-y-1 ${
                  i % 2 === 0
                    ? "bg-[hsl(0_0%_4%)] text-[hsl(40_27%_95%)]"
                    : "bg-[hsl(348_56%_82%)] text-[hsl(0_0%_4%)]"
                }`}
              >
                <div className="font-serif italic text-4xl md:text-6xl leading-none">
                  {s.n}
                </div>
                <div className="mt-4 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold opacity-90">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          {/* Husband highlight, underneath, full width */}
          <div className="mt-6 relative p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground shadow-2xl overflow-hidden">
            <div className="absolute -top-6 -right-6 font-serif italic text-[10rem] opacity-20 select-none leading-none">♥</div>
            <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="font-serif italic text-7xl md:text-9xl leading-none shrink-0">
                20 lbs
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.25em] font-bold opacity-90">
                  Bonus result
                </div>
                <p className="mt-2 font-serif text-2xl md:text-3xl leading-snug">
                  My husband did this with me <em className="italic">and lost 20 lbs too.</em>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-3xl">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              This is not about chasing a random number. It's about understanding what's actually
              working.
            </p>
            <p className="mt-6 font-serif italic text-2xl md:text-3xl text-foreground/85 space-x-3">
              <span>Small shifts.</span>
              <span>Weekly reviews.</span>
              <span className="text-primary">Better decisions.</span>
            </p>

            <div className="mt-10">
              <CtaButton onClick={handleCheckout} size="xl" />
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM, Plum */}
      <section className="theme-plum bg-background text-foreground py-28 px-6 relative">
        <div className="absolute top-10 right-10 font-serif italic text-primary text-7xl opacity-30 select-none">✦</div>
        <div className="container-narrow relative">
          <div className="max-w-3xl">
            <Eyebrow>The problem</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
              The problem is not that you need{" "}
              <em className="italic text-primary">more willpower.</em>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Most of us have tried enough things.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-12">
            <ul className="space-y-3 font-serif text-2xl md:text-3xl text-foreground/90">
              <li>Eating better.</li>
              <li>Walking more.</li>
              <li>Working out.</li>
              <li>Cutting back.</li>
              <li>Starting over on Monday.</li>
            </ul>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>And still, sometimes your body feels like it is playing by a completely different rulebook.</p>
              <p className="text-foreground font-serif italic text-2xl">
                The frustrating part is not just the weight. It is the guessing.
              </p>
              <ul className="font-serif italic text-lg md:text-xl text-foreground/80 space-y-1 pt-2">
                <li>You eat well and wonder why nothing changed.</li>
                <li>You have one off day and assume everything is ruined.</li>
                <li>You try something new and have no idea if it helped.</li>
                <li>You feel like your body is being random.</li>
              </ul>
              <p className="text-foreground text-xl pt-2">
                But maybe it is not random. Maybe you just need{" "}
                <em className="italic text-primary">better feedback.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <PullQuote tone="ink" attribution="Maybe you just need better feedback">
        Your body is <span className="text-[hsl(348_56%_82%)]">not</span> random.
      </PullQuote>

      {/* NOT ANOTHER DIET, Paper */}
      <section className="theme-paper bg-background text-foreground py-28 px-6">
        <div className="container-narrow max-w-4xl">
          <Eyebrow>This is not another diet</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            A simple way to use AI to{" "}
            <em className="italic text-primary">understand your body better.</em>
          </h2>

          <ul className="mt-12 grid sm:grid-cols-2 gap-4 font-serif text-xl md:text-2xl">
            {[
              "Not a restrictive diet",
              "Not a heavy fitness plan",
              "Not about tracking every bite",
              "Not about guilt or shame",
            ].map((item) => (
              <li key={item} className="flex items-baseline gap-3 border-t border-border pt-4">
                <span className="text-primary text-lg">✗</span>
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              You'll learn how to use AI as a personal coach in your corner, something to check in
              with, reflect with and help you make the next best decision.
            </p>
            <p className="text-foreground font-serif italic text-2xl md:text-3xl">
              Because the goal is not perfection. The goal is to stop guessing.
            </p>
          </div>
        </div>
      </section>

      {/* THE LOOP, Blush */}
      <section className="theme-blush bg-background text-foreground py-28 px-6">
        <div className="container-narrow">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <Eyebrow>Meet the system</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
              The <em className="italic text-primary">Body Feedback Loop.</em>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              A simple way to stop guessing and start seeing what's working.
            </p>
            <div className="mt-8 space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>You do not need another complicated plan.</p>
              <p>
                You need a simple rhythm that helps you understand your body, check in with AI and
                make better decisions week by week.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {loopSteps.map((s, i) => (
              <div
                key={s.n}
                className={`relative p-7 md:p-8 rounded-3xl shadow-xl transition-transform hover:-translate-y-1 ${
                  i % 2 === 0
                    ? "bg-[hsl(0_0%_4%)] text-[hsl(40_27%_95%)]"
                    : "bg-[hsl(348_56%_82%)] text-[hsl(0_0%_4%)]"
                }`}
              >
                <div className="font-serif italic text-6xl md:text-7xl leading-none opacity-90">
                  {s.n}
                </div>
                <div className="mt-4 font-serif text-3xl md:text-4xl leading-tight">
                  {s.label}
                </div>
                <p className="mt-4 text-sm md:text-base leading-relaxed opacity-90">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center font-serif italic text-2xl md:text-3xl text-foreground/80 space-y-1">
            <p>Small shifts.</p>
            <p>Weekly reviews.</p>
            <p className="text-primary">Better decisions.</p>
          </div>
        </div>
      </section>

      <section className="theme-blush bg-background text-foreground py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 font-serif italic text-[10rem] md:text-[14rem] leading-none text-primary opacity-20 select-none pointer-events-none">
          “
        </div>
        <div className="max-w-[100rem] mx-auto text-center relative">
          <p className="font-serif italic leading-[1.1] whitespace-nowrap text-[clamp(1.25rem,4.2vw,5rem)]">
            Small shifts. Weekly reviews. <em className="not-italic font-serif text-primary">Better decisions.</em>
          </p>
        </div>
      </section>

      <CtaBand
        onClick={handleCheckout}
        headline="Join the live workshop, June 15, 2026."
        sub="90 minutes · $69 CAD · Limited spots"
      />

      {/* WHAT YOU'LL SET UP, Plum */}
      <section className="theme-plum bg-background text-foreground py-28 px-6">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16 items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Inside the workshop</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
                What you'll set up{" "}
                <em className="italic text-primary">inside the workshop.</em>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                You do not need to become an AI expert. You just need a simple system. I'll walk
                you through how to set up AI so it can help you understand your habits, choices and
                progress in a way that feels clear and useful.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-primary/30 shadow-xl bg-primary/10">
                <img
                  src={debbieBlossoms.url}
                  alt="Debbie Collins walking under cherry blossoms"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {setupItems.map((item, i) => (
              <div key={item.t} className="border-t-2 border-foreground/20 pt-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-serif text-2xl md:text-3xl leading-snug">{item.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR YOU / NOT FOR YOU, Paper */}
      <section className="theme-paper bg-background text-foreground py-28 px-6">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* For you */}
            <div>
              <Eyebrow>This is for you if…</Eyebrow>
              <h2 className="mt-6 font-serif text-3xl md:text-4xl leading-[1.1]">
                Your body changed and the{" "}
                <em className="italic text-primary">old rules stopped working.</em>
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                You may already be eating well, working out and trying hard. But you still feel
                like you're guessing.
              </p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-4">
                You want to:
              </p>
              <ul className="space-y-3">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-foreground/85">
                    <span className="text-primary font-serif text-lg leading-none mt-1">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for you */}
            <div>
              <Eyebrow>This is not for you if…</Eyebrow>
              <h2 className="mt-6 font-serif text-3xl md:text-4xl leading-[1.1]">
                You're looking for something{" "}
                <em className="italic text-primary">this isn't.</em>
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                No judgment, just not the right fit if you want:
              </p>
              <ul className="mt-12 space-y-3">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-foreground/85">
                    <span className="text-primary text-lg leading-none mt-1">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Landscape image band */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-[hsl(0_0%_4%)]">
        <img
          src={debbieHusbandBw.url}
          alt="Debbie Collins with her husband on the beach"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative h-full flex items-end">
          <div className="container-narrow w-full pb-16 px-6">
            <p className="font-serif italic text-3xl md:text-6xl text-white max-w-3xl drop-shadow-lg leading-[1.05]">
              At 54, the best shape of my life, <em className="italic text-[#EBB7C2]">on my own terms.</em>
            </p>
            <div className="mt-8">
              <CtaButton onClick={handleCheckout} size="xl" />
            </div>
          </div>
        </div>
      </section>



      {/* WHY LIVE, Ink */}
      <section className="bg-[hsl(0_0%_4%)] text-[hsl(40_27%_95%)] py-28 px-6">
        <div className="container-narrow max-w-3xl">
          <Eyebrow tone="ink">Why I'm teaching this live first</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            I built this <em className="italic text-[hsl(348_56%_82%)]">for myself first.</em>
          </h2>

          <div className="mt-10 space-y-6 text-lg md:text-xl text-[hsl(40_27%_85%)] leading-relaxed">
            <p>Then my husband did it with me and lost 20 lbs.</p>
            <p>Then friends started asking what I was doing. Then friends of friends started asking.</p>
            <p>And I realized the part that helped me most was not one magic trick.</p>
            <p className="font-serif italic text-2xl md:text-3xl text-[hsl(40_27%_95%)]">
              It was having a system that helped me understand what was working.
            </p>
            <p>
              AI helped me connect the dots. Now I'm teaching it live first, so I can walk you
              through the setup, answer questions and show you how to use it in real life.
            </p>
          </div>
        </div>
      </section>

      {/* MEET DEB, Blush */}
      <section className="theme-blush bg-background text-foreground py-28 md:py-36 px-6">
        <div className="container-narrow">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[3/4] overflow-hidden rounded-t-full border border-primary/30 shadow-xl">
                <img
                  src={debbieParisPark.url}
                  alt="Debbie Collins, founder of Reve AI"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-primary/60" />
                <Eyebrow>Hi, I'm Deb</Eyebrow>
              </div>

              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
                Founder of Reve AI, an{" "}
                <em className="italic text-primary">AI agency in Vancouver.</em>
              </h2>

              <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  I help people use AI to organize information, spot patterns and make better
                  decisions. But this started in my own life.
                </p>
                <p>
                  I was getting married. I wanted to feel strong, healthy and good in my body. And
                  after years of trying to figure out what worked, I still felt stuck.
                </p>
                <p>
                  I had spent much of my life around wellness, fitness and health brands. I knew
                  the basics. I was doing a lot of the right things. But my own body still felt
                  confusing.
                </p>
                <p className="text-foreground font-serif italic text-xl md:text-2xl">
                  So I used what I know best: AI, systems and pattern-finding.
                </p>
                <p>
                  I built a simple way to use AI, simple notes and progress signals to understand
                  what was actually working. I lost fat, built muscle and finally stopped guessing.
                </p>
                <p>Now I want to show you the simple version live.</p>
              </div>

              <ul className="mt-8 space-y-2 font-serif text-xl md:text-2xl">
                <li className="text-muted-foreground">Not as a doctor.</li>
                <li className="text-muted-foreground">Not as a guru.</li>
                <li className="text-foreground italic">
                  As a woman in midlife who finally found a better way to understand her body.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEAVE WITH, Paper */}
      <section className="theme-paper bg-background text-foreground">
        <div className="grid lg:grid-cols-2 items-stretch">
          <div className="relative min-h-[60vh] lg:min-h-screen w-full overflow-hidden bg-primary/10">
            <img
              src={cherryBlossomLandscape.url}
              alt="Cherry blossom tree in full bloom"
              className="absolute inset-0 w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="px-6 md:px-12 lg:px-16 py-20 lg:py-28 flex items-center">
            <div className="max-w-xl">
              <Eyebrow>What you'll leave with</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">
                The setup -{" "}
                <em className="italic text-primary">not just information.</em>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Inside the workshop, you'll get:
              </p>
              <ul className="mt-6 space-y-3">
                {leaveWith.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base md:text-lg text-foreground/85 border-b border-border pb-3">
                    <span className="text-primary font-serif text-lg leading-none mt-1">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-serif italic text-xl md:text-2xl text-foreground/80">
                You'll leave with a way to start listening to your body differently.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* WHAT MAKES THIS DIFFERENT, Plum */}
      <section className="theme-plum bg-background text-foreground py-28 px-6">
        <div className="container-narrow max-w-4xl">
          <Eyebrow>What makes this different</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            Most plans give you rules. This gives you{" "}
            <em className="italic text-primary">feedback.</em>
          </h2>

          <div className="mt-14 space-y-6">
            {different.map((d) => (
              <div
                key={d.a}
                className="grid md:grid-cols-2 gap-6 md:gap-12 border-t border-foreground/20 pt-6"
              >
                <p className="font-serif text-xl md:text-2xl text-muted-foreground line-through decoration-foreground/30">
                  {d.a}
                </p>
                <p className="font-serif italic text-xl md:text-2xl text-foreground">
                  {d.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PullQuote tone="ink" attribution="The goal is to stop guessing">
        Most plans give you rules. <br className="hidden md:block" />
        This gives you <span className="text-[hsl(348_56%_82%)]">feedback.</span>
      </PullQuote>

      {/* NOTE BEFORE YOU JOIN, Paper */}
      <section className="theme-paper bg-background text-foreground py-20 px-6">
        <div className="container-narrow max-w-3xl text-center">
          <Eyebrow>A note before you join</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl md:text-4xl leading-[1.1]">
            This workshop is <em className="italic text-primary">educational.</em>
          </h2>
          <div className="mt-8 space-y-2 text-base md:text-lg text-muted-foreground">
            <p>It is not medical advice.</p>
            <p>It is not a diagnosis.</p>
            <p>It is not a replacement for your doctor, dietitian or health practitioner.</p>
            <p>It does not promise a specific result.</p>
          </div>
          <p className="mt-8 font-serif italic text-xl md:text-2xl text-foreground/85">
            It is a simple way to use AI to better understand your habits, patterns and choices.
          </p>
        </div>
      </section>

      {/* FAQ, Plum */}
      <section className="theme-plum bg-background text-foreground py-28 px-6">
        <div className="container-narrow max-w-3xl">
          <div className="text-center mb-16">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl">
              Things people <em className="italic">always ask.</em>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border border-border rounded-2xl p-6 hover:border-primary transition-colors bg-card"
              >
                <summary className="font-serif text-xl cursor-pointer flex justify-between items-center list-none gap-4">
                  <span>{f.q}</span>
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA, Landscape background */}
      <section className="relative text-white py-36 md:py-48 px-6 overflow-hidden">
        <img
          src={debbieMallFlorals.url}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

        <div className="container-narrow text-center relative z-10">
          <Eyebrow tone="ink">First live workshop</Eyebrow>
          <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] text-white drop-shadow-lg">
            Your body <em className="italic text-[#EBB7C2]">makes sense.</em>
          </h2>
          <p className="mt-8 text-white/85 max-w-xl mx-auto text-lg md:text-xl drop-shadow leading-relaxed">
            Learn how to use AI as your personal body coach, so you can stop guessing what works
            and start making better decisions.
          </p>

          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-5 font-mono text-[11px] uppercase tracking-[0.3em] text-white/80">
            <span>June 15, 2026</span>
            <span className="text-[#EBB7C2]">·</span>
            <span>$69 CAD</span>
          </div>

          <div className="mt-10">
            <button
              type="button"
              onClick={handleCheckout}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#EBB7C2] text-[#0A0A0A] font-bold text-[11px] uppercase tracking-[0.25em] rounded-full hover:scale-[1.02] hover:opacity-90 transition-all shadow-2xl"
            >
              Save My Spot for $69 →
            </button>
          </div>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
            Secure checkout · Limited first live workshop spots
          </p>

          <div className="mt-12 font-serif italic text-xl md:text-2xl text-white/90 space-y-1">
            <p>No guilt.</p>
            <p>No 5am bootcamps.</p>
            <p>No starting over on Monday.</p>
            <p className="text-[#EBB7C2]">Just better feedback.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LoseWeightAI;
