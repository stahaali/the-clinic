import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} to book a free consultation for medical billing and revenue cycle management.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
