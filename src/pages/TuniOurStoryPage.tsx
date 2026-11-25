import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setCanonical } from "@/lib/seo";
import TuniHeader from "@/components/tuni/TuniHeader";
import TuniFooter from "@/components/tuni/TuniFooter";
import { TUNI_COLORS, TUNI_FONT_IMPORT, TUNI_CHROME_CSS, useBookDemo } from "@/components/tuni/TuniShared";
import debbieBeach from "@/assets/debbie-beach.jpeg";

const TuniOurStoryPage = () => {
  useEffect(() => {
    document.title = "Why I Built Tuni | Tuni";
    const desc = "Deb's story: why she built Tuni, and the real numbers from the process that inspired it.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    setCanonical("/bff-coach/story");
  }, []);

  const handleBookDemo = useBookDemo();

  return (
    <main style={{ background: TUNI_COLORS.cream, color: TUNI_COLORS.ink, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        ${TUNI_FONT_IMPORT}
        * { box-sizing: border-box; }
        ${TUNI_CHROME_CSS}
        @media (max-width: 768px) {
          .bff-grid-2col { grid-template-columns: 1fr !important; }
          .bff-sticky-desktop { position: static !important; top: auto !important; }
        }
      `}</style>

      <TuniHeader />

      <section style={{ background: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1340px", margin: "0 auto", display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: "54px", alignItems: "start" }}>
          <div className="bff-sticky-desktop" style={{ position: "sticky", top: "100px", alignSelf: "start" }}>
            <img src={debbieBeach} alt="Debbie at beach" style={{ display: "block", width: "100%", height: "520px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 24px 50px rgba(42,33,28,0.16)" }} />
            <div style={{ background: "#fff", borderRadius: "16px", padding: "20px 22px", boxShadow: "0 10px 25px rgba(42,33,28,0.08)", marginTop: "18px" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "22px", lineHeight: 1.3, color: TUNI_COLORS.ink }}>"I built this because I needed it too."</div>
            </div>
          </div>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: "1px solid rgba(42, 33, 28, 0.08)", color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Why I built Tuni</span>
            <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "20px 0 0" }}>I wanted to understand <span style={{ color: TUNI_COLORS.pink }}>my body again.</span></h1>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "20px 0 0" }}>When I hit midlife, the things that had always worked for me stopped working.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>So I tried harder. More workouts, more protein, trainers, supplements, HRT.</p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS.ink, fontWeight: 700, margin: "12px 0 0" }}>I was putting in the effort. I still couldn't tell what was helping.</p>

            <div style={{ display: "flex", gap: "10px", margin: "24px 0 0" }}>
              {[
                { year: "2022", val: "34.8%" },
                { year: "2023", val: "34.0%" },
                { year: "2024", val: "34.8%" },
              ].map((row) => (
                <div key={row.year} style={{ flex: 1, background: TUNI_COLORS.mat, borderRadius: "14px", padding: "14px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: "12px", color: TUNI_COLORS["muted-gray"], fontWeight: 600 }}>{row.year}</div>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "19px", color: TUNI_COLORS["placeholder-gray"], marginTop: "4px" }}>{row.val}</div>
                  <div style={{ fontSize: "11px", color: TUNI_COLORS["muted-gray"], marginTop: "2px" }}>body fat</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", margin: "10px 0 0" }}>
              {[
                { val: "124.2 → 114.2 lb", label: "10 lb lighter", color: TUNI_COLORS.coral },
                { val: "32.3% → 25.7%", label: "body fat", color: TUNI_COLORS.pink },
                { val: "20.0 → 15.4 lb", label: "trunk fat", color: TUNI_COLORS.amber },
                { val: "8 → 5", label: "visceral fat", color: TUNI_COLORS.green },
              ].map((stat) => (
                <div key={stat.label} style={{ background: "#fff", borderRadius: "14px", padding: "16px 14px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 900, fontSize: "26px", color: stat.color, lineHeight: 1 }}>{stat.val}</div>
                  <div style={{ fontSize: "12.5px", color: TUNI_COLORS["body-text"], marginTop: "6px" }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "20px 0 0" }}>At 54, I started using AI to connect my meals and everyday habits with changes in my body. I began seeing patterns, making small adjustments and understanding my progress.</p>
            <div style={{ marginTop: "24px", paddingLeft: "18px", borderLeft: "2px solid rgba(240,80,140,0.3)" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "26px", lineHeight: 1.25, color: TUNI_COLORS.ink }}>I wasn't missing effort. I was missing feedback.</div>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "20px 0 0" }}>I built Tuni because I believe every woman deserves to understand her changing body and feel confident caring for it.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>What helped me understand mine became something I could share.</p>
            <p style={{ fontSize: "13px", lineHeight: 1.5, color: TUNI_COLORS["muted-gray"], background: TUNI_COLORS.mat, borderRadius: "14px", padding: "14px 16px", margin: "24px 0 0", fontWeight: 600, fontStyle: "italic" }}>These are my personal results from the process that inspired Tuni. Individual experiences and results vary.</p>
          </div>
        </div>
      </section>

      <section style={{ background: TUNI_COLORS.ink, color: TUNI_COLORS.cream, padding: "90px 26px", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.4vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0 }}>Ready to find out what works for you?</h2>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginTop: "28px" }}>
            <Link to="/bff-coach/join" style={{ textDecoration: "none", display: "inline-block", fontSize: "17px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "17px 32px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.30)" }}>Start Tuni for $8.99 →</Link>
            <button onClick={handleBookDemo} style={{ fontSize: "17px", fontWeight: 700, color: TUNI_COLORS.cream, background: "transparent", padding: "16px 30px", borderRadius: "999px", border: "1.5px solid rgba(255,247,241,0.35)", cursor: "pointer" }}>Book a Live Demo</button>
          </div>
        </div>
      </section>

      <TuniFooter />
    </main>
  );
};

export default TuniOurStoryPage;
