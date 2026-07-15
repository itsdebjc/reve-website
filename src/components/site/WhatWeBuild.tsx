const WhatWeBuild = () => {
  const items = [{ icon: "📧", label: "Klaviyo email and SMS flows" }, { icon: "📄", label: "Product and collection page copy" }, { icon: "📢", label: "Meta and Google ads, copy and creative" }, { icon: "📸", label: "Product photos, UGC and video" }, { icon: "💬", label: "A content system for social" }, { icon: "✨", label: "A personal assistant that turns reviews into content" }, { icon: "📊", label: "Social media dashboard" }, { icon: "📈", label: "Business dashboard" }];
  return (
    <section className="bg-[#FDFAF4] px-6 md:px-16 pb-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-['Anton'] text-3xl md:text-4xl mb-8">WHAT WE BUILD</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {items.map((item, idx) => (<div key={idx} className="bg-[#F5EEDD] rounded-2xl p-6 flex items-center gap-4"><span className="text-3xl">{item.icon}</span><span className="text-base font-medium">{item.label}</span></div>))}
        </div>
        <p className="text-base opacity-65 mb-8">These are just examples, if your brand needs it, we can probably build it.</p>
        <a href="/services" className="font-['Anton'] text-sm bg-[#E893AC] text-white px-8 py-4 rounded-lg inline-block hover:opacity-90">START WITH AN AUDIT</a>
      </div>
    </section>
  );
};
export default WhatWeBuild;
