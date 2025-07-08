"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-[500px] md:h-[600px] w-full bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage: "url('/bg/banner-discord.jpg')",
      }}
    >
      {/* Overlay for dark gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />

      {/* Text & Button */}
      <div className="relative z-10 text-white px-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: Text */}
          <div>
            <h1 className="text-5xl font-extrabold leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]">
              DISCORD SHOP
            </h1>
            <p className="mt-2 text-lg text-gray-300">
              come for the chaos. stay for the lore.
            </p>
          </div>

          {/* Right: Button */}
          <div>
            <button className="mt-4 md:mt-0 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
              Shop the Discord Collection
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
