import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "outline" | "ghost";
  arrow?: boolean;
  className?: string;
};

const variants: Record<string, string> = {
  primary: "bg-magenta-600 text-white hover:bg-magenta-500 shadow-glow",
  secondary: "bg-navy-800 text-white hover:bg-navy-900",
  light: "bg-white text-navy-900 hover:bg-mist-100",
  outline:
    "border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15",
  ghost:
    "bg-white/10 text-navy-900 border border-navy-900/15 hover:bg-white/60 backdrop-blur",
};

export default function Button({
  href = "#",
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <svg
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
      )}
    </Link>
  );
}
