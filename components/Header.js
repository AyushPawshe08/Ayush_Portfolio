"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  // { label: "Certifications", href: "/#certifications" },
  { label: "Resume", href: "/resume" },
];

export default function Header() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md">
      <div
        className="h-[2px] bg-slate-900 dark:bg-slate-100 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/avatar.png"
            alt="Ayush Pawshe"
            width={28}
            height={28}
            className="rounded-md bg-black"
          />
          <span className="hidden text-[15px] font-semibold tracking-tight sm:inline">
            Ayush Pawshe
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href === "/projects" && pathname.startsWith("/projects/"));
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative py-1 text-[14px] transition-colors ${
                  isActive
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current opacity-40 transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
