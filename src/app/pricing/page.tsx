import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/CTABand";
import { HeadingLine } from "@/components/HeadingLine";
import { FadeIn, SectionHeading, Stagger, StaggerItem } from "@/components/Motion";
import { PRICING_PLANS, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Transparent medical billing and RCM pricing from ${SITE.name}. Essentials, Growth, and Enterprise plans aligned to practice size and complexity.`,
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <main>
      <section className="relative z-10 bg-navy section-pad !pb-16 !pt-20">
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-light">
              Pricing
            </p>
            <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Clear plans. Performance-aligned partnership.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
              Most practices choose a percentage-of-collections model. Final rates
              depend on specialty mix, volume, and scope—confirmed after your
              free revenue audit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 section-pad">
        <div className="container-wide">
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {PRICING_PLANS.map((plan) => (
              <StaggerItem
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm",
                  plan.highlighted
                    ? "border-teal shadow-teal/10 ring-1 ring-teal/30"
                    : "border-border",
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3 w-3" />
                    Most popular
                  </span>
                )}
                <h2 className="font-display text-2xl font-semibold text-navy">
                  {plan.name}
                </h2>
                <HeadingLine align="left" />
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <p className="font-display text-3xl font-semibold text-navy">
                    {plan.price}
                  </p>
                  <p className="text-sm text-muted-foreground">{plan.cadence}</p>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-navy">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  render={<Link href="/contact" />}
                  className={cn(
                    "mt-8 w-full",
                    plan.highlighted
                      ? "bg-teal text-white hover:bg-[#00a1be]"
                      : "bg-navy text-white hover:bg-navy-light",
                  )}
                >
                  Get started
                </Button>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn delay={0.15}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
              Rates shown are starting ranges for reference. Your proposal will
              reflect specialty complexity, claim volume, and selected services.
              No long-term lock-in surprises—transparency is part of the Elite
              standard.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 bg-[#ECF5FB] section-pad">
        <div className="container-narrow">
          <FadeIn>
            <SectionHeading
              title="Not sure which plan fits?"
              description="Start with a free revenue audit. We’ll recommend the right engagement level based on your denial patterns, A/R, and growth goals."
            />
            <div className="text-center">
              <Button
                render={<Link href="/free-audit" />}
                size="lg"
                className="bg-teal text-white hover:bg-[#00a1be]"
              >
                Request Free Audit
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
