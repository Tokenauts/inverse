"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
const OurProducts = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);

  // Start video function
  const handleMouseEnter = (videoRef: React.RefObject<HTMLVideoElement>) => {
    videoRef.current?.play();
  };
  return (
    <div>
      <section className="flex items-center w-full ">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
          <div className="text-4xl font-light text-left  text-black max-w-xs mt-2 p-1   ">
            <p className="  bg-white mr-44">Our</p>
          </div>
          <div className="text-white text-left text-6xl font-black">
            Products
          </div>

          <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-3 relative items-center w-full px-5  mx-auto md:px-12 lg:px-20 max-w-4xl">
            <figure
              onMouseEnter={() => handleMouseEnter(videoRef2)}
              className="h-96"
            >
              <video ref={videoRef2} src="/DOLA.webm" muted />

              <p className="mt-5 text-lg font-medium leading-6 text-white">
                DOLA Stablecoin
                <br /> (DOLA)
              </p>

              <div className="text-white text-center items-center mt-2 font-light">
                Price : $1.00
              </div>
            </figure>
            <figure
              onMouseEnter={() => handleMouseEnter(videoRef1)}
              className="h-96"
            >
              <video ref={videoRef1} src="/INV.webm" muted />

              <p className="mt-5 text-lg font-medium leading-6 text-white">
                Inverse Governance Token
                <br /> (INV)
              </p>

              <div className="text-white text-center items-center mt-2 font-light">
                Price : $39.45
              </div>
            </figure>
            <figure
              onMouseEnter={() => handleMouseEnter(videoRef3)}
              className="h-96"
            >
              <video ref={videoRef3} src="/dbr.webm" muted />

              <p className="mt-5 text-lg font-medium leading-6 text-white">
                DOLA Borrowing Right
                <br /> (DBR)
              </p>

              <div className="text-white text-center items-center mt-2 font-light">
                Price : $0.11
              </div>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
