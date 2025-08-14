import { useState } from "react";
import "../App.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbar = () => {
    setShowNavbar(!showNavbar); // toggle menu
  };

  // Close menu when link is clicked
  const handleLinkClick = () => {
    setShowNavbar(false);
  };

  return (
    <nav className="p-4 sm:p-5 flex items-center justify-between bg-[#030712] shadow-md relative md:px-20">
      {/* Logo */}
      <div>
        <img
          className="rounded-md h-8 w-auto logo-img md:h-10 md:w-30"
          src={logo}
          alt="Logo"
        />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center space-x-6 text-white text-md">
        <a href="#features" className="hover:text-blue-500 transition-colors duration-200">
          Features
        </a>
        <a href="#benefits" className="hover:text-blue-500 transition-colors duration-200">
          Benefits
        </a>
        <button className="text-white px-4 py-2 rounded-lg border border-[#9fa9b1] hover:border-[#008cff] transition-colors duration-200">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-white text-2xl" onClick={handleNavbar}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {showNavbar && (
        <div className="absolute z-50 text-white top-full left-0 w-full bg-[#030712] flex flex-col items-center space-y-4 py-4 md:hidden shadow-md">
          <a
            href="#features"
            onClick={handleLinkClick}
            className="hover:text-blue-500 active:text-blue-400 transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#benefits"
            onClick={handleLinkClick}
            className="hover:text-blue-500 active:text-blue-400 transition-colors duration-200"
          >
            Benefits
          </a>
          <button className="border hover:border-blue-700 active:bg-blue-900 p-2 text-sm text-gray-300 rounded-md transition-colors duration-200">
            Click Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
