import Link from "next/link";
import Quote from "@/components/Quote";
import { socials } from "@/lib/socials";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  {label : "Certifications", href : "https://innate-taker-a46.notion.site/Certifications-368ec90d551c80a38570f1952b72fa2a"}
];

export default function SiteFooter() {
  return (
    <footer className="mt-6">
      <Quote />

      <div className="mx-auto max-w-4xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.12em] text-slate-400 dark:text-slate-500">
              NAVIGATE
            </p>
            <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-3 max-w-xs">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[16px] text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[13px] font-semibold tracking-[0.12em] text-slate-400 dark:text-slate-500">
              CONNECT
            </p>
            <div className="mt-4 grid grid-cols-4 gap-2 sm:w-fit">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-neutral-800 text-slate-500 hover:border-slate-300 hover:text-slate-900 dark:hover:border-neutral-700 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-neutral-800 pt-6">
          <p className="text-[15px] text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} Ayush Pawshe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
