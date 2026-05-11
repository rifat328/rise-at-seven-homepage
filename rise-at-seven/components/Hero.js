import React from "react";
import Image from "next/image";
import LeafLeft from "./LeafLeft";
import LeafRight from "./LeafRight";
import { heroIconsBottom } from "@/utils/navItems";
const Hero = () => {
  const heroFrontIconWidth = 35,
    heroFrontIconHeight = 20;

  return (
    <section
      aria-label="Hero section, top of the page"
      className="w-full h-[calc(100vh-66px)] p-2.5 flex flex-col"
    >
      <div className="main-hero bg-amber-500 w-full h-full rounded-2xl p-3 md:p-4 flex flex-col relative">
        {/* --- TOP / CENTER CONTENT --- */}
        <div className="font-saans font-normal text-background px-8 flex-1 flex flex-col justify-center items-center text-center">
          <p className="font-medium text-sm leading-3.5 max-w-52 mb-1">
            #1 Most recommended content marketing agency
          </p>

          <div className="branding-icons my-4 flex gap-3 ">
            <LeafLeft />
            <Image
              src="/image/Hero/heroFrontTopMiddleIcon/HeroFront-TopMiddleIcon-1.webp"
              alt="Global Search Awards"
              width={heroFrontIconWidth}
              height={heroFrontIconHeight}
              quality={100}
            />
            <Image
              src="/image/Hero/heroFrontTopMiddleIcon/HeroFront-TopMiddleIcon-2.webp"
              alt="The Drum"
              width={heroFrontIconWidth}
              height={heroFrontIconHeight}
              quality={100}
            />
            <Image
              src="/image/Hero/heroFrontTopMiddleIcon/HeroFront-TopMiddleIcon-3.webp"
              alt="UK social Media Awards"
              width={heroFrontIconWidth}
              height={heroFrontIconHeight}
              quality={100}
            />
            <Image
              src="/image/Hero/heroFrontTopMiddleIcon/HeroFront-TopMiddleIcon-4.webp"
              alt="UK Content Awards"
              width={heroFrontIconWidth}
              height={heroFrontIconHeight}
              quality={100}
            />
            <LeafRight />
          </div>

          <div className="main-text-content">
            <span className="block text-5xl md:text-7xl 2xl:text-9xl font-medium tracking-none leading-none">
              We Create Category
            </span>
            {/* <img src="null" alt="" className="mx-auto my-4" /> */}
            <Image
              src="/image/Hero/heroFrontTopMiddleIcon/HeroFront-TopMiddleIcon-1.webp"
              alt="Global Search Awards"
              width={heroFrontIconWidth}
              height={heroFrontIconHeight}
              quality={100}
            />
            <span className="block text-5xl md:text-7xl font-medium 2xl:text-9xl  tracking-none leading-none mt-2">
              Leaders
            </span>
            <p className="text-2xl md:text-2xl mt-6 font-semibold">
              on every searchable platform
            </p>
          </div>
          <div className="on-4k-icons hidden 2xl:flex gap-3 justify-center items-center">
            {heroIconsBottom.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                quality={item.quality}
                placeholder={item.placeholder}
                blurDataURL={item.shimmer}
              />
            ))}
          </div>
        </div>

        {/* --- BOTTOM SUB-TEXT SECTION --- */}
        <div className="w-full text-white text-sm md:text-base font-normal mt-auto">
          <div className="sub-content flex flex-col md:flex-row md:justify-between w-full md:gap-12">
            <p className="hidden md:block text-left  md:text-xs leading-snug md:max-w-[50%] text-amber-50">
              Organic media planners creating, distributing & optimising{" "}
              <span className="font-semibold">search-first</span> content for
              SEO, Social, PR, Ai and LLM search
            </p>

            <p className="md:flex md:flex-row md:justify-end md:items-baseline md:gap-1.5 mt-4 md:mt-0 font-medium text-center md:text-right text-white">
              <span className="whitespace-nowrap">
                4 Global Offices serving{" "}
              </span>
              <span className="whitespace-nowrap">UK, USA (New York) & EU</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
