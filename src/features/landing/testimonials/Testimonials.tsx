import { Icon } from "@iconify/react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-stone-100 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Icon
          icon="solar:quote-left-bold-duotone"
          width={48}
          height={48}
          className="text-amber-200 mb-6 mx-auto"
        />
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-stone-900 max-w-4xl mx-auto leading-relaxed mb-8">
          &ldquo;An absolute gem in Osogbo. The atmosphere is calm and welcoming, 
          and the food is rich, fresh, and full of flavour. You can really 
          taste the difference.&rdquo;
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex text-amber-500 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} icon="solar:star-bold" width={18} height={18} />
            ))}
          </div>
          <p className="text-sm font-semibold text-stone-900">Ola Salau</p>
          <p className="text-xs text-stone-500">Local Food Critic</p>
        </div>
      </div>
    </section>
  );
}
