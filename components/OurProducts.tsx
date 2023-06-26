import React from "react";

const OurProducts = () => {
  return (
    <div>
      <section className="flex items-center w-full ">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
          <div className="text-white text-left text-4xl font-light  ">Our </div>
          <div className="text-white text-left text-6xl font-black">
            Products
          </div>

          <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <figure>
              <img
                className="w-full "
                src="./inv.svg"
                alt=""
                width="1310"
                height="873"
              />

              <p className="mt-5 text-lg font-medium leading-6 text-white">
                Inverse Governance Token
              </p>
              <p className="mt-3 text-base text-gray-500">
                Your design portfolio website shouldn’t just be a portfolio, it
                should also be a sales tool.
              </p>
              <div className="flex gap-3 mt-10 justify-left">
                <a
                  className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                  href="#"
                >
                  <span>Read more</span>
                </a>{" "}
              </div>
            </figure>
            <figure>
              <img
                className="w-full "
                src="Dola.svg"
                alt=""
                width="1310"
                height="873"
              />

              <p className="mt-5 text-lg font-medium leading-6 text-white">
                Dola stablecoin
              </p>
              <p className="mt-3 text-base text-gray-500">
                Your design portfolio website shouldn’t just be a portfolio, it
                should also be a sales tool.
              </p>
              <div className="flex gap-3 mt-10 justify-left">
                <a
                  className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                  href="#"
                >
                  <span>Read more</span>
                </a>{" "}
              </div>
            </figure>
            <figure>
              <img
                className="w-full "
                src="DBR.svg"
                alt=""
                width="1310"
                height="873"
              />

              <p className="mt-5 text-lg font-medium leading-6 text-white">
                Dola Borrowing Right
              </p>
              <p className="mt-3 text-base text-gray-500">
                Your design portfolio website shouldn’t just be a portfolio, it
                should also be a sales tool.
              </p>
              <div className="flex gap-3 mt-10 justify-left">
                <a
                  className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                  href="#"
                >
                  <span>Read more</span>
                </a>{" "}
              </div>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
