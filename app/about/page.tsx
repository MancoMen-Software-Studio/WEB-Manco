import { generateMetadata as genMeta } from "@/lib/metadata";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { ValuesSection } from "@/components/organisms/values-section";
import { MethodologySection } from "@/components/organisms/methodology-section";
import { CTASection } from "@/components/organisms/cta-section";
import { FounderSection } from "@/components/organisms/founder-section";
import { AboutPageHero } from "@/components/organisms/about-page-hero";

export const metadata = genMeta({
  title: "Studio",
  description:
    "MancoMen Software Studio — independent product studio building Nodeself. Founded by Juan Martinez, Bogotá, Colombia.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPageHero />
        <FounderSection />

        <ValuesSection />
        <MethodologySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
