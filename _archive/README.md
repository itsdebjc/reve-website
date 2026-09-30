# Archive

Not part of the live build. Kept for history, not loaded by Vite since this folder sits outside `src/`.

## copy-decks/
Earlier copy decks, superseded by `reve-website-copy-deck.md` at the repo root, the active one for redesign 3.

- `Reve_AI_Copy_Deck.docx` — an older full copy deck, predates this redesign.
- `reve-website-copy-deck-ecommerce.md` — an alternate ecommerce-focused positioning draft, not the live direction.

## legacy-components/
Component files no longer imported anywhere in `src/`. Archived 2026-09-30.

- 14 were already unused before redesign 3 started: `CaseStudies`, `EcommerceStackSection`, `FinalCTA`, `Founder`, `HonestSection`, `InPractice`, `KlaviyoSignup`, `LeadMagnet`, `Method`, `NotTheory`, `ServicesFAQ`, `ThreeCards`, `Ticker`, `TrustedLogos`.
- 4 went unused when redesign 3 replaced them: `Hero` (redesign 1's homepage hero), `HeroNewDesign` (redesign 2's hero), both replaced by the current `src/components/site/Hero.tsx`; `FounderCtaBand`; `WhyReve` (an earlier redesign 3 draft of the Services page closing section, replaced by the CTA embedded in `WhichOneNeeded`).
- Plus three `.bak` files that were already sitting in source folders: `HeroNewDesign.tsx.bak`, `HonestSection.tsx.bak`, `About.tsx.bak`.

## misc/
- `reve-homepage-mockup.html` — a standalone mockup file, predates redesign 3.
- `create-copy-deck.js` — a standalone script, not wired into `package.json` scripts.
- `WEBSITE_BUILD_WORKFLOW.md` — a build log from the original April 2026 build.

## Finding earlier redesigns

- **Redesign 1** (the original site, before ~July 2026): not in git history cleanly, preserved as screenshots in `Reve AI/_Archive/reve-ai-old-site-2026-07-22/` outside this repo.
- **Redesign 2** (dark ink/cream/pink theme, Anton font, `HeroNewDesign`): tagged in git as `redesign-2-dark-studio`, pointing at the `main` branch commit it shipped on. Run `git show redesign-2-dark-studio` or check out that tag to see it.
- **Redesign 3** (Fraunces serif, alternating light and dark sections, real photography): the `reve-redesign` branch.
