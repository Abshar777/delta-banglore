"use client";
import React from "react";

interface Award {
  title: string;
  description: string;
  count: string;
  link: string;
}

const awards: Award[] = [
  {
    title: "7,000+ Successful Traders Trained",
    description:
      "Over 7,000 traders trained with proven strategies that deliver real-world results.",
    count: "",
    link: "",
  },
  {
    title: "One-to-One Mentorship & Practical Learning",
    description:
      "Get personal mentorship and hands-on training from expert traders.",
    count: "",
    link: "",
  },
  {
    title: "Real-Time Market Practice",
    description:
      "Practice live trading in real market conditions to build confidence and skill.",
    count: "",
    link: "",
  },
  {
    title: "Affordable, Flexible & Community-Driven",
    description:
      "Accessible pricing, flexible schedules, and a supportive trading community.",
    count: "",
    link: "",
  },
];

const AwardsList: React.FC = () => {
  return (
    <div className="tt-section">
      <div className="tt-section-inner">
        <div className="tt-avards-list">
          {awards.map((award, index) => (
            <a
              key={index}
              href={award.link}
              className="tt-avlist-item cursor-alter tt-anim-fadeinup"
              target="_blank"
              rel="nofollow"
            >
              <div className="tt-avlist-item-inner">
                <div className="tt-avlist-col tt-avlist-col-count">
                  <div className="tt-avlist-count">{index + 1}</div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-title">
                  <h4 className="tt-avlist-title">{award.title}</h4>
                </div>
                <div className="tt-avlist-col tt-avlist-col-description">
                  <div className="tt-avlist-description">
                    {award.description}
                  </div>
                </div>
                <div className="tt-avlist-col tt-avlist-col-info">
                  <div className="tt-avlist-info">{award.count}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsList;
