"use client";

import Image from "next/image";
import { HeadingLine } from "@/components/HeadingLine";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";

const STEPS = [
  {
    title: "Book a Consultation",
    description:
      "Schedule a free consult or revenue audit online, by phone, or with our team.",
    icon: "/assets/images/process/step-1.webp",
  },
  {
    title: "Get Evaluated",
    description:
      "We review your claims, denials, and payer mix to surface clear opportunities.",
    icon: "/assets/images/process/step-2.webp",
  },
  {
    title: "Start Collecting",
    description:
      "Follow a specialty-ready RCM plan with transparent reporting and support.",
    icon: "/assets/images/process/step-3.webp",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className="how-it-works relative z-10 bg-[#F0F4FF] section-pad">
      <div className="container-wide relative">
        <FadeIn>
          <div className="mx-auto mb-2 max-w-2xl text-center">
            <p className="mb-3 inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              <Image
                src="/assets/images/process/subtitle-icon.svg"
                alt=""
                width={22}
                height={22}
                className="h-[18px] w-[18px]"
              />
              Our Process
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              How it works
            </h2>
            <HeadingLine />
          </div>
        </FadeIn>

        <div className="how-it-works__steps relative mt-10 md:mt-16 lg:mt-24">
          {/* Full connecting line behind all 3 icons */}
          <div
            className="how-it-works__line pointer-events-none absolute inset-x-0 top-0 hidden md:block"
            aria-hidden
          />

          <Stagger className="relative z-[1] grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {STEPS.map((step) => (
              <StaggerItem key={step.title} className="text-center">
                <div className="how-it-works__icon mx-auto mb-6 flex h-[150px] w-[150px] items-center justify-center lg:mb-8 lg:h-[180px] lg:w-[180px]">
                  <Image
                    src={step.icon}
                    alt=""
                    width={180}
                    height={180}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="relative z-[2] bg-[#F0F4FF] px-2">
                  <h3 className="font-display text-xl font-semibold text-navy lg:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-2.5 max-w-[280px] text-[15px] leading-relaxed text-muted-foreground lg:text-base">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
