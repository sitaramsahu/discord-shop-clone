"use client";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export default function ProductCard({ title, price, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-[#1E1F22] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-between"
    >
      <div className="w-full bg-black p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain rounded-md mx-auto"
        />
      </div>

      <div className="w-full p-4 flex flex-col gap-3 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button className="flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] transition-all text-white font-semibold py-2 rounded-lg">
          Buy for {price}
          <Gift size={20} />
        </button>
      </div>
    </motion.div>
  );
}
