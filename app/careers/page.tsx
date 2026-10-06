import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import CTABand from "@/components/CTABand";
import { BoltIcon, GlobeIcon, ShieldIcon, UsersIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Careers — RotoAI",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const perks = [
  { title: "Lorem Growth", copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: BoltIcon },
  { title: "Ipsum Team", copy: "Ut enim ad minim veniam, quis nostrud exercitation.", icon: UsersIcon },
  { title: "Dolor Wellbeing", copy: "Duis aute irure dolor in reprehenderit in voluptate.", icon: ShieldIcon },
  { title: "Sit Flexibility", copy: "Excepteur sint occaecat cupidatat non proident.", icon: GlobeIcon },
];

const openings = [
  { role: "Senior Machine Learning Engineer", team: "Engineering", type: "Full-time", place: "New Delhi" },
  { role: "Embedded Systems Engineer", team: "Hardware", type: "Full-time", place: "New Delhi" },
  { role: "Field Application Engineer", team: "Operations", type: "Full-time", place: "On-site" },
  { role: "Business Development Associate", team: "Growth", type: "Full-time", place: "Remote" },
  { role: "Data Science Intern", team: "Engineering", type: "Internship", place: "New Delhi" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Lorem ipsum dolor"
        accent="join us."
        copy="Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore."
        image="/images/engineers.jpg"
        alt="Engineers collaborating on the factory floor"
        crumbs={[{ label: "Careers" }]}
      />

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-magenta-700">Why RotoAI</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              Lorem ipsum dolor sit amet
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map(({ title, copy, icon: Icon }, n) => (
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
        <Container className="max-w-4xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-magenta-700">Open positions</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Find your role
            </h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {openings.map((o, n) => (
              <Reveal key={o.role} delay={n * 60}>
                <div className="flex flex-col gap-4 rounded-3xl border border-navy-900/5 bg-white p-6 shadow-card transition hover:shadow-soft sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">{o.role}</h3>
                    <p className="mt-1 text-sm text-navy-800/55">
                      {o.team} · {o.type} · {o.place}
                    </p>
                  </div>
                  <Button href="/contact" variant="secondary" arrow className="shrink-0 px-5 py-2.5">
                    Apply
                  </Button>
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
