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
  title: 'LarryWind - Professional Music Instructor',
  description:
    'Elite music lessons in Lagos. Learn Saxophone, Piano, Drums, Violin & Music Theory from a professional musician. Specialized instruction for all levels.',
  keywords: [
    'music lessons Lagos',
    'saxophone teacher',
    'piano lessons',
    'drums lessons',
    'music theory',
    'violin lessons',
  ],
  authors: [{ name: 'LarryWind' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
