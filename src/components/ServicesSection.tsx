"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ClipboardList,
  FileSearch,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { HeadingLine } from "@/components/HeadingLine";
import { SERVICES, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const SERVICE_ICONS = [
  ClipboardList,
  Activity,
  ShieldCheck,
  Stethoscope,
  FileSearch,
  HeartPulse,
] as const;

const SERVICE_IMAGES = [
  "/assets/images/get-started/main.webp",
  "/assets/images/benefits/main.webp",
  "/assets/images/faq-doctor.webp",
  "/assets/images/about/vision-mission.webp",
  "/assets/images/get-started/thumb-1.webp",
  "/assets/images/call-action.webp",
] as const;

const LIST_SERVICES = SERVICES.slice(0, 6).map((service, i) => ({
  ...service,
  Icon: SERVICE_ICONS[i] ?? HeartPulse,
  image: SERVICE_IMAGES[i] ?? SERVICE_IMAGES[0],
}));

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = LIST_SERVICES[active] ?? LIST_SERVICES[0];
  const ActiveIcon = current.Icon;

  return (
    <section className="relative z-10 bg-teal-soft section-pad">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.5rem]">
              Have a look on our medical services
            </h2>
            <HeadingLine />
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              At {SITE.name}, we are dedicated to delivering exceptional
              healthcare revenue solutions—specialty-ready medical billing and
              RCM across the USA.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10 lg:mt-14">
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-8 xl:gap-10">
            {/* Left service list */}
            <div className="flex flex-col" role="tablist" aria-label="Services">
              {LIST_SERVICES.map((service, index) => {
                const Icon = service.Icon;
                const isActive = index === active;
                return (
                  <button
                    key={service.slug}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(index)}
                    className={cn(
                      "flex w-full items-center gap-4 px-5 py-4 text-left transition-colors sm:px-6 sm:py-5",
                      isActive
                        ? "rounded-2xl bg-teal text-white shadow-sm"
                        : "border-b border-[#d7e6ef] text-navy last:border-b-0 hover:bg-white/60",
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-6 w-6 shrink-0",
                        isActive ? "text-white" : "text-teal",
                      )}
                      strokeWidth={1.75}
                    />
                    <span
                      className={cn(
                        "font-display text-[15px] font-semibold sm:text-base",
                        isActive ? "text-white" : "text-navy",
                      )}
                    >
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right detail card */}
            <article
              role="tabpanel"
              className="overflow-hidden rounded-[22px] border border-[#d7e6ef] bg-white p-5 shadow-[0_8px_30px_rgba(3,27,78,0.04)] sm:p-6 lg:p-7"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[16/9]">
                <Image
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>

              <div className="mt-6 flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-teal bg-[#E8F7FB] text-teal lg:hidden">
                  <ActiveIcon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">
                    {current.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                    {current.summary}
                  </p>
                </div>
              </div>

              <Link
                href={`/services#${current.slug}`}
                className="mt-7 inline-flex h-12 items-center gap-3 rounded-full bg-teal pl-6 pr-1.5 text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-[#00a1be]"
              >
                Learn More
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-teal">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </Link>
            </article>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
