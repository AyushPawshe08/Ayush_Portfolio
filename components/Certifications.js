import SectionHeading from "@/components/SectionHeading";
import { certifications } from "@/lib/certifications-data";

import { FaExternalLinkAlt, FaRegCalendarAlt } from "react-icons/fa";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-4xl border-t border-slate-200 dark:border-neutral-800 px-6 py-14"
    >
      <div className="flex items-center justify-between">
        <SectionHeading>Certifications</SectionHeading>

        <a
          href="https://innate-taker-a46.notion.site/Certifications-368ec90d551c80a38570f1952b72fa2a"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          View all on Notion
          <FaExternalLinkAlt size={12} />
        </a>
      </div>

      <div className="mt-8 space-y-4">
        {certifications.map((cert) => {
          const CompanyIcon = cert.icon;

          return (
            <div
              key={cert.id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-neutral-800 bg-slate-50/60 dark:bg-neutral-900/60 p-5 sm:flex-row sm:items-center sm:justify-between transition-colors hover:border-slate-300 dark:hover:border-neutral-700"
            >
              <div className="flex items-start gap-4">
                {/* Company Icon */}
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-white dark:bg-neutral-950"
                  style={{
                    borderColor: `${cert.color}30`,
                    color: cert.color,
                  }}
                >
                  <CompanyIcon size={23} />
                </div>

                <div>
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 dark:text-white">
                    {cert.name}
                  </h3>

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-[14px] sm:text-[15px] text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {cert.organization}
                    </span>

                    <span>·</span>

                    <span className="inline-flex items-center gap-1.5">
                      <FaRegCalendarAlt size={13} className="text-slate-400" />
                      {cert.issueDate}
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 self-start rounded-lg border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-2 text-[14px] font-semibold text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-neutral-900 hover:text-slate-900 dark:hover:text-white sm:self-center transition-colors"
              >
                Show Credential
                <FaExternalLinkAlt size={12} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
