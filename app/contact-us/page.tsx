import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { LOCATIONS, HOURS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | The Bean Bar Co.",
  description:
    "Get in touch with The Bean Bar Co. Questions, catering requests, or event bookings — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-primary pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-white/90">
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-text mb-6">
              Our Locations
            </h2>
            <div className="space-y-8">
              {Object.values(LOCATIONS).map((loc) => (
                <div key={loc.slug} className="bg-brand-surface rounded-2xl p-6 shadow-sm">
                  <h3 className="font-heading text-xl font-bold text-brand-text">
                    {loc.name}
                  </h3>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-brand-primary mt-1 shrink-0" />
                      <a
                        href={loc.googleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-brand-muted hover:text-brand-primary transition-colors"
                      >
                        {loc.address}
                      </a>
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
                </div>
              ))}
            </div>

            <div className="mt-8 bg-brand-surface rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-brand-text">Hours</h3>
                  <p className="text-sm text-brand-muted mt-1">{HOURS.weekday}</p>
                  <p className="text-sm text-brand-muted">{HOURS.weekend}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-text mb-6">
              Send Us a Message
            </h2>
            <div className="bg-brand-surface rounded-2xl p-6 sm:p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
