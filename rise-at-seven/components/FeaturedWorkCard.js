"use client";
import React from "react";
import { Search } from "lucide-react";
import { useState } from "react";

export default function FeaturedWorkCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="px-4 lg:px-6">
      <div
        className="relative overflow-hidden rounded-[24px] cursor-pointer group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* BASE IMAGE */}
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-[50vh] object-cover rounded-[24px] transition-transform duration-700 group-hover:scale-105"
        />

        {/* CIRCULAR OVERLAY */}
        <div
          className="absolute inset-0 transition-[clip-path] duration-700 ease-in-out pointer-events-none"
          style={{
            backgroundColor: project.imgHoverColor,
            // Starts as a 0% circle at bottom-center (50% 100%)
            // Expands to 150% to ensure the rectangular corners are fully covered
            clipPath: hovered
              ? "circle(150% at 50% 100%)"
              : "circle(0% at 50% 100%)",
            opacity: 1, // High opacity to "cover up" but keep a hint of the image
          }}
        />

        {/* HOVER TEXT  */}
        <div
          className={`
            absolute left-8 top-8 z-10
            transition-all duration-500 delay-100
            ${hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
          `}
        >
          <p className="text-2xl 2xl:text-6xl font-medium max-w-[320px] 2xl:max-w-[80%] text-black leading-[1.1]">
            {project.imgHoverText}
          </p>
        </div>

        {/* BOTTOM RIGHT TAG (Original Position) */}
        <div className="absolute right-5 bottom-5 z-10">
          <div
            className={`
              bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-xs 2xl:text-sm flex items-center gap-1.5 transition-colors duration-300
              ${hovered ? "bg-black text-white" : "bg-white/10 text-white"}
            `}
          >
            <Search size={"16px"} />
            <span className="font-medium">{project.bottomRightDesignText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
