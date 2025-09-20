import React from "react";
import { motion } from "framer-motion";

function VirtualPlants() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-8 py-12 bg-gradient-to-b from-green-50 to-green-100">
      {/* 🌱 Plant 1 */}
      <motion.div
        className="w-24 h-40 relative"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <div className="w-3 h-20 bg-green-700 mx-auto rounded-full" />
        <div className="absolute -top-4 left-2 w-8 h-8 bg-green-500 rounded-full" />
        <div className="absolute -top-4 right-2 w-8 h-8 bg-green-400 rounded-full" />
      </motion.div>

      {/* 🌿 Plant 2 */}
      <motion.div
        className="w-28 h-44 relative"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <div className="w-4 h-28 bg-green-800 mx-auto rounded-full" />
        <div className="absolute top-4 -left-6 w-12 h-12 bg-green-300 rounded-full rotate-45" />
        <div className="absolute top-8 -right-6 w-12 h-12 bg-green-400 rounded-full -rotate-45" />
      </motion.div>

      {/* 🌻 Plant 3 (flower) */}
      <motion.div
        className="w-32 h-48 relative"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <div className="w-4 h-32 bg-green-700 mx-auto rounded-full" />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-yellow-400 rounded-full shadow-lg" />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-brown-600 rounded-full" />
      </motion.div>
    </div>
  );
}

export default VirtualPlants;
