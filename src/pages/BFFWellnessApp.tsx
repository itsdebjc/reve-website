import { useEffect, useState } from "react";
import debbieCollins from "@/assets/debbie-collins.jpeg";
import debbieBeach from "@/assets/debbie-beach.jpeg";
import heroCherryBlossom from "@/assets/hero-cherry-blossom.jpg";
import debbieMallSolo from "@/assets/debbie-mall-solo.jpeg";

const BFF_COLORS = {
  cream: "#FFF7F1",
  "cream-alt": "#FFFCFA",
  "cream-pink": "#FCEEF2",
  mat: "#F3ECE6",
  ink: "#2A211C",
  coral: "#FF6A4D",
  "coral-light": "#FF8A5C",
  pink: "#F0508C",
  amber: "#FFA13E",
  "body-text": "#6E5F57",
  "muted-gray": "#9a8b82",
  "placeholder-gray": "#b3a399",
  green: "#2FB67A",
};

const HeartGradient = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120">
    <defs>
      <linearGradient id="bffGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={BFF_COLORS.coral} />
        <stop offset="1" stopColor={BFF_COLORS.pink} />
      </linearGradient>
    </defs>
    <path
      d="M60 100 C28 79 14 62 14 43 C14 29 25 20 37 20 C49 20 56 28 60 36 C64 28 71 20 83 20 C95 20 106 29 106 43 C106 62 92 79 60 100 Z"
      fill="url(#bffGrad)"
    />
  </svg>
);

const RadiantHeart = ({ size = 78 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 220 220" fill="none">
    <defs>
      <linearGradient id="bffGrad2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={BFF_COLORS.coral} />
        <stop offset="1" stopColor={BFF_COLORS.pink} />
      </linearGradient>
    </defs>
    <g strokeLinecap="round" strokeWidth="6">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={angle}
          x1="110"
          y1="30"
          x2="110"
          y2="11"
          stroke={i % 2 === 0 ? BFF_COLORS.amber : BFF_COLORS.coral}
          transform={`rotate(${angle} 110 110)`}
        />
      ))}
    </g>
    <path
      d="M110 168 C70 142 50 120 50 96 C50 78 64 66 80 66 C95 66 105 76 110 86 C115 76 125 66 140 66 C156 66 170 78 170 96 C170 120 150 142 110 168 Z"
      fill="url(#bffGrad2)"
    />
  </svg>
);

const BFFWordmark = ({ size = 23 }: { size?: number }) => (
  <div
    style={{
      display: "flex",
      alignItems: "baseline",
      fontFamily: "'Bricolage Grotesque', sans-serif",
      fontWeight: 800,
      fontSize: size,
      letterSpacing: "-0.04em",
      lineHeight: 1,
    }}
  >
    <span style={{ color: BFF_COLORS.coral }}>B</span>
    <span style={{ color: BFF_COLORS.pink }}>F</span>
    <span style={{ color: BFF_COLORS.amber }}>F</span>
  </div>
);

const BFFWellnessApp = () => {
  useEffect(() => {
    document.title = "AI Body Workshop — Reve AI";
    const desc = "A practical AI body workshop for midlife women. Learn the Body Food Feedback system.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  const [form, setForm] = useState({ name: "", email: "", submitted: false });

  const handleWaitlist = () => {
    document.getElementById("bff-waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://a.klaviyo.com/client/subscriptions/?company_id=TPQB4A", {
        method: "POST",
        headers: { "Content-Type": "application/json", revision: "2023-12-15" },
        body: JSON.stringify({
          data: {
            type: "subscription",
            attributes: { email: form.email, subscribed: "SUBSCRIBED" },
            relationships: { list: { data: { type: "list", id: "QQMm5G" } } },
          },
        }),
      });
      if (res.ok || res.status === 202) {
        setForm((p) => ({ ...p, submitted: true }));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main style={{ background: BFF_COLORS.cream, color: BFF_COLORS.ink, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Caveat:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        @keyframes bffMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        details summary::-webkit-details-marker { display: none; }
        details[open] .bff-faq-plus { transform: rotate(45deg); transition: transform 0.2s; }
      `}</style>

      {/* STICKY HEADER */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: `rgba(255,247,241,0.82)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: `1px solid rgba(42,33,28,0.07)` }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "13px 26px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
            <HeartGradient size={26} />
            <BFFWordmark size={23} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: BFF_COLORS["muted-gray"] }}>Body Food Feedback</span>
          </div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: "21px", fontWeight: 600, color: BFF_COLORS["body-text"] }}>Learn the system. Meet your BFF.</div>
          <button onClick={handleWaitlist} style={{ fontSize: "14px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, padding: "11px 20px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 8px 18px rgba(240,80,140,0.26)" }}>Join the waitlist →</button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ background: `linear-gradient(180deg, ${BFF_COLORS.cream} 0%, ${BFF_COLORS["cream-alt"]} 100%)`, padding: "64px 26px 76px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.04fr", gap: "56px", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "26px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}><HeartGradient size={14} />BFF Body Food Feedback</span>
              <span style={{ display: "inline-flex", alignItems: "center", background: BFF_COLORS.ink, color: BFF_COLORS.cream, fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Coming Soon</span>
            </div>
            <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(44px, 6vw, 76px)", lineHeight: 0.98, letterSpacing: "-0.035em", margin: 0, color: BFF_COLORS.ink }}>Your body changed.</h1>
            <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: "clamp(38px, 5vw, 58px)", lineHeight: 1, color: BFF_COLORS.pink, marginTop: "6px" }}>BFF helps you stop guessing.</div>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "520px", margin: "24px 0 0" }}>A live AI body workshop for midlife women who want to understand their food, habits and body data — without starting another diet.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px", margin: "28px 0 30px" }}>
              {["Learn the Body Food Feedback system", "See how tiny patterns can start to show up", "Get your BFF coach after the workshop"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "11px" }}>
                  <HeartGradient size={20} />
                  <span style={{ fontSize: "15px", fontWeight: 600, color: BFF_COLORS.ink }}>{item}</span>
                </div>
              ))}
            </div>
            <button onClick={handleWaitlist} style={{ fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, padding: "16px 30px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 14px 30px rgba(240,80,140,0.30)" }}>Join the waitlist →</button>
            <span style={{ fontSize: "14px", color: BFF_COLORS["muted-gray"], display: "inline-block", marginTop: "8px", marginLeft: "12px" }}>First invites open soon.</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <img src={debbieCollins} alt="Debbie Collins" style={{ width: "100%", maxWidth: "400px", height: "480px", objectFit: "cover", borderRadius: "26px", boxShadow: "0 28px 60px rgba(42,33,28,0.18)" }} />
            <div style={{ position: "absolute", left: "-18px", bottom: "-22px", background: "#fff", borderRadius: "16px", padding: "13px 17px", boxShadow: "0 16px 34px rgba(42,33,28,0.16)", maxWidth: "228px" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "21px", lineHeight: 1.15, color: BFF_COLORS.ink }}>Hi, I'm Deb. I built BFF because I needed a better feedback loop.</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <section style={{ background: BFF_COLORS.ink, overflow: "hidden", padding: "15px 0" }}>
        <div style={{ display: "flex", width: "max-content", animation: "bffMarquee 34s linear infinite" }}>
          {["Body. Food. Feedback.", "Meet your BFF", "Not another diet", "Built for midlife", "Better feedback", "Small shifts", "Daily choices", "See the pattern", "Stop guessing", "Start noticing", "Data is feedback", "Your body is not broken"].map((text, i) => (
            <span key={`${i}-1`} style={{ padding: "0 22px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "16px", color: BFF_COLORS.cream, whiteSpace: "nowrap", display: "flex", alignItems: "center" }}>
              {text}
              {i < 11 && <span style={{ color: BFF_COLORS.coral, marginLeft: "22px" }}>•</span>}
            </span>
          ))}
        </div>
      </section>

      {/* PERSONAL PROOF */}
      <section style={{ background: BFF_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "54px", alignItems: "center" }}>
          <img src={debbieBeach} alt="Debbie at beach" style={{ display: "block", width: "100%", height: "460px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 24px 50px rgba(42,33,28,0.16)" }} />
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>What changed for me</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "20px 0 0" }}>At 54, I finally <span style={{ color: BFF_COLORS.pink }}>stopped guessing.</span></h2>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: BFF_COLORS["body-text"], margin: "20px 0 16px" }}>In three months, after I started using AI with my food notes, habits and body composition data, I:</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "22px" }}>
              {[{ label: "7.8 lbs", desc: "lost total" }, { label: "7 lbs", desc: "body fat reduced" }, { label: "32.3% → 25.7%", desc: "body fat" }, { label: "muscle", desc: "supported while losing fat" }].map((stat) => (
                <div key={stat.label} style={{ background: "#fff", borderRadius: "16px", padding: "18px 20px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "26px", color: BFF_COLORS.coral }}>{stat.label}</div>
                  <div style={{ fontSize: "13px", color: BFF_COLORS["body-text"], marginTop: "2px" }}>{stat.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: BFF_COLORS.ink, fontWeight: 600, margin: "22px 0 0" }}>But the biggest change was not the number.</p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: BFF_COLORS["body-text"], margin: "8px 0 0" }}>I finally had a feedback loop. I could see what was working, what was not and what I wanted to adjust next.</p>
          </div>
        </div>
      </section>

      {/* LANDSCAPE IMAGE BAND */}
      <section style={{ position: "relative", minHeight: "620px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img src={heroCherryBlossom} alt="Cherry blossom landscape" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(42,33,28,0.28), rgba(42,33,28,0.6))" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 26px", maxWidth: "780px" }}>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: BFF_COLORS.cream, margin: "0", textShadow: "0 2px 20px rgba(42,33,28,0.4)" }}>Your body has changed. Now you have a better way to <span style={{ color: "#FFC8A0" }}>listen to the feedback.</span></h2>
          <button onClick={handleWaitlist} style={{ display: "inline-block", marginTop: "26px", fontSize: "16px", fontWeight: 700, color: BFF_COLORS.ink, background: BFF_COLORS.cream, padding: "15px 28px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 14px 30px rgba(0,0,0,0.25)" }}>Join the waitlist →</button>
        </div>
      </section>

      {/* WHY I BUILT THIS */}
      <section style={{ background: BFF_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: "54px", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Why I built this</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "22px 0 0" }}>I built BFF because I needed it.</h2>
            <p style={{ fontSize: "18px", lineHeight: 1.65, color: BFF_COLORS["body-text"], maxWidth: "680px", margin: "24px 0 0" }}>I have worked in wellness, supplements, gyms and natural health for years. I have been health-conscious most of my adult life. And still, midlife changed the rules. So I built BFF: a simple way to use AI, body data and food notes to create a clearer feedback loop.</p>
            <div style={{ marginTop: "28px", paddingLeft: "18px", borderLeft: `2px solid rgba(240,80,140,0.3)` }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "28px", lineHeight: 1.25, color: BFF_COLORS.ink }}>Not as a doctor. Not as a guru. As a woman in midlife who finally stopped guessing.</div>
            </div>
          </div>
          <img src={debbieMallSolo} alt="Debbie" style={{ display: "block", width: "100%", height: "520px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 24px 50px rgba(42,33,28,0.16)" }} />
        </div>
      </section>

      {/* WORKSHOP DETAILS + WAITLIST FORM */}
      <section id="bff-waitlist" style={{ background: BFF_COLORS.cream, padding: "84px 26px", scrollMarginTop: "70px" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "54px", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Workshop details</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "22px 0 0" }}>Join the first <span style={{ color: BFF_COLORS.pink }}>BFF workshop.</span></h2>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "520px", margin: "20px 0 0" }}>I'll walk you through the Body Food Feedback system I created to stop guessing and start noticing patterns. You'll learn how the system works, what data to bring and how to start using your BFF coach after the workshop.</p>
            <div style={{ display: "flex", gap: "14px", marginTop: "30px", flexWrap: "wrap" }}>
              {[{ label: "Date", value: "Soon", sub: "Coming" }, { label: "Format", value: "Live", sub: "Online" }, { label: "Spots", value: "Few", sub: "Limited" }].map((item) => (
                <div key={item.label} style={{ background: "#fff", borderRadius: "16px", padding: "18px 22px", minWidth: "120px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: BFF_COLORS["muted-gray"] }}>{item.label}</div>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "22px", color: [BFF_COLORS.coral, BFF_COLORS.pink, BFF_COLORS.amber][["Date", "Format", "Spots"].indexOf(item.label)], marginTop: "4px" }}>{item.value}</div>
                  <div style={{ fontSize: "13px", color: BFF_COLORS["body-text"] }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#fff", borderRadius: "24px", padding: "36px 34px", boxShadow: "0 24px 56px rgba(42,33,28,0.12)" }}>
            {!form.submitted ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <HeartGradient size={26} />
                  <BFFWordmark size={24} />
                </div>
                <div style={{ fontSize: "14px", color: BFF_COLORS["body-text"], marginBottom: "22px" }}>Join the waitlist for first invites.</div>
                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <input type="text" placeholder="First name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} style={{ fontSize: "15px", color: BFF_COLORS.ink, padding: "15px 18px", border: `1.5px solid #ece2da`, borderRadius: "14px", outline: "none", background: BFF_COLORS["cream-alt"], fontFamily: "'Plus Jakarta Sans', sans-serif" }} required />
                  <input type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} style={{ fontSize: "15px", color: BFF_COLORS.ink, padding: "15px 18px", border: `1.5px solid #ece2da`, borderRadius: "14px", outline: "none", background: BFF_COLORS["cream-alt"], fontFamily: "'Plus Jakarta Sans', sans-serif" }} required />
                  <button type="submit" style={{ fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, border: "none", padding: "16px", borderRadius: "999px", cursor: "pointer", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Join the waitlist →</button>
                </form>
                <div style={{ fontSize: "12px", color: BFF_COLORS["placeholder-gray"], textAlign: "center", marginTop: "14px" }}>First invites open soon.</div>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "18px 6px" }}>
                <div style={{ marginBottom: "14px", display: "flex", justifyContent: "center" }}>
                  <HeartGradient size={52} />
                </div>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "28px", color: BFF_COLORS.ink }}>You're on the list.</div>
                <p style={{ fontSize: "15px", lineHeight: 1.55, color: BFF_COLORS["body-text"], margin: "12px auto 0", maxWidth: "300px" }}>I'll be in touch when the first invites go out.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: BFF_COLORS.ink, color: BFF_COLORS.cream, padding: "40px 26px", textAlign: "center", borderTop: `1px solid rgba(255,247,241,0.1)` }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <HeartGradient size={24} />
            <BFFWordmark size={20} />
          </div>
          <p style={{ fontSize: "13px", color: "rgba(255,247,241,0.65)", margin: "0", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>For general wellness and education only. Not medical advice, diagnosis or treatment. Personal results shared are not a promise of your results. © 2026 BFF.</p>
        </div>
      </footer>
    </main>
  );
};

export default BFFWellnessApp;
