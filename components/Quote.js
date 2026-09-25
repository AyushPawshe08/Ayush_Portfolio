export default function Quote() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-14">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800 bg-slate-50/60 dark:bg-neutral-900/60 px-8 py-9 sm:px-10">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-2 -top-6 select-none font-serif text-[140px] leading-none text-slate-200 dark:text-neutral-800"
        >
          &ldquo;
        </span>

        <p className="relative font-mono text-[17px] italic leading-relaxed text-slate-700 dark:text-slate-300 sm:text-[19px]">
          &ldquo;As long as I live, there are infinite chances.&rdquo;
        </p>
        <p className="relative mt-3 text-right font-mono text-[15px] italic text-slate-500 dark:text-slate-500">
          — Monkey D. Luffy, One Piece
        </p>
      </div>
    </div>
  );
}