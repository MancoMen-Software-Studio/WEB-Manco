import { Navbar } from "@/components/organisms/navbar";
import { HeroHome } from "@/components/organisms/hero-home";
import { CompanyIntro } from "@/components/organisms/company-intro";
import { ServicesGrid } from "@/components/organisms/services-grid";
import { TechShowcase } from "@/components/organisms/tech-showcase";
import { ProjectsShowcase } from "@/components/organisms/projects-showcase";
import { CTASection } from "@/components/organisms/cta-section";
import { Footer } from "@/components/organisms/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroHome />
        <CompanyIntro />
        <ServicesGrid />
        <TechShowcase />
        <ProjectsShowcase />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
