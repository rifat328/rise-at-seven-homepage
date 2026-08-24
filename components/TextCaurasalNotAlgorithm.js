"use client";
import React, { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const MarqueeSet = () => (
  <div className="flex items-center gap-8 shrink-0 px-4 whitespace-nowrap">
    <span className="inline-block align-bottom mx-1 shrink-0 w-14 h-14 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32 rounded-xl overflow-hidden relative translate-y-[-10%]">
      <Image
        src="/image/OurServices/ourServices-1.webp"
        alt="team context"
        fill
        quality={90}
        className="object-cover"
      />
    </span>
    <span className="text-8xl 2xl:text-9xl font-medium">Chasing Consumers</span>
    <span className="inline-block align-bottom mx-1 shrink-0 w-14 h-14 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32 rounded-xl overflow-hidden relative translate-y-[-10%]">
      <Image
        src="/image/OurServices/ourServices-1.webp"
        alt="team context"
        fill
        quality={90}
        className="object-cover"
      />
    </span>
    <span className="text-8xl 2xl:text-9xl font-medium">Not Algorithms</span>
  </div>
);

const SPEED_PX_PER_SEC = 80;

const TextCaurasalNotAlgorithm = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const setRef = useRef(null);
  const [copies, setCopies] = useState(2);
  const [setWidth, setSetWidth] = useState(0);

  useLayoutEffect(() => {
    if (!containerRef.current || !setRef.current) return;

    const recalc = () => {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const width = setRef.current.getBoundingClientRect().width;
      if (!width) return;
      const needed = Math.ceil((containerWidth * 2) / width) + 1;
      setCopies((prev) => (prev !== needed ? needed : prev));
      setSetWidth((prev) => (prev !== width ? width : prev));
    };

    recalc();
    // ResizeObserver
    const ro = new ResizeObserver(recalc);
    ro.observe(setRef.current);
    ro.observe(containerRef.current);

    document.fonts?.ready.then(recalc); // extra nudge once web fonts finish

    return () => ro.disconnect();
  }, []);

  useGSAP(
    () => {
      if (!setWidth) return;

      const tween = gsap.to(trackRef.current, {
        x: -setWidth, // absolute, not relative — always derived from the latest measurement
        duration: setWidth / SPEED_PX_PER_SEC,
        ease: "none",
        repeat: -1,
      });

      return () => tween.kill();
    },
    { scope: containerRef, dependencies: [setWidth] }, // reruns whenever the real width changes
  );

  return (
    <div ref={containerRef} className="overflow-hidden  w-full">
      <div ref={trackRef} className="flex w-max py-3">
        {Array.from({ length: copies }).map((_, i) => (
          <div key={i} ref={i === 0 ? setRef : null} className="flex shrink-0 ">
            <MarqueeSet />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextCaurasalNotAlgorithm;
//kdsjhfak sdjflkasdjf sdlafjalsdk sdalfjal;sk jlkasjdflka
