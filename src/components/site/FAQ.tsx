import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DoodleAccent } from "./Doodles";

const faqs = [
  {
    q: "What is an AI system?",
    a: "The setup behind the work. It captures your voice, offers, audience, proof, tools and workflows so your team can use AI with more consistency.",
  },
  {
    q: "How is this different from AI consulting?",
    a: "We do not just advise. We help organize the business knowledge, design the workflow and build the system your team can actually use.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Founder-led service businesses, agencies, consultants, creative firms, e-commerce brands and growing teams that need clearer systems for marketing, content, websites, reporting or operations.",
  },
  {
    q: "Do we need to know exactly what we want before we call?",
    a: "No. Most clients come to us with a mix of problems. We help you decide what needs to be fixed first, what can wait and which system will create the most useful movement.",
  },
  {
    q: "Is this all automated?",
    a: "No. AI helps speed up the work, but the strategy, structure and judgment are human. The goal is not to remove people. The goal is to give them better systems.",
  },
];

const FAQ = () => {
  return (
    <section className="relative isolate py-32 md:py-44 border-b border-hairline overflow-hidden">
      <DoodleAccent className="top-24 right-[6%]" size={56} />
      <DoodleAccent className="bottom-28 left-[6%]" size={56} />
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
        <div>
          <p className="label-eyebrow mb-6">— FAQ</p>
          <h2 className="display-serif text-4xl md:text-5xl leading-tight">
            The questions we <span className="display-italic">hear most.</span>
          </h2>
          <a
            href="#cta"
            className="mt-10 inline-flex label-mono text-foreground/70 hover:text-primary transition-colors"
          >
            Contact us →
          </a>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-hairline">
              <AccordionTrigger className="font-serif text-xl md:text-2xl text-left hover:text-primary hover:no-underline py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/85 text-base leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
