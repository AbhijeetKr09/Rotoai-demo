import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Industries — RotoAI",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const industries = [
  { title: "Manufacturing", copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.", image: "/images/factory-orange.jpg" },
  { title: "Energy & Utilities", copy: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.", image: "/images/power-night.jpg" },
  { title: "Metals & Mining", copy: "Duis aute irure dolor in reprehenderit in voluptate velit.", image: "/images/weld.jpg" },
  { title: "Automotive", copy: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.", image: "/images/hero-robot.jpg" },
  { title: "Heavy Machinery", copy: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.", image: "/images/machines.jpg" },
  { title: "Process Industry", copy: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.", image: "/images/control-panel.jpg" },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Lorem ipsum for every"
        accent="industry."
        copy="Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore."
        image="/images/power-night.jpg"
        alt="Industrial power plant lit up at night"
        crumbs={[{ label: "Resources" }, { label: "Industries" }]}
      />

      <section className="bg-mist-50 py-24 lg:py-32">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i, n) => (
            <Reveal key={i.title} delay={(n % 3) * 80}>
              <div className="group h-full overflow-hidden rounded-3xl border border-navy-900/5 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <div className="relative h-48 overflow-hidden">
                  <Image src={i.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <h2 className="font-display text-xl font-bold text-navy-900">{i.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy-800/60">{i.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <CTABand />
    </>
  );
}
