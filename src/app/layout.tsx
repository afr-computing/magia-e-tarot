import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";
import { WhatsappFloatingbutton } from "@/app/components/WhatsappFloatingButton";
import { getConfig } from "@/app/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magia e Tarot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { analyticsId } = getConfig();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
      <noscript>
        <iframe src={`https://www.googletagmanager.com/ns.html?id=${analyticsId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }}>
        </iframe>
      </noscript>
        {children}
        <WhatsappFloatingbutton />
      </body>
      <GoogleTagManager gtmId={analyticsId} />
    </html>
  );
}
