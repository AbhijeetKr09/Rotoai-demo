"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const servicesLinks = [
  { label: "Lorem Automation", href: "#services" },
  { label: "Ipsum Integration", href: "#services" },
  { label: "Dolor Analytics", href: "#services" },
  { label: "Sit Consulting", href: "#services" },
];

const resourceLinks = [
  { label: "Blog", href: "#" },
  { label: "Case Studies", href: "#work" },
  { label: "Industries", href: "#" },
];

const mobileLinks = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Case Studies", "#work"],
  ["How it works", "#process"],
  ["Careers", "#"],
];

const linkClass =
  "text-sm font-medium text-navy-800/80 transition hover:text-magenta-600";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/95 pl-5 pr-2.5 text-navy-900 shadow-soft backdrop-blur-xl">
        <Link href="/" aria-label="RotoAI home">
          <Logo priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="#about" className={linkClass}>
            About
          </Link>
          <Dropdown label="Services" items={servicesLinks} />
          <Dropdown label="Resources" items={resourceLinks} />
          <Link href="#process" className={linkClass}>
            How it works
          </Link>
          <Link href="#" className={linkClass}>
            Careers
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary" className="px-5 py-2.5 text-xs">
            Request a Demo
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-mist-100 lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d={open ? "M4 4L16 16M16 4L4 16" : "M3 6H17M3 14H17"}
              stroke="#13233d"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-navy-900/5 bg-white p-5 text-navy-900 shadow-soft lg:hidden">
          <div className="flex flex-col">
            {mobileLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-navy-900 hover:bg-mist-100"
              >
                {label}
              </Link>
            ))}
          </div>
          <Button href="#contact" variant="primary" className="mt-4 w-full">
            Request a Demo
          </Button>
        </div>
      )}
    </header>
  );
}

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="group relative">
      <button className={`${linkClass} flex items-center gap-1`}>
        {label}
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-2xl border border-navy-900/5 bg-white p-2 shadow-soft">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-xl px-4 py-2.5 text-sm text-navy-800 transition hover:bg-mist-100 hover:text-magenta-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
