import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
