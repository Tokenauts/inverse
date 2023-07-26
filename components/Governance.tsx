import React from "react";

const Governance = () => {
  return (
    <div>
      <section className="relative flex items-center w-full ">
        <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-second">
                <div className="max-w-xl text-center lg:text-left">
                  <div>
                    <p className="text-md font-medium tracking-tight text-white sm:text-xl">
                      Inverse uses 100% on-chain voting that avoids the pitfalls
                      of centralized DAO governance.
                    </p>
                    <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                      We are the most transparent DAO in DeFi with unprecedented
                      levels of operational visibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                <p className="text-4xl font-medium tracking-tight text-white sm:text-4xl mb-2">
                  Built For You, Governed By You
                </p>
                <div className="order-first block w-full mt-12 aspect-square lg:mt-20">
                  <video
                    src="./gov.mp4"
                    className="object-cover object-center w-full mx-auto  lg:ml-auto "
                    autoPlay
                    muted
                    loop
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Governance;
