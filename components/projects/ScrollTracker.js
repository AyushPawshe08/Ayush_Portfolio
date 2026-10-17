"use client";

import { useEffect, useState } from "react";

const CIRCUMFERENCE = 2 * Math.PI * 9;

export default function ScrollTracker() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTitle, setActiveTitle] = useState("");
  const [shownTitle, setShownTitle] = useState("");
  const [labelPhase, setLabelPhase] = useState("visible");

  useEffect(() => {
    let frame = 0;
    const sections = Array.from(document.querySelectorAll("[data-scroll-section]"));
    if (!sections.length) return undefined;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const threshold = window.innerHeight * 0.35;
        const firstTop = sections[0].getBoundingClientRect().top + scrollY;
        const last = sections[sections.length - 1];
        const lastBottom = last.getBoundingClientRect().bottom + scrollY;
        const start = firstTop - threshold;
        const end = Math.max(start + 1, lastBottom - threshold);
        const isVisible = scrollY >= start;

        setVisible(isVisible);
        setProgress(Math.min(1, Math.max(0, (scrollY - start) / (end - start))));

        if (isVisible) {
          let current = sections[0];
          for (const section of sections) {
            if (section.getBoundingClientRect().top <= threshold) current = section;
            else break;
          }
          setActiveTitle(current.dataset.sectionTitle || "Project details");
        }
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!activeTitle) return undefined;
    if (!shownTitle) {
      setShownTitle(activeTitle);
      return undefined;
    }
    if (shownTitle === activeTitle) return undefined;

    setLabelPhase("exit");
    const timeout = window.setTimeout(() => {
      setShownTitle(activeTitle);
      setLabelPhase("enter");
      requestAnimationFrame(() => requestAnimationFrame(() => setLabelPhase("visible")));
    }, 140);
    return () => window.clearTimeout(timeout);
  }, [activeTitle, shownTitle]);

  if (!visible || !shownTitle) return null;

  const offset = CIRCUMFERENCE * (1 - progress);
  const labelClass = labelPhase === "exit"
    ? "-translate-y-full opacity-0"
    : labelPhase === "enter"
      ? "translate-y-full opacity-0"
      : "translate-y-0 opacity-100";

  return (
    <div className="fixed bottom-5 left-1/2 z-50 flex w-[230px] max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center justify-between gap-2.5 rounded-full border border-white/25 bg-black py-2 pl-3.5 pr-2.5 text-white shadow-lg sm:bottom-7">
      <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-white" />
      <span className="h-5 min-w-0 flex-1 overflow-hidden text-sm font-medium leading-5">
        <span className={`block truncate transition-[transform,opacity] duration-200 ease-out ${labelClass}`}>
          {shownTitle}
        </span>
      </span>
      <svg aria-label={`${Math.round(progress * 100)}% through project details`} role="img" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 -rotate-90">
        <circle cx="12" cy="12" r="9" fill="none" stroke="white" strokeOpacity="0.25" strokeWidth="2.5" />
        <circle cx="12" cy="12" r="9" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeDasharray={CIRCUMFERENCE} strokeDashoffset={offset} className="transition-[stroke-dashoffset] duration-100 ease-out" />
      </svg>
    </div>
  );
}
