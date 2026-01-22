"use client";
import React, { useEffect, useState } from "react";
// import  "@/../public/assets/vendor/fontawesome/css/all.min.css";
// import "@/../public/assets/vendor/fancybox/css/fancybox.css";
// import "@/../public/assets/vendor/swiper/css/swiper-bundle.min.css";
// import "@/../public/assets/css/helper.css";
// import "@/../public/assets/css/theme.css";
// import "@/../public/assets/css/theme-light.css";

const Heade = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      ></meta>

      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com/"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&amp;display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&amp;display=swap"
        rel="stylesheet"
      />
      {/* <link rel="stylesheet" href="/assets/vendor/fontawesome/css/all.min.css"/>  */}
		<link rel="stylesheet" href="/assets/vendor/fancybox/css/fancybox.css"/> 
		<link rel="stylesheet" href="/assets/vendor/swiper/css/swiper-bundle.min.css"/> 

		
		<link rel="stylesheet" href="/assets/css/helper.css"/>
		<link rel="stylesheet" href="/assets/css/theme.css"/>

		
		<link rel="stylesheet" href="/assets/css/theme-light.css"/>
     
    </head>
  );
};

export default Heade;
