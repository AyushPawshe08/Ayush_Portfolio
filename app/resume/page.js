import { Download, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const DRIVE_FILE_ID = "1AhY95dSiWbD-96ile3jXKud5F6wHJCU4";
const PREVIEW_URL = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`;
const VIEW_URL = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/view?usp=sharing`;
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`;

export const metadata = {
  title: "Resume — Ayush Pawshe",
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <SectionHeading>Resume</SectionHeading>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
        The latest version of my resume, embedded below. Use the buttons to download
        a copy or open it directly in Google Drive.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={DOWNLOAD_URL}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 dark:bg-white px-5 py-2.5 text-[15px] font-semibold text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
        >
          <Download size={16} />
          Download Resume
        </a>
        <a
          href={VIEW_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-neutral-800 px-5 py-2.5 text-[15px] font-semibold hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors"
        >
          <ExternalLink size={16} />
          Open in Drive
        </a>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-900">
        <iframe
          src={PREVIEW_URL}
          title="Ayush Pawshe — Resume preview"
          className="h-[70vh] min-h-[480px] w-full sm:h-[780px]"
          allow="autoplay"
        />
      </div>
    </main>
  );
}
