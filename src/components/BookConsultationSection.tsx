"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Zap,
} from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES, SITE } from "@/lib/site-data";

const fieldClass =
  "h-10 rounded-xl border-[#dbe7f0] bg-[#F4F8FB] text-sm";

const CONTACT_ITEMS = [
  {
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\D/g, "")}`,
    Icon: Phone,
  },
  {
    label: "Reach out",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    Icon: Mail,
  },
  {
    label: "Location",
    value: SITE.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`,
    Icon: MapPin,
  },
] as const;

export function BookConsultationSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="book-consult-section relative z-10 overflow-hidden bg-navy section-pad">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 15% 0%, rgba(0,189,224,0.28), transparent 45%), radial-gradient(ellipse at 90% 80%, rgba(5,42,117,0.55), transparent 40%)",
        }}
      />

      <div className="book-consult-grid container-wide relative grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
        <FadeIn className="flex h-full flex-col justify-center">
          <h2 className="max-w-xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.35rem]">
            <span className="text-teal">Get in Touch with</span>{" "}
            <span className="text-white">Our Healthcare Experts</span>
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-[1.05rem]">
            Have questions about billing or RCM? Our team is here to help with
            consultations, revenue audits, and specialty-ready guidance—quickly
            and reliably.
          </p>

          <ul className="book-contact-list mt-8 space-y-6">
            {CONTACT_ITEMS.map((item) => (
              <li key={item.label} className="book-contact-item flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                  <item.Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="book-contact-text min-w-0 flex-1">
                  <p className="text-sm text-white/65">{item.label}</p>
                  <a
                    href={item.href}
                    target={item.label === "Location" ? "_blank" : undefined}
                    rel={
                      item.label === "Location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="book-contact-value mt-0.5 block break-words font-display text-lg font-semibold text-white transition hover:text-teal sm:text-xl"
                  >
                    {item.value}
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-white/15 pt-7">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                <Zap className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm text-white/65">Need instant help?</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-0.5 inline-flex items-center gap-2 font-display text-lg font-semibold text-white transition hover:text-teal sm:text-xl"
                >
                  <MessageCircle className="h-4 w-4 text-teal" />
                  Chat with our support team
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="flex h-full min-h-0 flex-col">
          <div className="book-consult-form-card flex h-full min-h-0 flex-col rounded-[1.5rem] border border-white/10 bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:p-6 lg:p-7">
            {submitted ? (
              <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="mb-4 h-12 w-12 text-teal" />
                <h3 className="font-display text-2xl font-semibold text-navy">
                  Consultation requested
                </h3>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Thank you. Our team will confirm your preferred time within one
                  business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="book-consult-form flex h-full min-h-0 flex-1 flex-col gap-3"
              >
                <div className="book-consult-fields grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <Label htmlFor="book-name" className="text-sm text-navy">
                      Full Name
                    </Label>
                    <Input
                      id="book-name"
                      name="name"
                      required
                      placeholder="e.g. Dr. Jane Smith"
                      className={fieldClass}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="book-email" className="text-sm text-navy">
                      Your Email
                    </Label>
                    <Input
                      id="book-email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. you@practice.com"
                      className={fieldClass}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="book-phone" className="text-sm text-navy">
                      Your Phone
                    </Label>
                    <Input
                      id="book-phone"
                      name="phone"
                      type="tel"
                      placeholder="(+1) 123 456 7890"
                      className={fieldClass}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-sm text-navy">Choose a Service</Label>
                    <Select name="service" defaultValue={SERVICES[0].slug}>
                      <SelectTrigger className={`w-full ${fieldClass}`}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">
                          Free Consultation
                        </SelectItem>
                        <SelectItem value="audit">Free Revenue Audit</SelectItem>
                        {SERVICES.slice(0, 4).map((s) => (
                          <SelectItem key={s.slug} value={s.slug}>
                            {s.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="book-date" className="text-sm text-navy">
                      Preferred Date
                    </Label>
                    <Input
                      id="book-date"
                      name="date"
                      type="date"
                      required
                      className={fieldClass}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="book-time" className="text-sm text-navy">
                      Preferred Time
                    </Label>
                    <Input
                      id="book-time"
                      name="time"
                      type="time"
                      required
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="flex min-h-0 flex-1 flex-col space-y-1">
                  <Label htmlFor="book-message" className="text-sm text-navy">
                    Message
                  </Label>
                  <Textarea
                    id="book-message"
                    name="message"
                    placeholder="Write your message here..."
                    className="min-h-[88px] flex-1 resize-none rounded-xl border-[#dbe7f0] bg-[#F4F8FB] text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="book-consult-submit mt-1 h-10 w-fit shrink-0 rounded-xl bg-teal px-7 text-white hover:bg-[#00a1be]"
                >
                  Book Consultation
                </Button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
