"use client";
import { motion } from "motion/react";

export default function Home() {
  const feature = ["Fast", "Slow", "PowerFull", "Weak"];
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: "easeIn" },
    },
  };
  const items = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="flex flex-1 justify-center items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-center">Hello World</h1>
        <div className="flex gap-3 mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="text-sm text-gray-500 border ring-1 rounded-2xl px-3 py-1"
          >
            Spring animation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "tween" }}
            className="text-sm text-gray-500 border ring-1 rounded-2xl px-3 py-1"
          >
            Tween animation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "tween" }}
            className="text-sm text-gray-500 border ring-1 rounded-2xl px-3 py-1"
          >
            Inertia animation
          </motion.button>
        </div>
        <div className="py-4 px-3 space-y-5 mt-5">
          <motion.ul
            variants={container}
            initial={"hidden"}
            animate={"visible"}
          >
            {feature.map((e) => (
              <motion.li
                key={e}
                variants={items}
                className="text-shadow-white font-medium"
              >
                {e}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="py-4 px-3 space-y-5 mt-5">
          <h3>Abu Bakkar</h3>
          <h3>Umar ibn </h3>
          <h3>Hamza</h3>
          <h3>Ali</h3>
        </div>
      </motion.div>
    </div>
  );
}
