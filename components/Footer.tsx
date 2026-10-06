import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

const company = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#work" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#contact" },
];

const resources = [
  { label: "Blogs", href: "#" },
  { label: "Case Studies", href: "#work" },
  { label: "Brochure", href: "#" },
  { label: "FAQ", href: "#" },
];

const services = [
  "Lorem Automation",
  "Ipsum Integration",
  "Dolor Analytics",
  "Sit Consulting",
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-magenta-500/60 to-transparent" />

      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
        {/* Brand + contact */}
        <div className="lg:col-span-4">
          <span className="inline-block rounded-2xl bg-white px-4 py-2.5">
            <Logo />
          </span>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <ul className="mt-7 space-y-4 text-sm text-white/70">
            <ContactRow icon={<PinIcon />}>
              <a
                href="https://maps.app.goo.gl/spRhi7925bzZL8zm9"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                FITT, IIT Delhi, New Delhi, India
              </a>
            </ContactRow>
            <ContactRow icon={<MailIcon />}>
              <a href="mailto:madhusmita@rotoai.in" className="hover:text-white">
                madhusmita@rotoai.in
              </a>
            </ContactRow>
            <ContactRow icon={<PhoneIcon />}>
              <a href="tel:+919891661580" className="hover:text-white">
                +91 98916 61580
              </a>
            </ContactRow>
          </ul>

          <a
            href="https://www.linkedin.com/company/rotoai/"
            target="_blank"
            rel="noreferrer"
            aria-label="RotoAI on LinkedIn"
            className="mt-7 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-magenta-500 hover:bg-magenta-600 hover:text-white"
          >
            <LinkedInIcon />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:pl-12">
          <Column title="Company" items={company} />
          <Column title="Resources" items={resources} />
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="#services"
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>© 2026 RotoAI Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link href="#" className="transition hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function Column({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
        {title}
      </h4>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 text-magenta-400">{icon}</span>
      <span>{children}</span>
    </li>
  );
}

const ico = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function PinIcon() {
  return (
    <svg {...ico}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.500C5 14.800 12 21 12 21z" />
      <circle cx="12" cy="9.500" r="2.500" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...ico}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...ico}>
      <path d="M5 4h4l2 5-2.500 1.500a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.980 3.500a2.500 2.500 0 11-.01 5 2.500 2.500 0 01.01-5zM3 9.500h4V21H3V9.500zm6.500 0h3.800v1.600h.1c.5-1 1.800-1.900 3.700-1.900 4 0 4.700 2.600 4.700 6V21h-4v-5.200c0-1.200 0-2.800-1.700-2.800s-2 1.300-2 2.700V21h-4V9.500z" />
    </svg>
  );
}
