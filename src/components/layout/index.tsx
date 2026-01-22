"use client";
import React, { useState, useEffect, Suspense } from "react";
import Preloader from "./preloader";
import Cursor from "../animation/cursor";
import Header from "../global/header";
import Footer from "../global/footer";
import { Toaster } from "sonner";
import WhatsappButton from "../global/whatsapp";
import TopBar from "../global/topBar";

const Indexlayout = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div suppressHydrationWarning>
        <Toaster position="top-center" />
      <Preloader />
      <WhatsappButton />
      <Cursor />
      <TopBar/>
      <Header />
      <div id="tt-content-wrap">
        <Suspense fallback={<div></div>}>{children}</Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Indexlayout;
