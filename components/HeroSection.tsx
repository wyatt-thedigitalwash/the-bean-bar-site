"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/assets/carrollwood-interior-lounge-counter.jpeg"
        alt="Inside The Bean Bar Co. Carrollwood — lounge seating, mural wall, and coffee counter"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-brand-primary/65" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl px-4"
      >
        <Image
          src="/branding/the-bean-bar-co.avif"
          alt="The Bean Bar Co. logo"
          width={180}
          height={144}
          className="mx-auto mb-6 brightness-0 invert opacity-90"
        />
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
          Brewing Happiness, One Cup at a Time
        </h1>
        <p className="mt-6 font-heading italic text-lg sm:text-xl text-white/90 max-w-xl mx-auto">
          Crafted with passion, served with love. Visit us at Carrollwood or
          Tampa Palms.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-xl bg-white text-brand-primary font-semibold px-8 py-3.5 transition-all hover:bg-gray-100 hover:scale-[1.03] active:scale-[0.98]"
            aria-label="View Our Menu"
          >
            View Our Menu
          </Link>
          <Link
            href="/locations"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white text-white font-semibold px-8 py-3.5 transition-all hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98]"
            aria-label="Find a Location"
          >
            Find a Location
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
