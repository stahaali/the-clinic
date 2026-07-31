import type { Metadata } from "next";
import { FreeAuditClient } from "./FreeAuditClient";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Free Revenue Audit",
  description: `Request a complimentary revenue audit from ${SITE.name}. Identify denial drivers, clean-claim gaps, and recovery opportunities at no cost.`,
  alternates: { canonical: "/free-audit" },
};

export default function FreeAuditPage() {
  return <FreeAuditClient />;
}
