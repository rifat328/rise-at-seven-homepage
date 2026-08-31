import React from "react";
import Image from "next/image";

const LegacyCard = ({
  cardHeading,
  cardDescription,
  cardImage,
  cardImageAlt,
  bgColor,
}) => {
  return (
    <div
      className="w-full h-full m-1.5 p-2 rounded-2xl "
      style={{ backgroundColor: bgColor || "#f5f5f5" }}
    >
      <Image
        src={cardImage}
        alt={cardImageAlt}
        fill
        placeholder="blur"
        blurDataURL={cardImage}
        className="rounded-2xl"
      />
      <h1>{cardHeading}</h1>
      <p>{cardDescription}</p>
    </div>
  );
};

export default LegacyCard;
