import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main > section:not(:first-child) > div:not([aria-hidden]):not(.marquee)"
      )
    ).filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    targets.forEach((el) => el.classList.add("reveal-pending"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};
