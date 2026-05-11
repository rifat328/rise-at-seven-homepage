import React from "react";
import Image from "next/image";
import Button from "./Button";
import { MoveUpRight } from "lucide-react";
const About = () => {
  return (
    <section aria-label="About">
      <div className="left-side-text">
        <p>
          A global team of search-first content marketers engineering semantic
          relevancy & category signals for both the internet and people
        </p>
      </div>
      <div className="right-side-text">
        <div className="content">
          <h2>Driving Demand & Discovery</h2>
          {/* <Image /> */}
        </div>
        <div className="call-to-action">
          <Button classStyle="" href="#">
            Our Story{<MoveUpRight size={16} />}
          </Button>
          <Button classStyle="bg-transparent" href="#">
            Our Services{<MoveUpRight size={16} />}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
