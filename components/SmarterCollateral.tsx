import React from "react";

const SmarterCollateral = () => {
  return (
    <div className="">
      <section className="relative flex items-center w-ful  ">
        <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-second order-1">
                <div className="max-w-xl text-center lg:text-left">
                  <div>
                    <p className="text-2xl font-medium tracking-tight text-white sm:text-4xl">
                      Smarter Collateral
                    </p>
                    <p className="max-w-xl mt-4 text-xl tracking-tight text-gray-600">
                      Introducing Personal Collateral Escrows
                    </p>
                    <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                      Isolates deposits by user Retains governance rights User
                      collateral can never be borrowed Improved price oracle
                      technology Highly customizable
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
                {/* <img
                  className="object-cover object-center w-full mx-auto lg:ml-auto "
                  alt="hero"
                  src="DBR.svg"
                /> */}
                <video
                  src="./col.mp4"
                  className="object-cover object-center w-full mx-auto  lg:ml-auto "
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

export default SmarterCollateral;
