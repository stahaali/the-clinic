"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const phoneHref = `tel:${SITE.phone.replace(/\D/g, "")}`;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "left-0 right-0 top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "fixed border-b border-white/10 bg-navy shadow-sm"
          : "absolute bg-transparent",
      )}
    >
      <div className="container-wide flex h-auto min-h-16 items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt={`${SITE.name} logo`}
            width={40}
            height={40}
            className="h-9 w-9 rounded-md object-cover sm:h-10 sm:w-10"
            priority
          />
          <span className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3.5 py-2 text-[15px] font-semibold transition-colors",
                  active ? "text-teal" : "text-white hover:text-teal",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneHref}
            className="hidden items-center gap-3 lg:flex"
            aria-label={`Call ${SITE.phone}`}
          >
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal ring-[6px] ring-white/15">
              <Phone className="h-5 w-5 text-white" strokeWidth={2.25} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[13px] font-medium text-white/65">
                Have Any Questions?
              </span>
              <span className="text-[17px] font-bold tracking-wide text-white">
                {SITE.phone}
              </span>
            </span>
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-navy lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-sm font-semibold transition-colors",
                      active
                        ? "bg-white/10 text-teal"
                        : "text-white hover:bg-white/10 hover:text-teal",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={phoneHref}
                className="mt-3 flex items-center gap-3 rounded-md px-3 py-2.5"
              >
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal ring-[5px] ring-white/15">
                  <Phone className="h-4 w-4 text-white" strokeWidth={2.25} />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-xs font-medium text-white/65">
                    Have Any Questions?
                  </span>
                  <span className="text-base font-bold text-white">
                    {SITE.phone}
                  </span>
                </span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
