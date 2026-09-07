import React from "react";
import Logo from "./Logo";
import { ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa6";

const SOCIALS = [
  { label: "Facebook", Icon: FaFacebookF },
  { label: "X (Twitter)", Icon: FaXTwitter },
  { label: "LinkedIn", Icon: FaLinkedinIn },
  { label: "YouTube", Icon: FaYoutube },
  { label: "TikTok", Icon: FaTiktok },
  { label: "Instagram", Icon: FaInstagram },
];

const LINK_COLUMNS = [
  ["Services", "Work", "About", "Culture", "Meet The Risers"],
  ["Testimonials", "Blog & Resources", "Webinars", "Careers"],
  ["Manchester", "London", "New York", "Contact"],
];

const LEGAL_LINKS = ["Privacy Policy", "Terms & conditions"];

const Dot = () => (
  <span className="text-neutral-500" aria-hidden="true">
    &bull;
  </span>
);

const Footer = () => {
  return (
    <footer className="px-2 pb-2" aria-label="Site footer">
      <div className="bg-[#111] rounded-3xl text-white p-6 md:p-10 overflow-hidden">
        {/* Top: newsletter + link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">
          {/* Newsletter */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-none">
              Stay updated with Rise news
            </h3>

            <form
              className="mt-6 flex items-center bg-[#2E2E2E] rounded-full p-1.5 pl-6 max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="flex-1 min-w-0 bg-transparent outline-none text-lg font-medium placeholder:text-neutral-400"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="w-11 h-11 shrink-0 rounded-full bg-[#AAF0D1] text-black flex items-center justify-center cursor-pointer transition-transform duration-200 hover:rotate-45"
              >
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </button>
            </form>

            {/* Socials */}
            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center gap-1.5 border border-white/70 rounded-full px-2.5 py-1.5 transition-colors duration-200 hover:bg-white hover:text-black"
                >
                  <Icon size={13} />
                  <ArrowUpRight size={10} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {LINK_COLUMNS.map((column, colIdx) => (
              <ul
                key={colIdx}
                className="space-y-3 sm:border-l sm:border-white/25 sm:pl-8"
              >
                {column.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xl md:text-2xl font-medium tracking-tight leading-none transition-colors duration-200 hover:text-[#AAF0D1]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="mt-16 md:mt-24 lg:mt-32 w-full aspect-[168/21] text-white">
          <Logo />
        </div>

        {/* Bottom bar */}
        <div className="mt-6 md:mt-8 flex flex-col lg:flex-row lg:items-center gap-3 text-xs md:text-sm text-neutral-300">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>&copy; 2026 Rise at Seven Ltd. All rights reserved</span>
            <Dot />
            <span>Company Number 11955187</span>
            <Dot />
            <span>VAT Registered GB 322402945</span>
            <Dot />
            {LEGAL_LINKS.map((link, idx) => (
              <React.Fragment key={link}>
                {idx > 0 && <Dot />}
                <a href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              </React.Fragment>
            ))}
          </div>
          <div className="lg:ml-auto shrink-0">
            Website{" "}
            <a
              href="#"
              className="text-white hover:text-[#AAF0D1] transition-colors"
            >
              MadeByShape
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

