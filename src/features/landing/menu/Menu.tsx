"use client";

import { useState } from "react";
import MenuCard from "./MenuCard";

type MenuEntry = {
  name: string;
  price: string;
  description?: string;
};

type MenuSection = {
  title: string;
  items: MenuEntry[];
};

type Category = "All Dishes" | (typeof MENU_SECTIONS)[number]["title"];

const MENU_SECTIONS: MenuSection[] = [
  {
    title: "Breakfast Combo",
    items: [
      {
        name: "Agoyin Special Combo",
        price: "₦5,000",
        description:
          "Ewa agoyin, signature agoyin sauce, and fried plantain served with mini loaf, garri, or pap.",
      },
      {
        name: "Maxi Agoyin Combo",
        price: "₦7,000",
        description:
          "Ewa agoyin, eggs, and eja kika served with mini loaf, garri, or pap.",
      },
      {
        name: "Bread ati Akara",
        price: "₦4,000",
        description:
          "Fluffy akara balls served with mini loaf, garri, or pap.",
      },
    ],
  },
  {
    title: "Mains, Grills & Fries",
    items: [
      {
        name: "Ile Adun Signature Whole Roasted Guinea Fowl Special",
        price: "₦20,000",
        description:
          "Served with a choice of boli or dundun and pepper sauce.",
      },
      {
        name: "Ile Adun Signature 1/2 Roasted Guinea Fowl Special",
        price: "₦12,000",
        description:
          "Served with a choice of boli or dundun and pepper sauce.",
      },
      {
        name: "Ile Adun Signature Whole Roasted Suya-Spiced Chicken",
        price: "₦20,000",
        description:
          "Served with a choice of boli or dundun and pepper sauce.",
      },
      {
        name: "Ile Adun Signature 1/2 Roasted Suya-Spiced Chicken",
        price: "₦12,000",
        description:
          "Served with a choice of boli or dundun and pepper sauce.",
      },
      {
        name: "Ile Adun Flame-Grilled Spiced Whole Fish",
        price: "₦20,000",
        description:
          "Fresh catfish served with dundun and pepper sauce.",
      },
      {
        name: "Ile Adun Special Dun Dun Combo",
        price: "₦9,000",
        description:
          "Fried yam, fried sweet potato, or roasted plantain with peppered ponmo and pepper sauce.",
      },
      {
        name: "Eja Yoyo Twist",
        price: "₦6,000",
        description:
          "Crispy fried fish with garri Ijebu, peanuts, milk, and sugar.",
      },
    ],
  },
  {
    title: "Ile Adun Specials",
    items: [
      {
        name: "Adun Ofada",
        price: "₦10,500",
        description: "Native ofada rice with signature Adun ayamase sauce.",
      },
      {
        name: "Adun Wache & Shitto Sauce",
        price: "₦10,000",
        description: "Served with boiled egg and fried hake.",
      },
      {
        name: "Adun Native Rice",
        price: "₦15,500",
        description:
          "Signature native rice with fried plantain and any protein of choice.",
      },
      {
        name: "Adun Claypot Jollof Rice",
        price: "₦12,000",
        description:
          "Chef's special jollof rice with fried plantain and quarter grilled guinea fowl tossed in pepper sauce.",
      },
      {
        name: "Adun Vegetable Native Pasta",
        price: "₦13,500",
        description:
          "Pasta tossed in our signature spicy native sauce with any protein of choice.",
      },
      {
        name: "Adun Nkwobi",
        price: "₦14,000",
        description:
          "Cooked cow leg in creamy palm oil sauce with ugba and ring onion.",
      },
      {
        name: "Adun Isiewu",
        price: "₦13,000",
        description:
          "Cooked goat head in creamy palm oil sauce with ugba.",
      },
      {
        name: "Adun Asun",
        price: "₦10,000",
        description: "Grilled goat meat slowly cooked in pepper sauce.",
      },
    ],
  },
  {
    title: "Pepper Soup",
    items: [
      {
        name: "Ile Adun Assorted Meat Pepper Soup",
        price: "₦10,000",
        description: "Assorted meat pepper soup served with yam.",
      },
      {
        name: "Ile Adun Fish Pepper Soup",
        price: "₦18,000",
        description: "Choice of croaker fish or catfish served with yam.",
      },
    ],
  },
  {
    title: "Ile Adun Soup",
    items: [
      {
        name: "Ile Adun Banga Comfort Bowl",
        price: "₦25,000",
        description:
          "Banga soup with catfish, smoked prawns, periwinkle, stockfish, and starch or garri.",
      },
      {
        name: "Ile Adun Fisherman's Soup",
        price: "₦30,000",
        description:
          "Fisherman soup with catfish, calamari, snail, crab, prawns, shrimps, and garri.",
      },
      {
        name: "Ile Adun Seafood Okro",
        price: "₦25,000",
        description:
          "Seafood okro with croaker fish, calamari, crab, shrimp, prawn, snail, and swallow of choice.",
      },
      {
        name: "Ile Adun Egusi Soup",
        price: "₦12,000",
        description:
          "Egusi soup with meat chunks, assorted meat, cow skin, dry fish, and swallow of choice.",
      },
      {
        name: "Ile Adun Onugbu Soup",
        price: "₦18,000",
        description:
          "Bitterleaf soup with offals, beef, cow skin, stock fish, and swallow of choice.",
      },
      {
        name: "Ile Adun Butcher's Choice Ogbono Soup",
        price: "₦11,500",
        description:
          "Ogbono soup with meat chunks, assorted meat, cow skin, and swallow of choice.",
      },
    ],
  },
  {
    title: "Extras",
    items: [
      { name: "Garri", price: "₦500" },
      { name: "Fried Yam", price: "₦1,500" },
      { name: "Boli", price: "₦1,500" },
      { name: "Peppered Ponmo", price: "₦3,500" },
      { name: "Garri (Swallow)", price: "₦800" },
      { name: "Grilled Turkey", price: "₦8,500" },
      { name: "Peppered Chicken", price: "₦5,000" },
      { name: "Peppered Beef", price: "₦1,000" },
      { name: "Goat Meat", price: "₦3,000" },
      { name: "Starch", price: "₦2,000" },
      { name: "Pounded Yam", price: "₦2,000" },
      { name: "Fried Hake Fish", price: "₦2,500" },
      { name: "Peppered Snail", price: "₦6,000" },
    ],
  },
  {
    title: "Ile Adun Platter",
    items: [
      {
        name: "Adun Eye-Awo Platter",
        price: "₦40,000",
        description:
          "Whole roasted suya-spiced guinea fowl, peppered ponmo, fried sweet potato or fried yam, fried plantain, vegetable spring rolls, samosas, coleslaw, and Ile Adun pepper sauce.",
      },
      {
        name: "Adun Seafood Platter",
        price: "₦45,000",
        description:
          "Whole grilled fish, peppered snail or deep-fried tiger prawns, fried sweet potato or fried yam, fried plantain, vegetable spring rolls, samosas, coleslaw, and Ile Adun pepper sauce.",
      },
    ],
  },
  {
    title: "Ile Adun Shawarma",
    items: [
      { name: "Suya Chicken Shawarma", price: "₦5,000" },
      { name: "Suya Beef Shawarma", price: "₦5,000" },
    ],
  },
  {
    title: "Drink",
    items: [
      { name: "Fura da Nono", price: "₦4,000" },
      { name: "Zobo", price: "₦1,500" },
      { name: "Water", price: "₦1,000" },
      { name: "Palm Wine", price: "₦3,000" },
      { name: "Jedi on the Rocks", price: "₦3,500" },
    ],
  },
  {
    title: "Ile Adun Cocktails",
    items: [
      { name: "Kulikolada", price: "₦12,000" },
      { name: "Zobo Rita", price: "₦12,000" },
      { name: "Palmwine Cucumber Slush", price: "₦12,000" },
    ],
  },
  {
    title: "Ile Adun Mocktails",
    items: [
      { name: "Baba Dudu Frappuccino", price: "₦10,000" },
      { name: "Fura da Nono Mango Lassi", price: "₦10,000" },
    ],
  },
  {
    title: "Arabian Traditional Tea",
    items: [
      { name: "Arabian Tea (1L)", price: "₦4,500" },
      { name: "Arabian Tea (1/2L)", price: "₦3,000" },
      { name: "Double Double (1/2L)", price: "₦4,000" },
      { name: "Double Double (1L)", price: "₦6,000" },
      { name: "Double Double (1.5L)", price: "₦10,000" },
    ],
  },
];

const CATEGORY_IMAGES: Record<string, string> = {
  "Breakfast Combo": "/images/menu/breakfast-combo.svg",
  "Mains, Grills & Fries": "/images/menu/mains-grills-fries.svg",
  "Ile Adun Specials": "/images/menu/ile-adun-specials.svg",
  "Pepper Soup": "/images/menu/pepper-soup.svg",
  "Ile Adun Soup": "/images/menu/ile-adun-soup.svg",
  Extras: "/images/menu/extras.svg",
  "Ile Adun Platter": "/images/menu/ile-adun-platter.svg",
  "Ile Adun Shawarma": "/images/menu/ile-adun-shawarma.svg",
  Drink: "/images/menu/drink.svg",
  "Ile Adun Cocktails": "/images/menu/ile-adun-cocktails.svg",
  "Ile Adun Mocktails": "/images/menu/ile-adun-mocktails.svg",
  "Arabian Traditional Tea": "/images/menu/arabian-traditional-tea.svg",
};

const ITEM_IMAGES: Record<string, string> = {
  "Agoyin Special Combo": "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "Maxi Agoyin Combo": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "Bread ati Akara": "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "Ile Adun Signature Whole Roasted Guinea Fowl Special": "https://images.unsplash.com/photo-1560684352-8497838a2229?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "Ile Adun Signature 1/2 Roasted Guinea Fowl Special": "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "Ile Adun Signature Whole Roasted Suya-Spiced Chicken": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
};

const CATEGORIES = [
  "All Dishes",
  ...MENU_SECTIONS.map((section) => section.title),
] as const satisfies readonly Category[];

const MENU_ITEMS = MENU_SECTIONS.flatMap((section, sectionIndex) =>
  section.items.map((item, itemIndex) => ({
    id: `${section.title}-${item.name}`,
    category: section.title as Category,
    image: ITEM_IMAGES[item.name] ?? CATEGORY_IMAGES[section.title],
    alt: item.name,
    price: item.price,
    name: item.name,
    description:
      item.description ?? `${section.title} option from Ile Adun's menu.`,
    featured: section.title === "Ile Adun Specials" || section.title === "Ile Adun Platter" || (sectionIndex === 0 && itemIndex === 0),
  }))
);

const ITEMS_PER_PAGE = 6;

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Dishes");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    activeCategory === "All Dishes"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedItems = filtered.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE
  );

  return (
    <section id="menu" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">
            Explore Our Menu
          </h2>
          <p className="text-base text-stone-500">
            Browse Ile Adun favorites by category, now using the actual items from your menu.
          </p>
        </div>

        <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] justify-start md:justify-center gap-2 mb-12 pb-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedItems.map((item) => (
            <MenuCard key={item.id} {...item} />
          ))}
        </div>

        {filtered.length > ITEMS_PER_PAGE ? (
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safeCurrentPage === 1}
              className="rounded-full border border-stone-200 px-5 py-2.5 text-sm font-medium text-stone-700 transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-stone-50"
            >
              Previous
            </button>

            <span className="text-sm font-medium text-stone-500">
              Page {safeCurrentPage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              disabled={safeCurrentPage === totalPages}
              className="rounded-full border border-stone-900 bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-stone-800"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
