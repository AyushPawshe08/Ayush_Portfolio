export default function TechIcon({ tech, size = 16, className = "" }) {
  if (!tech || !tech.icon) return null;
  const Icon = tech.icon;
  const invert = tech.invertOnDark
    ? "dark:invert dark:brightness-200"
    : "";

  return (
    <Icon
      size={size}
      color={tech.color}
      className={`${invert} ${className}`.trim()}
      aria-hidden
    />
  );
}
