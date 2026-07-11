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
          <h2 className="display-serif text-5xl md:text-6xl">Hi, I'm Debbie.</h2>
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
              I've spent more than 25 years helping businesses tell better stories.
            </p>
            <p>
              When AI arrived, I thought the answer was learning better prompts.
            </p>
            <p className="font-serif font-semibold italic text-primary text-xl">
              I was wrong.
            </p>
            <p>
              The real breakthrough came from rebuilding the way I worked.
            </p>
            <p className="text-foreground/70">
              I organized my knowledge.<br />
              Simplified my workflows.<br />
              Created systems instead of starting from scratch every day.
            </p>
            <p>
              Work became faster.<br />
              Clearer.<br />
              Lighter.
            </p>
            <p>
              Now I help businesses do the same.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
