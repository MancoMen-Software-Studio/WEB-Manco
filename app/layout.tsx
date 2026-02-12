import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { Providers } from "@/components/layout/providers";
import "./globals.css";


export const metadata: Metadata = genMeta();
export const viewport: Viewport = {
  themeColor: "#000000"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariables} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
