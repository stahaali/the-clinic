"use client";

import Link from "next/link";
import { ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed bottom-5 right-4 z-40 sm:bottom-6 sm:right-6"
    >
      <Link
        href="/free-audit"
        className="group flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-navy/25 transition hover:bg-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal text-white transition group-hover:scale-105">
          <ClipboardCheck className="h-4 w-4" />
        </span>
        <span className="pr-1">Free Revenue Audit</span>
      </Link>
    </motion.div>
  );
}
