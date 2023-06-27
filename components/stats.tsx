import React from "react";

const stats = () => {
  return (
    <div>
      <section className="flex items-center w-full mt-24 ">
        <div className="relative items-center w-full px-5  mx-auto md:px-12 lg:px-20 max-w-5xl">
          <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
            <figure>
              <div>
                <h1 className="text-4xl text-white font-black mt-24 text-left">
                  The Stats
                </h1>
                <h2 className="text-xl text-white font-light mt-4 text-left">
                  Inverse Finance DAO operates unmatched transparency into its
                  operation and governance
                </h2>
              </div>
            </figure>
            <figure className=" h-96 bg-gray-500 rounded-xl">
              <h1 className="text-4xl text-white font-black mt-40 ">$53.16M</h1>
              <h2 className="text-xl text-white font-light mt-4 ">
                Total Value Locked
              </h2>
            </figure>
            <figure className=" h-96 bg-gray-500 rounded-xl">
              <h1 className="text-4xl text-white font-black mt-40 ">$52.78M</h1>
              <h2 className="text-xl text-white font-light mt-4 ">
                DOLA Circulation
              </h2>
            </figure>
            <figure className=" h-96 bg-gray-500 rounded-xl">
              <h1 className="text-4xl text-white font-black mt-40 ">$1.56M</h1>
              <h2 className="text-xl text-white font-light mt-4 ">
                DOLA 24h Volume
              </h2>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default stats;
