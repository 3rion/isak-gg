import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ChunkErrorRecovery from "@/components/ChunkErrorRecovery";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SiteBackground from "@/components/SiteBackground";
import { SITE_NAME } from "@/config/site";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE_NAME}.GG`,
  description: `${SITE_NAME}.GG Stake affiliate leaderboard`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background font-sans text-white">
        <ChunkErrorRecovery />
        <SiteBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
