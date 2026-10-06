import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { ArrowIcon } from "@/components/Icons";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies — RotoAI",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Built for the"
        accent="toughest jobs."
        copy="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor."
        image="/images/factory-orange.jpg"
        alt="Orange industrial robots on an assembly line"
        crumbs={[{ label: "Resources" }, { label: "Case Studies" }]}
      />

      <section className="bg-mist-50 py-24 lg:py-32">
        <Container className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((c, n) => (
            <Reveal key={c.title} delay={(n % 2) * 100}>
              <article className="group relative min-h-[26rem] overflow-hidden rounded-4xl">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-magenta-300">{c.tag}</p>
                    <h2 className="mt-2 font-display text-2xl font-bold text-white">{c.title}</h2>
                    <p className="mt-2 max-w-md text-sm text-white/70">{c.copy}</p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-navy-900 transition group-hover:bg-magenta-600 group-hover:text-white">
                    <ArrowIcon />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <CTABand />
    </>
  );
}
