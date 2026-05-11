"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const NavLinkButton = ({
  children,
  href = "#",
  className = "",
  onMouseEnter,
  onMouseLeave,
}) => {
  const textRef = useRef(null);
  const hoverTextRef = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    // We don't need to set initial yPercent anymore because 'top-full'
    // handles the starting position physically.
    tl.current = gsap
      .timeline({ paused: true })
      .to([textRef.current, hoverTextRef.current], {
        yPercent: -100, // Both move up exactly one "line height"
        duration: 0.4,
        ease: "power3.inOut",
      });

    return () => tl.current?.kill();
  }, []);

  return (
    <a
      href={href}
      onMouseEnter={() => {
        tl.current?.play();
        onMouseEnter?.();
      }}
      onMouseLeave={() => {
        tl.current?.reverse();
        onMouseLeave?.();
      }}
      // text-current ensures it inherits color, avoiding the default blue link color
      className={`inline-block cursor-pointer no-underline text-current ${className}`}
    >
      {/* 
        The 'pb-1' (bottom padding) gives room for descenders (g, y, p) 
        without changing the 'ceiling' of the container. 
      */}
      <div className="relative overflow-hidden ">
        {/* Top Text (Default) */}
        <span ref={textRef} className="block whitespace-nowrap">
          {children}
        </span>

        {/* Bottom Text (Appears on Hover) */}
        <span
          ref={hoverTextRef}
          aria-hidden="true"
          // 'top-full' places this exactly at the bottom of the first span's box
          className="absolute top-full left-0 block whitespace-nowrap"
        >
          {children}
        </span>
      </div>
    </a>
  );
};

export default NavLinkButton;
