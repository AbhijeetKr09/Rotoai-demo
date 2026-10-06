import Image from "next/image";

export default function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/rotoai-logo.jpeg"
      alt="RotoAI"
      width={607}
      height={222}
      priority={priority}
      className={`h-11 w-auto ${className}`}
    />
  );
}
