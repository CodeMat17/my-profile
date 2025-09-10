// app/layout.tsx
import AnalyticsWrapper from "@/components/AnalyticsWrapper"; // New import
import { Toaster } from "@/components/ui/sonner";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "CodeMat - Matthew Chukwu | Full Stack Web Developer & Mobile Web Specialist",
  description:
    "Matthew Chukwu (CodeMat) - Transforming ideas into exceptional digital experiences. Over 13 years of expertise in full-stack web development, creating sleek, intuitive solutions with Next.js, React, and cutting-edge technologies. Passionate mentor and strategic leader.",
  keywords:
    "hire Next.js developer in Nigeria, PWA developer for fintech, fintech, web developer, full stack developer, mobile web specialist, hire developer, Next.js expert, React developer, Nigeria developer, freelance developer, software engineer, web app development",
  openGraph: {
    title:
      "CodeMat - Full Stack Developer, transforming ideas into exceptional digital experiences.",
    description:
      "Hire Matthew Chukwu for innovative, tailor-made web solutions that drive results.",
    url: "https://www.matthewchukwu.com",
    siteName: "CodeMat Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeMat - Matthew Chukwu",
    description:
      "Expert Full Stack Developer ready to build your next project.",
    images: ["/twitter-image.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.matthewchukwu.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          <AnalyticsWrapper /> {/* Use the client-side wrapper */}
        </ThemeProvider>
      </body>
    </html>
  );
}
