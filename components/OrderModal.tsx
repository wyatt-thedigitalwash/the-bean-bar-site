"use client";

import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, ExternalLink } from "lucide-react";
import { useOrderModal } from "@/lib/stores/order-modal-store";
import { LOCATIONS } from "@/lib/constants";

export default function OrderModal() {
  const { isOpen, location, open, close } = useOrderModal();
  const loc = LOCATIONS[location];

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-brand-primary text-white shrink-0">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="font-medium text-sm">
                Ordering from {loc.name}
              </span>
              <button
                onClick={() =>
                  open(location === "carrollwood" ? "tampa-palms" : "carrollwood")
                }
                className="text-xs underline underline-offset-2 text-white/80 hover:text-white transition-colors"
              >
                Switch to{" "}
                {location === "carrollwood" ? "Tampa Palms" : "Carrollwood"}
              </button>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={loc.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/80 hover:text-white flex items-center gap-1 transition-colors"
                aria-label="Open order page in new tab"
              >
                <ExternalLink className="h-3.5 w-3.5" /> New tab
              </a>
              <button
                onClick={close}
                className="p-1 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Close order modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Iframe */}
          <iframe
            key={location}
            src={loc.orderUrl}
            title={`Order from The Bean Bar Co. — ${loc.name}`}
            className="flex-1 w-full border-none"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
