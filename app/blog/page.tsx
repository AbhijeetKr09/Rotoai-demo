import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { ArrowIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Blog — RotoAI",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const posts = [
  { title: "Lorem ipsum dolor sit amet consectetur adipiscing", cat: "Insights", date: "Sep 12, 2026", image: "/images/machines.jpg" },
  { title: "Ut enim ad minim veniam quis nostrud exercitation", cat: "Technology", date: "Aug 28, 2026", image: "/images/control-panel.jpg" },
  { title: "Duis aute irure dolor in reprehenderit in voluptate", cat: "Industry", date: "Aug 04, 2026", image: "/images/line-equipment.jpg" },
  { title: "Excepteur sint occaecat cupidatat non proident", cat: "Insights", date: "Jul 19, 2026", image: "/images/factory-orange.jpg" },
  { title: "Sed ut perspiciatis unde omnis iste natus error", cat: "Guides", date: "Jun 30, 2026", image: "/images/weld.jpg" },
  { title: "Nemo enim ipsam voluptatem quia voluptas sit", cat: "Technology", date: "Jun 11, 2026", image: "/images/power-night.jpg" },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Lorem ipsum"
        accent="insights."
        copy="Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt."
        image="/images/line-equipment.jpg"
        alt="A line of electrical equipment in a factory"
        crumbs={[{ label: "Blog" }]}
      />

      <section className="bg-mist-50 py-24 lg:py-32">
        <Container>
          <Reveal>
            <Link
              href="#"
              className="group grid overflow-hidden rounded-4xl border border-navy-900/5 bg-white shadow-card transition hover:shadow-soft lg:grid-cols-2"
            >
              <div className="relative min-h-72">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-widest text-magenta-700">
                  Featured · {featured.cat}
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">{featured.title}</h2>
                <p className="mt-4 text-navy-800/65">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation.
                </p>
                <p className="mt-6 text-sm text-navy-800/50">{featured.date}</p>
              </div>
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, n) => (
              <Reveal key={p.title} delay={(n % 3) * 80}>
                <Link href="#" className="group block h-full overflow-hidden rounded-3xl border border-navy-900/5 bg-white shadow-card transition hover:-translate-y-1.5 hover:shadow-soft">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-magenta-700">{p.cat}</p>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug text-navy-900">{p.title}</h3>
                    <div className="mt-5 flex items-center justify-between text-sm text-navy-800/50">
                      <span>{p.date}</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mist-100 text-navy-900 transition group-hover:bg-magenta-600 group-hover:text-white">
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
