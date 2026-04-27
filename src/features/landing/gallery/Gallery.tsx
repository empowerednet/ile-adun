import Image from "next/image";
import { Icon } from "@iconify/react";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Restaurant interior",
    className: "col-span-2 row-span-2",
    sizes: "(max-width: 768px) 100vw, 50vw",
    showCamera: true,
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Dish plating",
    className: "",
    sizes: "(max-width: 768px) 50vw, 25vw",
    showCamera: false,
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    alt: "Dessert detail",
    className: "",
    sizes: "(max-width: 768px) 50vw, 25vw",
    showCamera: false,
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Cocktails",
    className: "col-span-2",
    sizes: "(max-width: 768px) 100vw, 50vw",
    showCamera: false,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-2">
              ATMOSPHERE &amp; FOOD IN EVERY FRAME
            </h2>
            <p className="text-base text-stone-500">
              Follow us on Instagram{" "}
              <a
                href="https://www.instagram.com/ile.adun/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                @ile.adun
              </a>
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button className="p-2 rounded-full border border-stone-200 text-stone-500 hover:bg-stone-50 transition-colors">
              <Icon icon="solar:arrow-left-linear" width={20} height={20} />
            </button>
            <button className="p-2 rounded-full border border-stone-200 text-stone-500 hover:bg-stone-50 transition-colors">
              <Icon icon="solar:arrow-right-linear" width={20} height={20} />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {GALLERY_IMAGES.map(({ src, alt, className, sizes, showCamera }) => (
            <div
              key={src}
              className={`rounded-2xl overflow-hidden group relative ${className}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={sizes}
              />
              {showCamera && (
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon
                    icon="solar:camera-linear"
                    width={32}
                    height={32}
                    className="text-white"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
