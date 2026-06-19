import sharp from 'sharp';
import { writeFileSync } from 'fs';

const W = 1200;
const H = 630;

const bffSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .logo { font-family: Georgia, 'Times New Roman', serif; font-size: 28px; fill: #F7F4EE; }
      .logo-ai { fill: #EBB7C2; }
      .eyebrow { font-family: 'Courier New', monospace; font-size: 16px; fill: #EBB7C2; letter-spacing: 4px; text-transform: uppercase; }
      .title { font-family: Georgia, 'Times New Roman', serif; font-size: 68px; fill: #F7F4EE; }
      .title-italic { font-family: Georgia, 'Times New Roman', serif; font-size: 68px; fill: #EBB7C2; font-style: italic; }
      .sub { font-family: Georgia, 'Times New Roman', serif; font-size: 24px; fill: #F7F4EE; font-style: italic; opacity: 0.6; }
      .url { font-family: 'Courier New', monospace; font-size: 16px; fill: #EBB7C2; letter-spacing: 3px; opacity: 0.7; }
    </style>
  </defs>
  <rect width="${W}" height="${H}" fill="#0A0A0A"/>
  <circle cx="1100" cy="80" r="220" fill="#EBB7C2" opacity="0.06"/>
  <circle cx="1000" cy="600" r="160" fill="#EBB7C2" opacity="0.04"/>
  <text x="64" y="80" class="logo">Reve <tspan class="logo-ai">AI</tspan></text>
  <text x="64" y="290" class="eyebrow">Live AI wellness workshop</text>
  <text x="64" y="380" class="title">BFF Workshop</text>
  <text x="64" y="460" class="title-italic">Body. Food. Feedback.</text>
  <text x="64" y="520" class="sub">For midlife women who are done guessing.</text>
  <text x="64" y="598" class="url">reveai.ca/workshop</text>
</svg>`;

const reveSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .logo { font-family: Georgia, 'Times New Roman', serif; font-size: 28px; fill: #F7F4EE; }
      .logo-ai { fill: #EBB7C2; }
      .eyebrow { font-family: 'Courier New', monospace; font-size: 16px; fill: #EBB7C2; letter-spacing: 4px; text-transform: uppercase; }
      .title { font-family: Georgia, 'Times New Roman', serif; font-size: 68px; fill: #F7F4EE; }
      .title-italic { font-family: Georgia, 'Times New Roman', serif; font-size: 68px; fill: #EBB7C2; font-style: italic; }
      .sub { font-family: Georgia, 'Times New Roman', serif; font-size: 24px; fill: #F7F4EE; font-style: italic; opacity: 0.6; }
      .url { font-family: 'Courier New', monospace; font-size: 16px; fill: #EBB7C2; letter-spacing: 3px; opacity: 0.7; }
    </style>
  </defs>
  <rect width="${W}" height="${H}" fill="#0A0A0A"/>
  <circle cx="1100" cy="80" r="220" fill="#EBB7C2" opacity="0.06"/>
  <circle cx="900" cy="620" r="180" fill="#EBB7C2" opacity="0.04"/>
  <text x="64" y="80" class="logo">Reve <tspan class="logo-ai">AI</tspan></text>
  <text x="64" y="290" class="eyebrow">Custom AI systems</text>
  <text x="64" y="380" class="title">We build AI systems</text>
  <text x="64" y="460" class="title-italic">for the way you work.</text>
  <text x="64" y="520" class="sub">Smart, practical and built for your business.</text>
  <text x="64" y="598" class="url">reveai.ca</text>
</svg>`;

await sharp(Buffer.from(bffSvg)).png().toFile('public/og-bff-workshop.png');
console.log('✓ og-bff-workshop.png');

await sharp(Buffer.from(reveSvg)).png().toFile('public/og-reve-ai.png');
console.log('✓ og-reve-ai.png');
