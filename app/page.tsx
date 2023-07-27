"use client";
import { useState, useEffect } from "react";
import AnimationComponent from "@/components/AnimationComponent";
import BlogComponent from "@/components/BlogComponent";
import First from "@/components/First";
import Footer from "@/components/Footer";
import Governance from "@/components/Governance";
import Navbar from "@/components/Navbar";
import NeverPayInterest from "@/components/NeverPayInterest";
import OurProducts from "@/components/OurProducts";
import Security from "@/components/Security";
import SmarterCollateral from "@/components/SmarterCollateral";
import SwitchFeature from "@/components/SwitchFeature";
import Bug from "@/components/bug";
import Stats from "@/components/stats";
import Banner from "@/components/Banner";
import { motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
        <div style={{ width: "30%" }}>
          <video
            src="./loading.webm"
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <div className="">
        <img
          src="./texture.svg"
          className="fixed top-0 left-0 min-w-full min-h-full opacity-40 "
          style={{ zIndex: 0 }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          <Navbar />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <First />
        </div>
        <OurProducts />
        <NeverPayInterest />
        <SmarterCollateral />
        <AnimationComponent />
        <SwitchFeature />
        <Bug />
        <Stats />
        <Banner />
        <Governance />
        <Security />
        <BlogComponent />
        <Footer />
      </div>
    </motion.div>
  );
}
