import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ChunkErrorRecovery from "@/components/ChunkErrorRecovery";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SiteBackground from "@/components/SiteBackground";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EBI.GG",
  description: "EBI.GG Stake affiliate leaderboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background font-sans text-white">
        <Script
          defer
          data-website-id="dfid_Sx5RzK4Xw7zvlKsD9Rrtj"
          data-domain="ebi.gg"
          src="https://datafa.st/js/script.cookieless.js"
          strategy="afterInteractive"
        />
        <ChunkErrorRecovery />
        <SiteBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
