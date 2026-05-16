import { generateMetadata as genMeta } from "@/lib/metadata";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { ProjectsShowcase } from "@/components/organisms/projects-showcase";
import { NodeselfVideos } from "@/components/organisms/nodeself-videos";
import { CTASection } from "@/components/organisms/cta-section";
import { ProjectsPageHero } from "@/components/organisms/projects-page-hero";

export const metadata = genMeta({
  title: "Nodeself",
  description:
    "Nodeself — behavioral modeling engine by MancoMen Software Studio. Causal graph, decay engine, forward simulation. The graph is the product. Currently seeking investment.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsPageHero />
        <ProjectsShowcase />
        <NodeselfVideos />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
