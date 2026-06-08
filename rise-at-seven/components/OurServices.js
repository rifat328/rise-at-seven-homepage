"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "./Button";
// import services from "@/utils/navItems"
import Image from "next/image";

gsap.registerPlugin(useGSAP);

const OurServices = () => {
  const containerRef = useRef(null);
  const services = [
    {
      title: "Digital PR",
      description: "Modern and responsive interfaces built for conversion.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Organic Social & Content",
      description: "Fast, scalable, and clean code for your business.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Search & Growth Strategy",
      description: "Improve visibility and bring more organic traffic.",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Content Experience",
      description: "Build a strong and memorable digital presence.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Data & Insights",
      description: "Build a strong and memorable digital presence.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Onsite SEO",
      description: "Build a strong and memorable digital presence.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  // GSAP context hook ensures safe scoping & garbage collection on unmount
  const { contextSafe } = useGSAP({ scope: containerRef });
  const handleMouseEnter = contextSafe((e) => {
    const target = e.currentTarget;
    // Initialize the timeline ONCE per item and attach it directly to the DOM node
    if (!target.tl) {
      const arrow = target.querySelector(".service-arrow");
      const title = target.querySelector(".service-title");
      const bgImage = target.querySelector(".service-bg");
      const overlay = target.querySelector(".service-overlay");
      const pillContainer = target.querySelector(".pill-container");
      const arrowContainer = target.querySelector(".arrow-container");
      //Shared timeline to synchronize animations
      const tl = gsap.timeline({ paused: true });
      target.tl = tl;
      tl.to(pillContainer, { color: "#ffffff", duration: 0.3 }, 0)
        .to(bgImage, { opacity: 1, duration: 0.3, ease: "power3.out" }, 0)
        .to(overlay, { opacity: 1, duration: 0.3 }, 0)
        .to(
          arrowContainer,
          { width: 40, marginRight: 12, duration: 0.3, ease: "power4.out" },
          0,
        )
        .to(title, { x: 16, duration: 0.4, ease: "power4.out" }, 0)
        // shoot arrow up straight
        .to(arrow, { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }, 0)
        // snap back to original arrow rotaion at the end with springy effect
        .to(
          arrow,
          { rotation: 0, duration: 0.2, ease: "back.out(1.5)" },
          "-=0.05",
        );
    }

    target.tl.play();
  });
  // Revert states smoothly on Hover Out
  const handleMouseLeave = contextSafe((e) => {
    const target = e.currentTarget;
    if (target.tl) {
      // Retraces steps backwards instantly, matching the user's cursor speed
      target.tl.reverse();
    }
  });
  return (
    <section
      ref={containerRef}
      className="w-full px-4 py-10 md:px-6 lg:px-10 select-none"
    >
      <div className="flex flex-col gap-10 text-left mt-4 mb-5 mx-2">
        {/* Header */}
        <div className="w-full">
          <div className="flex items-end gap-3 md:pb-2 md:border-b border-neutral-400">
            <h2 className="font-medium text-6xl md:text-7xl 2xl:text-[100px] leading-[54px] 2xl:leading-24 p-2">
              Our
              <span className="inline-block align-bottom mx-1 shrink-0 w-14 h-14 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 rounded-xl overflow-hidden relative translate-y-[-10%]">
                <Image
                  src="/image/OurServices/ourServices-1.webp"
                  alt="team context"
                  fill
                  quality={90}
                  className="object-cover"
                />
              </span>
              Services
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 ">
          {services.map((service, index) => (
            <article
              key={index}
              className="group relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* 2. The inner container handles the rounded pill look & hover states */}
              <div className="pill-container relative overflow-hidden rounded-full px-6 py-5 flex items-center text-neutral-900 ">
                {/* Hover Background Image (Enabled globally so it works on mobile tap too) */}
                <div
                  className="service-bg absolute inset-0 bg-cover bg-center opacity-0"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Dark overlay tint for clean text contrast on hover */}
                <div className="service-overlay pointer-events-none absolute inset-0 bg-black/10 opacity-0 " />

                {/* Content Layout */}
                <div className="relative z-10 flex items-center w-full ">
                  {/* Animated Arrow Icon (Reveals smoothly on hover) */}
                  {/* Container to clip the arrow base cleanly */}
                  <div className="arrow-container relative overflow-hidden flex items-center justify-center h-12 w-0  ">
                    {/* The Arrow: Configured initially straight-up (-45deg) and low (y-full) */}
                    <span
                      className="service-arrow text-3xl md:text-4xl 2xl:text-6xl opacity-0 inline-block origin-center will-change-transform"
                      style={{ transform: "translateY(100%) rotate(-45deg)" }}
                    >
                      ↗
                    </span>
                  </div>

                  <h3 className="service-title text-3xl md:text-4xl  2xl:text-6xl leading-15 font-medium tracking-tighter will-change-transform">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="absolute border-b w-[90%] border-neutral-400 left-11 bottom-0"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
