import Image from "next/image";
import { Icon } from "@iconify/react";

export default function ChefSpecial() {
  return (
    <section className="py-20 bg-stone-900 text-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-800 rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text */}
            <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 text-amber-500 mb-4">
                <Icon icon="solar:fire-bold" width={20} height={20} />
                <span className="text-xs font-semibold tracking-wide uppercase">
                  Chef Miyonse&apos;s Special
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
               ADUN PLATTER
              </h3>
              <p className="text-stone-400 text-base mb-8 max-w-md">
                Dundun (Fried Yam) and Dodo (Plantain) served with Full Fried Fish, 
                2 pieces of Turkey and 3 pieces of Snail- Serves 4
              </p>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-semibold text-white">
                  $65.00
                </span>
                <button className="px-6 py-3 text-sm font-medium text-stone-900 bg-amber-500 rounded-xl hover:bg-amber-400 transition-colors">
                  Add to Order
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Ribeye Steak"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
