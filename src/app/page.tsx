import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/features/landing/hero/Hero";
import About from "@/features/landing/about/About";
import ChefSpecial from "@/features/landing/cta/ChefSpecial";
import Menu from "@/features/landing/menu/Menu";
import Order from "@/features/landing/reservation/Order";
import Gallery from "@/features/landing/gallery/Gallery";
import Testimonials from "@/features/landing/testimonials/Testimonials";
import Contact from "@/features/landing/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <ChefSpecial />
        <Menu />
        <Order />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
