"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { MapPin, Phone } from "lucide-react";
import OrderFrame from "@/components/OrderFrame";
import { LOCATIONS } from "@/lib/constants";

type LocationKey = "carrollwood" | "tampa-palms";

function OrderContent() {
  const searchParams = useSearchParams();
  const paramLocation = searchParams.get("location") as LocationKey | null;
  const [activeLocation, setActiveLocation] = useState<LocationKey>(
    paramLocation === "tampa-palms" ? "tampa-palms" : "carrollwood"
  );

  const loc = LOCATIONS[activeLocation];

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-primary pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Order Online
          </h1>
          <p className="mt-4 text-white/90">
            Order ahead for quick pickup at either location.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Tab Switcher */}
        <div className="flex gap-2 mb-8">
          {(Object.keys(LOCATIONS) as LocationKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveLocation(key)}
              className={`flex-1 text-center py-3 rounded-xl text-sm font-medium transition-colors ${
                activeLocation === key
                  ? "bg-brand-primary text-white"
                  : "bg-brand-surface text-brand-text hover:bg-brand-primary/10"
              }`}
              aria-label={`Order from ${LOCATIONS[key].name}`}
            >
              {LOCATIONS[key].name}
            </button>
          ))}
        </div>

        {/* Location Info */}
        <div className="bg-brand-surface rounded-2xl p-5 mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-brand-primary mt-1 shrink-0" />
            <span className="text-sm text-brand-muted">{loc.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-brand-primary shrink-0" />
            <a
              href={loc.phoneTel}
              className="text-sm text-brand-muted hover:text-brand-primary transition-colors"
            >
              {loc.phone}
            </a>
          </div>
        </div>

        {/* Order Frame */}
        <OrderFrame location={activeLocation} />
      </section>
    </>
  );
}

export default function OrderPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary" />
        </div>
      }
    >
      <OrderContent />
    </Suspense>
  );
}
