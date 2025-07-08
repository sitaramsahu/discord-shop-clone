"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full overflow-hidden bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 animate-gradient-x text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <ul className="flex space-x-8 justify-center p-3 ">
            <li>
              <a href="#">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="#">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="#">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="#">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <Youtube />
              </a>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white font-medium transition">
            Home
          </a>
          <a href="#" className="hover:text-white font-medium transition">
            Shop
          </a>
          <a href="#" className="hover:text-white font-medium transition">
            About
          </a>
          <a href="#" className="hover:text-white font-medium transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
