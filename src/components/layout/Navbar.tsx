import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-stone-100/80 backdrop-blur-md border-b border-stone-300/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex-shrink-0">
            <Image
              src="/images/ile-adun-logo-red.png"
              alt="Île Adun"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Story
            </Link>
            <Link
              href="#menu"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Menu
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Location
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors group">
              <Icon icon="solar:cart-large-2-linear" width={24} height={24} />
              <span className="absolute top-1 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-amber-600 rounded-full border-2 border-white group-hover:bg-amber-700 transition-colors transform translate-x-1 -translate-y-1">
                2
              </span>
            </button>
            <Link
              href="#order"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900"
            >
              Order Online
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
