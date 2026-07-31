"use client";

import { useState } from "react";
import { CheckCircle2, ClipboardCheck, FileSearch, LineChart } from "lucide-react";
import { HeadingLine } from "@/components/HeadingLine";
import { FadeIn, SectionHeading, Stagger, StaggerItem } from "@/components/Motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site-data";

const STEPS = [
  {
    icon: FileSearch,
    title: "Share your data securely",
    description: "Provide high-level claim, denial, and A/R information under a BAA-ready process.",
  },
  {
    icon: LineChart,
    title: "We analyze revenue leakage",
    description: "Our team reviews clean-claim rates, denial drivers, aging buckets, and coding risk.",
  },
  {
    icon: ClipboardCheck,
    title: "Receive actionable findings",
    description: "Get a clear summary of opportunities—often tied to denial reduction and faster collections.",
  },
];

export function FreeAuditClient() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <section className="relative z-10 bg-navy section-pad !pb-16 !pt-20">
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-light">
              Free Revenue Audit
            </p>
            <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              See where revenue is slipping—at no cost
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
              A complimentary audit from {SITE.name} highlights clean-claim gaps,
              denial patterns, and recovery potential before you commit to a
              partnership.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 section-pad">
        <div className="container-wide">
          <FadeIn>
            <SectionHeading
              eyebrow="How it works"
              title="Three calm steps to clarity"
            />
          </FadeIn>
          <Stagger className="mb-14 grid gap-5 md:grid-cols-3">
            {STEPS.map((step) => (
              <StaggerItem
                key={step.title}
                className="rounded-xl border border-border bg-white p-6 shadow-sm"
              >
                <step.icon className="mb-4 h-7 w-7 text-teal" />
                <h3 className="font-display text-xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center py-8 text-center">
                <CheckCircle2 className="mb-4 h-12 w-12 text-teal" />
                <h2 className="font-display text-2xl font-semibold text-navy">
                  Audit request submitted
                </h2>
                <HeadingLine />
                <p className="mt-3 max-w-md text-muted-foreground">
                  Thank you. Our revenue analysts will reach out within one
                  business day to begin your complimentary audit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-navy">
                    Request your free audit
                  </h2>
                  <HeadingLine align="left" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="audit-name">Full name</Label>
                    <Input id="audit-name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="audit-email">Work email</Label>
                    <Input id="audit-email" type="email" required placeholder="you@practice.com" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="audit-practice">Practice name</Label>
                    <Input id="audit-practice" required placeholder="Practice / group" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="audit-specialty">Primary specialty</Label>
                    <Input id="audit-specialty" placeholder="e.g. Cardiology" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="audit-notes">Current challenges (optional)</Label>
                  <Textarea
                    id="audit-notes"
                    rows={4}
                    placeholder="Denials, A/R aging, staffing gaps, payer issues..."
                  />
                </div>
                <Button type="submit" size="lg" className="bg-teal text-white hover:bg-[#00a1be]">
                  Submit free audit request
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
