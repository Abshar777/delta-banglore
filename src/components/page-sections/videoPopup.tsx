"use client";
import React from "react";

const VideoPopup = () => {
  return (
    <div style={{
      padding:"1rem"
    }} className="tt-section no-padding-top">
      <div className="tt-section-inner">
        {/* Begin Clipper */}
        <div className="tt-clipper">
          <a
            href="./v1.mp4"
            className="tt-clipper-inner"
            data-cursor="Play<br>Reel"
            data-fancybox
            data-caption="My awesome showreel. :)"
          >
            {/* Clipper background (video) */}
            <div className="tt-clipper-bg">
              <video
                loop
                muted
                autoPlay
                playsInline
                preload="metadata"
                // poster="/img/p2.png"
                src={"/v1.mp4"}
              >
            
              </video>
            </div>

           
          </a>
        </div>
        {/* End Clipper */}
      </div>
    </div>
  );
};

export default VideoPopup;
