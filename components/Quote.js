"use client";

import { useState, useEffect } from "react";
import { quotes } from "@/lib/quotes-data";

const ONE_HOUR = 60 * 60 * 1000;

export default function Quote() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Set initial quote based on current hour
    const currentHourIndex = Math.floor(Date.now() / ONE_HOUR) % quotes.length;
    setCurrentIndex(currentHourIndex);

    // Change quote automatically every 1 hour
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
        setIsFading(false);
      }, 300);
    }, ONE_HOUR);

    return () => clearInterval(timer);
  }, []);

  const current = quotes[currentIndex];

  return (
    <div className="mx-auto max-w-4xl px-6 pt-14">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800 bg-slate-50/60 dark:bg-neutral-900/60 px-8 py-9 sm:px-10">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-2 -top-6 select-none font-serif text-[140px] leading-none text-slate-200 dark:text-neutral-800"
        >
          &ldquo;
        </span>

        <div
          className={`transition-opacity duration-300 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="relative font-mono text-[17px] italic leading-relaxed text-slate-700 dark:text-slate-300 sm:text-[19px]">
            &ldquo;{current.quote}&rdquo;
          </p>
          <p className="relative mt-3 text-right font-mono text-[15px] italic text-slate-500 dark:text-slate-500">
            — {current.character}, {current.series}
          </p>
        </div>
      </div>
    </div>
  );
}