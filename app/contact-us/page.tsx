import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { LOCATIONS, HOURS } from "@/lib/constants";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact Us | The Bean Bar Co.",
  description:
    "Get in touch with The Bean Bar Co. Questions, catering requests, or event bookings — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-primary pt-32 pb-16 px-4 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl text-white font-bold">
          Contact Us
        </h1>
        <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
          We&apos;d love to hear from you.
        </p>
      </section>

      <FadeIn className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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

            {/* Accent Image */}
            <div className="relative h-48 rounded-2xl overflow-hidden mt-8">
              <Image
                src="/assets/front-door-logo-hours.jpeg"
                alt="The Bean Bar Co. front door showing logo and business hours"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
      </FadeIn>
    </>
  );
}
