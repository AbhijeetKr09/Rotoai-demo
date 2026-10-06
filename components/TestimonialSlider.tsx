"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    name: "A. Lorem",
    role: "COO, Ipsum Industries",
  },
  {
    quote:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    name: "B. Dolor",
    role: "VP Operations, Consectetur Group",
  },
  {
    quote:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    name: "C. Adipiscing",
    role: "Director, Tempor Manufacturing",
  },
];

export default function TestimonialSlider() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (n: number) =>
    setI((n + testimonials.length) % testimonials.length);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-4xl border border-navy-900/5 bg-white p-8 shadow-soft sm:p-12">
        <svg width="40" height="32" viewBox="0 0 40 32" fill="none" aria-hidden>
          <path
            d="M0 32V19.2C0 8.5 5.3 2 15 0l1.8 4.6C11.600 6.200 9.200 9.400 9 14h7v18H0zm23 0V19.2C23 8.5 28.300 2 38 0l1.800 4.600C34.600 6.200 32.200 9.400 32 14h7v18H23z"
            fill="#e35a91"
            fillOpacity="0.35"
          />
        </svg>
        <p
          key={i}
          className="mt-6 font-display text-xl font-medium leading-relaxed text-navy-900 sm:text-2xl"
        >
          {t.quote}
        </p>
        <div className="mt-8 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-skyblue-300 to-magenta-500" />
          <div>
            <p className="font-semibold text-navy-900">{t.name}</p>
            <p className="text-sm text-navy-800/55">{t.role}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          aria-label="Previous testimonial"
          onClick={() => go(i - 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/10 bg-white text-navy-900 transition hover:bg-navy-900 hover:text-white"
        >
          <Arrow flip />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, n) => (
            <button
              key={n}
              aria-label={`Show testimonial ${n + 1}`}
              onClick={() => setI(n)}
              className={`h-2 rounded-full transition-all ${
                n === i ? "w-8 bg-magenta-600" : "w-2 bg-navy-900/20"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next testimonial"
          onClick={() => go(i + 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/10 bg-white text-navy-900 transition hover:bg-navy-900 hover:text-white"
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
}

function Arrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className={`h-4 w-4 ${flip ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4 10h12m0 0l-5-5m5 5l-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
