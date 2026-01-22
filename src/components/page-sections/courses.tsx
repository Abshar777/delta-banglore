import React from "react";

const services = [
  {
    title: "TRADING FOUNDATION PROGRAM",


    content: [
      "• GATEWAY TO GLOBAL MARKETS",
      "• MASTERING THE META TRADER",
      "• CHARTING THE MARKETS",
      "• CANDLE + VOLUME DECODED",
      "• RETAIL PSYCHOLOGY & MARKET MAPPING",
      "• PRICE PATTERNS & TRADE EXECUTION",
      "• SMART MONEYTRADE EXECUTION",
    ],
  },
  {
    title: "LIQUIDITY FLOW MASTER CLASS",

    content: [
      "• INSIDE THE MIND OF SMART MONEY",
      "• LIQUIDITY MAPS & MARKET GAPS",
      "• PRECISION TOOLS OF SMART MONEY",
      "• DIVERGENCE, PREMIUM & DISCOUNT ZONES",
      "• AMD BLUEPRINT – THE OPTIMAL TRADE SETUP",
    ],
  },

  {
    title: "CENTRAL BANK AND HARMONICS CODE MASTERCLASS",
    content: [
      "• RIDING THE WAVE MASTERING MARKET MOMENTUM",
      "• THE ART OF MARKET REVERSAL",
      "• ADVANCED PRICE STRUCTURE MAPPING",
      "• STRATEGIC TRADING WITH HRLR & LRLR",
      "• MACRO MASTERY – COT & BONDS UNCOVERED STRUCTURE MAPPING",
      "• THE INVESTOR'S EDGE",
    ],
  },
  {
    title: "FUND MANAGER PROGRAM",

    content: [
      "• RIDING THE WAVE MASTERING MARKET MOMENTUM",
      "• THE ART OF MARKET REVERSAL",
      "• ADVANCED PRICE STRUCTURE MAPPING",
      "• STRATEGIC TRADING WITH HRLR & LRLR",
      "• MACRO MASTERY – COT & BONDS UNCOVEREDSTRUCTURE MAPPING",
      "• THE INVESTOR'S EDGE",
    ],
  },
 
];

const CourseSection: React.FC = () => {
  return (
    <div style={{
      padding:"1rem 2rem"
    }} className="tt-section ">
      <div className="tt-section-inner mdpx-4rem tt-wrap max-width-1500">
        <div className="tt-row">
          <div className="tt-col-xl-3 margin-bottom-60">
            <div className="tt-heading tt-heading-xxlg">
              <h3 className="tt-heading-subtitle tt-text-reveal">
                Learn. Grow. Excel.
              </h3>
              <h2 className="tt-heading-title tt-text-reveal">Courses</h2>
            </div>
            <div className="tt-text-uppercase max-width-400 margin-bottom-20 text-pretty tt-text-reveal">
              Unlock your potential with expert-led courses to boost your skills
              and career.
            </div>
          </div>

          <div className="tt-col-xl-2"></div>

          <div className="tt-col-xl-7 tt-align-self-end">
            <div className="tt-accordion tt-ac-lg tt-ac-hover tt-ac-counter tt-ac-borders">
              {services.map((service, index) => (
                <div className="tt-accordion-item tt-anim-fadeinup" key={index}>
                  <div className="tt-accordion-heading">
                    <div className="tt-ac-head cursor-alter">
                      <div className="tt-ac-head-inner">
                        <h4 className="tt-ac-head-title capitalize">
                          {service.title}
                        </h4>
                      </div>
                    </div>
                    <div className="tt-accordion-caret">
                      <div className="tt-accordion-caret-inner tt-magnetic-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="tt-accordion-content max-width-1400">
                    <div className="grid grid-cols-1 ">
                      {service.content.map((para, i) => (
                        <p key={i} className="text-nowrap">
                          {para}
                        </p>
                      ))}
                    </div>
                    <a
                      href="/contact"
                      className="tt-btn tt-btn-outline tt-magnetic-item"
                    >
                      <span data-hover="Let’s Connect!">Let’s Connect!</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
