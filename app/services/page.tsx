import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { ArrowIcon } from "@/components/Icons";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — RotoAI",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Lorem ipsum dolor"
        accent="sit amet."
        copy="Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna."
        image="/images/hero-robot.jpg"
        alt="Blue industrial robot arm on a production line"
        crumbs={[{ label: "Services" }]}
      />

      <section className="bg-mist-50 py-24 lg:py-32">
        <Container className="grid gap-8 md:grid-cols-2">
          {services.map(({ slug, title, copy, image, icon: Icon }, n) => (
            <Reveal key={slug} delay={(n % 2) * 100}>
              <Link
                href={`/services/${slug}`}
                className="group block overflow-hidden rounded-4xl border border-navy-900/5 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-white">
                    <Icon />
                  </div>
                </div>
                <div className="flex items-end justify-between gap-6 p-8">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-navy-900">{title}</h2>
                    <p className="mt-2 text-navy-800/60">{copy}</p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist-100 text-navy-900 transition group-hover:bg-magenta-600 group-hover:text-white">
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      <CTABand />
    </>
  );
}
