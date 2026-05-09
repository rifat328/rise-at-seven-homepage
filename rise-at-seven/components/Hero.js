import React from "react";

const Hero = () => {
  return (
    <section
      aria-label="Hero section, top of the page"
      className="w-screen h-screen rounded-md p-2"
    >
      {/* hero content */}
      <div className="main">
        <p>#1 Most recommended content marketing agency</p>
        <div class="branding-icons">
          <img src="null" alt="" />
        </div>
        <div class="main-text-content">
          <span>W e C r e a t e C a t e g o r y</span>
          <img src="null" alt="" />
          <span>L e a d e r s</span>
          <p>on every searchable platform</p>
        </div>
      </div>
      {/* sub-detail-text */}
      <div className="sub-content flex justify-between">
        <p>
          Organic media planners creating, distributing & optimising
          <span>search-first</span> content for SEO, Social, PR, Ai and LLM
          search
        </p>
        <p>4 Global Offices serving UK, USA (New York) & EU</p>
      </div>
    </section>
  );
};

export default Hero;
