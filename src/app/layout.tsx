import type { Metadata } from 'next';
import { PT_Sans_Narrow, Great_Vibes } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import './globals.css';

const ptSansNarrow = PT_Sans_Narrow({ subsets: ['cyrillic'], variable: '--font-sans', weight: ['400'] });
const gVides = Great_Vibes({ subsets: ['cyrillic'], variable: '--font-serif', weight: ['400'] });

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Created with the help of Frontend Tribe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(ptSansNarrow.variable, gVides.variable, 'bg-gray-900 text-white antialiased font-sans')}>{children}</body>
    </html>
  );
}
