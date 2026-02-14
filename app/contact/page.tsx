import { generateMetadata as genMeta } from "@/lib/metadata";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { ContactForm } from "@/components/organisms/contact-form";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Badge } from "@/components/atoms/badge";

export const metadata = genMeta({
  title: "Contact",
  description:
    "Get in touch with MancoMen Software Studio. Let's discuss your next software project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-header" style={{ paddingTop: 160, paddingBottom: 48 }}>
          <div className="px-6 md:px-6" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <Badge>Contact</Badge>
            <div style={{ marginTop: 24 }}>
              <Heading as="h1" display>
                Start a{" "}
                <span className="text-electric">conversation</span>
              </Heading>
            </div>
            <div style={{ marginTop: 24 }}>
              <Text size="lg">
                Whether you have a project in mind or just want to explore
                possibilities, we&apos;re here to help.
              </Text>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
