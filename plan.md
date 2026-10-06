# RotoAI Website Redesign — plan.md

**Project:** New rotoai.in — same color scheme, modern look, better wording, SEO-optimised
**Source audited:** `Desktop\RotoAI Source code\Website\rotoai.in` (Next.js 14 site, last commit 12 Sep 2026 — "removal of rotodynamic elements")
**Prepared:** 6 Oct 2026

> **Read this first — where the content lives.** About half of the site's content is **not in the code**. Blogs, case studies, testimonials, team members, clients, collaborators, industries and job openings are stored in a PostgreSQL database and edited through a separate admin panel (`admin-rotoai-in.vercel.app`). Section 3 lists everything that is in the code word for word. Section 3.9 lists what must be exported from the database before the rebuild — without that export, the content inventory is incomplete.

---

## 1. Current design — brief

### 1.1 Tech stack
| Item | Current |
|---|---|
| Framework | Next.js 14.2.4 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS 3.4 (custom colors in `tailwind.config.ts`) |
| Font | Inter (Google Font, via `next/font`) — used for everything |
| Data | Prisma 5 + PostgreSQL |
| Email | Nodemailer via Zoho (contact form OTP + notifications) |
| Toasts | Sonner |
| Deployment | Dockerfile + compose.yaml present; admin panel on Vercel |

### 1.2 Overall look and feel
- **Style:** Clean corporate template, circa 2023–24. White backgrounds alternating with light-grey (`#F5F5F5`) bands, centred section titles in uppercase navy, rounded-3xl cards with very soft shadows.
- **Brand accents:** Pink/magenta for buttons and highlights, deep navy for headings and the footer, purple for card body text.
- **Imagery:** AI-generated isometric "smart factory" illustration in the hero (blue/cyan), stock engineering photos for blogs/case studies, many small SVG icons.
- **Layout width:** `wrapper` = max 1024px (lg) / 1280px (xl), 24–48px side padding.
- **Motion:** Infinite horizontal logo marquee (30s loop), bouncing "customized software" line, small hover scale (1.01) on cards, colour-swap hover on buttons.
- **Decorative effect:** Large blurred colour blobs (pink `#cd1d5b` and soft blue `#8dabd8`) behind service-page heroes and the contact page — the most "modern" element on the site.

### 1.3 Global components
| Component | Description |
|---|---|
| **Navbar** (80px tall, white) | Logo left (`rotoai-latest.jpeg`, 192px wide). Links right: About · Services ▾ · Resources ▾ · Careers · **Request a Demo** (pink filled button). Dropdowns open on hover. Mobile: hamburger → full-screen white overlay. |
| **Footer** (navy `#264470`, white text) | 4 columns: brand + address/email/phone · Quick Links · Resources · Social Media. Bottom bar: ©2024 RotoAI Pvt. Ltd. All Rights Reserved · Terms & Conditions · Privacy Policy. |
| **CTA band** (pink `#C12C61`) | Used at the bottom of Home, About, and every service page. Left: heading + one line; right: navy pill button. |
| **Service card** | White, rounded-3xl, soft shadow; grey circle icon on top; navy uppercase heading, purple body text. |

> ⚠️ The source line for "Service card" was corrupted in the original paste (a table cell ran together with a task checklist, with no line breaks between them). Reconstructed above from context in 1.2 (uppercase navy headings, purple card body text). The checklist itself has been recovered separately below as **Section 6 — Build checklist**, since that's clearly what it was.

---

## 2. Redesign direction (this pass)

- **Color scheme:** keep the existing palette (navy `#264470`, pink/magenta `#C12C61` / `#cd1d5b`, soft blue `#8dabd8`, light-grey `#F5F5F5`) as the base. Additional shades/tints may be introduced where needed (e.g. a deeper navy for contrast, a tinted pink for hover/secondary states, neutral greys for text hierarchy) to make the UI feel more attractive, professional, and modern — not a palette replacement, an extension.
- **Content:** placeholder **lorem ipsum** copy everywhere for this pass. Real wording (Section 5.3 of the original plan) comes later, once layout/visual direction is approved.
- **Scope for now:** rebuild the global shell (Navbar, Footer, CTA band) and the Home page with a modernized visual system — then extend to service/about/contact pages once the direction is signed off.

---

## 3. Content inventory — status

Not yet re-audited in this pass. Per the original plan, roughly half of the site's content (blogs, case studies, testimonials, team, clients, collaborators, industries, job openings) lives in PostgreSQL and is managed via the separate admin panel at `admin-rotoai-in.vercel.app`, not in the codebase. A database export is required before the content inventory can be considered complete — tracked as a pre-launch dependency, not blocking the current visual/structural rebuild.

---

## 6. Build checklist

- [ ] Write new copy per page (Section 5.3 principles)
- [ ] Design tokens + components (Section 2.4, 5.1); SVG logo
- [ ] Wireframes → visual design (Home, one service page, About, Contact)
- [ ] Build (upgrade to the current Next.js + Tailwind releases, App Router, MDX for content)
- [ ] SEO implementation (Section 4.2): metadata, JSON-LD, sitemap, redirects, alt text
- [ ] Rewrite Privacy Policy and Terms for what the site actually does
- [ ] Performance + accessibility pass (Lighthouse ≥ 95)
- [ ] Launch, submit sitemap, monitor Search Console for 4 weeks
