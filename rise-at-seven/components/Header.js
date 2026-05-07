"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import { CircleChevronDown, CircleChevronUp } from "lucide-react";
import ChevronIcon from "./ChevronIcon";
gsap.registerPlugin(useGSAP);

const NAV_ITEMS = [
  {
    label: "Services",
    key: "services",
    sub: [
      "Search & Growth Strategy",
      "Digital PR",
      "Onsite SEO",
      "Social Media & Campaigns",
      "Content Experience",
      "Data & Insights",
      "B2B Marketing",
      "Social SEO/Search",
    ],
    dropdownLabel: "Core Services",
    ctaLabel: "View All Services",
    imgAlt: "The Rise Lounge",
    imgSrc: "/images/rise-lounge.jpg",
  },
  {
    label: "Industries",
    key: "industries",
    sub: ["B2B Marketing"],
    dropdownLabel: "Industries We Serve",
    ctaLabel: "View All Industries",
    imgAlt: "Industries",
    imgSrc: "/images/industries.jpg",
  },
  {
    label: "International",
    key: "international",
    sub: [
      "US Digital PR",
      "Spain Digital PR",
      "Germany Digital PR",
      "Netherlands Digital PR",
    ],
    dropdownLabel: "Global Reach",
    ctaLabel: "Go Global",
    imgAlt: "International",
    imgSrc: "/images/international.jpg",
  },
  {
    label: "About",
    key: "about",
    sub: ["About Us", "Meet The Risers", "Culture", "Testimonials"],
    dropdownLabel: "About Rise at Seven",
    ctaLabel: "Learn More",
    imgAlt: "The Team",
    imgSrc: "/images/team.jpg",
  },
  { label: "Work", key: "work", badge: "25" },
  { label: "Careers", key: "careers" },
  { label: "Blog & Resources", key: "blog" },
  { label: "Webinar", key: "webinar" },
];

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
    <div className="py-2">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center text-3xl font-bold focus:outline-none"
      >
        <div className="flex items-center">
          {item.label}
          {item.badge && (
            <span className="hidden lg:block bg-emerald-400 text-black text-xs font-bold px-2 py-1 rounded-full relative -top-2">
              {item.badge}
            </span>
          )}
        </div>
        {item.sub && (
          <div ref={iconRef}>
            <ChevronIcon className="w-5 h-5 text-gray-400" />
          </div>
        )}
      </button>

      {/* Accordion Content Container */}
      <div ref={contentRef} className="overflow-hidden h-0">
        {item.sub && (
          <div className="flex flex-col gap-4 mt-6 mb-2 pl-4 border-l border-gray-800">
            {item.sub.map((subLink, idx) => (
              <a key={idx} href="#" className="text-xl text-gray-400 ">
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setOpenMobileKey(null); // Reset accordions when closing menu
    }
  }, [isMobileOpen]);

  const activeDesktopData = NAV_ITEMS.find(
    (item) => item.key === activeDropdown,
  );

  return (
    <>
      {/* 1. Global Blur Overlay (Appears on Desktop Hover) */}
      {activeDropdown && !isMobileOpen && (
        <div className="fixed inset-0 z-30 backdrop-blur-md  transition-all duration-300 bg-white/90 border border-white/80 bg-transparent " />
      )}

      {/* 2. Main Header Bar */}
      <header
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] py-5  z-50 
  flex justify-between items-center p-2 px-6 rounded-full
      /* Glassmorphism Logic */
  bg-white/5 backdrop-blur-md 
  border border-white/10 shadow-lg 
   text-white transition-all duration-300 mix-blend-difference"
      >
        <div className="w-32 z-50 relative">
          <Logo />
        </div>

        {/* Desktop Nav - Hidden on Mobile */}
        <nav
          className="hidden md:flex gap-8 items-center"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {NAV_ITEMS.map((item) => (
            <div key={item.key} className="relative">
              <button
                onMouseEnter={() => setActiveDropdown(item.key)}
                className="hover:text-gray-300 font-medium flex items-center gap-1"
              >
                {item.label} {item.sub && "+"}
                {item.badge && (
                  <span className="bg-emerald-400 text-black text-[10px] px-1.5 py-0.5 rounded-full absolute -top-3 -right-4">
                    {item.badge}
                  </span>
                )}
              </button>
            </div>
          ))}

          {/* Desktop Mega Menu Dropdown */}
          {activeDesktopData && activeDesktopData.sub && (
            <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[900px] bg-white text-black p-8 rounded-2xl shadow-xl flex gap-12 cursor-default">
              {/* Left side: Links list */}
              <div className="flex-1">
                <p className="text-gray-500 text-sm font-semibold mb-6">
                  {activeDesktopData.dropdownLabel}
                </p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {activeDesktopData.sub.map((subLink, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="font-bold hover:text-gray-600 transition-colors"
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
                <button className="absolute bottom-4 left-4 bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
                  {activeDesktopData.ctaLabel} ↗
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden z-50 relative text-sm font-bold uppercase tracking-widest"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? "Close" : "Menu"}
        </button>
      </header>

      {/* 3. Mobile Full-Screen Menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#111] text-white p-6 pt-28 flex flex-col overflow-y-auto">
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
                  className="border-b border-gray-800 py-4 text-3xl font-bold flex items-center gap-3"
                >
                  {item.label}
                  {item.badge && (
                    <span className="bg-emerald-400 text-black text-xs px-2 py-1 rounded-full relative -top-2">
                      {item.badge}
                    </span>
                  )}
                </a>
              ),
            )}
          </div>

          <button className="mt-auto bg-white text-black py-4 rounded-full font-bold w-full text-lg">
            Get In Touch ↗
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
