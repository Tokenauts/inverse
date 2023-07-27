import React from "react";

const SmarterCollateral = () => {
  return (
    <div className="">
      <section className="relative flex items-center w-full  ">
        <div className="relative items-center w-full px-5  mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-second order-1">
                <div className="max-w-xl text-center lg:text-left">
                  <div>
                    <p className="text-2xl font-extrabold  text-white sm:text-4xl">
                      Smarter Collateral
                    </p>
                    <p className="max-w-xl mt-4 text-2xl  text-violet-500">
                      Introducing Personal Collateral Escrows
                    </p>
                    <p className="max-w-xl mt-4 text-light   text-gray-200">
                      Isolates deposits by user Retains governance rights User
                      collateral can never be borrowed Improved price oracle
                      technology Highly customizable
                    </p>
                  </div>
                  <div className="flex justify-center gap-10 mt-10 lg:justify-start">
                    <a
                      href="#"
                      className="text-xs font-semibold border text-white  px-4 py-2 rounded-full hover:text-violet-500 hover:border-violet-500  "
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="order-first block w-full mt-12 aspect-square lg:mt-0 p-4">
                <video
                  src="./col.webm"
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
