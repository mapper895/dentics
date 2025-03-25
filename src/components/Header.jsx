import React, { useState } from "react";
import logo from "../assets/Logo.png";
import illustration from "../assets/Illustration.png";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Menu */}
      <header className="bg-white py-6 border-b-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* {Logo} */}
          <div className="flex items-center">
            <img src={logo} alt="Dentics Logo" className="w-10 h-10 mr-2" />
            <span className="font-bold text-2xl">Dentics</span>
          </div>

          {/* Menu para pantallas grandes */}
          <nav className="hidden md:flex items-center justify-center space-x-6 text-gray-700">
            <a href="/" className="hover:text-primary">
              Home
            </a>
            <a href="/servies" className="hover:text-primary">
              Services
            </a>
            <a href="/about" className="hover:text-primary">
              About us
            </a>
            <a href="/register" className="hover:text-primary">
              Register
            </a>
            <a
              href="/appointment"
              className="text-white bg-primary py-2 px-4 rounded-lg hover:bg-blue-500"
            >
              Appointment
            </a>
          </nav>

          {/* Icono de menu para pantallas pequeñas */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600"
            >
              {isMobileMenuOpen ? (
                <GiCancel size={24} />
              ) : (
                <GiHamburgerMenu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Menu Movil */}
        {isMobileMenuOpen && (
          <div className="flex flex-col items-center md:hidden bg-white py-4 space-y-4">
            <a href="/" className="hover:text-primary">
              Home
            </a>
            <a href="/servies" className="hover:text-primary">
              Services
            </a>
            <a href="/about" className="hover:text-primary">
              About us
            </a>
            <a href="/register" className="hover:text-primary">
              Register
            </a>
            <a
              href="/appointment"
              className="text-white bg-primary py-2 px-4 rounded-lg hover:bg-blue-500"
            >
              Appointment
            </a>
          </div>
        )}
      </header>

      {/* Hero Section*/}
      <section className="py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            We Provide High Quality{" "}
            <span className="text-secondary">Dental </span>Services
          </h1>
          <p className="text-lg text-gray-600 mb-8 sm:text-xl md:text-2xl">
            Appropriately embrace transparent materials via turnkey niche
            markets.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="/get-started"
              className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-500 w-full sm:w-auto mb-4 sm:mb-0"
            >
              Get started
            </a>
            <a
              href="/learn-more"
              className="border-2 border-gray-500 text-gray-500 py-3 px-6 rounded-lg hover:bg-blue-100 w-full sm:w-auto mb-4 sm:mb-0"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4 mt-8 md:mt-0">
          <img
            src={illustration}
            alt="Dental Services Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Header;
