import React from "react";
import Button from "./Button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
const About = () => {
  return (
    <section aria-label="About">
      {/* Mobile: flex-col with order | md: 2-col grid */}
      <div className="flex flex-col gap-3 md:gap-0 md:grid md:grid-cols-2 text-left mt-4 mb-5 mx-2">
        {/* h2 — top on mobile | right col, row 1 on md */}
        <div className="max-w-[40ch] order-1 md:col-start-2 md:row-start-1 2xl:max-w-[80ch]">
          <div className="flex items-end gap-3">
            <h2 className="font-semibold text-[50px] 2xl:text-[100px] leading-12.5 2xl:leading-24">
              Driving Demand & Discovery
              <span className="inline-block align-bottom ml-2 shrink-0 w-12 h-12 lg:w-12 lg:h-12 2xl:w-20 2xl:h-20 rounded-xl overflow-hidden relative">
                <Image
                  src="/image/About/about-section-2.webp"
                  alt="women with pointing sign"
                  fill
                  quality={90}
                  className="object-cover"
                />
              </span>
            </h2>
          </div>
        </div>

        {/* p — middle on mobile | left col, spans both rows on md */}
        <div className="order-2 md:col-start-1 md:row-start-1 md:row-span-2">
          <p className="font-medium text-lg  leading-5.75 text-foreground md:text-lg max-w-[35ch] 2xl:text-3xl 2xl:leading-7">
            A global team of search-first content marketers engineering semantic
            relevancy & category signals for both the internet and people
          </p>
        </div>

        {/* buttons — bottom on mobile | right col, row 2 on md */}
        <div className="order-3 md:col-start-2 md:row-start-2 flex gap-5 my-2 lg:my-6">
          <Button classStyle="font-medium px-3 py-2" href="#">
            Our Story <MoveUpRight size={16} />
          </Button>
          <Button classStyle="font-medium px-3 py-2 bg-transparent" href="#">
            Our Services <MoveUpRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
