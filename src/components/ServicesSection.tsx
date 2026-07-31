"use client";

import {
  Activity,
  ClipboardList,
  FileSearch,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { HeadingLine } from "@/components/HeadingLine";
import { SERVICES } from "@/lib/site-data";

const SERVICE_ICONS = [
  ClipboardList,
  Activity,
  ShieldCheck,
  Stethoscope,
  FileSearch,
  HeartPulse,
] as const;

const GRID_SERVICES = SERVICES.slice(0, 6).map((service, i) => ({
  ...service,
  Icon: SERVICE_ICONS[i] ?? HeartPulse,
}));

function ServiceCell({
  service,
  className = "",
}: {
  service: (typeof GRID_SERVICES)[number];
  className?: string;
}) {
  const Icon = service.Icon;
  return (
    <article className={`flex flex-col bg-white p-7 sm:p-8 ${className}`}>
      <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal bg-[#E8F7FB] text-teal">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <h3 className="font-display text-lg font-bold text-navy">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {service.summary}
      </p>
    </article>
  );
}

export function ServicesSection() {
  const [s0, s1, s2, s3, s4, s5] = GRID_SERVICES;

  return (
    <section className="relative z-10 bg-navy section-pad">
      <div className="container-wide">
        <FadeIn>
          <div className="overflow-hidden border border-[#e5eaf0] bg-white">
            {/* Top row: intro (2 cols) + 2 services */}
            <div className="grid border-b border-[#e5eaf0] lg:grid-cols-4">
              <div className="flex flex-col justify-center border-b border-[#e5eaf0] p-7 sm:p-8 lg:col-span-2 lg:border-b-0 lg:border-r lg:p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                  What We Provide
                </p>
                <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-[2rem] lg:leading-tight">
                  Advanced Revenue Services
                </h2>
                <HeadingLine align="left" className="mb-0" />
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  Specialty-ready medical billing and RCM that protect cash flow
                  with cleaner claims, fewer denials, and calm, clear reporting.
                </p>
              </div>
              <ServiceCell
                service={s0}
                className="border-b border-[#e5eaf0] lg:border-b-0 lg:border-r"
              />
              <ServiceCell
                service={s1}
                className="border-b border-[#e5eaf0] lg:border-b-0"
              />
            </div>

            {/* Bottom row: 4 services */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              <ServiceCell
                service={s2}
                className="border-b border-[#e5eaf0] sm:border-r lg:border-b-0"
              />
              <ServiceCell
                service={s3}
                className="border-b border-[#e5eaf0] lg:border-b-0 lg:border-r"
              />
              <ServiceCell
                service={s4}
                className="border-b border-[#e5eaf0] sm:border-r lg:border-b-0"
              />
              <ServiceCell service={s5} />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
