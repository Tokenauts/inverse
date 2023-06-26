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

              <div className="text-white text-center items-center mt-2">
                Price : $39.45
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

              <div className="text-white text-center items-center mt-2">
                Price : $1.00
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

              <div className="text-white text-center items-center mt-2">
                Price : $0.11
              </div>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
