import React from "react";
import { motion } from "motion/react";

const LiveBadge = () => {
  return (
    <div>
      <motion.span
        className="inline-flex items-center gap-1.5 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
        animate={{
          boxShadow: [
            "0 0 6px 2px rgba(198,28,255,0.4)",
            "0 0 14px 5px rgba(200,28,255,0.7)",
            "0 0 6px 2px rgba(153,28,255,0.4)",
          ],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: 2,
        }}
      >
        <motion.span
          className="w-1.5 h-1.5 bg-white rounded-full"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
        />
        Live
      </motion.span>
    </div>
  );
};

export default LiveBadge;
