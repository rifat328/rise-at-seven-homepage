"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const Button = ({ classStyle, children, href, onMouseEnter, onMouseLeave }) => {
  const btnRef = useRef(null);
  const defaultRef = useRef(null);
  const hoverRef = useRef(null);
  const tlRef = useRef(null);

  // 1. We move default colors into a variable that we only use if NOT provided in classStyle
  const hasBg = classStyle?.includes("bg-");
  const defaultColors = hasBg ? "" : "bg-white text-black";

  const baseLayout =
    "inline-flex items-center cursor-pointer overflow-hidden relative ";
  const finalClass = `${baseLayout} ${defaultColors} ${classStyle || "py-2 px-3"}`;

  useLayoutEffect(() => {
    // 2. Initial Pill State
    // We use !important or GSAP set to ensure we override any 'rounded' classes passed in
    gsap.set(btnRef.current, { borderRadius: "999px" });
    gsap.set(hoverRef.current, { yPercent: 100 });

    tlRef.current = gsap
      .timeline({ paused: true })
      .to(
        defaultRef.current,
        { yPercent: -100, duration: 0.4, ease: "power3.inOut" },
        0,
      )
      .to(
        hoverRef.current,
        { yPercent: 0, duration: 0.4, ease: "power3.inOut" },
        0,
      )
      .to(
        btnRef.current,
        {
          borderRadius: "8px", // Your "boxy" target
          duration: 0.4,
          ease: "power3.inOut",
        },
        0,
      );

    return () => tlRef.current?.kill();
  }, []);

  const handleMouseEnter = () => {
    tlRef.current?.play();
    onMouseEnter?.();
  };
  const handleMouseLeave = () => {
    tlRef.current?.reverse();
    onMouseLeave?.(); //  call external handler if provided
  };
  return (
    <button
      ref={btnRef}
      onClick={() => href && (window.location.href = href)}
      className={finalClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center overflow-hidden w-full justify-center">
        <span
          ref={defaultRef}
          className="flex items-center gap-1.5 whitespace-nowrap"
        >
          {children}
        </span>
        <span
          ref={hoverRef}
          aria-hidden="true"
          className="absolute flex items-center gap-1.5 whitespace-nowrap"
        >
          {children}
        </span>
      </div>
    </button>
  );
};

export default Button;
