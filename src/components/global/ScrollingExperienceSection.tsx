"use client";

const ScrollingExperienceSection = () => {
  return (
    <div className="tt-section no-padding padding-top-xlg-40 padding-bottom-xlg-40">
      <div className="tt-section-inner">
        {/* Begin crossed scrolling text */}
        <div className="tt-scrolling-text-crossed">
          <div className="tt-scrolling-text-crossed-inner">
            {/* Scrolling text 1 */}
            <div
              className="tt-scrolling-text scrt-dyn-separator scrt-color-reverse"
              data-scroll-speed="7"
              data-change-direction="true"
              data-opposite-direction="true"
            >
              <div className="tt-scrt-inner">
                <div className="tt-scrt-content">
                  Succeed with Delta
                  <span className="tt-scrt-separator">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Scrolling text 2 */}
            <div
              className="tt-scrolling-text scrt-dyn-separator"
              data-scroll-speed="7"
              data-change-direction="true"
            >
              <div className="tt-scrt-inner">
                <div className="tt-scrt-content">
                  Grow Your Portfolio, and Trade with Confidence.
                  <span className="tt-scrt-separator">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End crossed scrolling text */}
      </div>
    </div>
  );
};

export default ScrollingExperienceSection;
