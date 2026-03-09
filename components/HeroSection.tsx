"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-brand-primary px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Brewing Happiness, One Cup at a Time
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl mx-auto">
          Crafted with passion, served with love. Visit us at Carrollwood or
          Tampa Palms.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-xl bg-white text-brand-primary font-semibold px-8 py-3.5 transition-colors hover:bg-gray-100"
            aria-label="View Our Menu"
          >
            View Our Menu
          </Link>
          <Link
            href="/locations"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white text-white font-semibold px-8 py-3.5 transition-colors hover:bg-white/10"
            aria-label="Find a Location"
          >
            Find a Location
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
