import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Gem,
  ShieldPlus,
  Target,
} from "lucide-react";
import { HeadingLine } from "@/components/HeadingLine";
import { FadeIn } from "@/components/Motion";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name}—a premium U.S. medical billing and RCM partner with 10+ years of experience, 98% clean claims, and a calm, transparent approach.`,
  alternates: { canonical: "/about" },
};

const VISION_CARDS = [
  {
    title: "Mission",
    description:
      "Empower healthcare providers with elite revenue solutions that are accurate, compliant, and easy to understand—so clinicians can stay focused on patients.",
    Icon: Target,
  },
  {
    title: "Vision",
    description:
      "To be the most trusted specialty RCM partner in the U.S.—known for calm execution, measurable improvement, and enduring provider relationships.",
    Icon: Eye,
  },
  {
    title: "Values",
    description:
      "Transparency, precision, partnership, and calm confidence in every claim, report, and conversation with your practice.",
    Icon: Gem,
  },
] as const;

export default function AboutPage() {
  return (
    <main>
      {/* Page banner — ClinicMaster style, no breadcrumbs */}
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
              About Us
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Vision and Mission — ClinicMaster layout */}
      <section className="relative z-10 bg-white section-pad">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <FadeIn>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              <ShieldPlus className="h-4 w-4" strokeWidth={2} />
              Vision and Mission
            </p>
            <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Inspirational Clarity
              <br />
              Our Vision and Mission
            </h2>
            <HeadingLine align="left" />
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Our vision is to strengthen practice revenue with specialty-ready
              billing and calm, transparent reporting—so your team can focus on
              care.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {VISION_CARDS.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(10,37,64,0.08)] ring-1 ring-[#e8eef5] sm:gap-5 sm:p-5"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal bg-[#E8F7FB] text-teal sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold text-navy">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem]">
              <Image
                src="/assets/images/about/vision-mission.webp"
                alt="Elite Medical Services care team"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Schedule consultation — ClinicMaster style-16 */}
      <section className="relative z-10 overflow-hidden bg-white section-pad !pt-0">
        <div className="container-wide">
          <FadeIn>
            <div className="relative flex min-h-[280px] items-center overflow-hidden rounded-[2rem] sm:min-h-[340px] sm:rounded-[3rem] lg:min-h-[400px] lg:rounded-[60px]">
              {/* Right-side photo — keep face in frame */}
              <div aria-hidden className="absolute inset-0 bg-[#031B4E]">
                <Image
                  src="/assets/images/about/call-action.webp"
                  alt=""
                  fill
                  className="object-cover object-[85%_18%]"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
              {/* Left column gradient — solid navy fading into the image */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, #031B4E 0%, #031B4E 38%, rgba(3,27,78,0.92) 48%, rgba(3,27,78,0.55) 62%, rgba(3,27,78,0.15) 78%, transparent 100%)",
                }}
              />
              <div className="relative z-[2] max-w-xl px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                  Schedule Your Consultation Today!
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75 sm:text-base">
                  Book a free consultation and see how Elite can tighten claims,
                  cut denials, and bring calm clarity to your revenue cycle.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-teal pl-6 pr-1.5 text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-[#00a1be]"
                >
                  Book Appointment
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-teal">
                    <ArrowRight className="h-4 w-4 -rotate-45" strokeWidth={2.5} />
                  </span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
