"use client";

import Link from "next/link";
import { BadgeCheck, ShieldCheck, Zap } from "lucide-react";
import { HeadingLine } from "@/components/HeadingLine";
import { FadeIn } from "@/components/Motion";

const WHY_CHOOSE = [
  {
    title: "Lower Overhead",
    description:
      "Eliminate the cost of hiring, training, and retaining a full in-house billing team while gaining specialty expertise.",
    href: "/services",
    Icon: BadgeCheck,
  },
  {
    title: "Faster Reimbursements",
    description:
      "Optimized workflows and payer knowledge mean cleaner claims and shorter payment cycles for your practice.",
    href: "/services",
    Icon: Zap,
  },
  {
    title: "Fewer Denials",
    description:
      "Proactive denial prevention and recovery protocols routinely reduce denial rates by up to 80%.",
    href: "/free-audit",
    Icon: ShieldCheck,
  },
] as const;

export function WhyChooseSection() {
  return (
    <section className="why-choose-section relative z-10 overflow-hidden bg-[#ECF5FB] section-pad">
      <div className="container-wide relative">
        <FadeIn>
          <div className="mb-14 text-center sm:mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Focus on care. We&apos;ll protect the revenue.
            </h2>
            <HeadingLine />
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Outsourcing to Elite replaces staffing risk and reactive billing
              with a specialty-ready RCM partner built for consistency.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="services-one__row mx-auto mt-6 max-w-5xl md:mt-10">
            {WHY_CHOOSE.map((item, index) => (
              <article
                key={item.title}
                className={`services-one__single group ${
                  index < WHY_CHOOSE.length - 1 ? "has-divider" : ""
                }`}
              >
                <div className="services-one__icon">
                  <span className="services-one__icon-bg" aria-hidden />
                  <item.Icon
                    className="services-one__icon-svg"
                    strokeWidth={1.75}
                  />
                </div>

                <div className="services-one__single-inner">
                  <h3 className="services-one__title">
                    <Link href={item.href}>{item.title}</Link>
                  </h3>
                  <p className="services-one__text">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
