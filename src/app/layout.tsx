import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://www.viesstudios.com.br"),
  title: {
    default: "Viés Studios",
    template: "%s · Viés Studios",
  },
  description:
    "Laboratório criativo focado em design estratégico e experiências digitais memoráveis. Transformamos ideias em produtos digitais e marcas com alto impacto visual e estratégico.",
};


import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ChatWidget } from "@/components/ui/ChatWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable} ${manrope.variable}`}>
      <body
        className="font-sans bg-zinc-900 text-zinc-100 antialiased selection:bg-[#d75310] selection:text-white flex flex-col min-h-screen"
        suppressHydrationWarning
      >
        <CustomCursor />
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
