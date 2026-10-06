const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BoltIcon() {
  return (
    <svg {...base}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

export function LayersIcon() {
  return (
    <svg {...base}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg {...base}>
      <path d="M4 20V10M12 20V4M20 20v-7" />
    </svg>
  );
}

export function CompassIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-4 2 2-6 4-2z" />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg {...base}>
      <path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function UsersIcon() {
  return (
    <svg {...base}>
      <circle cx="9" cy="8" r="3.500" />
      <path d="M2.500 20c0-3.500 3-6 6.500-6s6.500 2.500 6.500 6M16 4.500a3.500 3.500 0 010 7M18 14.500c2 .8 3.500 2.700 3.500 5.500" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  );
}

export function CheckIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M4 10.500l4 4 8-9"
        stroke="currentColor"
        strokeWidth="2.400"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path
        d="M5 15L15 5m0 0H7m8 0v8"
        stroke="currentColor"
        strokeWidth="1.800"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
