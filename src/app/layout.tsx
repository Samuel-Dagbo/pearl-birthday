import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Dancing_Script,
  Caveat,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday Pearl! 🎂",
  description:
    "A very special birthday wish for the most amazing person in my life.",
  openGraph: {
    title: "Happy Birthday Pearl! 🎂",
    description:
      "A very special birthday wish for the most amazing person in my life.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
