import React from "react";

const Banner = () => {
  return (
    <div className="relative flex items-center w-full ">
      <div className="relative items-center w-full  py-24 mx-auto ">
        <video
          src="./security.mp4"
          className="object-cover rounded-xl w-full h-96 "
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
};

export default Banner;
