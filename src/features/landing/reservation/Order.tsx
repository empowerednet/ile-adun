"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Order() {
  return (
    <section id="order" className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">
            Complete Your Order
          </h2>
          <p className="text-base text-stone-500">
            Secure checkout powered by modern payment technology.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Order Summary */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200 sticky top-28">
              <h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                {/* Cart Item 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="Ribeye"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-medium text-stone-900">
                      Alberta Prime Ribeye
                    </h4>
                    <p className="text-xs text-stone-500">Medium Rare</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-stone-900">$65.00</p>
                    <p className="text-xs text-stone-400">Qty: 1</p>
                  </div>
                </div>

                {/* Cart Item 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="Cake"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-medium text-stone-900">
                      Chocolate Lava Cake
                    </h4>
                    <p className="text-xs text-stone-500">Extra ice cream</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-stone-900">$14.00</p>
                    <p className="text-xs text-stone-400">Qty: 1</p>
                  </div>
                </div>
              </div>

              {/* Calculations */}
              <div className="border-t border-stone-100 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-stone-500">
                  <span>Subtotal</span>
                  <span>$79.00</span>
                </div>
                <div className="flex justify-between text-sm text-stone-500">
                  <span>Taxes (QST/GST)</span>
                  <span>$11.83</span>
                </div>
                <div className="flex justify-between text-sm text-stone-500">
                  <span>Delivery Fee</span>
                  <span>$4.99</span>
                </div>
              </div>

              <div className="border-t border-stone-100 mt-4 pt-4 flex justify-between items-center">
                <span className="text-base font-semibold text-stone-900">
                  Total
                </span>
                <span className="text-xl font-semibold tracking-tight text-stone-900">
                  $95.82
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200">
              <form onSubmit={(e) => e.preventDefault()}>
                {/* Contact Info */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-stone-700 mb-1"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        className="w-full px-3 py-2.5 text-sm bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Details */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-4">
                    Delivery Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="fname"
                        className="block text-xs font-medium text-stone-700 mb-1"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="fname"
                        autoComplete="given-name"
                        className="w-full px-3 py-2.5 text-sm bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="lname"
                        className="block text-xs font-medium text-stone-700 mb-1"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lname"
                        autoComplete="family-name"
                        className="w-full px-3 py-2.5 text-sm bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="address"
                        className="block text-xs font-medium text-stone-700 mb-1"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        autoComplete="street-address"
                        className="w-full px-3 py-2.5 text-sm bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                        placeholder="123 Main St, Apt 4B"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-4">
                    Payment Method
                  </h3>
                  <div className="bg-stone-50 rounded-lg border border-stone-200 p-4 mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon
                        icon="solar:card-linear"
                        width={20}
                        height={20}
                        className="text-stone-500"
                      />
                      <span className="text-sm font-medium text-stone-900">
                        Credit Card
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="relative">
                        <input
                          type="text"
                          inputMode="numeric"
                          autoComplete="cc-number"
                          className="w-full px-3 py-2.5 text-sm bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors font-mono"
                          placeholder="0000 0000 0000 0000"
                          maxLength={19}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-stone-400">
                          <Icon
                            icon="solar:lock-password-linear"
                            width={16}
                            height={16}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          autoComplete="cc-exp"
                          className="w-full px-3 py-2.5 text-sm bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                          placeholder="MM / YY"
                          maxLength={7}
                        />
                        <input
                          type="text"
                          autoComplete="cc-csc"
                          className="w-full px-3 py-2.5 text-sm bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                          placeholder="CVC"
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mt-4">
                    <input
                      type="checkbox"
                      id="save-info"
                      className="appearance-none mt-0.5 w-[1.15em] h-[1.15em] border border-stone-300 rounded-[0.25em] grid place-content-center transition-all duration-200 checked:bg-stone-900 checked:border-stone-900 before:content-[''] before:w-[0.65em] before:h-[0.65em] before:scale-0 checked:before:scale-100 before:transition-transform before:duration-[120ms] before:shadow-[inset_1em_1em_#fff] before:origin-center before:[clip-path:polygon(14%_44%,0_65%,50%_100%,100%_16%,80%_0%,43%_62%)]"
                    />
                    <label
                      htmlFor="save-info"
                      className="text-sm text-stone-600 cursor-pointer select-none"
                    >
                      Save this information for next time
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 flex justify-center items-center gap-2"
                >
                  <Icon
                    icon="solar:lock-keyhole-minimalistic-linear"
                    width={18}
                    height={18}
                  />
                  Pay $95.82
                </button>
                <p className="text-center text-xs text-stone-400 mt-4 flex items-center justify-center gap-1">
                  <Icon
                    icon="solar:shield-check-linear"
                    width={14}
                    height={14}
                  />
                  Secure 256-bit encrypted payment
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
