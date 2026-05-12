"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/utils/navItems";
import FeaturedWorkCard from "./FeaturedWorkCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function FeaturedWork() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const titleRefs = useRef([]);

  useGSAP(
    () => {
      const titles = titleRefs.current;

      const totalScroll = projects.length * 1000; //window.innerHeight

      gsap.set(titles, {
        opacity: 0.15,
        y: 0,
        x: 0,
      });

      gsap.set(titles[0], {
        opacity: 1,
        y: 0,
        x: 18,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 24px",
          end: `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          // anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(trackRef.current, {
        // y: () => -(trackRef.current.scrollHeight - window.innerHeight),
        y: () => {
          const trackHeight = trackRef.current.scrollHeight;
          const parentHeight = trackRef.current.parentElement.offsetHeight;
          return -(trackHeight - parentHeight);
        },
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 24px",
        end: `+=${totalScroll}`,
        scrub: 1,

        onUpdate: (self) => {
          const active = Math.min(
            projects.length - 1,
            Math.floor(self.progress * projects.length),
          );

          titles.forEach((title, i) => {
            const isActive = i === active;

            gsap.to(title, {
              opacity: isActive ? 1 : 0.15,

              x: isActive ? 18 : 0,
              ease: "power2.out",
              duration: 0.3,
              overwrite: true,
            });
          });
        },
      });

      ScrollTrigger.refresh();
    },
    {
      scope: sectionRef,
      dependencies: [],
    },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white rounded-[32px] overflow-hidden w-[95%] 2xl:w-[98%] h-[calc(100vh-48px)]  mx-auto my-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* LEFT TEXT */}
        <div className="hidden lg:flex h-screen items-center px-14">
          <div className="w-full">
            <p className="text-xl font-medium mb-50">Featured Work</p>

            <div className="">
              {projects.map((project, i) => (
                <h2
                  key={i}
                  ref={(el) => (titleRefs.current[i] = el)}
                  className="lg:text-6xl 2xl:text-6xl leading-none font-medium tracking-[-4px]"
                >
                  {project.title}
                </h2>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div
          className="relative h-screen overflow-hidden px-6"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div ref={trackRef} className="flex flex-col gap-10 py-[10vh]">
            {projects.map((project, i) => (
              <FeaturedWorkCard key={i} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
