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
              <span className="display-italic">still not right.</span>
            </h2>
          </div>

          {/* Right column: Body text */}
          <div className="text-foreground/85 text-base md:text-lg leading-relaxed space-y-4">
            <p>Most businesses don't have an AI problem.</p>
            <p className="text-foreground/65">
              They have a marketing system that has grown over time.<br />
              Their website says one thing.<br />
              Their proposals say another.<br />
              Content lives everywhere.<br />
              Knowledge disappears when someone leaves.
            </p>
            <p>Then AI arrives and magnifies the chaos.</p>
            <p>Before you add another tool, rebuild the foundation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
