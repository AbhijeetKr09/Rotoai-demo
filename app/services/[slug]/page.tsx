import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { CheckIcon } from "@/components/Icons";
import { services } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return {
    title: service ? `${service.title} — RotoAI` : "Service — RotoAI",
    description: service?.copy,
  };
}

const features = [
  "Lorem ipsum dolor sit amet consectetur",
  "Adipiscing elit sed do eiusmod tempor",
  "Ut enim ad minim veniam quis nostrud",
  "Duis aute irure dolor in reprehenderit",
];

const steps = [
  { title: "Discover", copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod." },
  { title: "Deploy", copy: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
  { title: "Optimise", copy: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        copy={service.copy}
        image={service.image}
        alt={service.title}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />

      <section className="bg-mist-50 py-24 lg:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-magenta-700">Overview</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipiscing.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-800/65">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-navy-900">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-magenta-100 text-magenta-700">
                    <CheckIcon />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/contact" arrow>
                Request a Demo
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-soft">
              <Image
                src="/images/machines.jpg"
                alt="Rows of machines inside a factory"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-950 py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-magenta-400">Our approach</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How we deliver {service.title}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {steps.map((p, n) => (
              <Reveal key={p.title} delay={n * 100}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                  <p className="font-display text-5xl font-extrabold text-magenta-500/80">0{n + 1}</p>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">Explore other services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map(({ slug: s, title, copy, icon: Icon }) => (
              <Link
                key={s}
                href={`/services/${s}`}
                className="group rounded-3xl border border-navy-900/5 bg-mist-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-900 text-white transition group-hover:bg-magenta-600">
                  <Icon />
                </div>
                <h3 className="mt-5 font-display font-bold text-navy-900">{title}</h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-navy-800/60">{copy}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
