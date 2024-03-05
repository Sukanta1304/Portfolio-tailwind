import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="#" className="text-white font-bold text-xl">
            <img
              src="/assets/img/sukanta_logo.png"
              alt=""
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
          </a>
        </div>

        {/* Menu Items (Large Screen) */}
        <div className="hidden lg:flex flex-grow justify-center items-center">
          <a
            href="#"
            className="text-[#1e40af] hover:text-white px-4 font-semibold"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#1e40af] hover:text-white px-4 font-semibold"
          >
            About
          </a>
          <a
            href="#"
            className="text-[#1e40af] hover:text-white px-4 font-semibold"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-[#1e40af] hover:text-white px-4 font-semibold"
          >
            Contact
          </a>
        </div>

        {/* Button (Large Screen) */}
        <div className="hidden lg:block">
          <a
            href="/assets/documents/Sukanta-Dolai-Resume-v2.pdf"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1e40af] hover:bg-indigo-500 md:py-4 md:text-lg md:px-10"
          >
            Download CV
          </a>
        </div>

        {/* Toggle Button (Mobile and Tablet) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                className={`${isOpen ? "hidden" : "block"}`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16a1 1 0 100-2H4a1 1 0 100 2zM4 11h16a1 1 0 100-2H4a1 1 0 100 2zM4 16h16a1 1 0 100-2H4a1 1 0 100 2z"
              />
              <path
                className={`${isOpen ? "block" : "hidden"}`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 6h14v2H5V6zM5 11h14v2H5v-2zm14 5H5v2h14v-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile and Tablet Menu (Overlay) */}
      <div
        className={`lg:hidden transition-opacity duration-300 ${
          isOpen ? "fixed inset-0 z-50 bg-white" : "hidden"
        }`}
      >
        <div
          className={`opacity-0 ${isOpen ? "opacity-100" : ""} fixed inset-0`}
        >
          <div className="flex justify-between items-center p-4">
            <div>
              <a href="#" className="text-gray-800 font-semibold">
                Menu
              </a>
            </div>
            <div>
              <button
                onClick={toggleMenu}
                className="text-gray-800 focus:outline-none"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L12 11.586l4.293-4.293a1 1 0 111.414 1.414L13.414 13l4.293 4.293a1 1 0 11-1.414 1.414L12 14.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 13 6.293 8.707a1 1 0 010-1.414z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-4 py-2">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-500 block py-2"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-500 block py-2"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-500 block py-2"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-500 block py-2"
            >
              Contact
            </a>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 block">
              Download
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
