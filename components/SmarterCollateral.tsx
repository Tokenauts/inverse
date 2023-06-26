import React from "react";

const SmarterCollateral = () => {
  return (
    <div>
      <section className="relative flex items-center w-full ">
        <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-second">
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
                    <button className="bg-white  text-xs rounded-full py-2 px-6">
                      Open App
                    </button>
                    <button className=" text-xs bg-white rounded-full py-2 px-6">
                      View White paper
                    </button>
                  </div>
                </div>
              </div>
              <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                <img
                  className="object-cover object-center w-full mx-auto bg-gray-300 lg:ml-auto "
                  alt="hero"
                  src="https://d33wubrfki0l68.cloudfront.net/6163c5a4083dab2763aa0f2aa9e6bded23630eb7/935d6/images/placeholders/square2.svg"
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
