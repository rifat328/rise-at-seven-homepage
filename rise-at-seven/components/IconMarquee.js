"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const icons = [
  {
    src: "/image/marque/subHero-icon-1.webp",
    alt: "subHero-icon-1.webp",
    width: 55,
    height: 55,
  },
  {
    src: "/image/marque/subHero-icon-2.webp",
    alt: "subHero-icon-2.webp",
    width: 55,
    height: 55,
  },
  {
    src: "/image/marque/subHero-icon-3.webp",
    alt: "subHero-icon-3.webp",
    width: 55,
    height: 55,
  },
  {
    src: "/image/marque/subHero-icon-4.webp",
    alt: "subHero-icon-4.webp",
    width: 55,
    height: 55,
  },
  {
    src: "/image/marque/svg-image-6.svg",
    alt: "svg-image.webp",
    width: 55,
    height: 55,
  },
  {
    src: "/image/marque/svg-image-7.svg",
    alt: "svg-image-7.webp",
    width: 55,
    height: 55,
  },
  {
    src: "/image/marque/svg-image-8.svg",
    alt: "svg-image-8.webp",
    width: 55,
    height: 55,
  },
  {
    src: "/image/marque/svg-image-9.svg",
    alt: "svg-image-9.webp",
    width: 55,
    height: 55,
  },
  {
    src: "/image/marque/svg-image-10.svg",
    alt: "svg-image-10.webp",
    width: 55,
    height: 55,
  },
  {
    src: "/image/marque/svg-image-11.svg",
    alt: "svg-image-11.webp",
    width: 55,
    height: 55,
  },
  {
    src: "/image/marque/svg-image-12.svg",
    alt: "svg-image-12.webp",
    width: 55,
    height: 55,
  },
  {
    src: "/image/marque/svg-image-13.svg",
    alt: "svg-image-13.webp",
    width: 55,
    height: 55,
  },
];

const IconMarquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const scrollWidth = marquee.scrollWidth;

    // We animate to -50% because we are doubling the array
    const animation = gsap.to(marquee, {
      x: "-50%",
      duration: 30, // Adjust for speed
      ease: "linear",
      repeat: -1,
    });

    // Pause on hover for better UX
    // const handleMouseEnter = () => animation.pause();
    // const handleMouseLeave = () => animation.play();

    // marquee.addEventListener("mouseenter", handleMouseEnter);
    // marquee.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      animation.kill();
      //   marquee.removeEventListener("mouseenter", handleMouseEnter);
      //   marquee.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-background py-5 my-5 ">
      {/* Gradient Overlays for a polished look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center ">
        <p className="text-xs font-medium text-foreground md:text-sm  py-1 px-2 ">
          The agency behind ...
        </p>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-37 bg-linear-to-r from-white to-transparent backdrop-blur-md " />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-gray-400 to-transparent backdrop-blur-md" />

      <div ref={marqueeRef} className="flex w-max items-center gap-8 md:gap-16">
        {/* Render the list twice for seamless looping */}
        {[...icons, ...icons].map((icon, index) => (
          <div
            key={index}
            className="flex items-center gap-3 relative flex-shrink-0  "
            style={{ width: icon.width, height: icon.height }}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              fill
              className="object-contain object-center"
              sizes="100px"
              priority={index < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconMarquee;
