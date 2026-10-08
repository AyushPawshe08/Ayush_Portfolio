import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { Globe } from "lucide-react";
import { TECH } from "@/lib/tech-icons";
import TechIcon from "@/components/TechIcon";

export default function ProjectRow({ project }) {
  return (
    <div className="group flex flex-col gap-5 border-b border-slate-100 dark:border-neutral-800 py-8 last:border-b-0 sm:flex-row sm:gap-8">
      {/* Screenshot */}
      <Link
        href={`/projects/${project.slug}`}
        className="shrink-0 sm:w-[220px] lg:w-[260px]"
        tabIndex={-1}
        aria-hidden
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-100 dark:bg-neutral-900 transition-all group-hover:border-slate-300 dark:group-hover:border-neutral-700 group-hover:shadow-md">
          {project.cover?.image ? (
            <Image
              src={project.cover.image}
              alt={project.title}
              fill
              sizes="(min-width: 640px) 260px, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-slate-200 dark:bg-neutral-800" />
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        {/* One word description tag */}
        {project.one_word_desc && (
          <div className="flex items-center">
            <span className="rounded border border-slate-200 dark:border-neutral-800 px-2.5 py-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              {project.one_word_desc}
            </span>
          </div>
        )}

        {/* Title */}
        <Link href={`/projects/${project.slug}`}>
          <h3 className="mt-2 text-[19px] font-semibold leading-snug tracking-tight hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-1.5 text-[14px] leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
          {project.description}
        </p>

        {/* Tech icons */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {project.cardIcons?.map((key) => {
            const tech = TECH[key] || TECH[key.toLowerCase()] || TECH[key.toUpperCase()];
            if (!tech) return null;
            return (
              <span
                key={key}
                title={tech.label}
                className="inline-flex items-center justify-center h-7 w-7 rounded border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-all hover:border-slate-300 dark:hover:border-neutral-700 hover:scale-110"
              >
                <TechIcon tech={tech} size={14} />
              </span>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="group/btn inline-flex items-center gap-1.5 rounded-full bg-slate-900 dark:bg-slate-100 px-4 py-1.5 text-[13px] font-medium text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors"
          >
            View project{" "}
            <span
              aria-hidden
              className="transition-transform group-hover/btn:translate-x-0.5"
            >
              →
            </span>
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              title="Live demo"
            >
              <Globe size={13} />
              Live
            </a>
          )}

          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              title="Source code"
            >
              <FaGithub size={13} />
              Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
