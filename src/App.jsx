import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Booking from "./components/Booking";
import Packages from "./components/Packages";
import WhatsappButton from "./components/WhatsappButton";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <About />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}