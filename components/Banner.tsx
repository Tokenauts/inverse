import React from "react";

const Banner = () => {
  return (
    // <div
    //   className="relative flex items-center w-full "
    //   style={{
    //     backgroundImage: "url('./security.mp4')",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "contain",
    //     backgroundPosition: "left",
    //     overflow: "visible",
    //   }}
    // >
    //   <div className="relative items-center w-full  py-24 mx-auto h-96 ">
    //     {/* <video
    //       src="./security.mp4"
    //       className="object-cover "
    //       autoPlay
    //       muted
    //       loop
    //     /> */}
    //   </div>
    // </div>
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "40%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
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
        className=" text-xl lg:text-6xl text-white"
      >
        Join This Exciting Journey
      </div>
    </div>
  );
};

export default Banner;
