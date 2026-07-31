import type { Metadata } from "next";
import { FadeIn } from "@/components/Motion";
import { HeadingLine } from "@/components/HeadingLine";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}. How we collect, use, and protect information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="relative z-10 bg-navy section-pad !pb-12 !pt-20">
        <div className="container-narrow">
          <FadeIn>
            <h1 className="font-display text-4xl font-semibold text-white">
              Privacy Policy
            </h1>
            <p className="mt-3 text-white/70">Last updated: July 30, 2026</p>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 section-pad">
        <div className="container-narrow prose-medical space-y-8 text-muted-foreground leading-relaxed">
          <p>
            {SITE.name} (&quot;Elite,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard information when you visit our website or inquire about
            our medical billing and Revenue Cycle Management services.
          </p>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Information We Collect
            </h2>
            <HeadingLine align="left" className="mb-3" />
            <p>
              We may collect personal and business information you voluntarily
              provide—such as name, email, phone number, practice name,
              specialty, and message content—when you submit forms, request a
              consultation, or request a free revenue audit. We also collect
              limited technical data (e.g., IP address, browser type, pages
              viewed) for security and analytics.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              How We Use Information
            </h2>
            <HeadingLine align="left" className="mb-3" />
            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to inquiries and schedule consultations or audits</li>
              <li>Provide and improve our website and services</li>
              <li>Send relevant service communications you request</li>
              <li>Maintain security, prevent fraud, and meet legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              HIPAA & Protected Health Information
            </h2>
            <HeadingLine align="left" className="mb-3" />
            <p>
              When we provide RCM services to covered entities, we operate under
              Business Associate Agreements and apply appropriate administrative,
              technical, and physical safeguards for Protected Health Information
              (PHI) as required by HIPAA. Website inquiry forms are not intended
              for the submission of PHI; please do not include patient
              identifiers in public website forms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Sharing of Information
            </h2>
            <HeadingLine align="left" className="mb-3" />
            <p>
              We do not sell personal information. We may share information with
              trusted service providers who assist with hosting, analytics, or
              communications, subject to confidentiality obligations, or when
              required by law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Data Security & Retention
            </h2>
            <HeadingLine align="left" className="mb-3" />
            <p>
              We use reasonable safeguards to protect information. No method of
              transmission over the Internet is 100% secure. We retain
              information only as long as needed for the purposes described or as
              required by law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Your Choices
            </h2>
            <HeadingLine align="left" className="mb-3" />
            <p>
              You may request access, correction, or deletion of personal
              information we hold about you by contacting us at {SITE.email},
              subject to legal and contractual limitations.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Contact
            </h2>
            <HeadingLine align="left" className="mb-3" />
            <p>
              Questions about this policy: {SITE.email} · {SITE.phone} ·{" "}
              {SITE.address}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
