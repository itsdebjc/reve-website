import { Check } from "lucide-react";

const items = [
  "AI has the context it needs.",
  "Your team works faster.",
  "Your brand stays consistent.",
  "Content becomes easier to create.",
  "Knowledge is easier to find.",
  "Work feels lighter.",
];

const InPractice = () => {
  return (
    <section className="py-32 md:py-44 border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
        <div className="md:border-r md:border-hairline md:pr-12">
          <p className="label-eyebrow mb-6">— What Changes</p>
          <h2 className="display-serif text-3xl md:text-5xl">
            What happens when <span className="display-italic">the system works.</span>
          </h2>
          <p className="mt-6 text-foreground/70 text-base md:text-lg leading-relaxed">
            When your marketing works as one connected system:
          </p>
        </div>

        <ul className="space-y-px">
          {items.map((t, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-6 items-start py-5 border-b border-hairline last:border-b-0"
            >
              <Check className="text-primary w-5 h-5 mt-1" strokeWidth={2} />
              <span className="text-foreground/95 text-base md:text-lg leading-relaxed">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InPractice;
