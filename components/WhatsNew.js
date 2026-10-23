import React from "react";
import WhatsNewCard from "./WhatsNewCard";
import Button from "./Button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const WhatsNew = () => {
  const cards = [
    {
      src: "/image/WhatsNew/whatsNew3.webp",
      alt: "WhatsNew1",
      topPill: true,
      personName: "Carrie Rose",
      time: "8",
      heading: "AEO/AI Searcg & Cutatuib Statistics 2026",
    },
    {
      src: "/image/WhatsNew/whatsNew1.webp",
      alt: "WhatsNew2",
      topPill: false,
      personName: "Carrie Rose",
      time: "7",
      heading:
        "Opinion Piece: The SEO vs GEO debate is making our industry look stupid",
    },
    {
      src: "/image/WhatsNew/whatsNew2.webp",
      alt: "WhatsNew3",
      topPill: true,
      personName: "Ray Saddiq",
      time: "7",
      heading: "Organic vs Paid in AI Search? You're Asking the Wrong Question",
    },
  ];
  return (
    <section className=" w-full  mb-5 p-4">
      <div className="heading pt-3">
        <h2 className="font-medium text-6xl md:text-7xl 2xl:text-[100px] leading-[54px] 2xl:leading-24 p-2">
          What's
          <span className="inline-block align-bottom mx-1 shrink-0 w-14 h-14 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 rounded-xl overflow-hidden relative translate-y-[-10%]">
            <Image
              src="/image/WhatsNew/whatsNew2.webp"
              alt="team context"
              fill
              sizes="(min-width: 1536px) 96px, (min-width: 1024px) 64px, 56px"
              quality={90}
              className="object-cover"
            />
          </span>
          New
        </h2>

        {/* mobile BUTTON: Visible only on sm , from md it vanishes */}
        <div className=" md:hidden">
          <Button classStyle=" px-4 py-3  font-saans font-medium text-base ">
            Explore More Thoughts
            <MoveUpRight strokeWidth="1px" className="w-4" />
          </Button>
        </div>
      </div>
      <div className="contentCards flex gap-6  overflow-visible overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-px-4">
        {/* All the Cards */}
        {cards.map((card, index) => (
          <WhatsNewCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default WhatsNew;
