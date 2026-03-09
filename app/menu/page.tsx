import type { Metadata } from "next";
import MenuSection from "@/components/MenuSection";

export const metadata: Metadata = {
  title: "Our Menu | The Bean Bar Co. | Coffee & Bites in Tampa",
  description:
    "Explore The Bean Bar Co. menu — specialty espresso, house drinks, teas, smoothies, breakfast sandwiches, acai bowls, and more in Tampa, FL.",
};

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-primary pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Our Menu
          </h1>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            From bold brews to delicious bites — there&apos;s something for everyone.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <MenuSection />
      </section>
    </>
  );
}
