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
  const stackRef = useRef(null);
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
      alt: "Award Winning",
      heading: "Award Winning",
      description: `A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.`,
      bgColor: "#B2F6E3",
    },
    {
      src: "/image/LegacyInMaking/LegacyInMaking-WhatsNew2.webp",
      alt: "Speed",
      heading: "Speed",
      description: `People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minutes.`,
      bgColor: "#FFFFFF",
    },
  ];
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const items = gsap.utils.toArray(".stack-card");
        const restAngles = [8, 12, 16]; // front, middle, back

        // 1. initial stack
        items.forEach((card, i) => {
          gsap.set(card, {
            rotation: restAngles[i] ?? 0,
            transformOrigin: "50% 50%",
            zIndex: items.length - i,
          });
        });

        // 2. pinned scroll timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${items.length * 100}%`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 3. distance needed to clear the top of the screen
        const exitDistance = () => {
          const stackBottom = stackRef.current.getBoundingClientRect().bottom;
          const sectionTop = sectionRef.current.getBoundingClientRect().top;
          return -(stackBottom - sectionTop + 200);
        };

        // 4. each card leaves straight up, the rest move forward
        items.forEach((card, i) => {
          const label = `step${i}`;
          tl.addLabel(label);

          tl.to(
            card,
            {
              y: exitDistance,
              x: 0,
              rotation: (restAngles[i] ?? 0) - 30, // always counter-clockwise
              ease: "power2.in",
              duration: 1,
            },
            label,
          );

          for (let j = i + 1; j < items.length; j++) {
            tl.to(
              items[j],
              {
                rotation: restAngles[j - i - 1] ?? 0,
                ease: "none",
                duration: 1,
              },
              label,
            );
          }
        });
      }); // closes mm.add

      return () => mm.revert();
    },
    { scope: sectionRef },
  );
  return (
    <section
      ref={sectionRef}
      className="LegacyInTheMaking  py-12 lg:px-0 lg:flex lg:flex-col lg:h-screen  lg:justify-center lg:items-center  lg:py-0 lg:mb-40"
    >
      <h3 className="text-base lg:text-xl font-medium text-center pb-1.5 my-5 lg:mb-60">
        Legacy In The Making
      </h3>
      <div
        ref={stackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-px-4 px-4 pb-2 no-scrollbar 
                      lg:relative lg:block lg:h-[500px] lg:w-full lg:max-w-lg lg:mx-auto lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {cards.map((item, index) => (
          <LegacyCard
            key={index}
            cardHeading={item.heading}
            cardDescription={item.description}
            cardImage={item.src}
            cardImageAlt={item.alt}
            bgColor={item.bgColor}
            isDark={item.isDark}
            className="stack-card"
          />
        ))}
      </div>
    </section>
  );
};

export default LegacyInTheMaking;
