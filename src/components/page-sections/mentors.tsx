"use client"
import React from "react";
import Image from "next/image";
import m1 from "@/../public/mentors/1.png"
import m2 from "@/../public/mentors/2.png"

const Mentors = () => {

  const mentors = [
    {
      name: "Kiran kumar",
      image: m1
    },
    // {
    //   name :"Adarsh M krishnan",
    //   image:m2
    // }
  ]
  return (
    <>
      {/* Heading Section */}
      <div className="tt-section no-padding-bottom">
        <div className="tt-section-inner">
          <div className="tt-heading tt-heading-xxlg tt-heading-center">
            <h3 className="tt-heading-subtitle tt-text-reveal">
              <span style={{ backgroundSize: "200% 100%" }}>
                Mentors
              </span>
            </h3>
            <h2 className="tt-heading-title tt-text-reveal">
              <span style={{ backgroundSize: "200% 100%" }}>
                Collaboration at the
                <br />
                core of innovation
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Logo Wall Section */}
      <div className="tt-section">
        <div className="tt-section-inner tt-wrap">
          <ul className="tt-logo-wall tt-lw-col-2 tt-anim-fadeinup">
            {mentors.map((_, index) => (
              <li key={index}>
                <a
                  href=" "
                  className="tt-logo-wall-item cursor-alter"
                  target="_blank"
                  style={{ position: "relative" }}
                  rel="noopener noreferrer"
                >
                  <div className="tt-lv-item-inner">
                    <Image
                      src={_.image}
                      className="tt-lv-img-light"
                      loading="lazy"
                      width={500}
                      height={500}
                      alt="Client Logo"
                    />
                    <Image
                      src={_.image}
                      className="tt-lv-img-dark"
                      loading="lazy"
                      width={500}
                      height={500}
                      alt="Client Logo"
                    />
                  </div>
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "center",
                    zIndex: 1
                  }} className="absolute">
                    <h3 style={{ color: "white", zIndex: 999, }}>{_.name}</h3>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Mentors;
