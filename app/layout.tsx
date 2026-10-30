import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/lib/constants/site";

const display = localFont({
  src: [
    { path: "./fonts/PlayfairDisplay-Variable.woff2", weight: "400 900", style: "normal" },
    { path: "./fonts/PlayfairDisplay-Italic-Variable.woff2", weight: "400 900", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const sans = localFont({
  src: [{ path: "./fonts/Inter-Variable.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: { siteName: SITE.name, locale: "en_MY", type: "website" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#071A33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
