import type { Metadata } from "next";
import LocationCard from "@/components/LocationCard";
import { LOCATIONS, HOURS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Locations | The Bean Bar Co. | Carrollwood & Tampa Palms",
  description:
    "Find The Bean Bar Co. near you. Two Tampa locations — Carrollwood on N Dale Mabry Hwy and Tampa Palms on Palm Pointe Dr. Open 7 days a week.",
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-primary pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Our Locations
          </h1>
          <p className="mt-4 text-white/90">
            Two Tampa locations serving your neighborhood.
          </p>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-16 bg-brand-bg">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.values(LOCATIONS).map((loc) => (
              <LocationCard
                key={loc.slug}
                name={loc.name}
                address={loc.address}
                phone={loc.phone}
                phoneTel={loc.phoneTel}
                orderUrl={loc.orderUrl}
                googleMaps={loc.googleMaps}
                slug={loc.slug}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-brand-text font-medium">{HOURS.weekday}</p>
            <p className="text-brand-text mt-1">{HOURS.weekend}</p>
          </div>
        </div>
      </section>
    </>
  );
}
