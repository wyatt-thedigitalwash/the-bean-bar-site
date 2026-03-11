"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import {
  MENU_CATEGORIES,
  MENU_TABS,
  FLAVORS,
  ALT_MILKS,
} from "@/lib/constants";
import { useOrderModal } from "@/lib/stores/order-modal-store";

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("coffee-espresso");
  const openOrder = useOrderModal((s) => s.open);

  const visibleCategories =
    activeTab === "coffee-espresso"
      ? MENU_CATEGORIES.filter(
          (c) => c.id === "coffee-espresso" || c.id === "house-specialties"
        )
      : MENU_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <div>
      {/* Order Online CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <button
          onClick={() => openOrder("carrollwood")}
          className="flex-1 inline-flex items-center justify-center rounded-xl bg-brand-primary text-white font-medium px-5 py-3 text-sm transition-all hover:bg-brand-primaryDark hover:scale-[1.03] active:scale-[0.98]"
          aria-label="Order online from Carrollwood"
        >
          Order Online — Carrollwood
        </button>
        <button
          onClick={() => openOrder("tampa-palms")}
          className="flex-1 inline-flex items-center justify-center rounded-xl bg-brand-primary text-white font-medium px-5 py-3 text-sm transition-all hover:bg-brand-primaryDark hover:scale-[1.03] active:scale-[0.98]"
          aria-label="Order online from Tampa Palms"
        >
          Order Online — Tampa Palms
        </button>
      </div>

      {/* Tabs */}
      <div className="sticky top-16 z-10 bg-brand-bg py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex gap-2 overflow-x-auto">
          {MENU_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-brand-primary text-white"
                  : "bg-brand-surface text-brand-text hover:bg-brand-primary/10"
              }`}
              aria-label={`Show ${tab.label} menu`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="mt-6 space-y-8">
        {visibleCategories.map((category) => (
          <div key={category.id}>
            <h3 className="font-heading text-xl font-bold text-brand-text mb-4">
              {category.title}
            </h3>
            <div className="bg-brand-surface rounded-2xl divide-y divide-gray-100">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between px-5 py-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-brand-text font-medium">
                      {item.name}
                    </span>
                    {item.badge === "special" && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded-full">
                        <Star className="h-3 w-3" /> House Special
                      </span>
                    )}
                    {item.badge === "V" && (
                      <span className="text-xs font-medium text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded-full">
                        V
                      </span>
                    )}
                    {item.badge === "GF" && (
                      <span className="text-xs font-medium text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded-full">
                        GF
                      </span>
                    )}
                  </div>
                  <span className="text-brand-accent font-semibold text-sm whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Flavors & Alt Milks — show on coffee tab */}
        {activeTab === "coffee-espresso" && (
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-xl font-bold text-brand-text mb-3">
                Flavors <span className="text-sm font-normal text-brand-muted">(+$0.75)</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {FLAVORS.map((f) => (
                  <span
                    key={f}
                    className="text-sm bg-brand-accent/10 text-brand-accent px-3 py-1.5 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-brand-text mb-3">
                Alt Milks <span className="text-sm font-normal text-brand-muted">(+$0.75)</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {ALT_MILKS.map((m) => (
                  <span
                    key={m}
                    className="text-sm bg-brand-accent/10 text-brand-accent px-3 py-1.5 rounded-full"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="text-sm text-brand-muted mt-8 text-center">
        Menu items and prices subject to change. Ask about seasonal offerings.
      </p>
    </div>
  );
}
