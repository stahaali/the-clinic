import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import { SITE } from "@/lib/site-data";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elitemedicalservices.com"),
  title: {
    default: `${SITE.name} | Medical Billing & RCM`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "medical billing",
    "revenue cycle management",
    "RCM",
    "denial management",
    "healthcare billing",
    "provider credentialing",
    "The Clinic",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: ["/images/hero-bg.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full`}
    >
      <body className="relative flex min-h-full flex-col bg-[#F4F4F4] text-navy">
        <AnimatedBackground />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
