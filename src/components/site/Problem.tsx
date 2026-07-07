import { DoodleAccent } from "./Doodles";

const Problem = () => {
  return (
    <section className="relative isolate py-32 md:py-44 border-b border-hairline overflow-hidden">
      <DoodleAccent className="top-24 left-[8%]" size={56} />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left column: Headline */}
          <div>
            <div className="mb-8">
              <span className="label-eyebrow">— The Problem</span>
            </div>
            <h2 className="display-serif text-4xl md:text-5xl text-foreground">
              Almost right is{" "}
              <span className="display-italic">still too much work.</span>
            </h2>
          </div>

          {/* Right column: Body text */}
          <div className="text-foreground/85 text-base md:text-lg leading-relaxed space-y-4">
            <p>Most teams are already using AI.</p>
            <p className="text-foreground/65">
              But the output still needs rewriting. The voice is close but not quite right. The strategy is missing. The customer insight is not baked in. The workflow does not match how the business actually works.
            </p>
            <p>That is not leverage. That is another thing to fix. The tool is not the problem. The system underneath it is.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
