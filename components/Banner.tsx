import React from "react";

const Banner = () => {
  return (
    <div className="  h-44 lg:h-screen relative w-full mt-40">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",

          left: "50%",
          top: "50%",

          objectFit: "cover",
          transform: "translate(-50%, -50%)",
        }}
      >
        <source src="./security.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "1",
        }}
        className=" text-3xl lg:text-4xl text-white font-extrabold w-full"
      >
        Join This Exciting Journey
        <br />
        <a
          href="#"
          className="text-base font-light border px-4 bg-white py-2 rounded-full hover:text-purple-600 hover:border-purple-600 text-black bottom-0 "
        >
          I want to Earn
        </a>
      </div>
    </div>
  );
};

export default Banner;
