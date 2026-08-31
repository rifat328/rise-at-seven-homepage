import React from "react";
import LegacyCard from "@/components/LegacyCard";
const LegacyInTheMaking = () => {
  const cards = [
    {
      src: "/image/LegacyInMaking/LegacyInMaking-WhatsNew4.webp",
      alt: "Pioneers",
      heading: "Pioneers",
      description: `We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.
We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.`,
      bgColor: "",
    },
  ];
  return (
    <section className="LagacyInTheMaking w-full h-4/6 flex">
      <h3 className="text-xl font-medium item-center pb-1.5">
        Lagacy In TheMaking
      </h3>
      {cards.map((item, index) => (
        <LegacyCard
          key={index}
          cardHeading={item.heading}
          cardDescription={item.description}
          cardImage={item.src}
          cardImageAlt={item.alt}
          bgColor={item.bgColor}
        />
      ))}
    </section>
  );
};

export default LegacyInTheMaking;
