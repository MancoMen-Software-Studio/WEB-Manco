import { Navbar } from "@/components/organisms/navbar";
import { HeroHome } from "@/components/organisms/hero-home";
import { NodeselfVideos } from "@/components/organisms/nodeself-videos";
import { CompanyIntro } from "@/components/organisms/company-intro";
import { ServicesGrid } from "@/components/organisms/services-grid";
import { DifferentiatorsSection } from "@/components/organisms/differentiators-section";
import { CapabilitiesSection } from "@/components/organisms/capabilities-section";
import { ProjectsShowcase } from "@/components/organisms/projects-showcase";
import { TechShowcase } from "@/components/organisms/tech-showcase";
import { StudioIdentity } from "@/components/organisms/studio-identity";
import { InvestorBlock } from "@/components/organisms/investor-block";
import { CTASection } from "@/components/organisms/cta-section";
import { Footer } from "@/components/organisms/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroHome />
        <NodeselfVideos />
        <CompanyIntro />
        <ServicesGrid />
        <DifferentiatorsSection />
        <CapabilitiesSection />
        <ProjectsShowcase />
        <TechShowcase />
        <StudioIdentity />
        <InvestorBlock />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

