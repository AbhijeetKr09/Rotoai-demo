import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — RotoAI",
  description: "Request a demo or get in touch with the RotoAI team.",
};

const details = [
  { label: "Address", value: "FITT, IIT Delhi, New Delhi, India", href: "https://maps.app.goo.gl/spRhi7925bzZL8zm9" },
  { label: "Email", value: "madhusmita@rotoai.in", href: "mailto:madhusmita@rotoai.in" },
  { label: "Phone", value: "+91 98916 61580", href: "tel:+919891661580" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        accent="lorem ipsum."
        copy="Consectetur adipiscing elit sed do eiusmod. No pressure, just a conversation about your site."
        image="/images/control-panel.jpg"
        alt="Touchscreen control panel on an industrial machine"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="bg-mist-50 py-24 lg:py-32">
        <Container className="grid items-start gap-14 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-magenta-700">Get in touch</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Schedule your discovery call
            </h2>
            <p className="mt-5 text-navy-800/65">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
            </p>
            <dl className="mt-8 space-y-4">
              {details.map((d) => (
                <div key={d.label} className="rounded-2xl border border-navy-900/5 bg-white p-5 shadow-card">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-magenta-700">{d.label}</dt>
                  <dd className="mt-1">
                    <a href={d.href} className="font-medium text-navy-900 hover:text-magenta-600">
                      {d.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
