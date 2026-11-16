import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import IntroSplash from "@/components/IntroSplash";
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
  title: "IQRATI — Smart Solutions for a Digital World",
  description:
    "IQRATI LLC delivers fintech, education, government, AI, chatbot and CRM technology solutions that make technology accessible, efficient and empowering for businesses of all sizes.",
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
      <body className="min-h-full flex flex-col bg-[#f7f6f2] text-[#171717]">
        <IntroSplash />
        {children}
      </body>
    </html>
  );
}
