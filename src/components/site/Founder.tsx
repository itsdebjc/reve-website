import debbieImg from "@/assets/debbie-collins-about.jpeg";
import { DoodleAccent } from "./Doodles";

const Founder = () => {
  return (
    <section id="about" className="relative isolate py-32 md:py-44 border-b border-hairline overflow-hidden">
      <DoodleAccent className="top-20 right-[7%]" size={56} />
      <DoodleAccent className="bottom-24 left-[7%]" size={56} />
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="hairline w-10" />
            <span className="label-eyebrow">— Founder · Reve AI</span>
            <span className="hairline w-10" />
          </div>
          <h2 className="display-serif text-5xl md:text-6xl">Debbie Collins</h2>
          <p className="label-mono mt-4">Marketing Strategist · Systems Builder</p>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="aspect-[3/4] bg-surface border border-hairline rounded-3xl relative overflow-hidden">
            <img
              src={debbieImg}
              alt="Debbie Collins, founder of Reve AI"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="space-y-5 text-foreground/90 text-base md:text-lg leading-relaxed">
            <p>
              Debbie Collins has spent 25+ years helping businesses get clearer, sharper and easier to choose.
            </p>
            <p>
              She has never waited for a tool to go mainstream before figuring out what it changes.
            </p>
            <p>
              She studied how Google worked before most businesses understood SEO. In 2008, she built one of the first social media agencies in Canada, when most companies were still asking whether social media mattered.
            </p>
            <p>
              Now she is doing the same thing with AI.
            </p>
            <p className="font-serif font-semibold italic text-primary text-xl">
              Same instinct. Different tool.
            </p>
            <p>
              What Debbie brings is not just AI setup.
            </p>
            <p>
              It is marketing judgment.
            </p>
            <p>
              She knows what good strategy sounds like. She knows when a message is too vague, when content is off-brand, when a workflow will not get used and when an idea needs to become a system.
            </p>
            <p>
              That is what most AI setups are missing.
            </p>
            <p>
              AI can create more output. But better output still needs voice, strategy, customer insight and taste behind it.
            </p>
            <p>
              That is what Reve AI is built on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
