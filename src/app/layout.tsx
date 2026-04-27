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
  title: "Betapersin | IAM & GRC Career Training",
  description: "Enterprise-grade Identity and Access Management and GRC training for modern professionals.",
  icons: {
    icon: [
      {
        url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/GaacUkLWhRTud68Z/chatgpt-image-apr-19-2026-09_11_22-pm-qfzEV37ULnkiJFnj.png",
        href: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/GaacUkLWhRTud68Z/chatgpt-image-apr-19-2026-09_11_22-pm-qfzEV37ULnkiJFnj.png",
      },
    ],
    apple: [
      {
        url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/GaacUkLWhRTud68Z/chatgpt-image-apr-19-2026-09_11_22-pm-qfzEV37ULnkiJFnj.png",
        href: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/GaacUkLWhRTud68Z/chatgpt-image-apr-19-2026-09_11_22-pm-qfzEV37ULnkiJFnj.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}