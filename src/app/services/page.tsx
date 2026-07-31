import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  ClipboardList,
  FileSearch,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";
import { HeadingLine } from "@/components/HeadingLine";
import { SERVICES, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore ${SITE.name} medical billing, RCM, denial management, credentialing, coding, and A/R follow-up services.`,
  alternates: { canonical: "/services" },
};

const SERVICE_ICONS: LucideIcon[] = [
  ClipboardList,
  Activity,
  ShieldCheck,
  Stethoscope,
  FileSearch,
  HeartPulse,
];

export default function ServicesPage() {
  return (
    <main>
      {/* Page banner — match About style, no breadcrumbs */}
      <section className="relative z-10 flex min-h-[240px] items-center justify-center overflow-hidden sm:min-h-[300px] lg:min-h-[360px]">
        <Image
          src="/assets/images/about/banner.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="container-wide relative z-[1] px-4 py-16 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Services
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Intro + service cards */}
      <section className="relative z-10 bg-white section-pad">
        <div className="container-wide">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                What We Provide
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Advanced Revenue Services
              </h2>
              <HeadingLine />
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                Specialty-ready medical billing and RCM that protect cash flow
                with cleaner claims, fewer denials, and calm, clear reporting.
              </p>
            </div>
          </FadeIn>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = SERVICE_ICONS[index] ?? HeartPulse;
              return (
                <StaggerItem key={service.slug}>
                  <div className="flex h-full flex-col rounded-2xl border border-[#e5eaf0] bg-white p-7 shadow-sm sm:p-8">
                    <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal bg-[#E8F7FB] text-teal">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-lg font-bold text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.summary}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
    </main>
  );
}
