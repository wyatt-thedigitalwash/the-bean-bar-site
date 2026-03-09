"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { LOCATIONS } from "@/lib/constants";

type OrderFrameProps = {
  location: "carrollwood" | "tampa-palms";
};

export default function OrderFrame({ location }: OrderFrameProps) {
  const [hasError, setHasError] = useState(false);
  const loc = LOCATIONS[location];

  if (hasError) {
    return (
      <div className="bg-brand-surface rounded-2xl p-8 text-center">
        <p className="text-brand-text font-medium mb-4">
          Unable to load the ordering portal inline.
        </p>
        <a
          href={loc.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-white rounded-xl px-6 py-3 font-medium transition-colors"
          aria-label={`Continue to order from ${loc.name}`}
        >
          Continue to Order <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <div>
      <iframe
        src={loc.orderUrl}
        title={`Order from The Bean Bar Co. — ${loc.name}`}
        className="w-full border-none rounded-2xl bg-white"
        style={{ minHeight: "850px" }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        onError={() => setHasError(true)}
      />
      <p className="text-center text-sm text-brand-muted mt-3">
        You&apos;re ordering securely through our DriPos portal.
      </p>
    </div>
  );
}
