"use client";

import { useState } from "react";
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
      <section className="relative z-10 bg-navy section-pad !pb-16 !pt-20">
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-light">
              Contact
            </p>
            <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Book your free consultation
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
              Tell us about your practice. We&apos;ll respond within one business day
              to schedule a calm, productive conversation about your revenue
              goals.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 section-pad">
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
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-soft text-teal">
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
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-soft text-teal">
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
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-soft text-teal">
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
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree we may contact you about {SITE.name}{" "}
                    services. We never sell your information.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
