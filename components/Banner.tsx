import React from "react";

const Banner = () => {
  return (
    <div className="  h-44 lg:h-screen relative w-full">
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
          zIndex: "-1",
        }}
        className="w-full"
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
        className=" text-3xl lg:text-6xl text-white font-thin w-full"
      >
        Join This Exciting Journey
      </div>
    </div>
  );
};

export default Banner;
