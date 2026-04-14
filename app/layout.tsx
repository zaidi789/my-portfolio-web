import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-vertical-timeline-component/style.min.css";
import { Providers } from "./providers";
import { SiteChrome } from "./site-chrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaid Rafiq - Senior Mobile Application Developer",
  description:
    "Senior mobile application developer specializing in React Native, iOS, Android, and production-ready mobile products.",
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon-96x96.png",
  },
  manifest: "/favicon/site.webmanifest",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "React Native",
    "Node.js",
    "DevOps",
    "Kubernetes",
    "Docker",
    "PostgreSQL",
    "Web Development",
    "Mobile App Development",
  ],
  authors: [
    {
      name: "Zaid Rafiq",
      url: "https://www.linkedin.com/in/zaid-rafiq-a6132128a/",
    },
  ],
  creator: "Zaid Rafiq",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Zaid Rafiq - Senior Mobile Application Developer",
    description:
      "Full-Stack Engineer specializing in building scalable web and mobile applications",
    siteName: "Zaid Rafiq Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Zaid Rafiq Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaid Rafiq - Senior Mobile Application Developer",
    description:
      "Full-Stack Engineer specializing in building scalable web and mobile applications",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
