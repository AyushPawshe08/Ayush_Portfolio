import SectionHeading from "@/components/SectionHeading";
import { certifications } from "@/lib/certifications-data";
import { FaExternalLinkAlt, FaRegCalendarAlt } from "react-icons/fa";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-4xl px-6 py-14"
    >
      <div className="flex items-center justify-between">
        <SectionHeading>Certifications</SectionHeading>

        <a
          href="https://innate-taker-a46.notion.site/Certifications-368ec90d551c80a38570f1952b72fa2a"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          View all
          <FaExternalLinkAlt size={11} />
        </a>
      </div>

      <div className="mt-7 space-y-3">
        {certifications.map((cert) => {
          const CompanyIcon = cert.icon;

          return (
            <div
              key={cert.id}
              className="flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-neutral-800 bg-slate-50/60 dark:bg-neutral-900/60 p-4 sm:flex-row sm:items-center sm:justify-between transition-colors hover:border-slate-300 dark:hover:border-neutral-700"
            >
              <div className="flex items-start gap-3">
                {/* Company Icon */}
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-white dark:bg-neutral-950"
                  style={{
                    borderColor: `${cert.color}30`,
                    color: cert.color,
                  }}
                >
                  <CompanyIcon size={19} />
                </div>

                <div>
                  <h3 className="text-[14.5px] font-semibold text-slate-900 dark:text-white leading-snug">
                    {cert.name}
                  </h3>

                  <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[13px] text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-600 dark:text-slate-300">
                      {cert.organization}
                    </span>

                    <span>·</span>

                    <span className="inline-flex items-center gap-1">
                      <FaRegCalendarAlt size={11} className="text-slate-400" />
                      {cert.issueDate}
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 self-start rounded-lg border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-1.5 text-[13px] font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-neutral-900 hover:text-slate-900 dark:hover:text-white sm:self-center transition-colors"
              >
                Show Credential
                <FaExternalLinkAlt size={11} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
