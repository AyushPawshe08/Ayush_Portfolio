export default function SectionHeading({ children }) {
  return (
    <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight">
      <span className="h-3 w-3 rounded-[2px] bg-emerald-500" />
      {children}
    </h2>
  );
}
