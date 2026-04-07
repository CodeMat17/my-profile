// app/layout.tsx
import AnalyticsWrapper from "@/components/AnalyticsWrapper";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Matthew Chukwu (CodeMat) | Full Stack Developer, Nigeria",
  description:
    "Hire Matthew Chukwu — a top Full Stack & AI Developer in Abuja, Nigeria. 13+ years building world-class web apps with Next.js, React, TypeScript & AI. Serving clients globally. Get your project built right.",
  keywords:
    "developer in Abuja Nigeria, web developer Abuja, full stack developer Nigeria, hire developer Abuja, software engineer Abuja Nigeria, Next.js developer Nigeria, React developer Abuja, AI developer Nigeria, best developer Abuja, CodeMat, Matthew Chukwu, fintech developer Nigeria, mobile web developer, PWA developer Nigeria, TypeScript developer Abuja, freelance developer Abuja Nigeria, hire software engineer Nigeria, top developer Nigeria, web app development Abuja",
  authors: [{ name: "Matthew Chukwu", url: "https://www.matthewchukwu.com" }],
  creator: "Matthew Chukwu (CodeMat)",
  publisher: "CodeMat",
  metadataBase: new URL("https://www.matthewchukwu.com"),
  openGraph: {
    title: "Matthew Chukwu (CodeMat) | Full Stack & AI Developer, Nigeria",
    description:
      "13+ years of excellence. Next.js, React, TypeScript & AI. Based in Abuja, Nigeria — serving clients worldwide. Hire the developer companies trust.",
    url: "https://www.matthewchukwu.com",
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
    canonical: "https://www.matthewchukwu.com",
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
        <meta name='geo.region' content='NG-FC' />
        <meta name='geo.placename' content='Abuja, Nigeria' />
        <meta name='geo.position' content='9.0579;7.4951' />
        <meta name='ICBM' content='9.0579, 7.4951' />
      </head>
      <body
        className={`${nunito.variable} font-[family-name:var(--font-nunito)] antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          <AnalyticsWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
