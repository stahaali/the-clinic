import type { Metadata } from "next";
import { HeartPulse } from "lucide-react";
import { CTABand } from "@/components/CTABand";
import { FadeIn, SectionHeading, Stagger, StaggerItem } from "@/components/Motion";
import { SITE, SPECIALTIES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Specialties",
  description: `${SITE.name} supports 45+ medical specialties with tailored billing, coding, and RCM expertise across the United States.`,
  alternates: { canonical: "/specialties" },
};

export default function SpecialtiesPage() {
  return (
    <main>
      <section className="relative z-10 bg-navy section-pad !pb-16 !pt-20">
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-light">
              Specialties
            </p>
            <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Specialty-aware billing that protects reimbursement
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
              From primary care to complex surgical specialties, our teams
              understand documentation patterns, coding nuances, and payer
              behaviors that drive clean claims.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 section-pad">
        <div className="container-wide">
          <FadeIn>
            <SectionHeading
              eyebrow="45+ Specialties"
              title="We speak your specialty’s language"
              description="Don’t see your specialty listed? Contact us—our coverage continues to expand with multi-specialty groups across the U.S."
            />
          </FadeIn>
          <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {SPECIALTIES.map((specialty) => (
              <StaggerItem
                key={specialty}
                className="flex items-center gap-3 rounded-xl border border-border/80 bg-white/90 px-4 py-4 text-sm font-medium text-navy shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-soft text-teal">
                  <HeartPulse className="h-4 w-4" />
                </span>
                {specialty}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand
        title="Need specialty-specific billing support?"
        description="Tell us about your specialty mix and volume. We’ll outline a tailored RCM approach during your free consultation."
      />
    </main>
  );
}
