import { notFound } from "next/navigation";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { services } from "@/data/services";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { ServiceDetailHero } from "@/components/organisms/service-detail-hero";
import { ServiceDetailContent } from "@/components/organisms/service-detail-content";
import { CTASection } from "@/components/organisms/cta-section";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return genMeta({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ServiceDetailHero
          title={service.title}
          subtitle={service.subtitle}
          description={service.description}
          icon={service.icon}
        />
        <ServiceDetailContent
          features={service.features}
          technologies={service.technologies}
          process={service.process}
        />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
