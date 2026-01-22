"use client";
const Features = () => {
  return (
    <div className="tt-section no-padding-bottom padding-bottom-xlg-80">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-row">
          <div className="tt-col-xl-8">
            {/* Begin tt-Heading */}
            <div className="tt-heading tt-heading-xxxlg">
              <h3 className="tt-heading-subtitle tt-text-reveal">
                Key Benefits
              </h3>
              <h2 className="tt-heading-title tt-text-reveal">Benefits</h2>
            </div>
            {/* End tt-Heading */}

            <div className="tt-text-uppercase max-width-400 margin-left-xlg-10-p text-pretty tt-text-reveal">
              Boost Your Trading Success & Profits with Proven Strategies
            </div>
          </div>{" "}
          {/* /.tt-col */}
          <div className="tt-col-xl-4 tt-align-self-end margin-top-40">
            {/* Begin big arrow */}
            <div className="tt-big-arrow tt-ba-angle-bottom-left tt-anim-fadeinup">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
              </svg>
            </div>
            {/* End big arrow */}
          </div>{" "}
          {/* /.tt-col */}
        </div>{" "}
        {/* /.tt-row */}
      </div>{" "}
      {/* /.tt-section-inner */}
    </div>
  );
};

export default Features;
