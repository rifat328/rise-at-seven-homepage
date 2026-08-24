"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const CollapsibleList = () => {
  const [expanded, setExpanded] = useState(null);
  const items = [1, 2, 3];

  return (
    <div className="flex flex-col gap-3 w-96">
      {items.map((id) => (
        <motion.div
          layout
          key={id}
          onClick={() => setExpanded((prev) => (prev === id ? null : id))}
          className="bg-white border border-gray-200 rounded-2xl px-5 py-4 cursor-pointer shadow-sm overflow-hidden"
        >
          <motion.h3 layout className="text-base font-semibold text-gray-800">
            Item {id}
          </motion.h3>

          <AnimatePresence>
            {expanded === id && (
              <motion.p
                key="content"
                layoutId="underline"
                exit={{ opacity: 0, y: 28 }}
                className="mt-2 text-sm text-gray-500 leading-relaxed"
              >
                This section expands and contracts with a layout animation.
                Click again to collapse it.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default CollapsibleList;
