"use client";
import { benfits } from "@/const/benfits";
import React from "react";

const Benifits = () => {
  return (
    <div className="tt-section">
      <div className="tt-section-inner">
        <div className="tt-horizontal-accordion tt-hac-alter-hover tt-anim-fadeinup">
          {benfits.map((item, index) => (
            <div key={index} className="tt-hac-item cursor-alter">
              <div className="tt-hac-item-count"></div>
              <div className="tt-hac-item-inner">
                <div className="tt-hac-item-content">
                  <div className="tt-haci-content-top">
                    <h2
                      className="tt-haci-title"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <div className="tt-haci-description">
                      {item.description}
                    </div>
                  </div>
                  <div className="tt-haci-content-bottom">
                    <a
                      href="/contact"
                      className="tt-btn tt-btn-outline tt-magnetic-item"
                    >
                      <span data-hover="Enroll Now">Enroll Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benifits;
