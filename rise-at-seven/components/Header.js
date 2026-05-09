"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import { CircleChevronDown, CircleChevronUp, MoveUpRight } from "lucide-react";
import { IoCloseOutline } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";
import ChevronIcon from "./ChevronIcon";
import Button from "@/components/Button";
import { NAV_ITEMS } from "@/utils/navItems";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- Mobile Accordion Sub-Component ---
const MobileAccordionItem = ({ item, isOpen, toggleOpen }) => {
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // GSAP handles animating to 'auto' height perfectly
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(iconRef.current, {
        rotation: 180,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.3,
        ease: "power3.inOut",
      });
      gsap.to(iconRef.current, {
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <div className="">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center text-3xl font-bold focus:outline-none"
      >
        <div className="flex items-center font-medium text-4xl md:text-5xl text-background leading-none">
          {item.label}
          {item.badge && (
            <span className="hidden lg:block bg-emerald-400 text-black text-xs font-bold px-2 py-1 rounded-full relative -top-2">
              {item.badge}
            </span>
          )}
        </div>
        {item.sub && (
          <div ref={iconRef}>
            <CircleChevronDown
              strokeWidth={1}
              className="w-6 h-6 md:w-7 md:h-7 text-background"
            />
          </div>
        )}
      </button>

      {/* Accordion Content Container */}
      <div ref={contentRef} className="overflow-hidden h-0">
        {item.sub && (
          <div className="flex flex-col  mt-4 mb-2">
            {item.sub.map((subLink, idx) => (
              <a
                key={idx}
                href="#"
                className="text-xl font-medium text-background   "
              >
                {subLink}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main Header Component ---
const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openMobileKey, setOpenMobileKey] = useState(null); // Tracks which accordion is open
  const headerRef = useRef(null);
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setOpenMobileKey(null); // Reset accordions when closing menu
    }
  }, [isMobileOpen]);

  // Animations for header visibility
  useGSAP(
    () => {
      // show/hide animation
      const showAnim = gsap
        .from(headerRef.current, {
          yPercent: -150, // Moves it way off screen
          paused: true,
          duration: 0.3,
          ease: "power2.out",
        })
        .progress(1); // Set it to "shown" state immediately

      gsap.set(headerRef.current, { top: "55px" });
      // 2. INITIAL POSITION (Prevent overlap on page load)
      // h-14 is 56px. We set the header to start at 70px to clear the banner

      // ScrollTrigger to toggle that animation
      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          // A. Show/Hide Logic (always works on all sections)
          if (self.direction === 1) {
            showAnim.reverse();
          } else {
            showAnim.play();
          }

          // B. Dynamic Top Position (The Banner Fix)
          const scrollAmount = self.scroll();
          const BANNER_PIXELS = 56; // This is the actual pixel height of h-14

          if (scrollAmount <= BANNER_PIXELS) {
            // We are still seeing the banner: stay pushed down
            gsap.to(headerRef.current, {
              top: "55px",
              duration: 0.2,
              overwrite: "auto",
            });
          } else {
            // We scrolled past the banner: float at the top
            gsap.to(headerRef.current, {
              top: "16px", // equivalent to 1rem
              duration: 0.2,
              overwrite: "auto",
            });
          }
        },
      });
    },
    { scope: headerRef },
  );

  const activeDesktopData = NAV_ITEMS.find(
    (item) => item.key === activeDropdown,
  );

  return (
    <>
      {/* 1. Global Blur Overlay (Appears on Desktop Hover) */}
      {activeDropdown && !isMobileOpen && (
        <div className="fixed inset-0 z-30 backdrop-blur-lg  transition-all duration-300  border border-white/80 bg-transparent " />
      )}

      {/* 2. Main Header Bar */}
      <header
        ref={headerRef}
        className=" font-light fixed inset-x-0 mx-auto w-[98%] py-3 z-50 
             flex justify-between items-center p-2 px-6 rounded-full
             bg-white/5 backdrop-blur-md border border-white/10 shadow-lg 
             text-[#111212]  "
      >
        <div className="w-40 z-50 relative">
          <Logo />
        </div>

        {/* //! Desktop Nav - Hidden on Mobile */}
        <nav
          className="hidden lg:flex gap-8 items-center"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {NAV_ITEMS.map((item) => (
            <div key={item.key} className="relative">
              <button
                onMouseEnter={() => setActiveDropdown(item.key)}
                className="text-base font-medium flex items-center gap-2 leading-relaxed"
              >
                {item.label} {item.sub && "+"}
                {item.badge && (
                  <span className="bg-emerald-200 text-black text-[10px] px-1.5 py-0.5 rounded-full absolute -top-3 -right-4">
                    {item.badge}
                  </span>
                )}
              </button>
            </div>
          ))}

          {/* //! Desktop Mega Menu Dropdown */}
          {activeDesktopData && activeDesktopData.sub && (
            <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[900px] bg-white text-black p-8 rounded-2xl shadow-xl flex gap-12 cursor-default">
              {/* Left side: Links list */}
              <div className="flex-1">
                {activeDesktopData.dropdownLabel && (
                  <p className="text-gray-500 text-sm font-normal mb-2">
                    {activeDesktopData.dropdownLabel}
                  </p>
                )}

                <div className="grid grid-cols-2 gap-y-1 gap-x-2">
                  {activeDesktopData.sub.map((subLink, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="font-medium  text-[22px] leading-7"
                    >
                      {subLink}
                    </a>
                  ))}
                </div>
              </div>
              {/* Right side: Image block */}
              <div className="w-[300px] rounded-xl overflow-hidden relative">
                <img
                  src={activeDesktopData.imgSrc}
                  alt={activeDesktopData.imgAlt}
                  className="object-cover w-full h-full"
                />
                {activeDesktopData.ctaLabel && (
                  <button className="absolute bottom-4 left-4 bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
                    {activeDesktopData.ctaLabel} ↗
                  </button>
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Button only shows on Desktop here */}
        <div className="hidden lg:block">
          <Button
            href="#"
            classStyle=" font-medium py-2 px-4 flex items-center text-lg"
          >
            Get In Touch <MoveUpRight size={16} />
          </Button>
        </div>
        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden z-50 relative text-sm font-bold uppercase tracking-widest"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? (
            <IoCloseOutline size={28} className=" text-background" />
          ) : (
            <TbMenu size={28} />
          )}
        </button>
      </header>

      {/* 3. Mobile Full-Screen Menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 m-2 rounded-3xl bg-[#111]/90 text-background p-6 pt-3 flex flex-col overflow-y-auto backdrop-blur-md  ">
          <div className="upper-navigation flex  justify-between items-center w-full mb-11">
            <div className="sm:w-40 md:w-44">
              <Logo />
            </div>
            <button onClick={() => setIsMobileOpen((prev) => !prev)}>
              <IoCloseOutline className="w-7 h-7 md:w-10 md:h-10" />
            </button>
          </div>
          <div className="flex-1 flex flex-col mb-10">
            {NAV_ITEMS.map((item) =>
              item.sub ? (
                <MobileAccordionItem
                  key={item.key}
                  item={item}
                  isOpen={openMobileKey === item.key}
                  toggleOpen={() =>
                    setOpenMobileKey(
                      openMobileKey === item.key ? null : item.key,
                    )
                  }
                />
              ) : (
                <a
                  key={item.key}
                  href="#"
                  className="  text-4xl md:text-5xl font-medium leading-none flex items-center gap-3"
                >
                  {item.label}
                  {item.badge && !isMobileOpen && (
                    <span className="bg-emerald-400 text-black text-xs px-2 py-1 rounded-full relative -top-2">
                      {item.badge}
                    </span>
                  )}
                </a>
              ),
            )}
          </div>

          <button className="w-full py-2 mt-auto bg-background text-sub-navigation font-medium text-base rounded-full flex items-center justify-center gap-2">
            Get In Touch{" "}
            <span>
              <MoveUpRight
                strokeWidth={2}
                size={16}
                className="text-sub-navigation"
              />
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
