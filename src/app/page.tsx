import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Bone,
  Brain,
  Eye,
  HandHeart,
  HeartPulse,
  Hospital,
  PersonStanding,
  ScanFace,
  ShieldPlus,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import { CTABand } from "@/components/CTABand";
import { HeroMedia } from "@/components/HeroMedia";
import { FadeIn, SectionHeading, Stagger, StaggerItem } from "@/components/Motion";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { GetStartedSection } from "@/components/GetStartedSection";
import { OurBenefitsSection } from "@/components/OurBenefitsSection";
import { BookConsultationSection } from "@/components/BookConsultationSection";
import { FaqSection } from "@/components/FaqSection";
import {
  SITE,
  SPECIALTIES,
  STATS,
  TESTIMONIALS,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Premium Medical Billing & Revenue Cycle Management",
  description: SITE.description,
  alternates: { canonical: "/" },
};

const SPECIALTY_ICONS: LucideIcon[] = [
  Stethoscope, // Primary Care
  Hospital, // Internal Medicine
  HeartPulse, // Cardiology
  Bone, // Orthopedics
  ScanFace, // Dermatology
  Eye, // Ophthalmology
  PersonStanding, // OB/GYN
  Baby, // Pediatrics
  Brain, // Behavioral Health
  Syringe, // Pain Management
  ShieldPlus, // Neurology
  HandHeart, // Gastroenterology
];


export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 100% 100%, #00BDE0 0%, #0194b8 22%, #033a6b 48%, #031B4E 68%, #000839 100%)",
          }}
        />

        <div className="hero-banner-inner container-wide relative z-[1] grid min-h-[88vh] items-center gap-8 px-4 pb-0 pt-20 sm:px-6 sm:pt-24 lg:grid-cols-2 lg:items-end lg:gap-12 lg:px-8 lg:pt-28">
          <div className="hero-copy relative flex flex-col justify-center self-center pb-10 lg:min-h-[70vh] lg:self-center lg:pb-24">
            {/* Capsule sits with copy — behind text, fades into banner */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-10 top-[6%] z-0 hidden h-[82%] w-[140px] rounded-t-full md:block lg:-left-16 lg:w-[160px]"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.04) 40%, rgba(3,27,78,0.25) 72%, transparent 100%)",
              }}
            />
            <FadeIn className="relative z-[1]">
              <p className="hero-brand mb-3 font-display text-base font-semibold tracking-tight text-teal-light sm:text-lg md:text-xl">
                {SITE.name}
              </p>
            </FadeIn>
            <FadeIn delay={0.08} className="relative z-[1]">
              <h1 className="hero-title max-w-xl text-balance font-display text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]">
                Empowering Healthcare Providers with Elite{" "}
                <span className="text-teal-light">Revenue Solutions</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.16} className="relative z-[1]">
              <p className="hero-desc mt-6 max-w-lg text-lg leading-relaxed text-white/75">
                Premium U.S. medical billing and RCM—98% clean claims, up to 80%
                denial reduction, and a calm, transparent partnership backed by
                10+ years of specialty expertise.
              </p>
            </FadeIn>
            <FadeIn delay={0.24} className="relative z-[1]">
              <div className="hero-actions mt-9">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center gap-3 rounded-full bg-teal pl-6 pr-1.5 text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-[#00a1be] sm:h-14 sm:pl-7 sm:pr-2 sm:text-[15px]"
                >
                  Book Appointment
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-teal sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4 -rotate-45" strokeWidth={2.5} />
                  </span>
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.12} className="hero-media-col self-end">
            <HeroMedia />
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 border-y border-border/70 bg-white/80 backdrop-blur-sm">
        <div className="container-wide grid grid-cols-2 gap-px bg-border/60 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white px-5 py-8 text-center sm:px-6 sm:py-10"
            >
              <p className="font-display text-3xl font-semibold text-teal sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-navy">{stat.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <ServicesSection />

      {/* Specialties */}
      <section className="relative z-10 bg-white section-pad">
        <div className="container-wide">
          <FadeIn>
            <SectionHeading
              eyebrow="Specialties"
              title="Built for the way your specialty bills"
              description="We support 45+ specialties with coding nuance, payer patterns, and documentation realities in mind."
            />
          </FadeIn>
          <Stagger className="specialties-grid grid grid-cols-1 gap-3 min-[577px]:grid-cols-2 lg:grid-cols-4">
            {SPECIALTIES.slice(0, 12).map((specialty, index) => {
              const Icon = SPECIALTY_ICONS[index] ?? Stethoscope;
              return (
                <StaggerItem
                  key={specialty}
                  className="specialty-card flex items-center gap-3 rounded-lg bg-navy px-5 py-5 text-sm font-medium text-white"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/10 text-teal">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span>{specialty}</span>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <GetStartedSection />

      <HowItWorksSection />

      <OurBenefitsSection />

      {/* Testimonials */}
      <section className="relative z-10 bg-navy section-pad">
        <div className="container-wide">
          <FadeIn>
            <SectionHeading
              light
              eyebrow="Testimonials"
              title="Trusted by providers who expect clarity"
              description="Real practices. Measurable revenue outcomes. Calm, professional partnerships."
            />
          </FadeIn>
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <StaggerItem
                key={t.name}
                className="flex flex-col rounded-xl border border-border/80 bg-white p-6 shadow-sm"
              >
                <p className="flex-1 text-sm leading-relaxed text-navy/80">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role} · {t.location}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <FaqSection />

      <BookConsultationSection />

      <CTABand />
    </main>
  );
}
