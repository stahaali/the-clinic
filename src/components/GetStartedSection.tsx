"use client";

import Image from "next/image";
import { FadeIn } from "@/components/Motion";

const THUMBS = [
  {
    src: "/assets/images/get-started/thumb-1.webp",
    alt: "Medical team reviewing care plans",
  },
  {
    src: "/assets/images/get-started/thumb-2.webp",
    alt: "Providers supporting a patient",
  },
  {
    src: "/assets/images/get-started/thumb-3.webp",
    alt: "Nurse with patient in clinic",
  },
] as const;

export function GetStartedSection() {
  return (
    <section className="relative z-10 overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left image */}
        <FadeIn className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[560px]">
          <Image
            src="/assets/images/get-started/main.webp"
            alt="Elite Medical Services care team with patients"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
        </FadeIn>

        {/* Right navy panel */}
        <FadeIn delay={0.06} className="bg-navy px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
            <span className="relative flex h-4 w-4 items-center justify-center rounded-full border border-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            </span>
            Get Started
          </p>
          <h2 className="max-w-lg font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Ready For Better Healthcare Solutions
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70 sm:text-base">
            Partner with Elite for specialty-ready billing, cleaner claims, and
            calm revenue reporting—so your team can focus on care.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
            {THUMBS.map((thumb) => (
              <div
                key={thumb.src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={thumb.src}
                  alt={thumb.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 30vw, 15vw"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
