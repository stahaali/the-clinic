"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroMedia() {
  return (
    <div className="hero-media-wrap relative mx-auto w-full max-w-[600px] lg:max-w-[700px] lg:ml-auto">
      {/* Circle stack sits low so the cutout meets the banner bottom */}
      <div className="relative z-[1] aspect-square w-full overflow-visible lg:mb-[-10%]">
        {/* Circles — larger disc stack behind the subject */}
        <span
          aria-hidden
          className="absolute left-[60%] top-[48%] block aspect-square w-[118%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-white/60 opacity-60 shadow-[0_0_20px_rgba(0,0,0,0.02)]"
        />

        <span
          aria-hidden
          className="absolute left-[60%] top-[48%] block aspect-square w-[98%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-white shadow-[0_0_20px_rgba(0,0,0,0.08)]"
        />

        <span
          aria-hidden
          className="absolute left-[60%] top-[48%] block aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-navy/20"
        />

        <span
          aria-hidden
          className="absolute left-[60%] top-[48%] block aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80"
        />

        <Image
          src="/assets/images/hero-img.webp"
          alt="Elite Medical Services healthcare professional"
          width={900}
          height={900}
          priority
          className="hero-doctor-img absolute bottom-0 left-1/2 z-[2] h-[148%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
          sizes="(max-width: 1024px) 90vw, 700px"
        />

        {/* Heart floating card — on outer circle rim */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="hero-heart-card absolute -right-20 top-[-2%] z-[3] flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-white shadow-[0_0_30px_rgba(0,0,0,0.05)] sm:-right-20 sm:top-0 sm:h-[90px] sm:w-[90px] sm:rounded-[25px]"
        >
          <Image
            src="/assets/images/heart.webp"
            alt=""
            width={48}
            height={48}
            className="h-9 w-9 translate-x-1.5 object-contain sm:h-11 sm:w-11"
          />
        </motion.div>

        {/* Successful diagnosis floating card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.45 }}
          className="hero-stat-card absolute bottom-[42%] -left-8 z-[3] w-[150px] rounded-[22px] bg-white p-4 shadow-[0_0_30px_rgba(0,0,0,0.06)] sm:bottom-[44%] sm:-left-10 sm:w-[170px] sm:p-5"
        >
          <div className="relative mx-auto mb-3 flex h-[70px] w-[70px] items-center justify-center sm:h-20 sm:w-20">
            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                stroke="#ccfbf1"
                strokeWidth="2.5"
              />
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                stroke="#00BDE0"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={`${82 * 0.973} 100`}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold text-navy sm:text-xl">
              82%
            </span>
          </div>
          <p className="text-center text-xs font-semibold leading-snug text-navy sm:text-sm">
            Successful diagnosis
          </p>
        </motion.div>
      </div>
    </div>
  );
}
