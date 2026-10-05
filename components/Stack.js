import { SKILL_CATEGORIES, TECH } from "@/lib/tech-icons";
import SectionHeading from "@/components/SectionHeading";
import TechIcon from "@/components/TechIcon";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-4xl px-6 py-10">
      <div className="max-w-2xl">
        <SectionHeading>Stack</SectionHeading>
        <p className="mt-2 text-[14px] leading-relaxed text-slate-500 dark:text-slate-400">
          Tools and technologies I use to build full-stack, backend, and AI-focused systems.
        </p>
      </div>

      <div className="mt-5 border-y border-slate-200 dark:border-neutral-800">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="grid gap-3 border-b border-slate-200 py-3.5 last:border-b-0 dark:border-neutral-800 sm:grid-cols-[2.5rem_8rem_1fr] sm:gap-4 sm:py-4"
          >
            <div className="hidden text-[13px] font-semibold tabular-nums text-slate-400 dark:text-neutral-500 sm:block">
              {category.number}
            </div>

            <h3 className="text-[14px] font-semibold tracking-tight text-slate-900 dark:text-white">
              <span className="sm:hidden">{category.number} </span>
              <span>
                {category.title}
              </span>
            </h3>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {category.items.map((key) => {
                const tech = TECH[key];
                if (!tech) return null;

                return (
                  <span
                    key={key}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/70 px-2 py-1 text-[13px] font-medium leading-none text-slate-700 transition-colors hover:border-slate-300 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-slate-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
                  >
                    <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                      <TechIcon tech={tech} size={14} />
                    </span>
                    <span className="leading-none">{tech.label}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
