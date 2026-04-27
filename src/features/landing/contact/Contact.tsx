import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Reservation Form */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-2">
              Make It a Moment
            </h2>
            <p className="text-base text-stone-500 mb-8">
              Whether it&apos;s a birthday, a group hangout, or a special
              celebration, Il&eacute; Ad&ugrave;n is the perfect place to gather, eat
              well, and enjoy the moment.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-colors text-stone-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Time
                  </label>
                  <select className="w-full px-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-colors text-stone-600 appearance-none">
                    <option>18:00 PM</option>
                    <option>18:30 PM</option>
                    <option>19:00 PM</option>
                    <option>19:30 PM</option>
                    <option>20:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Guests
                  </label>
                  <select className="w-full px-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-colors text-stone-600 appearance-none">
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    autoComplete="name"
                    className="w-full px-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Email or Phone
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-colors"
                  placeholder="Contact info"
                />
              </div>
              <button
                type="button"
                className="w-full py-3 px-4 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors mt-4"
              >
                Request Reservation
              </button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="flex flex-col h-full">
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 mb-6 flex flex-col sm:flex-row justify-between gap-6">
              {/* Location */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-stone-900">
                  <Icon
                    icon="solar:map-point-linear"
                    width={20}
                    height={20}
                    className="text-amber-600"
                  />
                  <h4 className="font-semibold text-sm">Location</h4>
                </div>
                <p className="text-sm text-stone-600">
                  Km 10, Ikirun Road,
                  <br />
                  Dagbolu area,
                  <br />
                  Opposite Fortunate Bakery
                  <br />
                  Osogbo, Osun State
                </p>
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-stone-900">
                  <Icon
                    icon="solar:clock-circle-linear"
                    width={20}
                    height={20}
                    className="text-amber-600"
                  />
                  <h4 className="font-semibold text-sm">Hours</h4>
                </div>
                <p className="text-sm text-stone-600">
                  Mon - Fri: 5PM - 11PM
                  <br />
                  Sat - Sun: 4PM - 12AM
                </p>
              </div>

              {/* Contact */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-stone-900">
                  <Icon
                    icon="solar:phone-linear"
                    width={20}
                    height={20}
                    className="text-amber-600"
                  />
                  <h4 className="font-semibold text-sm">Contact</h4>
                </div>
                <p className="text-sm text-stone-600">
                  +234 902 459 5462
                  <br />
                  hello@ileadun.com
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="flex-grow rounded-2xl overflow-hidden bg-stone-200 border border-stone-200 min-h-[250px] relative">
              <iframe
                src="https://maps.google.com/maps?q=Km+10+Ikirun+Road+Dagbolu+Osogbo+Osun+State+Nigeria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Île Adun restaurant location"
              />
              <a
                href="https://share.google/galJ1xGyhQcST7zVg"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-stone-800 text-xs font-medium px-3 py-1.5 rounded-full shadow hover:bg-white transition-colors"
              >
                View on Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
