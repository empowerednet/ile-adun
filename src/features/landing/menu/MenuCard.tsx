import Image from "next/image";
import { Icon } from "@iconify/react";

interface MenuCardProps {
  image: string;
  alt: string;
  price: string;
  name: string;
  description: string;
  featured?: boolean;
}

export default function MenuCard({
  image,
  alt,
  price,
  name,
  description,
  featured = false,
}: MenuCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-stone-900 shadow-sm">
          {price}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-2">
          {name}
        </h3>
        <p className="text-sm text-stone-500 mb-6 flex-grow">{description}</p>
        <button
          className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
            featured
              ? "bg-stone-900 text-white hover:bg-stone-800 shadow-sm"
              : "border border-stone-200 text-stone-900 hover:bg-stone-50 hover:border-stone-300"
          }`}
        >
          <Icon
            icon="solar:cart-plus-linear"
            width={18}
            height={18}
          />
          Order Now
        </button>
      </div>
    </div>
  );
}
