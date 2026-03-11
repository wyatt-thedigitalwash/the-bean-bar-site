import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { LOCATIONS, HOURS } from "@/lib/constants";
import OrderButton from "@/components/OrderButton";

const loc = LOCATIONS.carrollwood;

export const metadata: Metadata = {
  title: "Carrollwood | The Bean Bar Co. | Tampa Coffee Shop",
  description:
    "Visit The Bean Bar Co. in Carrollwood — 11406 N Dale Mabry Hwy, Tampa. Specialty coffee, breakfast, and more. Open 7 days a week.",
};

export default function CarrollwoodPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-primary pt-32 pb-16 px-4 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl text-white font-bold">
          {loc.name}
        </h1>
        <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">{loc.neighborhoodNote}</p>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Interior Image */}
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
          <Image
            src="/assets/carrollwood-counter-menu-board.jpeg"
            alt="Inside The Bean Bar Co. Carrollwood — counter, menu board, and espresso bar"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        {/* Details Card */}
        <div className="bg-brand-surface rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-brand-primary mt-0.5 shrink-0" />
              <a
                href={loc.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-brand-primary transition-colors"
                aria-label="Get directions to Carrollwood"
              >
                {loc.address}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-brand-primary shrink-0" />
              <a
                href={loc.phoneTel}
                className="text-brand-muted hover:text-brand-primary transition-colors"
                aria-label={`Call Carrollwood at ${loc.phone}`}
              >
                {loc.phone}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-brand-primary mt-0.5 shrink-0" />
              <div className="text-brand-muted">
                <p>{HOURS.weekday}</p>
                <p>{HOURS.weekend}</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <OrderButton
              location="carrollwood"
              className="inline-flex items-center justify-center rounded-xl bg-brand-primary text-white font-medium px-6 py-3 transition-colors hover:bg-brand-primaryDark"
              ariaLabel="Order online from Carrollwood"
            >
              Order Online
            </OrderButton>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <iframe
            title="The Bean Bar Co. Carrollwood location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.5!2d-82.5074!3d28.0651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s11406+N+Dale+Mabry+Hwy+Unit+109%2C+Tampa%2C+FL+33618!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
