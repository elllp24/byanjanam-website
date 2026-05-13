import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home">
          <div className="flex items-center gap-3">
  
  <img
    src="/favicon.png"
    alt="Byanjanam"
    className="w-12 h-12 rounded-full object-cover"
  />

  <h1 className="text-4xl font-bold text-red-700">
    Byanjanam
  </h1>

</div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-red-600 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-red-600 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="hover:text-red-600 transition"
            >
              Services
            </a>
          </li>

          <li>
          <a
            href="#packages"
            className="hover:text-red-600 transition"
          >
             Packages
        </a>
          </li>

          <li>
            <a
              href="#gallery"
              className="hover:text-red-600 transition"
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-red-600 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Desktop Button */}
        <a href="#contact">
          <button className="hidden md:block bg-red-600 text-white px-5 py-2 rounded-xl hover:bg-red-700 transition shadow-lg">
            Book Event
          </button>
        </a>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-white shadow-lg px-6 py-6">

          <ul className="flex flex-col gap-6 text-lg font-medium">

            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-600 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-600 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-600 transition"
              >
                Services
              </a>
            </li>


            <li>
  <a
    href="#packages"
    onClick={() => setMenuOpen(false)}
    className="hover:text-red-600 transition"
  >
    Packages
  </a>
</li>

            <li>
              <a
                href="#gallery"
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-600 transition"
              >
                Gallery
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-600 transition"
              >
                Contact
              </a>
            </li>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              <button className="bg-red-600 text-white px-5 py-3 rounded-xl hover:bg-red-700 transition w-full shadow-lg">
                Book Event
              </button>
            </a>

          </ul>

        </div>

      )}

    </nav>
  );
}