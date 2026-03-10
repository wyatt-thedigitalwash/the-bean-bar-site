import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-brand-primary min-h-[85vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="font-playfair text-5xl md:text-7xl text-white font-bold leading-tight max-w-4xl">
        Brewing Happiness, One Cup at a Time
      </h1>
      <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl">
        Crafted with passion, served with love. Visit us at Carrollwood or
        Tampa Palms.
      </p>
      <div className="flex flex-wrap gap-4 mt-10 justify-center">
        <Link
          href="/menu"
          className="bg-white text-brand-primary font-semibold px-8 py-3 rounded-xl hover:bg-white/90 transition-colors"
        >
          View Our Menu
        </Link>
        <Link
          href="/locations"
          className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
        >
          Find a Location
        </Link>
      </div>
    </section>
  );
}
