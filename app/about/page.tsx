import { generateMetadata as genMeta } from "@/lib/metadata";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { CompanyIntro } from "@/components/organisms/company-intro";
import { ValuesSection } from "@/components/organisms/values-section";
import { MethodologySection } from "@/components/organisms/methodology-section";
import { CTASection } from "@/components/organisms/cta-section";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Badge } from "@/components/atoms/badge";

export const metadata = genMeta({
  title: "About",
  description:
    "Learn about MancoMen Software Studio — our story, values, methodology, and the team behind enterprise-grade software.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-28 md:pt-40 pb-8 md:pb-12">
          <div className="px-5 md:px-6" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <Badge>About Us</Badge>
            <div style={{ marginTop: 24 }}>
              <Heading as="h1" display>
                The studio behind{" "}
                <span className="text-electric">the systems</span>
              </Heading>
            </div>
            <div style={{ marginTop: 24 }}>
              <Text size="lg">
                We bridge the gap between large system integrators and independent
                freelancers, delivering enterprise-grade software with startup
                agility.
              </Text>
            </div>
          </div>
        </section>
        <CompanyIntro />
        <ValuesSection />
        <MethodologySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
