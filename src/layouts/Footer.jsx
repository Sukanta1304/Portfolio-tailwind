import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1e40af]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">

        <div className="mt-4 md:mb-8 flex justify-center items-center space-x-6 md:order-2  ">
          <a href="https://github.com/sukanta1304" className="text-white hover:text-gray-200">
            <span className="sr-only">GitHub</span>
            <FaGithub size={20} color="black"/>
          </a>
          <a href="https://www.linkedin.com/in/sukanta-dolai/" className="text-white hover:text-gray-200">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin color="white" size={20} />
          </a>
          <a href="https://www.facebook.com/www.Sukanta.in/about" className="text-white hover:text-gray-200">
            <span className="sr-only">Facebook</span>
            <FaFacebook color="white" size={20} />
          </a>
          <a href="https://www.instagram.com/sukanta_dolai/" className="text-white hover:text-gray-200">
            <span className="sr-only">Instagram</span>
            <FaInstagram color="red" size={20} />
          </a>
        </div>
        <div className="mt-4  md:order-1 md:mt-0 ">
          <p className="text-center text-base text-white">
            &copy; Sukanta. 2024 All Right Reserved. Built with Flowbite and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
