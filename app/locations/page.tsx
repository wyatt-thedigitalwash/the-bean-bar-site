import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <Image
          src="/assets/interior-wall-branding-subway-tile.jpeg"
          alt="The Bean Bar Co. interior branding on white subway tile wall"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-primary/70" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
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
