export default function SectionHeading({ children }) {
  return (
    <h2 className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
      <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-500" />
      {children}
    </h2>
  );
}
