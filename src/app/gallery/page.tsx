import PageHeader from "@/components/global/page-header";
import GalleryGrid from "@/components/page-sections/galleryGrid";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Gallery | Elegent Trading",
  description: "We are a team of experienced traders and analysts who are dedicated to helping you achieve your trading goals.",
  keywords: [
    "trading academy",
    "trading academy bangalore",
  ],
  openGraph: {
    title: "Gallery | Elegent Trading",
    description: "We are a team of experienced traders and analysts who are dedicated to helping you achieve your trading goals.",
    images: ["/images/logo.png"],
  },
};

const page = () => {
  return (
    <div id="tt-page-content">
      <PageHeader
        description1="Gallery"
        description2="We are a team of experienced traders and analysts who are dedicated to helping you achieve your trading goals."
        firstTitle="Gallery"
        secondTitle="Gallery"
        maskTitle="Gallery"
      />
      <GalleryGrid />
    </div>
  );
};

export default page;
