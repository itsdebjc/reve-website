import { DoodleAccent } from "./Doodles";
import footerMisty from "../../assets/footer-misty.jpg";
import heroFlowers from "../../assets/hero-flowers.jpg";
import footerHills from "../../assets/footer-hills.jpg";

const cases = [
  {
    tag: "Publishing Rhythm",
    title: "Turn drafts into a publishing rhythm",
    body: "Built a founder voice system and editorial workflow for a B2B advisory firm.",
    image: footerMisty,
  },
  {
    tag: "Proposals",
    title: "Create proposals that sound like your team",
    body: "Created a proposal workflow tied to a brand intelligence layer.",
    image: heroFlowers,
  },
  {
    tag: "Client Content",
    title: "Build consistent client-facing content",
    body: "Set up writing rules and content inputs that match how the team actually thinks.",
    image: footerHills,
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="relative isolate py-32 md:py-44 border-b border-hairline overflow-hidden">
      <DoodleAccent className="top-20 left-[5%]" size={56} />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="label-eyebrow mb-6">— Case Studies</p>
          <h2 className="display-serif text-4xl md:text-5xl leading-tight max-w-3xl mx-auto">
            See how we help teams turn scattered marketing into{" "}
            <span className="display-italic">stronger output.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <a
              key={c.title}
              href="/case-studies"
              className="border border-hairline rounded-2xl overflow-hidden hover:border-primary/60 transition-colors group block"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <p className="label-eyebrow mb-6">{c.tag}</p>
                <h3 className="display-serif text-2xl mb-4 leading-tight">
                  {c.title}
                </h3>
                <p className="text-foreground/85 text-base leading-relaxed mb-8">
                  {c.body}
                </p>
                <span className="label-mono text-foreground/70 group-hover:text-primary transition-colors">
                  Read Case →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
