import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://ryanferreira.com"),
  title: {
    default: "RYAN FERREIRA",
    template: "%s · RYAN FERREIRA",
  },
  description:
    "Designer brasileiro com 7+ anos criando marcas e produtos digitais, do design ao código.",
};


import { Header } from "@/components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable}`}>
      <body
        className="font-sans bg-white text-zinc-900 antialiased selection:bg-black selection:text-white"
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
