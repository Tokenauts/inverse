import React from "react";

const Banner = () => {
  return (
    <div className="relative flex items-center w-full ">
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
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
