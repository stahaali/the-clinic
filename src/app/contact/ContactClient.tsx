"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { HeadingLine } from "@/components/HeadingLine";
import { FadeIn, SectionHeading } from "@/components/Motion";
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
import { SITE } from "@/lib/site-data";

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
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
              Contact
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 bg-[#F0F4FF] section-pad">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="Reach Us"
              title="We're here when you need clarity"
              description="Prefer to talk first? Call or email—our client success team is ready to help."
            />
            <ul className="space-y-5">
              <li className="flex gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-teal">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Phone</p>
                  <a
                    href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                    className="text-sm text-muted-foreground hover:text-teal"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-teal">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm text-muted-foreground hover:text-teal"
                  >
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-teal">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Office</p>
                  <p className="text-sm text-muted-foreground">{SITE.address}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{SITE.hours}</p>
                </div>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 className="mb-4 h-12 w-12 text-teal" />
                  <h2 className="font-display text-2xl font-semibold text-navy">
                    Thank you—message received
                  </h2>
                  <HeadingLine />
                  <p className="mt-3 max-w-md text-muted-foreground">
                    A member of our team will contact you within one business day
                    to schedule your free consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" name="name" required placeholder="Dr. Jane Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@practice.com"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="practice">Practice / organization</Label>
                      <Input id="practice" name="practice" required placeholder="Practice name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Primary interest</Label>
                    <Select name="interest" defaultValue="consultation">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">Free consultation</SelectItem>
                        <SelectItem value="audit">Free revenue audit</SelectItem>
                        <SelectItem value="billing">Medical billing</SelectItem>
                        <SelectItem value="denials">Denial management</SelectItem>
                        <SelectItem value="credentialing">Credentialing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Share specialty mix, current challenges, or goals..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-teal text-white hover:bg-[#00a1be] sm:w-auto"
                  >
                    Submit request
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map */}
      <section className="relative z-10 bg-white section-pad">
        <div className="container-wide">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-[#e5eaf0] shadow-sm">
              <iframe
                title={`${SITE.name} office location`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address)}&z=15&output=embed`}
                className="h-[320px] w-full border-0 sm:h-[400px] lg:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
