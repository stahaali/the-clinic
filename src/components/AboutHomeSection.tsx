"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { SITE } from "@/lib/site-data";

const phoneHref = `tel:${SITE.phone.replace(/\D/g, "")}`;

export function AboutHomeSection() {
  return (
    <section className="relative z-10 bg-slate-soft section-pad">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Left — overlapping images */}
          <FadeIn className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] w-[78%] overflow-hidden rounded-[28px] sm:rounded-[32px]">
              <Image
                src="/assets/images/benefits/main.webp"
                alt={`${SITE.name} care team supporting patients`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 70vw, 35vw"
              />
            </div>
            <div className="absolute bottom-[8%] right-0 aspect-[3/4] w-[48%] overflow-hidden rounded-[24px] border-[6px] border-slate-soft shadow-[0_12px_40px_rgba(3,27,78,0.12)] sm:rounded-[28px] sm:border-8">
              <Image
                src="/assets/images/get-started/thumb-2.webp"
                alt="Modern clinical environment"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 40vw, 20vw"
              />
            </div>
          </FadeIn>

          {/* Right — about copy */}
          <FadeIn delay={0.08}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              About {SITE.name}
            </p>

            <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.4rem] lg:leading-tight">
              Inspiring Health, Delivering Care with Excellence and Compassion
            </h2>

            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              {SITE.name} partners with U.S. healthcare providers for specialty-ready
              medical billing and RCM—cleaner claims, fewer denials, and calm,
              transparent reporting so your team can stay focused on patients.
            </p>

            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/about"
                className="inline-flex h-12 shrink-0 items-center gap-3 rounded-full bg-teal pl-6 pr-1.5 text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-[#00a1be]"
              >
                More About Us
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </Link>

              <span
                aria-hidden
                className="hidden h-10 w-px bg-[#d5dde8] sm:block"
              />

              <a
                href={phoneHref}
                className="inline-flex items-center gap-3"
                aria-label={`Call ${SITE.phone}`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                  <Phone className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-sm text-muted-foreground">Contact Us:</span>
                  <span className="font-display text-base font-bold text-navy sm:text-lg">
                    {SITE.phone}
                  </span>
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
