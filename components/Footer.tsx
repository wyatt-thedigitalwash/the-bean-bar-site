import Link from "next/link";
import Image from "next/image";
import { HOURS, SOCIALS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/branding/the-bean-bar-co-site-logo.png"
              alt="The Bean Bar Co."
              width={160}
              height={46}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-2 text-sm text-white/80">
              Brewing Happiness, One Cup at a Time
            </p>
          </div>

          {/* Overview */}
          <div>
            <h4 className="font-semibold text-white mb-3">Overview</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/catering-events" className="hover:text-white transition-colors">
                  Catering &amp; Events
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-white mb-3">Locations</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/carrollwood" className="hover:text-white transition-colors">
                  Carrollwood
                </Link>
              </li>
              <li>
                <Link href="/tampa-palms" className="hover:text-white transition-colors">
                  Tampa Palms
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold text-white mb-2">Hours</h4>
              <p className="text-sm text-white/80">{HOURS.weekday}</p>
              <p className="text-sm text-white/80">{HOURS.weekend}</p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-white mb-3">Follow Us</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SOCIALS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center text-sm text-white/70">
          &copy; {new Date().getFullYear()} The Bean Bar Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
