"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { SectionHeader } from "@/components/molecules/section-header";
import { ProjectCard } from "@/components/molecules/project-card";
import { Button } from "@/components/atoms/button";
import { projects } from "@/data/projects";
import { ROUTES } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ProjectsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !cardsRef.current) return;

    const cards = cardsRef.current.children;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <SectionHeader
            badge="Projects"
            title="Featured work"
            description="A selection of projects where we delivered measurable impact through engineering excellence."
            align="center"
          />
          <div style={{ marginTop: 32 }}>
            <Button href={ROUTES.projects} variant="secondary">
              View All Projects
            </Button>
          </div>
        </div>
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <div key={project.slug} style={{ opacity: 0 }}>
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                category={project.category}
                technologies={project.technologies}
                href={`${ROUTES.projects}/${project.slug}`}
                color={project.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
