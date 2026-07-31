"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HandHeart,
  Hospital,
  UserRound,
} from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { SITE } from "@/lib/site-data";

const FEATURES = [
  {
    title: "Specialty Billing",
    description: "Coding and claims built around your specialty’s payer patterns.",
    Icon: HandHeart,
  },
  {
    title: "Advanced RCM Systems",
    description: "Modern workflows that catch leakage before it hits your A/R.",
    Icon: Hospital,
  },
  {
    title: "Expert Specialists",
    description: "Dedicated billing experts who treat your revenue like their own.",
    Icon: UserRound,
  },
] as const;

const METRICS = [
  { value: 98, label: "Clean Claims" },
  { value: 80, label: "Denial Reduction" },
  { value: 96, label: "Client Retention" },
] as const;

function ProgressMetric({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-3">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal font-display text-sm font-bold text-navy sm:h-14 sm:w-14 sm:text-base">
        {value}%
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-navy sm:text-[15px]">{label}</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e5eaf0]">
          <div
            className="h-full rounded-full bg-teal"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export function OurBenefitsSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Left image */}
        <FadeIn className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[560px]">
          <Image
            src="/assets/images/benefits/main.webp"
            alt="Healthcare professional supporting better patient outcomes"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </FadeIn>

        {/* Right white panel */}
        <FadeIn delay={0.06} className="bg-white px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8 xl:gap-12">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Our Benefits
              </p>
              <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
                Reliable Care with{" "}
                <span className="text-teal">{SITE.name}</span>
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                Our expert team combines specialty-ready billing with calm,
                transparent reporting—so your practice gets cleaner claims and
                steadier cash flow.
              </p>
              <Link
                href="/services"
                className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-teal pl-6 pr-1.5 text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-[#00a1be]"
              >
                Discover More
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-teal">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </Link>
            </div>

            <div className="flex flex-col gap-6 sm:gap-7">
              {FEATURES.map(({ title, description, Icon }) => (
                <div key={title} className="flex gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal bg-[#E8F7FB] text-teal">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy sm:text-lg">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-6 border-t border-[#e5eaf0] pt-8 sm:mt-14 sm:flex-row sm:items-center sm:gap-5 lg:gap-8">
            {METRICS.map((metric) => (
              <ProgressMetric key={metric.label} {...metric} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
