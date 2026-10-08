"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggle = (e) => {
    const next = !dark;

    // ── Get click coordinates for the circle origin ──
    const btn = buttonRef.current;
    const rect = btn ? btn.getBoundingClientRect() : null;
    const x = rect ? Math.round(rect.left + rect.width / 2) : e.clientX;
    const y = rect ? Math.round(rect.top + rect.height / 2) : e.clientY;

    // ── Compute max radius so circle always covers the viewport ──
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // ── Trigger icon spin ──
    setSpinning(true);
    setTimeout(() => setSpinning(false), 500);

    // ── Reduced-motion or no View Transitions support: instant toggle ──
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!document.startViewTransition || prefersReduced) {
      applyTheme(next);
      return;
    }

    // ── View Transitions circular reveal ──
    const transition = document.startViewTransition(() => {
      applyTheme(next);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${maxRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        { clipPath },
        {
          duration: 600,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const applyTheme = (isDark) => {
    setDark(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // ── Placeholder before hydration (avoids layout shift) ──
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        tabIndex={-1}
        className="h-[18px] w-[18px] opacity-0"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
    >
      <span
        className="theme-icon"
        style={{
          transform: spinning ? "rotate(180deg)" : "rotate(0deg)",
        }}
      >
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </span>
    </button>
  );
}
