import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ImageCarousel from "@/components/Carroussel/ImageCarousel";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      {/* <Mission /> */}
      <Services />
      <ImageCarousel />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
