import Hero from "@/app/components/Home/Hero";
import Navbar from "@/app/components/Navbar/Navbar";
import ProductsSection from "./components/Home/ProductsSection";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductsSection />
      <Footer />
    </>
  );
}
