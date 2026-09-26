import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const BASE_URL = "https://ayushpawshe.dev";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Tab title ──────────────────────────────────────────────────────────────
  title: {
    default: "Ayush | AI ML Engineer",
    template: "%s | Ayush Pawshe",
  },

  // ── Core description ───────────────────────────────────────────────────────
  description:
    "Ayush Pawshe — AI/ML Engineer & Backend Developer. Building intelligent, reliable systems with Python, FastAPI, Next.js, and cutting-edge AI/ML technologies.",

  // ── Keywords ───────────────────────────────────────────────────────────────
  keywords: [
    "Ayush Pawshe",
    "AI ML Engineer",
    "Machine Learning Engineer",
    "Backend Developer",
    "Python Developer",
    "FastAPI",
    "Next.js",
    "Portfolio",
    "Software Engineer India",
    "AI Developer",
    "Deep Learning",
    "LLM",
    "RAG",
    "Full Stack Developer",
  ],

  // ── Author / creator ───────────────────────────────────────────────────────
  authors: [{ name: "Ayush Pawshe", url: BASE_URL }],
  creator: "Ayush Pawshe",
  publisher: "Ayush Pawshe",

  // ── Canonical & robots ─────────────────────────────────────────────────────
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Ayush Pawshe — Portfolio",
    title: "Ayush | AI ML Engineer",
    description:
      "AI/ML Engineer & Backend Developer building intelligent, reliable systems with Python, FastAPI, Next.js, and cutting-edge AI technologies.",
    images: [
      {
        url: "/avatar.png",
        width: 400,
        height: 400,
        alt: "Ayush Pawshe — AI ML Engineer",
      },
    ],
  },

  // ── Twitter / X Card ───────────────────────────────────────────────────────
  twitter: {
    card: "summary",
    site: "@ayushpawshe",
    creator: "@ayushpawshe",
    title: "Ayush | AI ML Engineer",
    description:
      "AI/ML Engineer & Backend Developer building intelligent, reliable systems.",
    images: ["/avatar.png"],
  },

  // ── Favicon / icons ────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/avatar.png", type: "image/png" },
    ],
    apple: "/avatar.png",
    shortcut: "/avatar.png",
  },

  // ── Verification placeholders (add your tokens when ready) ─────────────────
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION_TOKEN",
  // },
};

// ── JSON-LD Structured Data ─────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ayush Pawshe",
  url: BASE_URL,
  image: `${BASE_URL}/avatar.png`,
  jobTitle: "AI ML Engineer",
  description:
    "AI/ML Engineer & Backend Developer specialising in Python, FastAPI, Next.js, LLMs, and RAG systems.",
  email: "ayushpawshedev@gmail.com",
  sameAs: [
    "https://linkedin.com/in/ayushpawshe",
    "https://github.com/ayushpawshe",
    "https://x.com/ayushpawshe",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-slate-900 dark:bg-neutral-950 dark:text-slate-100 transition-colors`}
      >
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
