import type { Metadata } from "next";
import { SITE } from "./constants";

interface MetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

export function generateMetadata({
  title,
  description = SITE.description,
  path = "",
  ogImage = "/images/og/default.png",
}: MetadataOptions = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} — ${SITE.tagline}`;
  const url = `${SITE.url}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    keywords: [
      "software consultancy",
      "enterprise software",
      ".NET development",
      "React development",
      "Unity XR",
      "custom software",
      "Bogota Colombia",
      "MancoMen",
      "data visualization",
      "immersive training",
      "cloud infrastructure",
      "Azure",
      "API development",
    ],
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
