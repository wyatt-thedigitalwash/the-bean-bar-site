import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

type LocationCardProps = {
  name: string;
  address: string;
  phone: string;
  phoneTel: string;
  orderUrl: string;
  googleMaps: string;
  slug: string;
};

export default function LocationCard({
  name,
  address,
  phone,
  phoneTel,
  orderUrl,
  googleMaps,
  slug,
}: LocationCardProps) {
  return (
    <div className="bg-brand-surface rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-heading text-2xl font-bold text-brand-text">
        {name}
      </h3>

      <div className="mt-4 space-y-3">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-brand-primary mt-0.5 shrink-0" />
          <a
            href={googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-muted hover:text-brand-primary transition-colors"
            aria-label={`Get directions to ${name}`}
          >
            {address}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-brand-primary shrink-0" />
          <a
            href={phoneTel}
            className="text-sm text-brand-muted hover:text-brand-primary transition-colors"
            aria-label={`Call ${name} at ${phone}`}
          >
            {phone}
          </a>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href={orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-brand-primary text-white font-medium px-5 py-2.5 text-sm transition-colors hover:bg-brand-primaryDark"
          aria-label={`Order online from ${name}`}
        >
          Order Online
        </a>
        <Link
          href={`/${slug}`}
          className="inline-flex items-center justify-center rounded-xl border-2 border-brand-primary text-brand-primary font-medium px-5 py-2.5 text-sm transition-colors hover:bg-brand-primary hover:text-white"
        >
          View Location
        </Link>
        <a
          href={googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-gray-300 text-brand-muted font-medium px-5 py-2.5 text-sm transition-colors hover:border-gray-400 hover:text-brand-text"
          aria-label={`Get directions to ${name}`}
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}
