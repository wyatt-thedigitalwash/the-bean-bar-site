"use client";

import { useOrderModal, type LocationKey } from "@/lib/stores/order-modal-store";

type OrderButtonProps = {
  location: LocationKey;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function OrderButton({
  location,
  children,
  className,
  ariaLabel,
}: OrderButtonProps) {
  const open = useOrderModal((s) => s.open);

  return (
    <button
      onClick={() => open(location)}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
