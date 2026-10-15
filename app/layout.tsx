// app/layout.tsx
import AnalyticsWrapper from "@/components/AnalyticsWrapper";
import RevealObserver from "@/components/RevealObserver";
import LazyToaster from "@/components/LazyToaster";
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
  title: "Matthew Chukwu (CodeMat) | Full Stack Developer, Nigeria",
  description:
    "Hire Matthew Chukwu — a top Full Stack & AI Developer in Abuja, Nigeria. 13+ years building world-class web apps with Next.js, React, TypeScript & AI. Serving clients globally. Get your project built right.",
  keywords:
    "developer in Abuja Nigeria, web developer Abuja, full stack developer Nigeria, hire developer Abuja, software engineer Abuja Nigeria, Next.js developer Nigeria, React developer Abuja, AI developer Nigeria, best developer Abuja, CodeMat, Matthew Chukwu, fintech developer Nigeria, mobile web developer, PWA developer Nigeria, TypeScript developer Abuja, freelance developer Abuja Nigeria, hire software engineer Nigeria, top developer Nigeria, web app development Abuja",
  authors: [{ name: "Matthew Chukwu", url: "https://matthewchukwu.dev" }],
  creator: "Matthew Chukwu (CodeMat)",
  publisher: "CodeMat",
  metadataBase: new URL("https://matthewchukwu.dev"),
  openGraph: {
    title: "Matthew Chukwu (CodeMat) | Full Stack & AI Developer, Nigeria",
    description:
      "13+ years of excellence. Next.js, React, TypeScript & AI. Based in Abuja, Nigeria — serving clients worldwide. Hire the developer companies trust.",
    url: "https://matthewchukwu.dev",
    siteName: "CodeMat — Matthew Chukwu Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matthew Chukwu - Full Stack Developer Abuja Nigeria",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeMat | #1 Developer in Abuja, Nigeria",
    description:
      "Hire Nigeria's top Full Stack & AI Developer. Next.js · React · TypeScript · AI. 13+ years · 50+ projects.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://matthewchukwu.dev",
  },
  verification: {
    google: "google-site-verification-token",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en-NG' suppressHydrationWarning>
      <head>
        {/* Lets CSS hide scroll-reveal content only when JS is available to reveal it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <meta name='geo.region' content='NG-FC' />
        <meta name='geo.placename' content='Abuja, Nigeria' />
        <meta name='geo.position' content='9.0579;7.4951' />
        <meta name='ICBM' content='9.0579, 7.4951' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem>
          <Navbar />
          {children}
          <Footer />
          <LazyToaster />
          <RevealObserver />
          {/* The insights script only exists on Vercel deployments; elsewhere it 404s */}
          {process.env.VERCEL && <AnalyticsWrapper />}
        </ThemeProvider>
      </body>
    </html>
  );
}
