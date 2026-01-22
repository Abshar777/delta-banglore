"use client";

const ProjectsSection = () => {
  return (
    <div className="tt-section padding-top-xlg-140 border-top">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-row">
          <div className="tt-col-xl-8">
            {/* Begin tt-Heading */}
            <div className="tt-heading tt-heading-xxxlg">
              <h3 className="tt-heading-subtitle tt-text-reveal">
                Explore Our Services
              </h3>
              <h2 className="tt-heading-title tt-text-reveal">Services</h2>
            </div>
            {/* End tt-Heading */}

            <div className="tt-text-uppercase max-width-400 margin-left-xlg-10-p text-pretty tt-text-reveal">
              Trusted by Over 7,000 Traders and Financial Clients Worldwide
            </div>
          </div>

          <div className="tt-col-xl-4 tt-align-self-end margin-top-30">
            {/* Begin big round button */}
            <div className="tt-big-round-ptn tt-anim-fadeinup">
              <a
                href="portfolio-preview.html"
                className="tt-big-round-ptn-holder tt-magnetic-item"
              >
                <div className="tt-big-round-ptn-inner">
                  7,000+
                  <br /> Traders and Financial Clients
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

export default ProjectsSection;
