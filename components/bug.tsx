import React from "react";

const bug = () => {
  return (
    <div>
      <section className="">
        <div className="relative items-center w-full px-5  mx-auto mb-12 md:px-12 lg:px-16 max-w-4xl">
          {/* <img
            className="w-full pt-6"
            src="https://d33wubrfki0l68.cloudfront.net/41cf01e1154fd7ef6121a544cedd9ba7be6b63ba/e0ab4/images/placeholders/rectangle1.svg"
            alt=""
          /> */}
          <video src="/Home.mp4" autoPlay loop className="w-full pt-6" />
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