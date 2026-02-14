import { generateMetadata as genMeta } from "@/lib/metadata";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { ServicesGrid } from "@/components/organisms/services-grid";
import { CTASection } from "@/components/organisms/cta-section";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Badge } from "@/components/atoms/badge";

export const metadata = genMeta({
  title: "Services",
  description:
    "Enterprise software engineering services: .NET backend development, React data visualization, and Unity XR immersive solutions.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-28 md:pt-40 pb-8 md:pb-12">
          <div className="px-5 md:px-6" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <Badge>Services</Badge>
            <div style={{ marginTop: 24 }}>
              <Heading as="h1" display>
                Engineering services for{" "}
                <span className="text-electric">modern enterprises</span>
              </Heading>
            </div>
            <div style={{ marginTop: 24 }}>
              <Text size="lg">
                From greenfield development to legacy modernization, we deliver
                production-grade software that scales with your business.
              </Text>
            </div>
          </div>
        </section>
        <ServicesGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
