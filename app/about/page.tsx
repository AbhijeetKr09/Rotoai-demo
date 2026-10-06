import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { GlobeIcon, ShieldIcon, UsersIcon, BoltIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About — RotoAI",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const values = [
  { title: "Lorem Reliability", copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.", icon: ShieldIcon },
  { title: "Ipsum Partnership", copy: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", icon: UsersIcon },
  { title: "Dolor Innovation", copy: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.", icon: BoltIcon },
  { title: "Sit Impact", copy: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.", icon: GlobeIcon },
];

const stats = [
  { value: "120+", label: "Lorem clients served" },
  { value: "98%", label: "Ipsum satisfaction rate" },
  { value: "40+", label: "Dolor industries covered" },
  { value: "24/7", label: "Sit amet support" },
];

const team = [
  { name: "A. Lorem", role: "Founder & CEO" },
  { name: "B. Ipsum", role: "Chief Technology Officer" },
  { name: "C. Dolor", role: "Head of Operations" },
  { name: "D. Amet", role: "Lead Data Scientist" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RotoAI"
        title="Lorem ipsum dolor sit"
        accent="amet consectetur."
        copy="Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image="/images/factory-interior.jpg"
        alt="Interior of a large industrial factory"
        crumbs={[{ label: "About" }]}
      />

      <section className="bg-mist-50 py-24 lg:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-magenta-700">Our story</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-800/65">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-4 leading-relaxed text-navy-800/65">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-soft">
              <Image
                src="/images/engineers.jpg"
                alt="Engineers reviewing diagnostics on the factory floor"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[50%_75%]"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-950 py-16">
        <Container className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-white/55">{s.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-magenta-700">Our values</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              What guides lorem ipsum
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, copy, icon: Icon }, n) => (
              <Reveal key={title} delay={n * 80}>
                <div className="h-full rounded-3xl border border-navy-900/5 bg-mist-50 p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-white">
                    <Icon />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-navy-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-800/60">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist-50 py-24 lg:py-32">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-magenta-700">Leadership</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              The team behind RotoAI
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, n) => (
              <Reveal key={m.name} delay={n * 80}>
                <div className="rounded-3xl border border-navy-900/5 bg-white p-6 text-center shadow-card">
                  <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-skyblue-300 to-magenta-500" />
                  <p className="mt-5 font-display font-bold text-navy-900">{m.name}</p>
                  <p className="mt-1 text-sm text-navy-800/55">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
