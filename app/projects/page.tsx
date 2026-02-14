import { generateMetadata as genMeta } from "@/lib/metadata";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { ProjectsShowcase } from "@/components/organisms/projects-showcase";
import { CTASection } from "@/components/organisms/cta-section";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Badge } from "@/components/atoms/badge";

export const metadata = genMeta({
  title: "Projects",
  description:
    "Case studies and featured projects: SecureTransact API, Observa Dashboard, and ImmerseTrain XR Platform.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-header" style={{ paddingTop: 160, paddingBottom: 48 }}>
          <div className="px-6 md:px-6" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <Badge>Projects</Badge>
            <div style={{ marginTop: 24 }}>
              <Heading as="h1" display>
                Work that{" "}
                <span className="text-electric">speaks for itself</span>
              </Heading>
            </div>
            <div style={{ marginTop: 24 }}>
              <Text size="lg">
                A selection of projects where we delivered measurable impact
                through engineering excellence and deep technical partnership.
              </Text>
            </div>
          </div>
        </section>
        <ProjectsShowcase />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
