import { DoodleAccent } from "./Doodles";

const services = [
  {
    n: "01",
    title: "The AI Marketing Build",
    italic: "We build your AI marketing system, then train your team to run it.",
    body: "A custom build for businesses that want to use AI more consistently in their marketing. We capture how your business thinks, sounds and sells, then build the workflows your team uses every day.",
    bullets: [
      "You are experimenting with AI but getting inconsistent results",
      "You want a system your team can use without you in the middle",
      "You are ready to turn AI experimentation into something that actually runs",
    ],
    cta: "Learn More →",
  },
  {
    n: "02",
    title: "AI-Built Website",
    italic: "A modern website built faster with clear copy, SEO baked in and simple updates you can manage yourself.",
    body: "A clear, modern website built with AI-supported tools, strong messaging and search-friendly structure. We help you explain what you do, launch faster and update your site without waiting on a developer for every small change.",
    bullets: [
      "Your website feels outdated or hard to update",
      "You want a better site without a long, painful build",
      "You need clear copy and SEO from the start",
      "You want your website ready for Google and AI search",
      "You want to make simple updates yourself",
    ],
    cta: "View Website Offer →",
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
