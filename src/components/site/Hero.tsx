import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { CALENDLY_URL } from "@/lib/links";
import galleriaImage from "@/assets/hero-scene-galleria.jpg";
import websiteImage from "@/assets/hero-scene-website.jpg";
import contentImage from "@/assets/hero-scene-content.jpg";
import marketingImage2 from "@/assets/hero-scene-marketing-2.jpg";

const HOLD_MS = 6000;
const CROSSFADE_MS = 1000;

const SCENES = [
  {
    word: "marketing",
    image: galleriaImage,
    objectPosition: "center 60%",
    alt: "A grand glass-domed shopping arcade filled with people",
  },
  {
    word: "website",
    image: websiteImage,
    objectPosition: "center 45%",
    alt: "Glowing white panels in a dark gallery space",
  },
  {
    word: "content",
    image: contentImage,
    objectPosition: "center 60%",
    alt: "A figure silhouetted between rows of colourful illuminated columns",
  },
  {
    word: "marketing",
    image: marketingImage2,
    objectPosition: "center 92%",
    alt: "A glowing Coca-Cola billboard above a busy city street at night",
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const cycleRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SCENES.length);
      cycleRef.current += 1;
    }, HOLD_MS);
    return () => clearInterval(id);
  }, [reducedMotion, paused]);

  const scene = reducedMotion ? SCENES[0] : SCENES[active];

  return (
    <section className="relative overflow-hidden h-screen min-h-[560px] max-h-[980px] flex flex-col">
      {/* Background photo stack: crossfades between scenes, each with a slow zoom */}
      <div className="absolute inset-0 bg-[#171B1E] overflow-hidden">
        {SCENES.map((s, i) => {
          const isActive = reducedMotion ? i === 0 : i === active;
          return (
            <div
              key={i}
              aria-hidden
              className="absolute inset-0 transition-opacity ease-linear overflow-hidden"
              style={{ opacity: isActive ? 1 : 0, transitionDuration: `${CROSSFADE_MS}ms` }}
            >
              <img
                key={isActive ? `${i}-${cycleRef.current}` : i}
                src={s.image}
                alt={s.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className={`w-full h-full object-cover ${isActive && !reducedMotion ? "animate-[kenburns_6s_linear_forwards]" : ""}`}
                style={{ objectPosition: s.objectPosition }}
              />
            </div>
          );
        })}
      </div>

      {/* Scrim: stronger behind the text on the left, fading out toward the right */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(23,27,30,0.86) 0%, rgba(23,27,30,0.62) 40%, rgba(23,27,30,0.28) 68%, rgba(23,27,30,0.15) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(0deg, rgba(23,27,30,0.55) 0%, transparent 40%)" }}
      />

      <div className="relative z-[2] flex-1 flex items-center px-6 md:px-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="max-w-[640px]">
            <span
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
              className="block text-[#5FC2E8] text-xs uppercase mb-6"
            >
              AI works best in expert hands
            </span>
            <h1
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
              className="text-[#F2E4D8] text-[clamp(44px,6.4vw,88px)] leading-[0.98]"
            >
              Put AI to work
              <br />
              in your{" "}
              <span className="inline-block relative" style={{ minWidth: "10ch" }}>
                <em
                  key={reducedMotion ? "static" : `${active}-${cycleRef.current}`}
                  className="not-italic italic text-[#E893AC] inline-block"
                  style={{
                    animation: reducedMotion ? undefined : `fadeWord ${CROSSFADE_MS}ms ease-in-out`,
                  }}
                >
                  {scene.word}.
                </em>
              </span>
            </h1>
            <p className="font-['Inter'] text-[clamp(16px,1.4vw,19px)] leading-relaxed text-[#F2E4D8]/85 max-w-[480px] mt-7">
              Reve is an AI ready marketing studio. We help businesses put AI to work and deliver the marketing projects that move them forward.
            </p>
            <div className="flex items-center gap-4 flex-wrap mt-9">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
                className="inline-flex items-center rounded-full border-[1.5px] border-[#F2E4D8]/60 text-[#F2E4D8] text-[13px] font-bold px-[30px] py-[15px] hover:bg-white/10 transition-colors"
              >
                Start a Conversation
              </a>

              {!reducedMotion && (
                <button
                  type="button"
                  onClick={() => setPaused((p) => !p)}
                  aria-label={paused ? "Play background animation" : "Pause background animation"}
                  className="w-11 h-11 rounded-full border-[1.5px] border-[#F2E4D8]/30 text-[#F2E4D8]/80 flex items-center justify-center hover:bg-white/10 hover:text-[#F2E4D8] transition-colors shrink-0"
                >
                  {paused ? <Play size={16} /> : <Pause size={16} />}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.04); }
        }
        @keyframes fadeWord {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
