import type { Metadata } from "next";
import { Coffee, Truck, CheckCircle } from "lucide-react";
import CateringForm from "@/components/CateringForm";

export const metadata: Metadata = {
  title: "Catering & Events | The Bean Bar Co.",
  description:
    "Bring The Bean Bar Co. to your next event. Espresso cart and coffee truck catering for weddings, corporate events, festivals, and more in Tampa, FL.",
};

const ESPRESSO_CART_USES = [
  "Weddings",
  "Conferences",
  "Office events",
  "Church events",
  "VIP experiences",
];

const COFFEE_TRUCK_USES = [
  "Corporate celebrations",
  "Community events",
  "University functions",
  "Grand openings",
  "Outdoor weddings",
];

export default function CateringEventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-primary pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Bring The Bean Bar To Your Event
          </h1>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            From intimate weddings to large corporate functions, we bring the coffee experience to you.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Espresso Cart */}
          <div className="bg-brand-surface rounded-2xl overflow-hidden shadow-sm">
            <div className="aspect-[16/9] bg-brand-primary/10 flex flex-col items-center justify-center">
              <Coffee className="h-16 w-16 text-brand-primary/40" />
              <span className="mt-2 text-sm text-brand-primary/40">Photo coming soon</span>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-text">
                Espresso Cart
              </h3>
              <p className="mt-2 text-brand-muted">
                Compact, classy, and perfect for indoor or tight spaces.
                Available with custom signage to match your event.
              </p>
              <h4 className="mt-4 font-semibold text-brand-text text-sm">
                Perfect for:
              </h4>
              <ul className="mt-2 space-y-2">
                {ESPRESSO_CART_USES.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-muted">
                    <CheckCircle className="h-4 w-4 text-brand-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coffee Truck */}
          <div className="bg-brand-surface rounded-2xl overflow-hidden shadow-sm">
            <div className="aspect-[16/9] bg-brand-primary/10 flex flex-col items-center justify-center">
              <Truck className="h-16 w-16 text-brand-primary/40" />
              <span className="mt-2 text-sm text-brand-primary/40">Photo coming soon</span>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-text">
                Coffee Truck / Trailer
              </h3>
              <p className="mt-2 text-brand-muted">
                Full-service mobile setup for outdoor events and festivals.
                Everything you need for a premium coffee experience.
              </p>
              <h4 className="mt-4 font-semibold text-brand-text text-sm">
                Perfect for:
              </h4>
              <ul className="mt-2 space-y-2">
                {COFFEE_TRUCK_USES.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-muted">
                    <CheckCircle className="h-4 w-4 text-brand-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Form */}
      <section className="py-16 bg-brand-bg">
        <div className="px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-brand-text text-center mb-2">
            Let&apos;s Make It Happen
          </h2>
          <p className="text-brand-muted text-center mb-8">
            Fill out the form below and we&apos;ll get back to you about your event.
          </p>
          <div className="bg-brand-surface rounded-2xl p-6 sm:p-8 shadow-sm">
            <CateringForm />
          </div>
        </div>
      </section>
    </>
  );
}
