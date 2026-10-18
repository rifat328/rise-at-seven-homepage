import React from "react";
import Image from "next/image";

const LegacyCard = ({
  cardHeading,
  cardDescription,
  cardImage,
  cardImageAlt,
  bgColor,
  isDark = false,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center relative shrink-0 snap-start w-full md:w-[60%] md:m1.5 p-7 rounded-2xl overflow-hidden
        lg:absolute lg:inset-0 lg:w-full lg:max-w-none ${className}`}
      style={{ backgroundColor: bgColor || "#f5f5f5" }}
    >
      <Image
        src={cardImage}
        alt={cardImageAlt}
        width={192}
        height={192}
        placeholder="blur"
        blurDataURL={cardImage}
        className="rounded-xl object-cover "
      />
      <div className="relative z-10 flex flex-col justify-center items-center text-center">
        <h1
          className={`py-5 text-3xl font-medium ${isDark ? "text-white" : "text-black"}`}
        >
          {cardHeading}
        </h1>
        <p
          className={`pb-2 text-[14px] md:text-base lg:text-xl font-medium ${isDark ? "text-white/80" : "text-gray-700"}`}
        >
          {cardDescription}
        </p>
      </div>
    </div>
  );
};

export default LegacyCard;
