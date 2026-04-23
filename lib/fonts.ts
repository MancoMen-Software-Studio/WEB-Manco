import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const spaceGrotesk = Space_Grotesk({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const fontVariables = `${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`;
