"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { useOrderModal, type LocationKey } from "@/lib/stores/order-modal-store";

function OrderRedirect() {
  const searchParams = useSearchParams();
  const paramLocation = searchParams.get("location") as LocationKey | null;
  const open = useOrderModal((s) => s.open);

  useEffect(() => {
    open(paramLocation === "tampa-palms" ? "tampa-palms" : "carrollwood");
  }, [paramLocation, open]);

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary mx-auto mb-4" />
        <p className="text-brand-muted text-sm">Loading order portal...</p>
      </div>
    </section>
  );
}

export default function OrderPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary" />
        </div>
      }
    >
      <OrderRedirect />
    </Suspense>
  );
}
