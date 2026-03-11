import type { Metadata } from "next";
import LocationCard from "@/components/LocationCard";
import { LOCATIONS, HOURS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Locations | The Bean Bar Co. | Carrollwood & Tampa Palms",
  description:
    "Find The Bean Bar Co. near you. Two Tampa locations — Carrollwood on N Dale Mabry Hwy and Tampa Palms on Palm Pointe Dr. Open 7 days a week.",
};

const LOCATION_IMAGES: Record<string, { src: string; alt: string }> = {
  carrollwood: {
    src: "/assets/carrollwood-storefront-exterior.jpeg",
    alt: "The Bean Bar Co. Carrollwood storefront on N Dale Mabry Hwy",
  },
  "tampa-palms": {
    src: "/assets/tampa-palms-storefront-exterior.jpeg",
    alt: "The Bean Bar Co. Tampa Palms storefront on Palm Pointe Dr",
  },
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-primary pt-32 pb-16 px-4 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl text-white font-bold">
          Our Locations
        </h1>
        <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
          Two Tampa locations serving your neighborhood.
        </p>
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
                location={loc.slug as "carrollwood" | "tampa-palms"}
                googleMaps={loc.googleMaps}
                slug={loc.slug}
                imageSrc={LOCATION_IMAGES[loc.slug]?.src}
                imageAlt={LOCATION_IMAGES[loc.slug]?.alt}
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
