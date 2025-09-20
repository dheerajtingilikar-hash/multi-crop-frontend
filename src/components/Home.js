import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const plants = [
  { name: "Rice", desc: "Identify rice crops and detect growth stages." },
  { name: "Wheat", desc: "Track wheat health and recognize diseases early." },
  { name: "Corn", desc: "Analyze corn plants for yield prediction." },
  { name: "Tomato", desc: "Detect common tomato diseases and nutrient needs." },
];

function Home() {
  return (
    <div className="home">
      {/* Hero Section with Animated Gradient + Floating Particles */}
      <section
        className="relative h-[70vh] flex flex-col items-center justify-center text-center px-6
        bg-gradient-to-r from-green-500 via-yellow-400 to-green-700
        bg-[length:200%_200%] animate-gradient text-white overflow-hidden"
      >
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-16 h-16 bg-green-300 rounded-full opacity-40"
            animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{ top: "20%", left: "10%" }}
          />
          <motion.div
            className="absolute w-20 h-20 bg-yellow-300 rounded-full opacity-30"
            animate={{ y: [0, -60, 0], x: [0, -40, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            style={{ bottom: "25%", right: "15%" }}
          />
        </div>

        {/* Hero Text */}
        <motion.h1
          className="text-6xl font-extrabold drop-shadow-lg z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Multi-Crop Plant Recognition
        </motion.h1>
        <motion.p
          className="text-lg max-w-xl mt-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Smart agriculture powered by AI. Upload crop images, detect species,
          and improve yield.
        </motion.p>
        <motion.a
          href="/register"
          className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition z-10"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.a>
      </section>

      {/*  Supported Crops with Scroll Animation */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
           Supported Crops
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
          {plants.map((plant, idx) => {
            // Create observer for each crop card
            const [ref, inView] = useInView({
              triggerOnce: false,
              threshold: 0.3,
            });

            return (
              <motion.div
                ref={ref}
                key={idx}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-green-200 rounded-full text-2xl font-bold text-green-800">
                  {plant.name[0]}
                </div>
                <h3 className="font-bold text-lg">{plant.name}</h3>
                <p className="text-sm text-gray-600">{plant.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/*  Call to Action */}
      <section className="py-20 bg-green-600 text-center text-white">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform Your Farming?
        </motion.h2>
        <motion.p
          className="max-w-xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Sign up today to access plant recognition, crop history tracking, and
          advanced smart farming tools.
        </motion.p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <a
            href="/register"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition"
          >
            Sign Up Now
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
