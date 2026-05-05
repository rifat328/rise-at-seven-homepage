import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
const DismissableAlert = () => {
  const [open, setOen] = useState(false);
  return (
    <div>
      <button onClick={() => setOen((o) => !o)}>Toggle Alert</button>
      {open && (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            exit={{ y: -10, opacity: 0 }}
            className="bg-red-600 text-2xl font-bold font-serif  relative inset-1 px-3 py-2 rounded-2xl"
          >
            This is an animated alert
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default DismissableAlert;
