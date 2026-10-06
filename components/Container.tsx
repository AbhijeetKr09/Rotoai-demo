export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`wrapper ${className}`}>{children}</div>;
}
