import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";

const logos = ["Lorem", "Ipsum", "Dolor", "Consectetur", "Adipiscing", "Tempor"];

const heroStats = [
  { value: "30%", label: "Lorem reduction in downtime" },
  { value: "24/7", label: "Ipsum remote monitoring" },
  { value: "3 mo", label: "Dolor time to ROI" },
];

const services = [
  {
    title: "Lorem Automation",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
    icon: BoltIcon,
  },
  {
    title: "Ipsum Integration",
    copy: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    icon: LayersIcon,
  },
  {
    title: "Dolor Analytics",
    copy: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    icon: ChartIcon,
  },
  {
    title: "Sit Consulting",
    copy: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    icon: CompassIcon,
  },
];

type Tile =
  | { kind: "stat"; value: string; label: string; tone: "light" | "navy" | "magenta" }
  | { kind: "img"; src: string; alt: string };

const tiles: Tile[] = [
  { kind: "stat", value: "80%", label: "Lorem ipsum dolor sit amet consectetur", tone: "light" },
  { kind: "img", src: "/images/power-night.jpg", alt: "Industrial power plant lit up at night" },
  { kind: "stat", value: "72M", label: "Adipiscing elit sed do eiusmod tempor", tone: "navy" },
  { kind: "img", src: "/images/machines.jpg", alt: "Rows of machines inside a factory" },
  { kind: "img", src: "/images/line-equipment.jpg", alt: "A line of electrical equipment in a factory" },
  { kind: "stat", value: "285k", label: "Ut enim ad minim veniam quis nostrud", tone: "magenta" },
  { kind: "img", src: "/images/weld.jpg", alt: "Welder working on metal with sparks" },
  { kind: "stat", value: "100+", label: "Duis aute irure dolor in reprehenderit", tone: "light" },
];

const toneClass = {
  light: "bg-white text-navy-900 border border-navy-900/5",
  navy: "bg-navy-800 text-white",
  magenta: "bg-magenta-600 text-white",
};

const steps = [
  {
    title: "Lorem Deployment",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    icon: LayersIcon,
  },
  {
    title: "Ipsum Connect",
    copy: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    icon: WifiIcon,
  },
  {
    title: "Dolor Predict",
    copy: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    icon: BellIcon,
  },
];

const work = [
  {
    title: "Lorem Ipsum Plant Expansion",
    tag: "Lorem · 2026",
    src: "/images/factory-orange.jpg",
    alt: "Orange industrial robots on an assembly line",
    className: "lg:col-span-7 lg:row-span-2 min-h-[22rem]",
  },
  {
    title: "Dolor Sit Control Upgrade",
    tag: "Ipsum · 2025",
    src: "/images/control-panel.jpg",
    alt: "Touchscreen control panel on an industrial machine",
    className: "lg:col-span-5 min-h-[16rem]",
  },
  {
    title: "Amet Consectetur Retrofit",
    tag: "Dolor · 2025",
    src: "/images/factory-interior.jpg",
    alt: "Interior of a large industrial factory",
    className: "lg:col-span-5 min-h-[16rem]",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-navy-950">
        <Image
          src="/images/hero-robot.jpg"
          alt="Blue industrial robot arm on an automated production line"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/55 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30" />

        <Container className="relative pb-10 pt-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-magenta-400" />
              Lorem ipsum · Industrial AI
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Lorem ipsum dolor
              <br />
              <span className="text-gradient-light">sit amet consectetur.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Adipiscing elit sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua enim ad minim veniam quis nostrud.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" variant="primary" arrow className="px-7 py-4">
                Request a Demo
              </Button>
              <Button href="#services" variant="outline" className="px-7 py-4">
                Explore Services
              </Button>
            </div>
          </div>

          {/* floating live card */}
          <div className="absolute bottom-40 right-8 hidden w-72 rounded-3xl border border-white/15 bg-white/10 p-5 text-white shadow-soft backdrop-blur-xl xl:block">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white/70">
              <span>Live monitoring</span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Online
              </span>
            </div>
            <div className="mt-4 flex h-16 items-end gap-1.5">
              {[40, 65, 50, 80, 55, 90, 70, 60, 85, 45].map((h, n) => (
                <span
                  key={n}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-t-md ${n === 5 ? "bg-magenta-400" : "bg-white/30"}`}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-white/70">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-white/55 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Logo marquee */}
      <section className="border-b border-navy-900/5 bg-white py-10">
        <Container>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-navy-800/40">
            Trusted by lorem ipsum teams worldwide
          </p>
        </Container>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-20">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="font-display text-2xl font-extrabold tracking-tight text-navy-900/25"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-mist-50 py-24 lg:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="grid grid-cols-2 gap-4">
            <div className="relative col-span-1 row-span-2 min-h-[26rem] overflow-hidden rounded-4xl">
              <Image
                src="/images/engineers.jpg"
                alt="Engineers reviewing diagnostics on a laptop on the factory floor"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-4xl">
              <Image
                src="/images/control-panel.jpg"
                alt="Industrial control panel with touchscreen"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex aspect-square flex-col justify-end rounded-4xl bg-magenta-600 p-6 text-white">
              <p className="font-display text-5xl font-extrabold">98%</p>
              <p className="mt-1 text-sm text-white/80">Ipsum satisfaction rate</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <span className="text-xs font-semibold uppercase tracking-widest text-magenta-700">
              About RotoAI
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              We believe in lorem ipsum dolor sit amet, consectetur adipiscing.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-800/65">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Reduce lorem costs by up to 40%",
                "Increase ipsum lifespan through optimal loads",
                "Enterprise-grade dolor security and encryption",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-navy-900">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-magenta-100 text-magenta-700">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="#services" variant="secondary" arrow>
                Learn more
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-24 lg:py-32">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-magenta-700">
              What we do
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="mt-5 text-navy-800/65">
              Adipiscing elit sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua ut enim ad minim veniam.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, copy, icon: Icon }, n) => (
              <Reveal key={title} delay={n * 80}>
                <div className="group h-full rounded-3xl border border-navy-900/5 bg-mist-50 p-7 transition duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-white transition group-hover:bg-magenta-600">
                    <Icon />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-navy-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-800/60">
                    {copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* stat + photo bento */}
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {tiles.map((t, n) =>
              t.kind === "stat" ? (
                <div
                  key={n}
                  className={`flex min-h-52 flex-col justify-between rounded-3xl p-6 ${toneClass[t.tone]}`}
                >
                  <p className="font-display text-4xl font-extrabold lg:text-5xl">
                    {t.value}
                  </p>
                  <p
                    className={`text-sm ${t.tone === "light" ? "text-navy-800/60" : "text-white/75"}`}
                  >
                    {t.label}
                  </p>
                </div>
              ) : (
                <div
                  key={n}
                  className="relative min-h-52 overflow-hidden rounded-3xl"
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section id="process" className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-magenta-700/25 blur-3xl" />
        <Container className="relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-magenta-400">
              How it works
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              From chaos to control in 3 steps
            </h2>
          </Reveal>

          <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" />
            {steps.map(({ title, copy, icon: Icon }, n) => (
              <Reveal key={title} delay={n * 100}>
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-navy-900 text-magenta-300">
                    <Icon />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-magenta-400">
                    Step {n + 1}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Work */}
      <section id="work" className="bg-mist-50 py-24 lg:py-32">
        <Container>
          <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-magenta-700">
                Our work in action
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
                Built for the <span className="text-gradient">toughest jobs</span>
              </h2>
            </div>
            <Button href="#" variant="secondary" arrow>
              All case studies
            </Button>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            {work.map((w, n) => (
              <Reveal key={w.title} delay={n * 80} className={w.className}>
                <article className="group relative h-full min-h-[inherit] overflow-hidden rounded-4xl">
                  <Image
                    src={w.src}
                    alt={w.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-magenta-300">
                        {w.tag}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                        {w.title}
                      </h3>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-navy-900 transition group-hover:bg-magenta-600 group-hover:text-white">
                      <ArrowIcon />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-magenta-700">
              Lorem feedback
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              Ipsum dolor sit amet consectetur
            </h2>
          </Reveal>
          <Reveal>
            <TestimonialSlider />
          </Reveal>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-mist-50 py-24 lg:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-magenta-700">
              Get in touch
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              Schedule your discovery call
            </h2>
            <p className="mt-5 max-w-lg text-lg text-navy-800/65">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. No
              pressure, just a sed do eiusmod assessment for your site.
            </p>
            <div className="mt-8 rounded-3xl border border-navy-900/5 bg-white p-6 shadow-card">
              <p className="text-sm font-semibold text-navy-900">What we will cover</p>
              <ul className="mt-4 space-y-3 text-sm text-navy-800/70">
                {[
                  "Current lorem pain points",
                  "Site ipsum assessment",
                  "ROI dolor projection and pilot options",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-magenta-100 text-magenta-700">
                      <CheckIcon />
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-navy-900/5 pt-4 text-xs text-navy-800/50">
                30 minutes · Video or phone
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}

function svgProps() {
  return {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

function BoltIcon() {
  return (
    <svg {...svgProps()}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg {...svgProps()}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg {...svgProps()}>
      <path d="M4 20V10M12 20V4M20 20v-7" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg {...svgProps()}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-4 2 2-6 4-2z" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg {...svgProps()}>
      <path d="M2 9a15 15 0 0120 0M5 12.500a10 10 0 0114 0M8.500 16a5 5 0 017 0" />
      <circle cx="12" cy="19.500" r="0.800" fill="currentColor" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg {...svgProps()}>
      <path d="M6 9a6 6 0 1112 0c0 6 2 7 2 7H4s2-1 2-7zM10 20a2 2 0 004 0" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <path
        d="M4 10.500l4 4 8-9"
        stroke="currentColor"
        strokeWidth="2.400"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path
        d="M5 15L15 5m0 0H7m8 0v8"
        stroke="currentColor"
        strokeWidth="1.800"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
