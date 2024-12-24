import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";
import { WhatsappFloatingbutton } from "@/app/components/WhatsappFloatingButton";
import getConfig from "next/config";

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
        {children}
        <WhatsappFloatingbutton />
      </body>
      <GoogleAnalytics gaId={analyticsId} />
    </html>
  );
}
