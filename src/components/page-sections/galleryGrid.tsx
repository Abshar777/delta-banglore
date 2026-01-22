"use client"
  import React from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  link: string;
  imageSrc?: string;
  imageAlt?: string;
  isLight?: boolean;
  isVideo?: boolean;
  videoPoster?: string;
  videoMp4?: string;
  videoWebm?: string;
}

// Indoor cafeteria space
// Outdoor cafeteria space
// Entry way
// Common area
// Class room area
// Lobby
// Academy space
// Office building
// Pantry

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Indoor cafeteria space",
    category: "",
    link: "#",
    imageSrc: "/img/gallery/g1.jpg",
    imageAlt: "image",
  },
  {
    id: 2,
    title: "Outdoor cafeteria space",
    category: "",
    link: "#",
    imageSrc: "/img/gallery/g2.jpg",
    imageAlt: "image",
    // isLight: true,
  },
  {
    id: 3,
    title: "Entry way",
    category: "",
    link: "#",
    isVideo: false,
    imageSrc: "/img/gallery/g3.jpg",
    imageAlt: "image",
  },
  {
    id: 4,
    title: "Common area",
    category: "",
    link: "#",
    imageSrc: "/img/gallery/g4.jpg",
    imageAlt: "image",
  },
  {
    id: 5,
    title: "Class room area",
    category: "",
    link: "#",
    imageSrc: "/img/gallery/g5.jpg",
    imageAlt: "image",
  },
  {
    id: 6,
    title: "Lobby",
    category: "",
    link: "#",
    imageSrc: "/img/gallery/g6.jpg",
    imageAlt: "image",
  },
  {
    id: 7,
    title: "Academy space",
    category: "",
    link: "#",
    imageSrc: "/img/gallery/g7.jpg",
    imageAlt: "image",
  },
  {
    id: 8,
    title: "Office building",
    category: "",
    link: "#",
    imageSrc: "/img/gallery/g8.jpg",
    imageAlt: "image",
    
  },
  {
    id: 9,
    title: "Pantry",
    category: "",
    link: "#",
    imageSrc: "/img/gallery/g9.jpg",
    imageAlt: "image",
  },
  {
    id: 10,
    title: "Reception",
    category: "",
    link: "#",
    imageSrc: "/img/gallery/g10.jpg",
    imageAlt: "image",
  },
  {
    id: 10,
    title: "Class Room",
    category: "",
    link: "#",
    imageSrc: "/img/gallery/g11.jpg",
    imageAlt: "image",
  },
  {
    id: 11,
    title: "Traning Room",
    category: "",
    link: "#",
    imageSrc: "/img/gallery/g12.jpg",
    imageAlt: "image",
  },
  
];

const GalleryGrid: React.FC = () => {
  return (
    <div className="tt-section">
      <div className="tt-section-inner max-width-2200">
        <div id="portfolio-grid" className="pgi-hover pgi-cap-inside">
          <div className="tt-grid ttgr-layout-3 ttgr-gap-1 ttgr-not-cropped">
            <div className="tt-grid-top">
              <div className="tt-grid-categories">
                <div className="ttgr-cat-trigger-wrap">
                  {/* <div className="ttgr-cat-trigger-holder">
                    <a href="#portfolio-grid" className="ttgr-cat-trigger" data-offset="150">
                      <div className="ttgr-cat-text hide-cursor">
                        <span data-hover="Open">Filter</span>
                      </div>
                    </a>
                  </div> */}
                </div>

                <div className="ttgr-cat-nav">
                  <div className="ttgr-cat-close-btn">
                    Close <i className="fas fa-times"></i>
                  </div>
                  <div
                    className="ttgr-cat-list-holder cursor-close"
                    data-lenis-prevent
                  >
                    <div className="ttgr-cat-list-inner">
                      <div className="ttgr-cat-list-content">
                        <ul className="ttgr-cat-list hide-cursor">
                          <li className="ttgr-cat-item">
                            <a href="#" className="active">
                              All
                            </a>
                          </li>
                          <li className="ttgr-cat-item">
                            <a href="#" data-filter=".lifestyle">
                              Lifestyle
                            </a>
                          </li>
                          <li className="ttgr-cat-item">
                            <a href="#" data-filter=".artistic">
                              Artistic
                            </a>
                          </li>
                          <li className="ttgr-cat-item">
                            <a href="#" data-filter=".wellness">
                              Wellness
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tt-grid-items-wrap isotope-items-wrap">
              {portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className={`tt-grid-item isotope-item ${item.category}`}
                >
                  <div className="ttgr-item-inner">
                    <div
                      className={`portfolio-grid-item${
                        item.isLight ? " pgi-image-is-light" : ""
                      }`}
                    >
                      <a className="pgi-image-wrap" data-cursor="View<br>">
                        <div
                          className={`pgi-image-holder overflow-hidden  ${
                            !item.isLight ? " cover-opacity-2" : ""
                          }`}
                        >
                          <div className="pgi-image-inner tt-anim-zoomin">
                            {item.isVideo ? (
                              <figure className="pgi-video-wrap ttgr-height">
                                <video
                                  className="pgi-video"
                                  loop
                                  muted
                                  preload="metadata"
                                  poster={item.videoPoster}
                                >
                                  <source
                                    src="assets/vids/placeholder.mp4"
                                    data-src={item.videoMp4}
                                    type="video/mp4"
                                  />
                                  <source
                                    src="assets/vids/placeholder.webm"
                                    data-src={item.videoWebm}
                                    type="video/webm"
                                  />
                                </video>
                              </figure>
                            ) : (
                              <figure className="pgi-image ttgr-height">
                                <img
                                  src={item.imageSrc}
                                  loading="lazy"
                                  alt={item.imageAlt}
                                />
                              </figure>
                            )}
                          </div>
                        </div>
                      </a>

                      <div className="pgi-caption">
                        <div className="pgi-caption-inner">
                          <h2 className="pgi-title">
                            <a href={item.link}>{item.title}</a>
                          </h2>
                          <div className="pgi-categories-wrap">
                            <div className="pgi-category">
                              {item.category.charAt(0).toUpperCase() +
                                item.category.slice(1)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination section is commented out as in the original HTML */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
