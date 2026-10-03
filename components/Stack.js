import { HOME_STACK, TECH } from "@/lib/tech-icons";
import SectionHeading from "@/components/SectionHeading";
import TechIcon from "@/components/TechIcon";

export default function Stack() {
  return (
    <section className="mx-auto max-w-4xl border-t border-slate-200 dark:border-neutral-800 px-6 py-14">
      <SectionHeading>Stack</SectionHeading>

      <div className="mt-7 flex flex-wrap gap-2.5">
        {HOME_STACK.map((key) => {
          const tech = TECH[key];
          return (
            <span
              key={key}
              className="inline-flex items-center gap-2 rounded-full bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 px-4 py-2 text-[13px] font-medium"
            >
              <TechIcon tech={tech} size={16} />
              {tech.label}
            </span>
          );
        })}
      </div>
    </section>
  );
}
