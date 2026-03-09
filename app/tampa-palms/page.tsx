import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import { LOCATIONS, HOURS } from "@/lib/constants";

const loc = LOCATIONS["tampa-palms"];

export const metadata: Metadata = {
  title: "Tampa Palms | The Bean Bar Co. | Tampa Coffee Shop",
  description:
    "Visit The Bean Bar Co. in Tampa Palms — 17018 Palm Pointe Dr, Tampa. Specialty coffee, breakfast, and more. Open 7 days a week.",
};

export default function TampaPalmsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-primary pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            {loc.name}
          </h1>
          <p className="mt-4 text-white/90">{loc.neighborhoodNote}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
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
                aria-label="Get directions to Tampa Palms"
              >
                {loc.address}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-brand-primary shrink-0" />
              <a
                href={loc.phoneTel}
                className="text-brand-muted hover:text-brand-primary transition-colors"
                aria-label={`Call Tampa Palms at ${loc.phone}`}
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
            <a
              href={loc.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-brand-primary text-white font-medium px-6 py-3 transition-colors hover:bg-brand-primaryDark"
              aria-label="Order online from Tampa Palms"
            >
              Order Online
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <iframe
            title="The Bean Bar Co. Tampa Palms location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.5!2d-82.3474!3d28.0851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s17018+Palm+Pointe+Dr%2C+Tampa%2C+FL+33647!5e0!3m2!1sen!2sus!4v1"
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
