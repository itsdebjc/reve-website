import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setCanonical } from "@/lib/seo";
import TuniHeader from "@/components/tuni/TuniHeader";
import TuniFooter from "@/components/tuni/TuniFooter";
import { TUNI_COLORS, TUNI_FONT_IMPORT, TUNI_CHROME_CSS, useBookDemo } from "@/components/tuni/TuniShared";

const FAQ_ITEMS: { q: string; a: React.ReactNode }[] = [
  { q: "What is Tuni?", a: "Tuni is an AI body coach for women in midlife. Talk, type or snap what you eat, and Tuni gives you feedback based on what you share. I'm Deb, the founder, and I lead the live demo." },
  { q: "How does the Tuni subscription work?", a: "Tuni is a monthly subscription. It includes the app and an optional live demo with me. You can cancel anytime." },
  { q: "When do I get access to Tuni?", a: "I welcome women in small groups. After you join the waitlist, I'll email you with the next steps. As soon as your account is ready, you can start using Tuni and add it to your phone's Home Screen." },
  { q: "Do I have to attend the demo?", a: "No. You can start using Tuni as soon as your account is ready. The demo is included if you'd like me to show you how Tuni works, share why I built it and help you get started." },
  {
    q: "Do I need a body composition scale?",
    a: (
      <>
        <p style={{ margin: 0 }}>No. You can start using Tuni without one and get feedback on the food and movement you log.</p>
        <p style={{ margin: "10px 0 0" }}>
          A weekly scan adds another piece of the picture, showing your habits alongside changes in body fat and muscle over time. See my{" "}
          <a href="/bff-coach/scales" style={{ color: TUNI_COLORS.coral, textDecoration: "underline" }}>full scale guide</a> for which ones work with Tuni, from budget options to my personal pick.
        </p>
      </>
    ),
  },
  { q: "Is Tuni a diet or meal plan?", a: "No. Tuni helps you learn from what you already eat. It gives you feedback and helps you find choices that fit your life." },
  { q: "Do I have to count calories or log perfectly?", a: "No calorie counting. You can describe a meal in your own words or use a photo. An estimate is fine. Logging regularly gives Tuni more to work with." },
  { q: "Is Tuni medical advice?", a: "No. Tuni is for general wellness and education. It does not diagnose or treat medical conditions." },
];

const TuniFaqPage = () => {
  useEffect(() => {
    document.title = "FAQ | Tuni";
    const desc = "Answers to the questions women ask most before joining Tuni, the AI body coach for midlife.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    setCanonical("/bff-coach/faq");
  }, []);

  const handleBookDemo = useBookDemo();

  return (
    <main style={{ background: TUNI_COLORS.cream, color: TUNI_COLORS.ink, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        ${TUNI_FONT_IMPORT}
        * { box-sizing: border-box; }
        ${TUNI_CHROME_CSS}
        details summary::-webkit-details-marker { display: none; }
        details[open] .bff-faq-plus { transform: rotate(45deg); transition: transform 0.2s; }
      `}</style>

      <TuniHeader />

      <section style={{ background: TUNI_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "38px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Good to know</span>
            <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "18px 0 0" }}>A few questions you might have.</h1>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} id={item.q.includes("body composition") ? "scale-faq" : undefined} style={{ background: "#fff", border: "1px solid rgba(42,33,28,0.07)", borderRadius: "16px", padding: "4px 22px" }}>
                <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", cursor: "pointer", listStyle: "none", padding: "18px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "17px", color: TUNI_COLORS.ink }}>
                  {item.q}
                  <span className="bff-faq-plus" style={{ color: TUNI_COLORS.coral, fontSize: "22px", fontWeight: 700, transition: "transform 0.2s", flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ fontSize: "15px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "0 0 18px" }}>{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: TUNI_COLORS.ink, color: TUNI_COLORS.cream, padding: "90px 26px", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.4vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0 }}>Still have questions?</h2>
          <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: "26px", color: "#FFE3D0", marginTop: "8px" }}>Tune in to what works.</div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginTop: "22px" }}>
            <button onClick={handleBookDemo} style={{ fontSize: "17px", fontWeight: 700, color: TUNI_COLORS.cream, background: "transparent", padding: "16px 30px", borderRadius: "999px", border: "1.5px solid rgba(255,247,241,0.35)", cursor: "pointer" }}>Book a Live Demo</button>
            <Link to="/bff-coach/join" style={{ textDecoration: "none", display: "inline-block", fontSize: "17px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "17px 32px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.30)" }}>Start Tuni for $8.99 →</Link>
          </div>
        </div>
      </section>

      <TuniFooter />
    </main>
  );
};

export default TuniFaqPage;
