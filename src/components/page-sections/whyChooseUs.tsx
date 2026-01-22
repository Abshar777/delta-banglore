"use client";

import Link from "next/link";

const WhyChoosUs = () => {
  return (
    <div className="tt-section padding-top-xlg-140 padding-bottom-xlg-120">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-row">
          <div className="tt-col-lg-4">
            {/* Begin tt-Heading */}
            <div className="tt-heading tt-heading-xlg">
              {/* <h3 className="tt-heading-subtitle tt-text-reveal">Featured</h3> */}
              <h2 className="tt-heading-title tt-text-reveal">Who We Are</h2>
            </div>
            {/* End tt-Heading */}

            <div className="tt-text-uppercase margin-top-30 tt-text-reveal">
              Your Trusted Partner in Trading Success
            </div>
            <img src="/g4.jpg" style={{width:"100%" , borderRadius:"15px",marginTop:"1rem"}} alt="" className="" />
          </div>

          <div className="tt-col-lg-1 padding-top-30"></div>

          <div className="tt-col-lg-7 tt-align-self-center">
            <div className="text-xxlg font-500 tt-text-reveal">
            At <b>Delta International Institute </b>, trading is more than numbers on a screen it’s a life-changing skill. Founded by seasoned traders and educators, Delta has become a global hub for Forex, Crypto, and advanced market education
            Delta International Institute builds careers, not just knowledge.
            </div>

            <Link
              href="/contact"
              className="tt-btn tt-btn-outline margin-top-40 tt-magnetic-item tt-anim-fadeinup"
            >
              <span data-hover="Enroll Now">Enroll Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosUs;
