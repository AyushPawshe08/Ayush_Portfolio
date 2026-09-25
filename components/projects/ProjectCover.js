import Image from "next/image";

// Small "traffic light" dots used as window-chrome decoration.
function TopDots() {
  return (
    <div className="absolute left-1/2 top-4 flex -translate-x-1/2 gap-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/25" />
      ))}
    </div>
  );
}

function PaginationDots() {
  return (
    <div className="absolute bottom-4 left-4 flex flex-col gap-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full border border-white/30" />
      ))}
    </div>
  );
}

function OrbsCover({ heading, subheading }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[inherit] bg-neutral-950">
      <div
        className="absolute -left-10 -top-16 h-40 w-40 rounded-full opacity-70 blur-2xl"
        style={{ background: "radial-gradient(circle, #d946ef, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-16 left-10 h-40 w-40 rounded-full opacity-70 blur-2xl"
        style={{ background: "radial-gradient(circle, #ec4899, transparent 70%)" }}
      />
      <TopDots />
      <PaginationDots />

      <div className="absolute right-[10%] top-1/2 -translate-y-1/2">
        <div className="relative h-28 w-28">
          <div
            className="absolute left-0 top-0 h-20 w-20 rounded-full opacity-90 blur-[1px]"
            style={{ background: "radial-gradient(circle at 30% 30%, #38bdf8, #6366f1 70%)" }}
          />
          <div
            className="absolute bottom-0 right-0 h-20 w-20 rounded-full opacity-90 blur-[1px]"
            style={{ background: "radial-gradient(circle at 30% 30%, #f472b6, #8b5cf6 70%)" }}
          />
          <div className="absolute -bottom-2 left-2 h-3 w-24 rounded-full border border-white/20" />
        </div>
      </div>

      <div className="absolute left-8 top-1/2 max-w-[55%] -translate-y-1/2">
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">{heading}</h3>
        <p className="mt-2 text-[13px] text-white/50">{subheading}</p>
      </div>
    </div>
  );
}

function ImageCover({ image, heading }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[inherit] bg-slate-800">
      <Image
        src={image}
        alt={heading}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

function ResearchCover({ eyebrow, heading, subheading, prompt, cta, note }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[inherit] bg-[#0e1220] px-8 text-center">
      <PaginationDots />
      {eyebrow && (
        <p className="text-[11px] font-medium tracking-wide text-white/40">{eyebrow}</p>
      )}
      <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{heading}</h3>
      <p className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed text-white/45">
        {subheading}
      </p>
      {prompt && (
        <p className="mt-4 max-w-sm truncate text-[12px] text-white/30">
          {prompt}
        </p>
      )}
      {cta && (
        <span className="absolute bottom-4 left-4 rounded bg-orange-500 px-3 py-1.5 text-[12px] font-semibold text-white">
          {cta}
        </span>
      )}
      {note && (
        <span className="absolute bottom-4 right-4 max-w-[45%] text-right text-[11px] text-white/30">
          {note}
        </span>
      )}
    </div>
  );
}

function CodeSageCover({ brand, nav, heading, subheading, features, primaryCta, secondaryCta }) {
  return (
    <div className="h-full w-full overflow-hidden rounded-[inherit] border border-slate-200 bg-white p-4 text-left">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <span className="text-[11px] font-semibold text-slate-800">{brand}</span>
        <div className="flex gap-3 text-[10px] text-slate-400">
          {nav.map((item, i) => (
            <span key={item} className={i === 0 ? "font-medium text-slate-700 underline underline-offset-2" : ""}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-3 text-[9px] font-medium tracking-wide text-slate-400">
        AI CODE REVIEW SYSTEM
      </p>
      <h3 className="mt-1 text-[15px] font-bold leading-snug text-slate-900">{heading}</h3>
      <p className="mt-1.5 max-w-[80%] text-[10px] leading-relaxed text-slate-500">
        {subheading}
      </p>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {features.map((f) => (
          <div key={f.title} className="rounded-md border border-slate-100 bg-slate-50 p-2">
            <p className="text-[9px] font-semibold text-slate-700">{f.title}</p>
            <p className="mt-0.5 text-[8px] leading-snug text-slate-400">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        <span className="rounded bg-slate-900 px-2.5 py-1 text-[9px] font-semibold text-white">
          {primaryCta}
        </span>
        <span className="rounded border border-slate-200 px-2.5 py-1 text-[9px] font-semibold text-slate-700">
          {secondaryCta}
        </span>
      </div>
    </div>
  );
}

function UrlCover({ brand, nav, heading, subheading }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[inherit] bg-[#0b0d14] px-6 pt-4 text-left">
      <div className="flex items-center justify-between text-[11px] text-white/50">
        <span className="font-semibold text-white/80">{brand}</span>
        <div className="flex gap-3">
          {nav.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h3 className="max-w-xs text-2xl font-bold leading-tight text-white">{heading}</h3>
        <p className="mt-2 max-w-xs text-[13px] text-white/40">{subheading}</p>
      </div>
    </div>
  );
}

export default function ProjectCover({ cover }) {
  switch (cover.type) {
    case "orbs":
      return <OrbsCover {...cover} />;
    case "image":
      return <ImageCover {...cover} />;
    case "research":
      return <ResearchCover {...cover} />;
    case "codesage":
      return <CodeSageCover {...cover} />;
    case "url":
      return <UrlCover {...cover} />;
    default:
      return <div className="h-full w-full rounded-[inherit] bg-slate-200 dark:bg-neutral-800" />;
  }
}
