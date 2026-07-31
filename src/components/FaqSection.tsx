"use client";

import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/Motion";
import { HeadingLine } from "@/components/HeadingLine";
import { FAQS } from "@/lib/site-data";

const HOME_FAQS = FAQS.slice(0, 5);

export function FaqSection() {
  return (
    <section className="relative z-10 bg-[#F0F4FF] section-pad">
      <div className="container-wide grid items-center gap-10 overflow-visible lg:grid-cols-2 lg:gap-14">
        <FadeIn className="overflow-visible">
          <div className="relative mx-auto w-full max-w-[560px] overflow-visible lg:mx-0 lg:max-w-none">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/assets/images/faq-doctor.webp"
                alt="Elite Medical Services physician"
                width={700}
                height={650}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>

            {/* Video call support widget — ClinicMaster style */}
            <div className="absolute bottom-4 -left-6 z-[1] max-w-[78%] rounded-2xl bg-[#F0F4FF] p-4 sm:bottom-6 sm:-left-10 sm:max-w-[70%] sm:p-5 lg:-left-14">
              <div className="flex items-stretch overflow-hidden rounded-xl">
                <div className="flex w-8 shrink-0 items-center justify-center rounded-l-xl bg-navy px-1 sm:w-9">
                  <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-wide text-white [writing-mode:vertical-rl] rotate-180 sm:text-[11px]">
                    Video Call Support
                  </span>
                </div>
                <div className="overflow-hidden rounded-r-xl bg-white">
                  <Image
                    src="/assets/images/faq-video-call.webp"
                    alt="Video call support"
                    width={408}
                    height={520}
                    className="h-[140px] w-auto object-cover object-top sm:h-[170px] md:h-[190px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy">
            <span className="relative flex h-4 w-4 items-center justify-center rounded-full border border-navy/40">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            </span>
            FAQs
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Helpful answers for your practice
          </h2>
          <HeadingLine align="left" />
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Clear guidance on onboarding, billing results, compliance, and how
            Elite partners with providers across the U.S.
          </p>

          <Accordion defaultValue={["item-0"]} className="mt-8 gap-0 border-0">
            {HOME_FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`item-${i}`}
                className="not-last:border-b not-last:border-[#d7e4ee]"
              >
                <AccordionTrigger className="faq-trigger group/faq rounded-none border-0 px-4 py-4 text-base font-semibold text-navy transition-colors duration-300 hover:no-underline aria-expanded:bg-navy aria-expanded:text-white sm:px-5 **:data-[slot=accordion-trigger-icon]:hidden">
                  <span className="pr-4 text-left">{faq.question}</span>
                  <span className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#00bde0] text-white transition-colors duration-300 group-aria-expanded/faq:bg-white/15 group-aria-expanded/faq:text-white">
                    <Plus className="h-4 w-4 transition-transform duration-300 group-aria-expanded/faq:hidden" />
                    <Minus className="hidden h-4 w-4 transition-transform duration-300 group-aria-expanded/faq:block" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="bg-white px-5 py-4 text-[15px] leading-relaxed text-muted-foreground sm:px-6 sm:py-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </FadeIn>
      </div>
    </section>
  );
}
