import { useEffect, useRef, useState } from "react";
import { Search, Lightbulb, Wrench, GraduationCap } from "lucide-react";

const steps = [
  {
    number: "1",
    label: "Step 1",
    Icon: Search,
    title: "Audit",
    description:
      "We look at what is scattered, slow, unclear or harder to maintain than it should be.",
  },
  {
    number: "2",
    label: "Step 2",
    Icon: Lightbulb,
    title: "Prioritize",
    description:
      "We identify what needs attention first and decide which system will create the most useful change.",
  },
  {
    number: "3",
    label: "Step 3",
    Icon: Wrench,
    title: "Build",
    description:
      "We create the system. That might be a website, marketing brain, content workflow, dashboard or custom setup.",
  },
  {
    number: "4",
    label: "Step 4",
    Icon: GraduationCap,
    title: "Launch",
    description:
      "We train your team, document the process and make sure the system is ready to use from day one.",
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
    <section className="relative isolate py-32 md:py-44 border-b border-hairline overflow-hidden bg-dark-warm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <p className="label-eyebrow mb-6">— Method</p>
          <h2 className="display-serif text-4xl md:text-5xl">
            The system comes{" "}
            <span className="display-italic text-primary">before the tool.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
