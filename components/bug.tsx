import React from "react";

const bug = () => {
  return (
    <div>
      <section className="">
        <div className="relative items-center w-full px-5  mx-auto mb-12 md:px-12 lg:px-16 max-w-4xl">
          <video
            src="bug.webm"
            autoPlay
            loop
            muted
            className="w-full pt-6"
          ></video>
          <div>
            <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-white mb-10">
              Inverse Finance invites developers and security researches to take
              a look at our repos on Github and earn bug bounty rewards.
            </p>
            <a
              href="#"
              className="text-xs font-semibold border text-white  px-4 py-2 rounded-full hover:text-violet-500 hover:border-violet-500   "
            >
              Become a partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default bug;
