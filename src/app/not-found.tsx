"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div id="tt-page-content">
     
      <div className="tt-section no-padding">
        <div className="tt-section-inner tt-wrap">
          <div className="tt-404-error">
            <h2 className="tt-404-error-subtitle">404 Error</h2>
            <h1 className="tt-404-error-title">Oops!</h1>
            <div className="tt-404-error-description">
              Something went wrong.
              <br /> This page could not be found.
            </div>
            <Link
              href="/"
              className="tt-btn tt-btn-secondary margin-top-40 tt-magnetic-item"
            >
              <span data-hover="Home Page">Home Page</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
