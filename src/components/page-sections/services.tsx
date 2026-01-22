"use client";

import { projects } from "@/const/services";

const Services = () => {
  return (
    <div className="tt-section no-padding-top padding-top-xlg-80 padding-bottom-20 padding-bottom-xlg-80">
      <div className="tt-section-inner">
        <div className="tt-portfolio-preview-list tt-ppli-portrait tt-ppli-hover">
          <div className="tt-ppl-items-list">
            {/* Begin list item */}
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="pcli-item tt-anim-fadeinup"
                data-cursor="About Us"
              >
                <div className="pcli-item-inner">
                  <div className="pcli-col pcli-col-image">
                    <div className="pcli-image">
                      {/* <!-- Note: The recommended maximum image width is 800px --> */}
                      <img src={project.image} loading="lazy" alt="Image" />
                    </div>
                  </div>

                  <div className="pcli-col pcli-col-count">
                    <div className="pcli-count"></div>
                  </div>

                  <div className="pcli-col pcli-col-caption">
                    <div className="pcli-caption">
                      <h2 className="pcli-title">{project.title}</h2>
                      <div className="pcli-categories">
                        <div className="pcli-category">
                          {project.description}
                        </div>
                        {/* <div className="pcli-category">Varia</div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
            {/* End list item */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
