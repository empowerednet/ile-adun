"use client";

import { useState } from "react";
import MenuCard from "./MenuCard";

const CATEGORIES = ["All Dishes", "Combos", "Soups", "Main Course"] as const;

type Category = (typeof CATEGORIES)[number];

const MENU_ITEMS = [
  {
    id: 1,
    category: "Combos" as Category,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Oyin Momo Combo",
    price: "₦16,000",
    name: "Oyin Momo Combo",
    description:
      "Fried yam or sweet plantain served with well-spiced asun.",
    featured: false,
  },
  {
    id: 2,
    category: "Soups" as Category,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Goat Meat Peppersoup",
    price: "₦11,000",
    name: "Goat Meat Peppersoup",
    description:
      "Rich, peppery goat meat peppersoup, served hot with yam.",
    featured: false,
  },
  {
    id: 3,
    category: "Soups" as Category,
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Fish Peppersoup",
    price: "₦16,000",
    name: "Fish Peppersoup",
    description:
      "Fresh fish in a deeply flavoured peppersoup, served with yam.",
    featured: false,
  },
  {
    id: 4,
    category: "Combos" as Category,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Aridunnu Combo",
    price: "₦20,000",
    name: "Aridunnu Combo",
    description:
      "Fried yam or sweet plantain paired with a full, well-seasoned fried fish.",
    featured: true,
  },
  {
    id: 5,
    category: "Main Course" as Category,
    image:
      "https://images.unsplash.com/photo-1560684352-8497838a2229?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Ila Alásepo",
    price: "₦16,000",
    name: "Ila Alásepo",
    description:
      "Freshly pounded yam served with rich okro (ilà alásepo) and tender goat meat.",
    featured: false,
  },
  {
    id: 6,
    category: "Main Course" as Category,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sokoyokoto",
    price: "₦23,000",
    name: "Sokoyokoto",
    description:
      "Seafood okro served with freshly pounded yam, rich, hearty, and deeply satisfying.",
    featured: false,
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Dishes");

  const filtered =
    activeCategory === "All Dishes"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">
            Explore Our Menu
          </h2>
          <p className="text-base text-stone-500">
            Take your pick from a range of rich, satisfying meals — all 
            prepared to be enjoyed, not rushed.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] justify-start md:justify-center gap-2 mb-12 pb-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <MenuCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
