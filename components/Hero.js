"use client";
import React from "react";
import Image from "next/image";
import LeafLeft from "./LeafLeft";
import LeafRight from "./LeafRight";
import { heroIconsBottom, heroMainImage } from "@/utils/navItems";
const Hero = () => {
  const heroFrontIconWidth = 35,
    heroFrontIconHeight = 20;
  // Deterministic image for SSR + first paint (prevents hydration mismatch).
  // A random hero image is picked after mount, so every visit/reload shows
  // a different image (never the same one twice in a row).
  const [randomImage, setRandomImage] = React.useState(heroMainImage[0]);

  React.useEffect(() => {
    // Pick + swap the hero image right after first paint. Deferred via rAF so
    // we never call setState synchronously inside the effect.
    const frame = window.requestAnimationFrame(() => {
      if (heroMainImage.length < 2) return;
      const stored = window.localStorage.getItem("heroImageIndex");
      const lastIndex = stored === null ? -1 : Number(stored);
      const candidates = heroMainImage
        .map((img, index) => ({ img, index }))
        .filter((entry) => entry.index !== lastIndex);
      const pick = candidates[Math.floor(Math.random() * candidates.length)];
      window.localStorage.setItem("heroImageIndex", String(pick.index));
      setRandomImage(pick.img);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);
  return (
    <section
      aria-label="Hero section, top of the page"
      className="w-full h-[calc(100vh-66px)] p-2.5 flex flex-col"
    >
      <div className="main-hero  w-full h-full rounded-3xl p-3 md:p-4 flex flex-col relative overflow-hidden">
        {/* Background image — same randomImage, sits behind everything */}
        {randomImage && (
          <Image
            src={randomImage.src}
            alt={randomImage.alt}
            fill
            sizes="100vw"
            className="object-cover object-center -z-10"
            quality={randomImage.quality}
            priority
          />
        )}

        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/40 -z-10  backdrop-blur-sm" />

        {/* --- TOP / CENTER CONTENT --- */}
        <div className="font-saans font-normal text-background px-8 flex-1 flex flex-col justify-center items-center text-center">
          <p className="font-medium text-sm leading-3.5 max-w-52 mb-1">
            #1 Most recommended content marketing agency
          </p>

          <div className="branding-icons my-4 flex gap-3 ">
            <LeafLeft />
            <div
              style={{ width: heroFrontIconWidth, height: heroFrontIconHeight }}
              className="relative shrink-0"
            >
              <Image
                src="/image/Hero/heroFrontTopMiddleIcon/HeroFront-TopMiddleIcon-1.webp"
                alt="Global Search Awards"
                fill
                sizes="35px"
                quality={100}
              />
            </div>
            <div
              style={{ width: heroFrontIconWidth, height: heroFrontIconHeight }}
              className="relative shrink-0"
            >
              <Image
                src="/image/Hero/heroFrontTopMiddleIcon/HeroFront-TopMiddleIcon-2.webp"
                alt="The Drum"
                fill
                sizes="35px"
                quality={100}
              />
            </div>
            <div
              style={{ width: heroFrontIconWidth, height: heroFrontIconHeight }}
              className="relative shrink-0"
            >
              <Image
                src="/image/Hero/heroFrontTopMiddleIcon/HeroFront-TopMiddleIcon-3.webp"
                alt="UK social Media Awards"
                fill
                sizes="35px"
                quality={100}
              />
            </div>
            <div
              style={{ width: heroFrontIconWidth, height: heroFrontIconHeight }}
              className="relative shrink-0"
            >
              <Image
                src="/image/Hero/heroFrontTopMiddleIcon/HeroFront-TopMiddleIcon-4.webp"
                alt="UK Content Awards"
                fill
                sizes="35px"
                quality={100}
              />
            </div>
            <LeafRight />
          </div>

          <div className="main-text-content">
            <span className="block text-5xl md:text-7xl 2xl:text-9xl font-medium tracking-none leading-none">
              We Create
            </span>

            <div className="flex items-center justify-center gap-3 md:gap-4 2xl:gap-6">
              <span className="text-5xl md:text-7xl 2xl:text-9xl font-medium leading-none">
                Category
              </span>
              {/* <img src="null" alt="" className="mx-auto my-4" /> */}
              {randomImage && (
                <div className="relative shrink-0 w-15 h-15 md:w-22.5 md:h-22.5 2xl:w-32.5 2xl:h-42.5 rounded-2xl overflow-hidden">
                  <Image
                    src={randomImage.src}
                    alt={randomImage.alt}
                    fill
                    sizes="(min-width: 1536px) 130px, (min-width: 768px) 90px, 60px"
                    className="object-cover object-center"
                    quality={randomImage.quality}
                    placeholder={randomImage.placeholder}
                    blurDataURL={randomImage.shimmer}
                  />
                </div>
              )}

              <span className="block text-5xl md:text-7xl font-medium 2xl:text-9xl  tracking-none leading-none mt-2">
                Leaders
              </span>
            </div>
            <p className="text-2xl md:text-2xl mt-6 font-semibold">
              on every searchable platform
            </p>
          </div>
          {/* hero icons below text on 1440p */}
          <div className="on-4k-icons hidden 2xl:flex gap-7 justify-center items-center w-full">
            {heroIconsBottom.map((item, index) => (
              <div
                key={index}
                style={{ width: item.width, height: item.height }}
                className="relative flex-shrink-0"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={item.width + 'px'}
                  className="object-contain object-center"
                  quality={item.quality}
                  placeholder={item.placeholder}
                  blurDataURL={item.shimmer}
                />
              </div>
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
