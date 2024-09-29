import About from "@/components/about/about";
import Header from "@/components/header/header";
import Swiper from "@/components/swiper/swiper";
import Products from "@/components/products/products";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Swiper className="lg:container mx-auto" />
      <About className="lg:container mx-auto" />
      <Products />
      <Contact className="lg:container mx-auto" />
    </>
  );
}
