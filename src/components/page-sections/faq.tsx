"use client";
import { useState } from "react";
import { faqs } from "@/const/faqs";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="tt-section padding-top-xlg-120 padding-bottom-xlg-120">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-row">
          <div className="tt-col-lg-4">
            {/* Begin tt-Heading */}
            <div className="tt-heading tt-heading-xxxlg">
              <h3 className="tt-heading-subtitle tt-text-reveal">
                Frequently Asked Questions
              </h3>
              <h2 className="tt-heading-title tt-text-reveal">FAQ</h2>
            </div>
            {/* End tt-Heading */}

            <div className="tt-text-uppercase max-width-400 text-pretty tt-text-reveal">
              Everything you need to know before starting your trading journey
            </div>
          </div>{" "}
          {/* /.tt-col */}
          <div className="tt-col-lg-8 margin-top-60">
            <div className="faq-accordion">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className={`tt-accordion-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="tt-accordion-heading"
                    onClick={() => toggle(index)}
                  >
                    <div className="tt-ac-head">
                      <span className="faq-ac-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="tt-ac-head-inner">
                        <h3 className="tt-ac-head-title">{faq.question}</h3>
                      </div>
                      <div className="tt-accordion-caret">
                        <div className="tt-accordion-caret-inner">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="1em"
                            height="1em"
                          >
                            <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-ac-body">
                    <div>
                      <div className="tt-accordion-content is-open">
                        <p className="faq-ac-answer">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
          {/* /.tt-col */}
        </div>{" "}
        {/* /.tt-row */}
      </div>{" "}
      {/* /.tt-section-inner */}
    </div>
  );
};

export default Faq;
