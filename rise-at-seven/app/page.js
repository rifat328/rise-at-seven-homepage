"use client";
import { motion } from "motion/react";
export default function Home() {
  return (
    <div className="flex flex-1 justify-center items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold ">Hello World</h1>
      </motion.div>
    </div>
  );
}
