import PageHeader from "@/components/global/page-header";
import ContactForm from "@/components/page-sections/contactForm";
import ContactSection from "@/components/page-sections/contactSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact | Delta International Trading",
  description:
    "Got questions about the markets or our programs? Reach out to us and let's elevate your trading journey together!",
  keywords: [
    "trading academy",
    "trading academy bangalore",
    "trading academy bangalore",
    "trading academy bangalore",
    "trading academy bangalore",
    "Delta International trading",
    "Delta International trading academy",
    "Delta International trading academy bangalore",
    "Delta International trading academy bangalore",
    "Delta International trading academy bangalore",
    "Delta International trading academy bangalore",
  ],
  openGraph: {
    title: "Contact | Delta International Trading",
    description:
      "Got questions about the markets or our programs? Reach out to us and let's elevate your trading journey together!",
    images: ["/images/logo.png"],
  },
};

const page = () => {
  return (
    <div id="tt-page-content">
      <PageHeader
        description1="Got questions about the markets or our programs?"
        description2="Reach out to us and let's elevate your trading journey together!"
        firstTitle="Ready to Start Trading?"
        secondTitle="Contact Us"
        maskTitle="Write Us"
      />
      <ContactForm />
      <ContactSection />
    </div>
  );
};

export default page;
