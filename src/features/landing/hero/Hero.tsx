import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
          alt="Fine dining restaurant interior"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Rating badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8">
          <div className="flex text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} icon="solar:star-bold" width={14} height={14} />
            ))}
          </div>
          <span className="text-xs font-medium text-stone-200 tracking-wide uppercase">
            4.8 Rating • 500+ Reviews
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 max-w-5xl leading-tight">
          Experience culture through{" "}
          <span className="text-amber-500 italic">taste</span>.
        </h1>

        <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl font-light">
          Every dish is rooted in tradition — thoughtfully prepared, 
          deeply flavoured, and made to be felt, not just eaten.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-stone-900 bg-white rounded-xl hover:bg-stone-100 transition-all shadow-lg shadow-white/10"
          >
            View Menu
          </Link>
          <Link
            href="#order"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Order Online
            <Icon
              icon="solar:arrow-right-linear"
              width={18}
              height={18}
              className="ml-2"
            />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        <Icon
          icon="solar:mouse-minimalistic-linear"
          width={24}
          height={24}
        />
      </div>
    </section>
  );
}
