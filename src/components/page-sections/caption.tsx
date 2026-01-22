import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";

const Caption = () => {
  return (
    <div
      className="tt-scrolling-text scrt-color-reverse"
      data-scroll-speed="10"
      data-change-direction="true"
      data-opposite-direction="true"
    >
      <div className="tt-scrt-inner">
        <div className="tt-scrt-content">
          Free Entry for the First 49 Joinees
          <span className="tt-scrt-separator">
        <BiSolidOffer  />
          </span>
         Free Entry for the First 49 Joinees
          <span className="tt-scrt-separator">
          <BiSolidOffer />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Caption;
