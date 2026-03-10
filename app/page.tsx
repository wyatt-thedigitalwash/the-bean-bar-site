import Link from "next/link";
import Image from "next/image";
import {
  Coffee,
  ShoppingBag,
  Truck,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { LOCATIONS, HOURS, SOCIALS } from "@/lib/constants";

const QUICK_ACTIONS = [
  {
    href: "/menu",
    icon: Coffee,
    title: "Our Menu",
    description: "Explore our coffee, teas, and food options",
  },
  {
    href: "/order?location=carrollwood",
    icon: ShoppingBag,
    title: "Order — Carrollwood",
    description: "Order ahead for pickup at Carrollwood",
  },
  {
    href: "/order?location=tampa-palms",
    icon: ShoppingBag,
    title: "Order — Tampa Palms",
    description: "Order ahead for pickup at Tampa Palms",
  },
  {
    href: "/catering-events",
    icon: Truck,
    title: "Catering & Events",
    description: "Bring The Bean Bar to your next event",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Quick Action Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_ACTIONS.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="group bg-brand-surface rounded-2xl p-6 shadow-sm hover:shadow-md border-2 border-transparent hover:border-brand-primary transition-all hover:-translate-y-1"
            >
              <action.icon className="h-8 w-8 text-brand-primary mb-4" />
              <h3 className="font-heading text-lg font-bold text-brand-text group-hover:text-brand-primary transition-colors">
                {action.title}
              </h3>
              <p className="mt-1 text-sm text-brand-muted">
                {action.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Bold Brews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-brand-text">
                Bold Brews &amp; Delicious Bites
              </h2>
              <p className="mt-4 text-brand-muted leading-relaxed">
                From expertly pulled espresso to hearty breakfast sandwiches, we
                craft every item with care. Start your day with our house
                specialties or grab a quick bite with your afternoon pick-me-up.
              </p>
              <Link
                href="/menu"
                className="inline-flex items-center mt-6 bg-brand-primary hover:bg-brand-primaryDark text-white rounded-xl px-6 py-3 font-medium transition-colors"
              >
                Our Menu
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/assets/espresso-machine-pulling-shot.jpeg"
                alt="Espresso machine pulling a fresh shot at The Bean Bar Co."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Catering */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative order-2 md:order-1 aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/assets/coffee-truck-branded-exterior.jpeg"
                alt="The Bean Bar Co. branded coffee truck for events and catering"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-heading text-3xl font-bold text-brand-text">
                Bringing Coffee To Your Event
              </h2>
              <p className="mt-4 text-brand-muted leading-relaxed">
                Our mobile espresso cart and coffee truck are available for
                weddings, corporate events, festivals, and more. Let us handle
                the coffee so you can focus on the celebration.
              </p>
              <Link
                href="/catering-events"
                className="inline-flex items-center mt-6 bg-brand-primary hover:bg-brand-primaryDark text-white rounded-xl px-6 py-3 font-medium transition-colors"
              >
                Start Planning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section className="py-16 bg-brand-bg">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-brand-text text-center mb-10">
            Find Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(LOCATIONS).map((loc) => (
              <div
                key={loc.slug}
                className="bg-brand-surface rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="relative h-48">
                  <Image
                    src={
                      loc.slug === "carrollwood"
                        ? "/assets/carrollwood-storefront-exterior.jpeg"
                        : "/assets/tampa-palms-storefront-exterior.jpeg"
                    }
                    alt={`The Bean Bar Co. ${loc.name} storefront`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 sm:p-8">
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
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <a
                      href={loc.orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-brand-primary text-white font-medium px-5 py-2.5 text-sm transition-colors hover:bg-brand-primaryDark"
                    >
                      Order Online
                    </a>
                    <Link
                      href={`/${loc.slug}`}
                      className="inline-flex items-center justify-center rounded-xl border-2 border-brand-primary text-brand-primary font-medium px-5 py-2.5 text-sm transition-colors hover:bg-brand-primary hover:text-white"
                    >
                      View Location
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-brand-surface rounded-2xl p-8 sm:p-10 max-w-lg mx-auto text-center shadow-sm">
          <Clock className="h-8 w-8 text-brand-primary mx-auto mb-4" />
          <h2 className="font-heading text-2xl font-bold text-brand-text mb-4">
            Hours
          </h2>
          <p className="text-brand-text">{HOURS.weekday}</p>
          <p className="text-brand-text mt-1">{HOURS.weekend}</p>
        </div>
      </section>

      {/* Follow Us */}
      <section className="py-16 bg-brand-bg">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-text mb-3">
            Follow Us
          </h2>
          <p className="text-brand-muted mb-8">
            Follow along for daily specials, events, and behind-the-scenes
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-brand-primary text-brand-primary rounded-xl px-6 py-3 font-medium transition-colors hover:bg-brand-primary hover:text-white"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-brand-primary text-brand-primary rounded-xl px-6 py-3 font-medium transition-colors hover:bg-brand-primary hover:text-white"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="bg-brand-primary py-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Have a question or want to book catering?
          </h2>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center bg-white text-brand-text font-semibold rounded-xl px-8 py-3.5 transition-colors hover:bg-gray-100"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
