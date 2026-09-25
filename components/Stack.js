import { TECH } from "@/lib/tech-icons";
import SectionHeading from "@/components/SectionHeading";

const stackKeys = [
  "python", "fastapi", "javascript", "typescript", "react", "nextjs",
  "nodejs", "express", "postgresql", "mongodb", "mysql", "sqlite",
  "sqlalchemy", "redis", "celery", "docker", "awsEc2", "awsS3",
  "git", "githubActions", "tailwind", "jwt", "rest", "linux",
];

export default function Stack() {
  return (
    <section className="mx-auto max-w-4xl border-t border-slate-200 dark:border-neutral-800 px-6 py-14">
      <SectionHeading>Stack</SectionHeading>

      <div className="mt-7 flex flex-wrap gap-2.5">
        {stackKeys.map((key) => {
          const { label, icon: Icon, color } = TECH[key];
          return (
            <span
              key={key}
              className="inline-flex items-center gap-2 rounded-full bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 px-4 py-2 text-[15px] font-medium"
            >
              <Icon size={16} color={color} />
              {label}
            </span>
          );
        })}
      </div>
    </section>
  );
}
