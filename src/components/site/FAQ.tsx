import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CALENDLY_URL } from "@/lib/links";
import { setJsonLd } from "@/lib/seo";

const faqs = [
  {
    q: "What is the AI Marketing Roadmap?",
    a: "It is where we start. We review your marketing, your existing systems and how your team uses AI, then identify where AI can make a useful difference and what needs to be in place first. You leave with a clear plan, not a list of tools.",
  },
  {
    q: "What can you build with AI?",
    a: "Automations, connected workflows, AI assistants and custom apps and tools. We look at what your existing tools can do before recommending something new.",
  },
  {
    q: "How is this different from AI consulting or a course?",
    a: "We do more than advise. We build the tools and systems around your business, test them and train your team to use them.",
  },
  {
    q: "Do I need to know what I want first?",
    a: "No. Most teams arrive with a list of problems. The Roadmap helps you decide what to tackle first.",
  },
  {
    q: "Is this all automated?",
    a: "No. AI handles the repetitive work. Strategy and judgment stay with your team and with us.",
  },
  {
    q: "Who do you work with?",
    a: "Expert led businesses with small teams: consultants, agencies, advisors and B2B teams that want stronger marketing and a team confident with AI.",
  },
];

const FAQ = () => {
  useEffect(() => {
    setJsonLd("faq-schema", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    });
  }, []);

  return (
    <section className="bg-[#1D2224] py-24 md:py-32 px-6 md:px-16 border-b border-white/10">
      <div className="mx-auto max-w-[1280px]">
        <p
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
          className="text-xs text-[#5FC2E8] uppercase mb-6 text-center"
        >
          FAQ
        </p>
        <Accordion type="single" collapsible className="w-full max-w-[820px] mx-auto">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
              <AccordionTrigger
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
                className="text-left text-[#F2E4D8] hover:text-[#E893AC] hover:no-underline py-6 text-xl"
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="font-['Inter'] text-[#F2E4D8]/70 text-base leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-12">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Inter'] text-[#5FC2E8] hover:text-[#E893AC] transition-colors"
          >
            Still have questions? Book a call →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
