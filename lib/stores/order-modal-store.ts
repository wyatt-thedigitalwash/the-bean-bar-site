import { create } from "zustand";

export type LocationKey = "carrollwood" | "tampa-palms";

type OrderModalState = {
  isOpen: boolean;
  location: LocationKey;
  open: (location: LocationKey) => void;
  close: () => void;
};

export const useOrderModal = create<OrderModalState>((set) => ({
  isOpen: false,
  location: "carrollwood",
  open: (location) => set({ isOpen: true, location }),
  close: () => set({ isOpen: false }),
}));
