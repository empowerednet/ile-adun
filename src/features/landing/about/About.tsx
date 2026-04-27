import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-stone-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative w-full aspect-[9/16] mt-8 rounded-2xl overflow-hidden shadow-sm bg-stone-100">
              <Image
                src="/images/IMG_0607.jpeg"
                alt="Île Adun restaurant"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Perfectly cooked steak"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            {/* Decorative blur element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100 rounded-full -z-10 blur-2xl opacity-60" />
          </div>

          {/* Text */}
          <div className="max-w-xl">
            <span className="text-amber-600 font-medium text-sm tracking-wide uppercase mb-3 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mb-6">
              A Journey of Culture and Taste
            </h2>
            <p className="text-base text-stone-600 mb-4 leading-relaxed">
              Il&eacute; Ad&ugrave;n is a space where culture is expressed through food; a
              place to slow down, connect, and experience Nigerian meals the way
              they were meant to be.
            </p>
            <p className="text-base text-stone-600 mb-4 leading-relaxed">
              <span className="font-semibold text-stone-800">IL&Eacute;</span>{" "}means
              &ldquo;home&rdquo; in the Yoruba language of Western Nigeria, and
              <span className="font-semibold text-stone-800"> Ad&ugrave;n</span>{" "}means
              sweetness. Together, Il&eacute; Ad&ugrave;n reflects our idea of home in its
              most beautiful form; warm, welcoming, and deeply satisfying.
            </p>
            <p className="text-base text-stone-600 mb-4 leading-relaxed">
              At Il&eacute; Ad&ugrave;n, we celebrate this sense of home through food,
              culture, storytelling, design, and genuine hospitality. Our meals
              are inspired by memory, tradition, and the richness of local
              flavours &mdash; from slow-cooked soups to carefully prepared classics.
            </p>
            <p className="text-base text-stone-600 mb-8 leading-relaxed">
              Every dish is made with intention, carrying depth, warmth, and the
              quiet joy of eating well. Here, food is not rushed &mdash; it is felt,
              shared, and remembered.
            </p>

            <div className="flex items-center gap-6 pt-6 border-t border-stone-200">
              <div className="flex -space-x-3">
                {[
                  {
                    src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                    alt: "Customer",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                    alt: "Customer",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                    alt: "Customer",
                  },
                ].map(({ src, alt }) => (
                  <div
                    key={src}
                    className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-stone-100 flex items-center justify-center text-xs font-medium text-stone-600">
                  +1k
                </div>
              </div>
              <p className="text-sm font-medium text-stone-900">
                Loved by locals &amp; tourists alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
