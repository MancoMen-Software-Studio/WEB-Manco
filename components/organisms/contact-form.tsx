"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { contactSchema, type ContactFormData } from "@/lib/validation";
import { FormField } from "@/components/molecules/form-field";
import { Button } from "@/components/atoms/button";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Icon } from "@/components/atoms/icon";
import { CONTACT } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll("[data-animate]");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.2,
      }
    );
  }, { scope: sectionRef });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setApiError(null);
    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setApiError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const updateField = (field: keyof ContactFormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div
        ref={sectionRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 px-5 md:px-8 lg:px-12"
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div data-animate style={{ display: "flex", flexDirection: "column", gap: 16, opacity: 0 }}>
            <Heading as="h2">
              Let&apos;s build something{" "}
              <span className="text-electric">great</span>
            </Heading>
            <Text>
              Tell us about your project. We&apos;ll get back to you within 24 hours
              with initial thoughts and next steps.
            </Text>
          </div>

          <div data-animate style={{ display: "flex", flexDirection: "column", gap: 24, opacity: 0 }}>
            <a
              href={`mailto:${CONTACT.email}`}
              className="hover:text-white"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                color: "#a3a3a3",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              <Icon name="mail" size={20} />
              <span>{CONTACT.email}</span>
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#a3a3a3" }}>
              <Icon name="mappin" size={20} />
              <span>{CONTACT.address}</span>
            </div>
          </div>
        </div>

        <div data-animate style={{ opacity: 0 }}>
          {submitted ? (
            <div
              className="p-8 md:p-12"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                borderRadius: 16,
                border: "1px solid rgba(0,102,255,0.3)",
                background: "rgba(0,102,255,0.1)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 9999,
                  background: "rgba(0,102,255,0.2)",
                }}
              >
                <Icon name="mail" size={32} className="text-electric" />
              </div>
              <Heading as="h3">Message sent</Heading>
              <Text>
                Thank you for reaching out. We&apos;ll be in touch within 24 hours.
              </Text>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {apiError && (
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "1px solid rgba(255,59,48,0.3)",
                    background: "rgba(255,59,48,0.1)",
                    color: "#ff6b6b",
                    fontSize: 14,
                  }}
                >
                  {apiError}
                </div>
              )}
              <FormField
                label="Name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={updateField("name")}
                error={errors.name}
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={updateField("email")}
                error={errors.email}
              />
              <FormField
                label="Company"
                name="company"
                placeholder="Your company name"
                value={formData.company}
                onChange={updateField("company")}
                error={errors.company}
              />
              <FormField
                label="Message"
                name="message"
                type="textarea"
                placeholder="Tell us about your project, timeline, and budget..."
                value={formData.message}
                onChange={updateField("message")}
                error={errors.message}
              />
              <Button type="submit" fullWidth disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
