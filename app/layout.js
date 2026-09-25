import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Ayush Pawshe",
  description: "Software Developer · Backend & AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900 dark:bg-neutral-950 dark:text-slate-100 transition-colors`}>
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
