"use client";

"use client";
import React, { useEffect, useState } from "react";

const Preloader = () => {
  return (
    <div suppressHydrationWarning id="tt-page-transition">
      <div
        suppressHydrationWarning
        className="tt-ptr-overlay-top tt-noise"
      ></div>
      <div
        suppressHydrationWarning
        className="tt-ptr-overlay-bottom tt-noise"
      ></div>
      <div suppressHydrationWarning className="tt-ptr-preloader">
        <div suppressHydrationWarning className="tt-ptr-prel-content">
          <img src="/logo-min.png" className="tt-ptr-prel-image" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
