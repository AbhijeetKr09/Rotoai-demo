import Image from "next/image";
import Container from "./Container";
import Button from "./Button";

export default function CTABand() {
  return (
    <section className="bg-mist-50 pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-4xl bg-navy-900 px-8 py-16 sm:px-14 lg:py-20">
          <Image
            src="/images/power-night.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/80 to-magenta-800/70" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p className="mt-4 text-white/70">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <Button href="/contact" variant="light" arrow className="shrink-0 px-8 py-4">
              Request a Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
