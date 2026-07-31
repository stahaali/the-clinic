import type { Metadata } from "next";
import { FadeIn } from "@/components/Motion";
import { HeadingLine } from "@/components/HeadingLine";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for the ${SITE.name} website and related inquiries.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main>
      <section className="relative z-10 bg-navy section-pad !pb-12 !pt-20">
        <div className="container-narrow">
          <FadeIn>
            <h1 className="font-display text-4xl font-semibold text-white">
              Terms of Service
            </h1>
            <p className="mt-3 text-white/70">Last updated: July 30, 2026</p>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 section-pad">
        <div className="container-narrow space-y-8 text-muted-foreground leading-relaxed">
          <p>
            Welcome to the {SITE.name} website. By accessing or using this site,
            you agree to these Terms of Service. If you do not agree, please do
            not use the site.
          </p>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Informational Use
            </h2>
            <HeadingLine align="left" className="mb-3" />
            <p>
              Content on this website is for general informational purposes about
              our medical billing and Revenue Cycle Management services. It does
              not constitute legal, clinical, or financial advice, and does not
              create a client relationship until a separate written agreement is
              executed.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Service Engagements
            </h2>
            <HeadingLine align="left" className="mb-3" />
            <p>
              Actual services—including billing, RCM, credentialing, coding, and
              audits—are governed by separate contracts, statements of work, and
              Business Associate Agreements as applicable. Website pricing ranges
              are illustrative starting points and may vary by specialty, volume,
              and scope.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Acceptable Use
            </h2>
            <HeadingLine align="left" className="mb-3" />
            <p>
              You agree not to misuse the site, attempt unauthorized access,
              submit unlawful content, or use the site to transmit malware or
              spam. We may suspend access for violations.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Intellectual Property
            </h2>
            <HeadingLine align="left" className="mb-3" />
            <p>
              All trademarks, logos, text, graphics, and site design are owned by{" "}
              {SITE.name} or its licensors and may not be copied or used without
              prior written permission, except for limited personal, non-commercial
              viewing.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Disclaimers & Limitation of Liability
            </h2>
            <HeadingLine align="left" className="mb-3" />
            <p>
              The site is provided &quot;as is&quot; without warranties of any kind to
              the fullest extent permitted by law. {SITE.name} is not liable for
              indirect, incidental, or consequential damages arising from site
              use. Performance statistics (e.g., clean claim rates, denial
              reduction) reflect typical or historical client outcomes and are
              not guarantees for any individual practice.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Governing Law
            </h2>
            <HeadingLine align="left" className="mb-3" />
            <p>
              These terms are governed by the laws of the State of Texas, without
              regard to conflict-of-law principles. Venue for disputes related to
              the website shall lie in courts located in Travis County, Texas,
              unless otherwise required by law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Contact
            </h2>
            <HeadingLine align="left" className="mb-3" />
            <p>
              {SITE.email} · {SITE.phone} · {SITE.address}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
