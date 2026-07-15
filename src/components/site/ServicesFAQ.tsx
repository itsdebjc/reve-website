const ServicesFAQ = () => {
  const faqs = [{q: "WHAT IS THE AUDIT?", a: "It's where we start. I look at how you work, where AI can help most and what to build first."}, {q: "HOW IS THIS DIFFERENT FROM AI CONSULTING?", a: "I don't just advise. I set AI up to know your business and do real work, with you."}, {q: "DO I NEED TO KNOW WHAT I WANT FIRST?", a: "No. Most people come in with problems. The Audit sorts out what to fix first."}, {q: "IS THIS ALL AUTOMATED?", a: "No. AI does the heavy lifting. Strategy and judgment stay human."}, {q: "WHO DO YOU WORK WITH?", a: "Mostly ecommerce brands. If you run a founder-led service team, that's in my wheelhouse too."}];
  return (
    <section className="bg-[#FDFAF4] py-24 px-6 md:px-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-['Anton'] text-4xl text-center mb-16">COMMON QUESTIONS</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (<div key={idx} className="border-b border-[rgba(38,50,56,0.12)] pb-6"><h3 className="font-['Anton'] text-lg text-[#E893AC] mb-3">{faq.q}</h3><p className="text-base opacity-65 leading-relaxed">{faq.a}</p></div>))}
        </div>
        <div className="text-center mt-12">
          <a href="/services" className="font-['Anton'] text-sm border-2 border-[#263238] text-[#263238] px-8 py-4 rounded-lg inline-block hover:bg-gray-50">STILL CURIOUS? BOOK AN AUDIT</a>
        </div>
      </div>
    </section>
  );
};
export default ServicesFAQ;
