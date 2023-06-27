"use client";
import React, { useRef } from "react";

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
      <section className="flex items-center w-screen ">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-4xl">
          <div className="text-white text-left text-4xl font-light  ">Our </div>
          <div className="text-white text-left text-6xl font-black">
            Products
          </div>

          <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <figure onMouseEnter={() => handleMouseEnter(videoRef1)}>
              <video
                ref={videoRef1}
                src="/inv.mp4"
                width="1310"
                height="873"
                muted
              />

              <p className="mt-5 text-lg font-medium leading-6 text-white">
                Inverse Governance Token
              </p>

              <div className="text-white text-center items-center mt-2">
                Price : $39.45
              </div>
            </figure>
            <figure onMouseEnter={() => handleMouseEnter(videoRef2)}>
              <video
                ref={videoRef2}
                src="/dola.mp4"
                width="1310"
                height="873"
                muted
              />

              <p className="mt-5 text-lg font-medium leading-6 text-white">
                Dola stablecoin
              </p>

              <div className="text-white text-center items-center mt-2">
                Price : $1.00
              </div>
            </figure>
            <figure onMouseEnter={() => handleMouseEnter(videoRef3)}>
              <video
                ref={videoRef3}
                src="/dbr.mp4"
                width="1310"
                height="873"
                muted
              />

              <p className="mt-5 text-lg font-medium leading-6 text-white">
                Dola Borrowing Right
              </p>

              <div className="text-white text-center items-center mt-2">
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
