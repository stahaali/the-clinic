import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CTABand } from "@/components/CTABand";
import { HeadingLine } from "@/components/HeadingLine";
import { FadeIn, SectionHeading } from "@/components/Motion";
import { SERVICES, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore ${SITE.name} medical billing, RCM, denial management, credentialing, coding, and A/R follow-up services.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="relative z-10 bg-navy section-pad !pb-16 !pt-20">
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-light">
              Services
            </p>
            <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Revenue services designed for specialty practices
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
              End-to-end medical billing and RCM with the depth to reduce
              denials, accelerate reimbursements, and keep your team focused on
              care.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 section-pad">
        <div className="container-narrow space-y-16">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.04}>
              <article
                id={service.slug}
                className="scroll-mt-28 rounded-2xl border border-border bg-white/90 p-6 shadow-sm sm:p-8 lg:p-10"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                      0{index + 1}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl">
                      {service.title}
                    </h2>
                    <HeadingLine align="left" />
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2.5 text-sm text-navy"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-[#ECF5FB] section-pad">
        <div className="container-narrow">
          <FadeIn>
            <SectionHeading
              title="A partnership model—not a ticket queue"
              description="Every engagement includes proactive communication, clear reporting, and a dedicated contact who understands your specialty and payer mix."
            />
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
