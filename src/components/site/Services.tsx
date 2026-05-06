import { DoodleAccent } from "./Doodles";

const services = [
  {
    n: "01",
    title: "The AI Build",
    italic: "Your business knowledge turned into AI workflows your team can use.",
    body: "We capture your voice, offers, clients and marketing process, then build the workflows your team needs to create stronger content, campaigns and client-facing work without you fixing every draft.",
    bullets: [
      "You are using AI, but the output still feels inconsistent",
      "Your team has tools, but no shared system",
      "You are spending too much time editing, rewriting or explaining",
      "You want your team trained inside real marketing work",
    ],
    cta: "Learn More",
  },
  {
    n: "02",
    title: "AI Strategy Session",
    italic: "Get clear on where AI belongs and what to build first.",
    body: "A 90-minute working session to look at your business, your team and how the work gets done. We show you where AI fits, what to stop doing manually and which workflows matter most.",
    bullets: [
      "You are experimenting with AI, but it feels scattered",
      "You are unsure where to start",
      "You want clarity before investing in a full build",
      "You need a clear next step",
    ],
    cta: "Start Here",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative isolate py-32 md:py-44 border-b border-hairline overflow-hidden">
      <DoodleAccent className="top-24 left-[6%]" size={56} />
      <DoodleAccent className="bottom-32 right-[6%]" size={56} />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <p className="label-eyebrow mb-6">— Services</p>
          <h2 className="display-serif text-4xl md:text-6xl">
            Two ways to <span className="display-italic">work together.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.n}
              className="relative border border-primary rounded-xl p-8 md:p-10 flex flex-col"
            >
              <p className="label-eyebrow mb-4 text-primary/80">{s.n}</p>
              <h3 className="display-serif text-2xl md:text-3xl mb-3">{s.title}</h3>
              <p className="font-serif italic text-primary text-base md:text-lg mb-4">
                {s.italic}
              </p>
              <div className="hairline w-10 mb-4" />
              <p className="text-foreground/80 text-sm md:text-base mb-6 leading-relaxed flex-grow">
                {s.body}
              </p>

              <div>
                <p className="label-mono text-foreground/70 text-xs mb-4">Right for you if:</p>
                <ul className="space-y-2 mb-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-sm text-foreground/85 flex gap-3">
                      <span className="text-primary mt-1 h-1 w-1 rounded-full flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="/services" className="label-mono text-foreground hover:text-primary w-fit">
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
