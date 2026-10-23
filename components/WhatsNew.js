import React, { useRef, useEffect } from "react";
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

  const contentCardsRef = useRef(null);

  // Handle mouse drag functionality for horizontal scrolling
  useEffect(() => {
    const contentCardsElement = contentCardsRef.current;
    if (!contentCardsElement) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e) => {
      isDragging = true;
      contentCardsElement.classList.add("active");
      startX = e.pageX - contentCardsElement.offsetLeft;
      scrollLeft = contentCardsElement.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDragging = false;
      contentCardsElement.classList.remove("active");
    };

    const handleMouseUp = () => {
      isDragging = false;
      contentCardsElement.classList.remove("active");
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - contentCardsElement.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      contentCardsElement.scrollLeft = scrollLeft - walk;
    };

    // Add event listeners
    contentCardsElement.addEventListener("mousedown", handleMouseDown);
    contentCardsElement.addEventListener("mouseleave", handleMouseLeave);
    contentCardsElement.addEventListener("mouseup", handleMouseUp);
    contentCardsElement.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      contentCardsElement.removeEventListener("mousedown", handleMouseDown);
      contentCardsElement.removeEventListener("mouseleave", handleMouseLeave);
      contentCardsElement.removeEventListener("mouseup", handleMouseUp);
      contentCardsElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
      <div
        ref={contentCardsRef}
        className="contentCards flex gap-6  overflow-visible overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-px-4 no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {/* All the Cards */}
        {cards.map((card, index) => (
          <WhatsNewCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default WhatsNew;
