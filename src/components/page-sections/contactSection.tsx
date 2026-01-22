"use client";

import React from "react";

const ContactSection = () => {
  return (
    <div className="tt-section padding-top-xlg-120 padding-bottom-xlg-120">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-row margin-bottom-40">
          <div className="tt-col-xl-8">
            {/* Begin tt-Heading */}
            <div className="tt-heading tt-heading-xxxlg no-margin">
              <h3 className="tt-heading-subtitle tt-text-reveal">Contact</h3>
              <h2 className="tt-heading-title tt-text-reveal">
                Ready to
                <br /> Start Trading?
              </h2>
            </div>
            {/* End tt-Heading */}
          </div>

          <div className="tt-col-xl-4 tt-align-self-end tt-xl-column-reverse margin-top-40">
            <div className="max-width-600 margin-bottom-10 tt-text-uppercase text-pretty tt-text-reveal">
              Got questions about the markets or our programs?
              <br /> Reach out to us and let's elevate your trading journey
              together!
            </div>

            {/* Begin big round button */}
            <div className="tt-big-round-ptn margin-top-30 margin-bottom-xlg-80 tt-anim-fadeinup">
              <a
                href="/contact"
                className="tt-big-round-ptn-holder tt-magnetic-item"
              >
                <div className="tt-big-round-ptn-inner">
                  Join
                  <br /> Now!
                </div>
              </a>
            </div>
            {/* End big round button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
