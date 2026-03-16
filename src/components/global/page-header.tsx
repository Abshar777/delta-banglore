import React from "react";

const PageHeader = ({
  description1,
  description2,
  firstTitle,
  secondTitle,
  maskTitle,
}: {
  description1: string;
  description2: string;
  firstTitle: string;
  secondTitle: string;
  maskTitle: string;
}) => {
  return (
    <div
      id="page-header"
      className="ph-full ph-full-m ph-cap-xxxxlg ph-center ph-image-parallax ph-caption-parallax"
    >
      {/* Page header image (commented out) */}
      {/*
      <div className="ph-image ph-image-cover-1">
        <div className="ph-image-inner">
          <img src="assets/img/page-header/ph-1.jpg" alt="Image" />
        </div>
      </div>
      */}

      {/* Page header video (commented out) */}
      {/*
      <div className="ph-video ph-video-cover-1">
        <div className="ph-video-inner">
          <video loop muted autoPlay playsInline preload="metadata" poster="assets/vids/1920/video-1-1920.jpg">
            <source src="assets/vids/placeholder.mp4" data-src="assets/vids/1920/video-1-1920.mp4" type="video/mp4" />
            <source src="assets/vids/placeholder.webm" data-src="assets/vids/1920/video-1-1920.webm" type="video/webm" />
          </video>
        </div>
      </div>
      */}

      <div className="page-header-inner tt-wrap">
        <div className="ph-caption">
          <div className="ph-caption-inner">
            <h2 className="ph-caption-subtitle">{firstTitle}</h2>
            <h1 className="ph-caption-title">{secondTitle}</h1>
            <div className="ph-caption-description max-width-700">
              {description1}
              <br /> {description2}
            </div>
          </div>
        </div>
      </div>

      <div className="page-header-inner ph-mask">
        <div className="ph-mask-inner tt-wrap">
          <div className="ph-caption">
            <div className="ph-caption-inner">
              <h2 className="ph-caption-subtitle">{firstTitle}</h2>
              <h1 className="ph-caption-title">{maskTitle}</h1>
              <div className="ph-caption-description max-width-700">
                {description1}
                <br /> {description2}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ph-social">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61577236858579"
              className="tt-magnetic-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/elegant.academy_?igsh=aDJ2NGRwOGE3ZXJm"
              className="tt-magnetic-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/918951639214" // example: https://wa.me/1234567890
              className="tt-magnetic-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/elegant-trading-academy/posts/?feedView=all" // example: https://wa.me/1234567890
              className="tt-magnetic-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="tel:+919187236407" className="tt-magnetic-item">
              <i className="fa-solid fa-phone"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="tt-scroll-down">
        <a
          href="#tt-page-content"
          className="tt-scroll-down-inner tt-magnetic-item"
          data-offset="0"
        >
          <div className="tt-scrd-icon"></div>
          <svg viewBox="0 0 500 500">
            <defs>
              <path
                d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                id="textcircle"
              />
            </defs>
            <text dy="30">
              <textPath xlinkHref="#textcircle">
                Scroll to Explore - Scroll to Explore -
              </textPath>
            </text>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PageHeader;
