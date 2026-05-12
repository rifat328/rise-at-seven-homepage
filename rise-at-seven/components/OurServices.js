import React from "react";

import Image from "next/image";
const OurServices = () => {
  const services = [
    {
      title: "Web Design",
      description: "Modern and responsive interfaces built for conversion.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Web Development",
      description: "Fast, scalable, and clean code for your business.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "SEO Optimization",
      description: "Improve visibility and bring more organic traffic.",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Brand Identity",
      description: "Build a strong and memorable digital presence.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="w-full px-4 py-10 md:px-6 lg:px-10">
      {/* Changed parent to simple flex-col to keep them stacked */}
      <div className="flex flex-col gap-10 text-left mt-4 mb-5 mx-2">
        {/* Header - Spans full width now */}
        <div className="w-full">
          <div className="flex items-end gap-3">
            <h2 className="font-semibold text-6xl md:text-7xl 2xl:text-[100px] leading-tight 2xl:leading-24 p-2">
              Our
              <span className="inline-block align-bottom mx-4 shrink-0 w-12 h-12 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 rounded-xl overflow-hidden relative translate-y-[-10%]">
                <Image
                  src="/image/About/about-section-2.webp"
                  alt="women with pointing sign"
                  fill
                  quality={90}
                  className="object-cover"
                />
              </span>
              Services
            </h2>
          </div>
        </div>

        {/* Services Grid - This inner div handles the 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-10">
          {services.map((service, index) => (
            <article
              key={index}
              className=" relative overflow-hidden rounded-full p-8 ransition-all duration-200"
            >
              {/* Desktop hover background image */}
              <div
                className="pointer-events-none absolute inset-0 hidden bg-cover bg-center opacity-0 transition duration-500 group-hover:opacity-100 lg:block"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="pointer-events-none absolute inset-0 hidden bg-black/20 transition duration-500 group-hover:bg-black/60 lg:block" />

              <div className="relative z-10 flex justify-center md:flex-row items-start gap-6">
                {/* Mobile/Tablet image box */}
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl  lg:hidden ">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1 ">
                  <h3 className="text-2xl font-bold ">{service.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
