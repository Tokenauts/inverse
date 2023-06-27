import React from "react";

const Security = () => {
  return (
    <div className="relative items-center w-full px-5  mx-auto md:px-12 lg:px-16 max-w-7xl ">
      <div className="grid grid-rows-1 lg:grid-rows-3 gap-5 ">
        <div className=" shadow-lg text-white text-lg font-bold text-center p-2 rounded-lg  h-44 ">
          <div>
            <h1 className="text-center text-3xl  lg:text-3xl mb-16 md:text-left sm:text-left">
              Meet our Security Partners{" "}
            </h1>
            <div className=" sm:flex sm:items-center">
              <a
                href="#"
                className="text-xs font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600  "
              >
                Check Audits
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-lg bg-gray-200  text-green-500 text-lg font-bold text-center p-10 rounded-lg lg:col-span-2 ">
          2
        </div>

        <div className="  shadow-lg   text-lg font-bold text-center p-1 rounded-lg  lg:col-span-2 mt-4  ">
          <div>
            <h1 className=" text-xl font-medium text-left text-white">
              Designed from the ground up with security in mind and now backing
              it up with third party security professionals.{" "}
            </h1>
            <h1 className=" text-base font-thin text-left text-gray-200">
              We know the importance of security, especially for new lending
              protocols. Read our audit reports or work with us as we expand our
              third party security efforts.
            </h1>
          </div>
        </div>

        <div className="shadow-lg  bg-gray-200 text-green-500 text-lg font-bold text-center p-10 rounded-lg lg:col-span-3">
          5
        </div>
        <div className="shadow-lg  bg-gray-800  text-green-500 text-lg font-bold text-center p-10 rounded-lg ">
          <div>
            <h1 className="text-left text-5xl">2 </h1>
            <h1 className="text-left text-3xl">Full Audits </h1>
          </div>
        </div>
        <div className="shadow-lg  bg-gray-800 text-green-500 text-lg font-bold text-center p-10 rounded-lg lg:col-span-2 ">
          <h1 className="text-left text-5xl">87% </h1>
          <h1 className="text-left text-3xl">Defi safety score </h1>
        </div>
      </div>
    </div>
  );
};

export default Security;
