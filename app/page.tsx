import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
