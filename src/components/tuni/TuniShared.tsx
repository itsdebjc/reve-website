import { useId, type ReactNode } from "react";

export const TUNI_COLORS = {
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

export const TUNI_FONT_IMPORT =
  "@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Caveat:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');";

// Shared responsive rules the header/footer depend on. Every page that
// renders TuniHeader/TuniFooter must include this in its own <style> block.
export const TUNI_CHROME_CSS = `
  @media (max-width: 768px) {
    .bff-hide-mobile { display: none !important; }
    .bff-header-label { display: none !important; }
    .bff-header-tagline { display: none !important; }
    .bff-header-button { padding: 8px 14px !important; font-size: 12px !important; }
  }
`;

export const HeartGradient = ({ size = 26, color }: { size?: number; color?: string }) => {
  const gradId = `bffGrad-${useId()}`;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ flexShrink: 0 }}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={TUNI_COLORS.coral} />
          <stop offset="1" stopColor={TUNI_COLORS.pink} />
        </linearGradient>
      </defs>
      <path
        d="M60 100 C28 79 14 62 14 43 C14 29 25 20 37 20 C49 20 56 28 60 36 C64 28 71 20 83 20 C95 20 106 29 106 43 C106 62 92 79 60 100 Z"
        fill={color ?? `url(#${gradId})`}
      />
    </svg>
  );
};

export const RadiantHeart = ({ size = 78 }: { size?: number }) => {
  const gradId = `bffGrad2-${useId()}`;
  return (
    <svg width={size} height={size} viewBox="0 0 220 220" fill="none">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={TUNI_COLORS.coral} />
          <stop offset="1" stopColor={TUNI_COLORS.pink} />
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
            stroke={i % 2 === 0 ? TUNI_COLORS.amber : TUNI_COLORS.coral}
            transform={`rotate(${angle} 110 110)`}
          />
        ))}
      </g>
      <path
        d="M110 168 C70 142 50 120 50 96 C50 78 64 66 80 66 C95 66 105 76 110 86 C115 76 125 66 140 66 C156 66 170 78 170 96 C170 120 150 142 110 168 Z"
        fill={`url(#${gradId})`}
      />
    </svg>
  );
};

export const IconCheck = ({ size = 16, color = TUNI_COLORS.coral }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="11" fill={color} opacity="0.12" />
    <path d="M7.5 12.5l3 3 6-6.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TuniWordmark = ({ size = 23 }: { size?: number }) => (
  <div
    style={{
      display: "flex",
      alignItems: "baseline",
      fontFamily: "'Bricolage Grotesque', sans-serif",
      fontWeight: 800,
      fontSize: size,
      letterSpacing: "-0.03em",
      lineHeight: 1,
    }}
  >
    <span style={{ color: TUNI_COLORS.coral }}>T</span>
    <span style={{ color: TUNI_COLORS.pink }}>u</span>
    <span style={{ color: TUNI_COLORS.amber }}>n</span>
    <span style={{ color: TUNI_COLORS.coral }}>i</span>
  </div>
);

export const StrikePrice = ({ was, size = 14, color = TUNI_COLORS["muted-gray"] }: { was: string; size?: number; color?: string }) => (
  <span style={{ fontSize: size, color, textDecoration: "line-through", marginRight: "4px" }}>{was}</span>
);

export const useBookDemo = () => () => {
  window.open("https://calendly.com/deb-xjsk/tuniworkshop?month=2026-11", "_blank", "noopener,noreferrer");
};
