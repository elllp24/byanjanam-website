import { BrowserRouter, Routes, Route } from "react-router-dom";

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

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";

function HomePage() {
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

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/admin/login" element={<Login />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />

      </Routes>

    </BrowserRouter>
  );
}