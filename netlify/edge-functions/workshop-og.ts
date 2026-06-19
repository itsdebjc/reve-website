import type { Config, Context } from "https://edge.netlify.com";

// Social crawlers that need static OG tags
const CRAWLERS = [
  "facebookexternalhit",
  "twitterbot",
  "linkedinbot",
  "slackbot",
  "whatsapp",
  "telegrambot",
  "discordbot",
  "iframely",
  "embedly",
  "outbrain",
];

export default async (request: Request, context: Context) => {
  const ua = (request.headers.get("user-agent") || "").toLowerCase();
  const isCrawler = CRAWLERS.some((bot) => ua.includes(bot));

  if (!isCrawler) {
    // Real user — let the SPA handle it
    return context.next();
  }

  // Crawler — return static HTML with BFF OG tags
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>BFF Workshop — Reve AI</title>
    <meta name="description" content="A live AI wellness workshop for midlife women who are done guessing. Learn the Body Food Feedback system and get access to your BFF coach." />
    <meta property="og:title" content="BFF Workshop — Reve AI" />
    <meta property="og:description" content="A live AI wellness workshop for midlife women who are done guessing. Learn the Body Food Feedback system and get access to your BFF coach." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://reveai.ca/workshop" />
    <meta property="og:image" content="https://reveai.ca/og-bff-workshop.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="BFF Workshop — Reve AI" />
    <meta name="twitter:description" content="A live AI wellness workshop for midlife women who are done guessing. Learn the Body Food Feedback system and get access to your BFF coach." />
    <meta name="twitter:image" content="https://reveai.ca/og-bff-workshop.png" />
  </head>
  <body></body>
</html>`;

  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
};

export const config: Config = {
  path: "/workshop",
};
