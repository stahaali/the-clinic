import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeadingLine } from "@/components/HeadingLine";
import { cn } from "@/lib/utils";

export function CTABand({
  title = "Ready to strengthen your revenue cycle?",
  description = "Book a free consultation or request a no-obligation revenue audit. We'll show you where clean claims and denial reduction can move the needle.",
  primaryHref = "/contact",
  primaryLabel = "Book Free Consultation",
  className,
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative z-10 bg-[#F0F4FF] section-pad", className)}>
      <div className="container-narrow overflow-hidden rounded-2xl bg-navy px-6 py-12 text-center sm:px-10 sm:py-14">
        <div className="relative">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
          <HeadingLine light />
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              render={<Link href={primaryHref} />}
              size="lg"
              className="h-12 gap-2 rounded-lg bg-teal px-8 text-base font-semibold text-white hover:bg-[#00a1be]"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
