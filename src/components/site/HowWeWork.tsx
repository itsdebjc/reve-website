const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We look at your current marketing, your AI usage and where the gaps are.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We build the foundation. Brand intelligence, messaging, voice, proof points and content inputs.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We create the workflows your team needs and set them up so they are usable from day one.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We refine the system over time so it keeps working as your business evolves.",
  },
];

const HowWeWork = () => {
  return (
    <section className="relative isolate py-32 md:py-44 border-b border-hairline overflow-hidden bg-dark-warm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <p className="label-eyebrow mb-6">— The Method</p>
          <h2 className="display-serif text-4xl md:text-5xl">
            The Reve AI{" "}
            <span className="display-italic text-primary">Method.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:divide-x md:divide-hairline">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`border-t border-hairline py-10 ${
                i === 0
                  ? "md:pr-10"
                  : i === steps.length - 1
                  ? "md:pl-10"
                  : "md:px-10"
              }`}
            >
              <p className="label-mono text-primary mb-6">{step.number}</p>
              <h3 className="display-serif text-2xl mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-foreground/70 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
