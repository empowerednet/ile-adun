import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/ile-adun-logo-red.png"
              alt="Île Adun"
              width={200}
              height={80}
              className="h-20 w-auto object-contain mb-6"
              style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(74%) saturate(1200%) hue-rotate(350deg) brightness(85%)" }}
            />
            <p className="text-stone-400 text-sm max-w-sm mb-6 leading-relaxed">
              Redefining Nigerian dining through rich local flavours, 
              thoughtful preparation, and a warm, culturally rooted 
              atmosphere in Osogbo.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/5 transition-all"
                aria-label="Instagram"
              >
                <Icon icon="solar:camera-linear" width={18} height={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/5 transition-all"
                aria-label="Email"
              >
                <Icon icon="solar:letter-linear" width={18} height={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/5 transition-all"
                aria-label="Maps"
              >
                <Icon icon="solar:map-arrow-up-linear" width={18} height={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-tight mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#home"
                  className="text-sm text-stone-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-stone-400 hover:text-white transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="text-sm text-stone-400 hover:text-white transition-colors"
                >
                  Menus
                </Link>
              </li>
              <li>
                <Link
                  href="#order"
                  className="text-sm text-stone-400 hover:text-white transition-colors"
                >
                  Order Online
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-stone-400 hover:text-white transition-colors"
                >
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-tight mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-stone-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-stone-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-stone-400 hover:text-white transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Île Adun Restaurant. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2 text-stone-500 text-xs">
            <span>Designed with</span>
            <Icon
              icon="solar:heart-bold"
              width={14}
              height={14}
              className="text-stone-600"
            />
            <span>Empowered Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
