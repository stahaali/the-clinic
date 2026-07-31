import type { Metadata } from "next";
import Image from "next/image";
import {
  Baby,
  Bone,
  Brain,
  Eye,
  HeartPulse,
  Hospital,
  Microscope,
  Pill,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";
import { HeadingLine } from "@/components/HeadingLine";
import { SITE, SPECIALTIES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Specialties",
  description: `${SITE.name} supports 45+ medical specialties with tailored billing, coding, and RCM expertise across the United States.`,
  alternates: { canonical: "/specialties" },
};

const SPECIALTY_ICONS: LucideIcon[] = [
  Stethoscope,
  HeartPulse,
  Bone,
  Eye,
  Brain,
  Baby,
  Hospital,
  Microscope,
  Pill,
  Syringe,
];

export default function SpecialtiesPage() {
  return (
    <main>
      {/* Page banner — match About / Services style, no breadcrumbs */}
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
              Specialties
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Intro + specialty grid */}
      <section className="relative z-10 bg-white section-pad">
        <div className="container-wide">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                45+ Specialties
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                We Speak Your Specialty&apos;s Language
              </h2>
              <HeadingLine />
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                From primary care to complex surgical specialties, our teams
                understand coding nuance, payer behaviors, and documentation
                patterns that protect reimbursement.
              </p>
            </div>
          </FadeIn>

          <Stagger className="mt-12 grid grid-cols-1 gap-3 min-[577px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {SPECIALTIES.map((specialty, index) => {
              const Icon = SPECIALTY_ICONS[index % SPECIALTY_ICONS.length];
              return (
                <StaggerItem key={specialty}>
                  <div className="flex h-full items-center gap-3 rounded-xl border border-[#e5eaf0] bg-white px-4 py-4 shadow-sm transition hover:border-teal/40 hover:shadow-md">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-teal bg-[#E8F7FB] text-teal">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-medium text-navy">
                      {specialty}
                    </span>
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
