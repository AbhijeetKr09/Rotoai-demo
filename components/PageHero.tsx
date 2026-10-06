import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  accent,
  copy,
  image,
  alt,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  copy: string;
  image: string;
  alt: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

      <Container className="relative pb-20 pt-40 lg:pb-28 lg:pt-48">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span>/</span>
              {c.href ? (
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/90">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-magenta-400" />
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
          {accent && (
            <>
              {" "}
              <span className="text-gradient-light">{accent}</span>
            </>
          )}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          {copy}
        </p>
      </Container>
    </section>
  );
}
