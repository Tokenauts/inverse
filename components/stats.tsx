import React from "react";

const stats = () => {
  return (
    <div>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-6xl">
          <div className="text-white text-4xl text-left font-black mb-10">
            Stats
          </div>
          <div className="text-white text-xl text-left font-medium mb-10">
            Inverse Finance DAO operates unmatched transparency into its
            operation and governance
          </div>
          <div className="grid w-full grid-cols-1 mx-auto lg:grid-cols-5">
            <div className="max-w-md p-4 mx-auto border rounded-xl w-44">
              <div className="flex items-center justify-center  text-white rounded-xl font-black">
                $52.78M
              </div>
              <p className="mt-5 text-base font-light leading-6 text-white">
                DOLA Circulation
              </p>
            </div>
            <div className="max-w-md p-6 mx-auto border rounded-xl w-44">
              <div className="flex items-center justify-center text-white  rounded-xl font-black">
                $1.14M
              </div>
              <p className="mt-5 text-base font-light leading-6 text-white">
                DOLA 24h Vol.
              </p>
            </div>
            <div className="max-w-md p-6 mx-auto border rounded-xl w-44">
              <div className="flex items-center justify-center  text-white  rounded-xl font-black">
                $39.32
              </div>
              <p className="mt-5 text-base font-light leading-6 text-white">
                INV price
              </p>
            </div>
            <div className="max-w-md p-6 mx-auto border rounded-xl w-44">
              <div className="flex items-center justify-center  text-white rounded-xl font-black">
                $52.09M
              </div>
              <p className="mt-5 text-base font-light leading-6 text-white">
                TVL
              </p>
            </div>
            <div className="max-w-md p-6 mx-auto border rounded-xl w-44">
              <div className="flex items-center justify-center  text-white rounded-xl font-black">
                $0.11
              </div>
              <p className="mt-5 text-base font-light leading-6 text-white">
                DBR price
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default stats;
