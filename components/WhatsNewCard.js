"use client";
import React, { useState } from "react";
import { Clock } from "lucide-react";
const WhatsNewCard = ({ card }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative overflow-hidden rounded-[24px] cursor-pointer group shrink-0 snap-start w-[300px] md:w-[380px] h-[50vh]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="titleImage">
        {/* BASE IMAGE */}
        <img
          src={card.src}
          alt={card.alt}
          className="w-full h-[50vh] object-cover rounded-[24px] transition-transform duration-700 group-hover:scale-105"
        />

        {/* CIRCULAR OVERLAY */}
        <div
          className="absolute inset-0 transition-[clip-path] duration-700 ease-in-out pointer-events-none"
          style={{
            backgroundColor: card.imgHoverColor,
            // Starts as a 0% circle at bottom-center (50% 100%)
            // Expands to 150% to ensure the rectangular corners are fully covered
            clipPath: hovered
              ? "circle(150% at 50% 100%)"
              : "circle(0% at 50% 100%)",
            opacity: 1, // High opacity to "cover up" but keep a hint of the image
          }}
        />

        {/* BOTTOM RIGHT TAG (Original Position) */}
        <div className="absolute right-5 bottom-5 z-10">
          <div
            className={`
              bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-xs 2xl:text-sm flex items-center gap-1.5 transition-colors duration-300
              ${hovered ? "bg-black text-white" : "bg-white/10 text-white"}
            `}
          >
            <Clock size={"16px"} />
            <span className="font-medium">{card.bottomRightDesignText}</span>
          </div>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default WhatsNewCard;

// src: "/image/WhatsNew/whatsNew3.webp",
//       alt: "WhatsNew1",
//       topPill: true,
//       personName: "Carrie Rose",
//       time: "8",
//       heading: "AEO/AI Searcg & Cutatuib Statistics 2026",
