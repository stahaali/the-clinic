import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-auto border-t border-navy/10 bg-navy text-white">
      <div className="container-wide px-4 pt-14 pb-6 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-md object-cover"
              />
              <span className="font-display text-lg font-semibold">
                {SITE.name}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-teal-light">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/free-audit"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  Free Revenue Audit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-teal-light">
              Legal
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-teal-light">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                <a href={`tel:${SITE.phone.replace(/\D/g, "")}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-sm text-white/50 sm:text-base">
          <p>© {year} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
