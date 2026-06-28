import { DoodleAccent } from "./Doodles";

const Problem = () => {
  return (
    <section className="relative isolate py-32 md:py-44 border-b border-hairline overflow-hidden">
      <DoodleAccent className="top-24 left-[8%]" size={56} />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="hairline w-10" />
          <span className="label-eyebrow">— The Problem</span>
          <span className="hairline w-10" />
        </div>

        <h2 className="display-serif text-4xl md:text-6xl text-foreground">
          Almost right is{" "}
          <span className="display-italic">still too much work.</span>
        </h2>

        <div className="mt-10 text-foreground/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed space-y-4 text-left md:text-center">
          <p>Most teams are already using AI.</p>
          <p className="text-foreground/65">
            But the output still needs rewriting.
            <br />
            The voice is close but not quite right.
            <br />
            The strategy is missing.
            <br />
            The customer insight is not baked in.
            <br />
            The workflow does not match how the business actually works.
          </p>
          <p>That is not leverage.</p>
          <p>That is another thing to fix.</p>
          <p>The tool is not the problem. The system underneath it is.</p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
