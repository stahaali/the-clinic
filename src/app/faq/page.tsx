import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTABand } from "@/components/CTABand";
import { FadeIn, SectionHeading } from "@/components/Motion";
import { FAQS, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${SITE.name} medical billing, RCM onboarding, pricing, HIPAA compliance, and free revenue audits.`,
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <main>
      <section className="relative z-10 bg-navy section-pad !pb-16 !pt-20">
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-light">
              FAQ
            </p>
            <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Answers for busy practice leaders
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
              Straightforward guidance on onboarding, results, compliance, and
              how Elite partners with providers across the U.S.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 section-pad">
        <div className="container-narrow">
          <FadeIn>
            <SectionHeading
              title="Common questions"
              description="Still looking for something specific? Reach out—we’re happy to walk through your situation."
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <Accordion className="rounded-xl border border-border bg-white px-4 sm:px-6">
              {FAQS.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold text-navy hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <CTABand
        title="Have a question we didn’t cover?"
        description="Book a free consultation and get answers tailored to your specialty, volume, and current billing setup."
      />
    </main>
  );
}
