"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  // { label: "Certifications", href: "/#certifications" },
  { label: "Resume", href: "/resume" },
];

export default function Header() {
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
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-neutral-950/90 backdrop-blur border-b border-slate-200 dark:border-neutral-800">
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
          <span className="text-[17px] font-semibold tracking-tight">
            Ayush Pawshe
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
