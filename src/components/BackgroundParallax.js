import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function BackgroundParallax() {
  const { scrollY } = useScroll();

  // Move elements at different speeds
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 200]);
  const y3 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Circle 1 */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full opacity-30"
      />
      {/* Circle 2 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-40 h-40 bg-yellow-300 rounded-full opacity-20"
      />
      {/* Circle 3 */}
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-20 left-1/3 w-24 h-24 bg-green-500 rounded-full opacity-25"
      />
    </div>
  );
}

export default BackgroundParallax;
