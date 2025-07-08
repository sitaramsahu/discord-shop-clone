"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#1E1F22] text-white px-8 py-4 flex justify-between items-center shadow-md fixed top-0 z-50"
    >
      {/* Logo or Title */}
      <div className="text-xl font-bold tracking-wide">Discord Shop</div>

      {/* Navigation Links */}
      <div className="space-x-6 hidden md:flex items-center">
        <a href="#" className="hover:text-[#7289DA] transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-[#7289DA] transition-colors">
          Shop
        </a>

        {/* Products Dropdown */}
        <div className="relative group">
          <a href="#" className="hover:text-[#7289DA] transition-colors">
            Products
          </a>
          <div className="absolute top-full left-0 mt-2 w-48 bg-[#2C2F33] border border-[#444] rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#3A3F45]"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
                alt="Nitro"
                className="w-5 h-5"
              />
              Nitro Classic
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#3A3F45]"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968753.png"
                alt="Boost"
                className="w-5 h-5"
              />
              Nitro Boost
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#3A3F45]"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968777.png"
                alt="Merch"
                className="w-5 h-5"
              />
              Merch Store
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#3A3F45]"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968742.png"
                alt="Bundle"
                className="w-5 h-5"
              />
              Gaming Bundle
            </a>
          </div>
        </div>

        <a href="#" className="hover:text-[#7289DA] transition-colors">
          About
        </a>
        <a href="#" className="hover:text-[#7289DA] transition-colors">
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
