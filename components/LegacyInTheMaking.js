"use client";

import { useRef } from "react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LegacyCard from "@/components/LegacyCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const LegacyInTheMaking = () => {
  const sectionRef = useRef(null);
  const cards = [
    {
      src: "/image/LegacyInMaking/LegacyInMaking-WhatsNew4.webp",
      alt: "Pioneers",
      heading: "Pioneers",
      description: `We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.
We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.`,
      bgColor: "#000000",
      isDark: true,
    },
    {
      src: "/image/LegacyInMaking/LegacyInMaking-WhatsNew5.webp",
      alt: "Pioneers",
      heading: "Pioneers",
      description: `We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.
We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.`,
      bgColor: "#B2F6E3",
    },
    {
      src: "/image/LegacyInMaking/LegacyInMaking-WhatsNew2.webp",
      alt: "Pioneers",
      heading: "Pioneers",
      description: `We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.
We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.`,
      bgColor: "#FFFFFF",
    },
  ];
  return (
    <section
      ref={sectionRef}
      className="LegacyInTheMaking  py-12 lg:flex-column lg:h-screen lg:items-center lg:justify-center lg:aligh-center"
    >
      <h3 className="text-base lg:text-xl font-medium text-center pb-1.5 my-5 lg:mb-[25%]">
        Legacy In The Making
      </h3>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-px-4 px-4 pb-2 no-scrollbar">
        {cards.map((item, index) => (
          <LegacyCard
            key={index}
            cardHeading={item.heading}
            cardDescription={item.description}
            cardImage={item.src}
            cardImageAlt={item.alt}
            bgColor={item.bgColor}
            isDark={item.isDark}
          />
        ))}
      </div>
    </section>
  );
};

export default LegacyInTheMaking;
