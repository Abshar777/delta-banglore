import PageHeader from "@/components/global/page-header";
import ScrollingExperienceSection from "@/components/global/ScrollingExperienceSection";
import Benifits from "@/components/page-sections/benifits";
import ContactForm from "@/components/page-sections/contactForm";
import ContactSection from "@/components/page-sections/contactSection";
import CourseSection from "@/components/page-sections/courses";
import Features from "@/components/page-sections/features";
import WhyChoosUs from "@/components/page-sections/whyChooseUs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Elegent Trading",
  description: "At Elegant Trading Academy, we are a team of passionate financial educators and market professionals committed to helping individuals and professionals excel in the world of trading. From mastering charts to launching your own brokerage, our academy is your one-stop destination to learn, practice, and grow.",
  keywords: [
    "trading academy",
    "trading academy bangalore",
    "trading academy bangalore",
    "trading academy bangalore",
    "trading academy bangalore",
    "elegent trading",
    "elegent trading academy",
    "elegent trading academy bangalore",
    "elegent trading academy bangalore",
    "elegent trading academy bangalore",
    "elegent trading academy bangalore",
  ],
  openGraph: {
    title: "About Us | Elegent Trading",
    description: "At Elegant Trading Academy, we are a team of passionate financial educators and market professionals committed to helping individuals and professionals excel in the world of trading. From mastering charts to launching your own brokerage, our academy is your one-stop destination to learn, practice, and grow.",
    images: ["/images/logo.png"],
    
  },
};

const page = () => {
  return (
    <div id="tt-page-content">
      <PageHeader
        description1="About Us"
        description2="We are a team of experienced traders and analysts who are dedicated to helping you achieve your trading goals."
        firstTitle="About Us"
        secondTitle="About Us"
        maskTitle="Who We Are"
      />
      <div id="tt-page-content">
        <WhyChoosUs />

        <ScrollingExperienceSection />
        <Features />
        <Benifits />
        <CourseSection />

        {/* <VideoPopup /> */}

        <ContactSection />
      </div>
    </div>
  );
};

export default page;
