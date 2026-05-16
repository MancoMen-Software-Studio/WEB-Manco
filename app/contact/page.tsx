import { generateMetadata as genMeta } from "@/lib/metadata";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { ContactForm } from "@/components/organisms/contact-form";
import { ContactPageHero } from "@/components/organisms/contact-page-hero";

export const metadata = genMeta({
  title: "Contact",
  description:
    "Get in touch with MancoMen Software Studio — discuss Nodeself, early access, or investment opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPageHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
