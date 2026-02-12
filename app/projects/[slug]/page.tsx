import { notFound } from "next/navigation";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { ProjectDetailHero } from "@/components/organisms/project-detail-hero";
import { ProjectDetailContent } from "@/components/organisms/project-detail-content";
import { CTASection } from "@/components/organisms/cta-section";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return genMeta({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetailHero
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          category={project.category}
          stats={project.stats}
          color={project.color}
        />
        <ProjectDetailContent
          challenge={project.challenge}
          solution={project.solution}
          results={project.results}
          technologies={project.technologies}
        />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
