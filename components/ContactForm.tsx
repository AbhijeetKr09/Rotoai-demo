"use client";

import { useState } from "react";

const field =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-magenta-400 focus:bg-white/10";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-4xl border border-white/10 bg-navy-900 p-7 shadow-soft sm:p-9"
    >
      <h3 className="font-display text-xl font-bold text-white">
        Lorem ipsum dolor sit amet
      </h3>
      <p className="mt-1 text-sm text-white/55">
        Consectetur adipiscing elit sed do eiusmod.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Full name</span>
          <input required className={field} placeholder="Full name" />
        </label>
        <label className="block">
          <span className="sr-only">Work email</span>
          <input
            required
            type="email"
            className={field}
            placeholder="Work email"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="sr-only">Company</span>
          <input className={field} placeholder="Company" />
        </label>
        <label className="block sm:col-span-2">
          <span className="sr-only">Message</span>
          <textarea
            rows={4}
            className={`${field} resize-none`}
            placeholder="Lorem ipsum dolor sit amet…"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-magenta-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-magenta-500"
      >
        {sent ? "Thanks — we will be in touch" : "Request a Demo"}
      </button>
    </form>
  );
}
