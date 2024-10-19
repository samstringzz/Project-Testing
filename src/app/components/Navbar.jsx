"use client"; // Mark this as a client component
import { useState, useEffect } from "react";
import Logo from "../images/pngegg (9).png"; // Import the logo image

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Track scroll event to toggle navbar height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 px-4 ${
          isScrolled
            ? "h-16 bg-white backdrop-blur-md shadow-lg"
            : "h-24 bg-white shadow-md"
        }`}
        style={{
          zIndex: 50,
        }}
      >
        <div className="flex justify-between items-center h-full mx-auto max-w-7xl">
          {/* Logo */}
          <a href="#hero" className="text-2xl font-bold">
            <img src={Logo.src} alt="Logo" className="h-10 w-auto md:ml-20" />
          </a>

          {/* Hamburger menu button for mobile */}
          <button
            className="block lg:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Navigation Links (always visible on large screens) */}
          <ul className="hidden lg:flex lg:space-x-6 lg:items-center lg:justify-end w-full lg:w-auto">
            <li className="text-center lg:inline-block">
              <a
                href="#hero"
                className="block lg:inline-block p-2 text-gray-700 hover:text-teal-500"
              >
                Home
              </a>
            </li>
            <li className="text-center lg:inline-block">
              <a
                href="#about"
                className="block lg:inline-block p-2 text-gray-700 hover:text-teal-500"
              >
                About Our Clinic
              </a>
            </li>
            <li className="text-center lg:inline-block">
              <a
                href="#services"
                className="block lg:inline-block p-2 text-gray-700 hover:text-teal-500"
              >
                What We Offer
              </a>
            </li>
            <li className="text-center lg:inline-block">
              <a
                href="#appointment"
                className="block lg:inline-block p-2 text-gray-700 hover:text-teal-500"
              >
                Make an Appointment
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Background overlay that closes the menu when clicked */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu} // Close the menu when clicking outside
      ></div>

      {/* Mobile Navigation Menu (only on mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {/* Logo for mobile menu */}
        <div className="flex items-center p-4">
          <a href="#hero" className="text-2xl font-bold">
            <img src={Logo.src} alt="Logo" className="h-10 w-auto" />
          </a>
        </div>

        <ul className="flex flex-col items-start p-6 space-y-6">
          <li className="w-full">
            <a
              href="#hero"
              className="block p-2 w-full text-gray-700 hover:text-teal-500"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li className="w-full">
            <a
              href="#about"
              className="block p-2 w-full text-gray-700 hover:text-teal-500"
              onClick={toggleMenu}
            >
              About Our Clinic
            </a>
          </li>
          <li className="w-full">
            <a
              href="#services"
              className="block p-2 w-full text-gray-700 hover:text-teal-500"
              onClick={toggleMenu}
            >
              What We Offer
            </a>
          </li>
          <li className="w-full">
            <a
              href="#appointment"
              className="block p-2 w-full text-gray-700 hover:text-teal-500"
              onClick={toggleMenu}
            >
              Make an Appointment
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
