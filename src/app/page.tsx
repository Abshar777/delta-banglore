"use client";
import WhychoosUs from "@/components/page-sections/whyChooseUs";
import Hero from "@/components/page-sections/hero";
import { useEffect, useState } from "react";
import ProjectsSection from "@/components/page-sections/projectSection";
import Services from "@/components/page-sections/services";
import ScrollingExperienceSection from "@/components/global/ScrollingExperienceSection";
import Features from "@/components/page-sections/features";
import Benifits from "@/components/page-sections/benifits";
import VideoPopup from "@/components/page-sections/videoPopup";
import Testimonials from "@/components/page-sections/testimonials";
import AwardsSection from "@/components/page-sections/awwards";
import AwwardListing from "@/components/page-sections/awwardListing";
import ContactSection from "@/components/page-sections/contactSection";
import Courses from "@/components/page-sections/courses";
import Caption from "@/components/page-sections/caption";
import ContactForm from "@/components/page-sections/contactForm";
import Mentors from "@/components/page-sections/mentors";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
    
      <Hero />
      <Caption />
      <div id="tt-page-content">
        <WhychoosUs />
        <ProjectsSection />
        <Services />
        <ScrollingExperienceSection />
        <Features />
        <Benifits />
        <Courses />
        <Mentors />
        <AwardsSection />
        <AwwardListing />
        <ContactForm />
        {/* <ContactSection /> */}
        <VideoPopup />
        <Testimonials />

        <ContactSection />
      </div>
    </>
  );
}
