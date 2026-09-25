"use client";

import Image from "next/image";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { EMAIL, socials } from "@/lib/socials";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="mx-auto max-w-4xl px-6 pt-16 pb-14 text-center">
      <Image
        src="/avatar.png"
        alt="Ayush Pawshe"
        width={128}
        height={128}
        className="mx-auto rounded-2xl bg-black"
      />

      <p className="mt-6 text-[15px] text-slate-500 dark:text-slate-400">Hey, I&apos;m</p>
      <h1 className="mt-1 text-2xl font-bold tracking-tight">Ayush Pawshe</h1>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[15px] text-slate-500 dark:text-slate-400">
        <span>Software Developer</span>
        <span>·</span>
        <span>Backend &amp; AI</span>
        <span>·</span>
        <span>{EMAIL}</span>
        <button
          onClick={copyEmail}
          aria-label="Copy email"
          className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>

      <p className="mx-auto mt-5 max-w-md text-[15px] text-slate-500 dark:text-slate-400">
        Love to build reliable backend systems and AI-powered applications.
      </p>

      <div className="mt-6 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-900 px-3.5 py-1.5 text-[14px] font-medium">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Available for work
        </span>
      </div>

      <div className="mt-6 flex justify-center gap-5">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}
