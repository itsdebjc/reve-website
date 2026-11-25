import { useEffect, useState } from "react";
import { setCanonical } from "@/lib/seo";
import TuniHeader from "@/components/tuni/TuniHeader";
import TuniFooter from "@/components/tuni/TuniFooter";
import { RadiantHeart, TuniWordmark, IconCheck, StrikePrice, TUNI_COLORS, TUNI_FONT_IMPORT, TUNI_CHROME_CSS, useBookDemo } from "@/components/tuni/TuniShared";

const inputStyle: React.CSSProperties = {
  fontSize: "15px",
  color: TUNI_COLORS.ink,
  padding: "15px 18px",
  border: "1.5px solid #ece2da",
  borderRadius: "14px",
  outline: "none",
  background: TUNI_COLORS["cream-alt"],
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  width: "100%",
};

const TuniJoinPage = () => {
  useEffect(() => {
    document.title = "Start Tuni | Tuni";
    const desc = "Join Tuni, your personal AI body coach for midlife — $8.99/month, cancel anytime.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    setCanonical("/bff-coach/join");
  }, []);

  const handleBookDemo = useBookDemo();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", submitted: false });

  // NOTE: no payment processor is connected here. This mirrors the homepage's
  // existing signup capture (name + email to Klaviyo); the country and card
  // fields are visual only until a real checkout is wired up.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://a.klaviyo.com/client/subscriptions/?company_id=XjEbAU", {
        method: "POST",
        headers: { "Content-Type": "application/json", revision: "2023-12-15" },
        body: JSON.stringify({
          data: {
            type: "subscription",
            attributes: {
              profile: {
                data: {
                  type: "profile",
                  attributes: { email: form.email, first_name: form.firstName, last_name: form.lastName },
                },
              },
            },
            relationships: { list: { data: { type: "list", id: "WmvKHc" } } },
          },
        }),
      });
      if (res.ok || res.status === 202) {
        setForm((p) => ({ ...p, submitted: true }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main style={{ background: TUNI_COLORS.cream, color: TUNI_COLORS.ink, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        ${TUNI_FONT_IMPORT}
        * { box-sizing: border-box; }
        ${TUNI_CHROME_CSS}
        @media (max-width: 768px) {
          .bff-grid-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <TuniHeader />

      <section style={{ background: TUNI_COLORS.cream, padding: "56px 26px 90px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 50px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 8px" }}>Start Tuni <span style={{ color: TUNI_COLORS.pink }}>today.</span></h1>
          <p style={{ fontSize: "17px", color: TUNI_COLORS["body-text"], margin: "0 0 36px" }}>Fill out the membership card to get started. Tuni is ready the moment you join.</p>

          <div className="bff-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "26px", margin: "0 0 10px" }}>Tuni Founding Membership</h2>
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                <StrikePrice was="$15" size={18} />
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 900, fontSize: "40px", color: TUNI_COLORS.ink }}>$8.99</span>
                <span style={{ fontSize: "14px", fontWeight: 700, color: TUNI_COLORS["muted-gray"] }}>CAD/month + GST</span>
              </div>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "22px", color: TUNI_COLORS.pink, marginTop: "6px" }}>Your personal AI body coach for midlife.</div>
              <p style={{ fontSize: "15.5px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], marginTop: "12px" }}>Get personalized feedback on your meals, discover patterns in your everyday habits and understand what's working for your body.</p>

              <div style={{ marginTop: "18px", fontSize: "13px", fontWeight: 700 }}>Your membership includes:</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginTop: "12px" }}>
                {["Personalized meal feedback by photo, voice or text", "AI coaching whenever you need it", "Habit and body-composition tracking", "A free live demo with Deb, if you'd like one"].map((line) => (
                  <div key={line} style={{ display: "flex", gap: "9px", alignItems: "flex-start" }}>
                    <IconCheck size={16} />
                    <span style={{ fontSize: "14px", lineHeight: 1.4, color: TUNI_COLORS["body-text"] }}>{line}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "26px", paddingTop: "22px", borderTop: "1px solid rgba(42,33,28,0.1)" }}>
                <div style={{ fontSize: "16px", fontWeight: 700 }}>Want to see Tuni in action first?</div>
                <p style={{ fontSize: "15px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "6px 0 0" }}>Join me for a free live demo. I'll show you how Tuni works with everyday meals, answer your questions and help you get started. Whether you're curious or already a member, you're welcome.</p>
                <button onClick={handleBookDemo} style={{ fontSize: "14.5px", fontWeight: 700, color: TUNI_COLORS.ink, background: "transparent", padding: "13px 24px", borderRadius: "999px", border: "1.5px solid rgba(42,33,28,0.22)", cursor: "pointer", marginTop: "14px" }}>Book a Free Live Demo →</button>
              </div>
            </div>

            <div style={{ background: "#fff", borderRadius: "24px", padding: "34px 32px", boxShadow: "0 24px 56px rgba(42,33,28,0.12)" }}>
              {!form.submitted ? (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <RadiantHeart size={30} />
                    <TuniWordmark size={24} />
                  </div>
                  <p style={{ fontWeight: 700, fontSize: "14px", margin: "16px 0 0" }}><StrikePrice was="$15" />$8.99 + GST today · Tuni Founding Membership</p>
                  <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "20px", margin: "14px 0 0" }}>Payment details</h3>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "16px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      <input type="text" placeholder="First name" value={form.firstName} onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))} style={inputStyle} required />
                      <input type="text" placeholder="Last name" value={form.lastName} onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))} style={inputStyle} required />
                    </div>
                    <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} style={inputStyle} required />
                    <select style={inputStyle} defaultValue="Canada">
                      <option>Canada</option>
                      <option>United States</option>
                    </select>
                    <button type="button" style={{ alignSelf: "flex-start", background: "none", border: 0, fontSize: "13px", textDecoration: "underline", color: TUNI_COLORS.ink, cursor: "pointer", padding: 0 }}>Have a promo code? Click to enter</button>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: 700, marginBottom: "6px" }}>
                        <span>Card details</span>
                        <span style={{ color: TUNI_COLORS["muted-gray"], fontWeight: 400 }}>Not connected in this preview</span>
                      </div>
                      <div style={{ ...inputStyle, display: "flex", alignItems: "center", color: TUNI_COLORS["placeholder-gray"] }}>•••• •••• •••• ••••</div>
                    </div>
                    <p style={{ fontSize: "12.5px", color: TUNI_COLORS["muted-gray"], margin: 0 }}>Your card is entered directly into Stripe's encrypted fields - the number never touches Tuni's servers.</p>
                    <button type="submit" style={{ fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, border: "none", padding: "16px", borderRadius: "999px", cursor: "pointer", boxShadow: "0 14px 30px rgba(240,80,140,0.30)" }}>Start Tuni $8.99 + GST</button>
                  </form>
                  <p style={{ fontSize: "11.5px", color: TUNI_COLORS["placeholder-gray"], textAlign: "center", marginTop: "14px" }}>Stripe is PCI DSS Level 1 certified · Encrypted in transit<br />Login details are emailed to the address above. Cancel anytime - no card details are stored by Tuni.</p>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "18px 6px" }}>
                  <div style={{ marginBottom: "14px", display: "flex", justifyContent: "center" }}>
                    <RadiantHeart size={56} />
                  </div>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "28px" }}>You're on the list.</div>
                  <p style={{ fontSize: "15px", lineHeight: 1.55, color: TUNI_COLORS["body-text"], margin: "12px auto 0", maxWidth: "300px" }}>I'll be in touch to finish setting up your membership.</p>
                  <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "24px", color: TUNI_COLORS.pink, marginTop: "16px" }}>Talk soon, Deb</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <TuniFooter />
    </main>
  );
};

export default TuniJoinPage;
