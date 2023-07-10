import React from "react";

const First = () => {
  return (
    <div>
      <section className="relative flex items-center w-full ">
        <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              <div className=" order-first relative items-center gap-12 m-auto lg:inline-flex md:order-first ">
                <div className="max-w-xl text-center lg:text-left">
                  <div>
                    <p className="text-6xl font-black  text-white sm:text-8xl">
                      Rethink
                    </p>
                    <p className="text-xl font-light  text-white sm:text-2xl  ">
                      the way you
                    </p>
                    <p className="text-6xl font-black  text-white sm:text-8xl">
                      Borrow
                    </p>
                    <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                      DOLA Borrowing Rights replace interest rates with a fixed
                      fee that can earn you more.
                    </p>
                  </div>
                  <div className="flex justify-center gap-10 mt-10 lg:justify-start">
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
                </div>
              </div>
              <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                <video
                  src="./Home.mp4"
                  className="object-cover object-center w-full mx-auto  lg:ml-auto lg:mt-32 "
                  autoPlay
                  muted
                  loop
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default First;
