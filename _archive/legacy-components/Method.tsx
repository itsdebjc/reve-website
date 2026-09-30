import { useEffect, useRef, useState } from "react";
import { Search, Lightbulb, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "1",
    label: "Step 1",
    Icon: Search,
    title: "Audit",
    description: "Find what's getting in the way.",
  },
  {
    number: "2",
    label: "Step 2",
    Icon: Lightbulb,
    title: "Blueprint",
    description: "Create a practical roadmap.",
  },
  {
    number: "3",
    label: "Step 3",
    Icon: Wrench,
    title: "Build",
    description: "Build the right marketing system.",
  },
  {
    number: "4",
    label: "Step 4",
    Icon: TrendingUp,
    title: "Grow",
    description: "Improve and evolve as AI changes.",
  },
];

const StepCard = ({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group flex flex-col items-center text-center px-6 cursor-default"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-[0_0_30px_hsl(350_60%_82%/0.4)]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.6)",
          transitionDelay: `${index * 120}ms`,
        }}
      >
        <span className="font-serif text-4xl text-primary leading-none transition-colors duration-500 group-hover:text-background">
          {step.number}
        </span>
      </div>

      <div
        className="flex items-center gap-2 mb-5 transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transitionDelay: `${index * 120 + 150}ms`,
        }}
      >
        <step.Icon className="w-3.5 h-3.5 text-primary/60" strokeWidth={1.5} />
        <span className="label-mono text-primary/70 text-[10px]">
          {step.label.toUpperCase()}
        </span>
      </div>

      <div
        className="transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transitionDelay: `${index * 120 + 250}ms`,
        }}
      >
        <h3 className="display-serif text-xl md:text-2xl mb-4 leading-tight">
          {step.title}
        </h3>
        <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const Method = () => {
  return (
    <section id="how-we-work" className="relative isolate py-32 md:py-44 border-b border-hairline overflow-hidden bg-dark-warm scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <p className="label-eyebrow mb-6">— How We Work</p>
          <h2 className="display-serif text-4xl md:text-5xl">
            How we{" "}
            <span className="display-italic text-primary">work.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
