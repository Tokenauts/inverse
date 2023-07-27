import React from "react";

const bug = () => {
  return (
    <div
      style={{
        backgroundImage: "url('./rocks.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // change this to "cover" to ensure the image covers the full area
        backgroundPosition: "center", // adjust as needed
        overflow: "hidden",
      }}
    >
      <section className="">
        <div className="relative items-center w-full px-5  mx-auto mb-12 md:px-12 lg:px-16 max-w-4xl">
          <video
            src="bug.webm"
            autoPlay
            loop
            muted
            className="w-full pt-6"
          ></video>
        </div>
        <div>
          <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-600">
            Inverse Finance invites developers and security researches to take a
            look at our repos on Github and earn bug bounty rewards.
          </p>
        </div>
        <div className="flex justify-center gap-10 mt-10 lg:justify-center">
          <div className=" sm:flex sm:items-center">
            <a
              href="#"
              className="text-xs font-semibold border px-4 py-2 rounded-full hover:text-purple-600 hover:border-purple-600 text-white "
            >
              Open App
            </a>
          </div>
          <a
            href="#"
            className="text-xs font-semibold border  bg-purple-200 px-4 py-2 rounded-full hover:text-purple-600 hover:border-purple-600 text-black "
          >
            Learn more
          </a>
        </div>
      </section>
    </div>
  );
};

export default bug;
