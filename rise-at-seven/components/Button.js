"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const Button = ({ classStyle, children, href }) => {
  const btnRef = useRef(null);
  const defaultRef = useRef(null);
  const hoverRef = useRef(null);
  const tlRef = useRef(null);

  // 1. Separate base layout from customizable styles
  const baseClasses =
    "bg-white border-2 inline-flex items-center cursor-pointer overflow-hidden relative";
  const finalClass = classStyle
    ? `${baseClasses} ${classStyle}`
    : `${baseClasses} py-2 px-3`;

  useLayoutEffect(() => {
    // 2. Set initial GSAP states
    gsap.set(btnRef.current, { borderRadius: "999px" });
    gsap.set(hoverRef.current, { yPercent: 100 });

    // 3. Create the timeline
    tlRef.current = gsap
      .timeline({ paused: true })
      .to(
        defaultRef.current,
        {
          yPercent: -100,
          duration: 0.4,
          ease: "power3.inOut",
        },
        0,
      )
      .to(
        hoverRef.current,
        {
          yPercent: 0,
          duration: 0.4,
          ease: "power3.inOut",
        },
        0,
      )
      .to(
        btnRef.current,
        {
          borderRadius: "6px", // The "boxy" shape
          duration: 0.4,
          ease: "power3.inOut",
        },
        0,
      );

    return () => tlRef.current?.kill();
  }, []);

  const handleMouseEnter = () => tlRef.current?.play();
  const handleMouseLeave = () => tlRef.current?.reverse();

  return (
    <button
      ref={btnRef}
      onClick={() => href && (window.location.href = href)}
      className={finalClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Inner container to hold the sliding text */}
      <div className="relative flex items-center overflow-hidden">
        <span ref={defaultRef} className="flex items-center gap-1.5">
          {children}
        </span>
        <span
          ref={hoverRef}
          aria-hidden="true"
          className="absolute left-0 top-0 flex items-center gap-1.5"
        >
          {children}
        </span>
      </div>
    </button>
  );
};

export default Button;
