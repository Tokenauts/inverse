import React from "react";

const stats = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: "url('./rocks.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // change this to "cover" to ensure the image covers the full area
        backgroundPosition: "center", // adjust as needed
      }}
    >
      {/* <img src="./rocks.svg" className="absolute " /> */}
      <section className="flex items-center w-full mt-24 ">
        <div className="relative items-center w-full px-5  mx-auto md:px-12 lg:px-20 max-w-4xl">
          <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
            <figure>
              <div>
                <h1 className="lg:text-4xl text-2xl text-white font-black mt-24 text-left">
                  The Stats
                </h1>
                <h2 className="lg:text-2xl text-base text-white font-light mt-4 text-left">
                  Inverse Finance DAO operates unmatched transparency into its
                  operation and governance
                </h2>
              </div>
              <div className=" sm:flex sm:items-center mt-4">
                <a
                  href="#"
                  className="text-xs font-semibold border px-4 py-2 rounded-full hover:text-purple-600 hover:border-purple-600 text-white "
                >
                  Open App
                </a>
              </div>
            </figure>
            <figure className=" h-96 bg-zinc-800 rounded-xl  hover:bg-zinc-900 hover:text-green-400 text-white  ">
              <h1 className="text-4xl  font-black mt-40 ">$53.16M</h1>
              <h2 className="text-xl font-light mt-4  ">Total Value Locked</h2>
            </figure>
            <figure className=" h-96 bg-zinc-800 rounded-xl   hover:bg-zinc-900   hover:text-amber-400 text-white ">
              <h1 className="text-4xl font-black mt-40 ">$52.78M</h1>
              <h2 className="text-xl  font-light mt-4 ">DOLA Circulation</h2>
            </figure>
            <figure className=" h-96 bg-zinc-800 rounded-xl    hover:bg-zinc-900 hover:text-amber-200 text-white ">
              <h1 className="text-4xl  font-black mt-40 ">$1.56M</h1>
              <h2 className="text-xl font-light mt-4 ">DOLA 24h Volume</h2>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default stats;
