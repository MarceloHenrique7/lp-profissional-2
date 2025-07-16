import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contacts from "@/components/Contacts";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import PriceSection from "@/components/PriceSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Benefits />
      <PriceSection />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}
