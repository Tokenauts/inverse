"use client";
import React from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
const AnimationComponent = () => {
  return (
    <motion.div variants={navVariants} initial="hidden" whileInView="show">
      <div className="relative items-center w-full px-5 lg:py-24 mx-auto md:px-12 lg:px-16 max-w-7xl  ">
        <h1 className=" text-6xl  lg:text-6xl font-black text-left text-white mt-10">
          Try Inverse
        </h1>
        <h3 className="text-4xl font-light text-left bg-white   text-black max-w-xl mt-2 p-1  ">
          Put our protocol to work for you
        </h3>

        <section className="flex items-center w-full">
          <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 ">
            <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
              <figure className=" bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100  rounded-md px-6 py-4 mb-2 hover:bg-gray-800">
                <img src="./Dola.svg" />
                <p className="mt-5 text-lg font-extrabold leading-6 text-white text-center uppercase  ">
                  Borrow
                </p>
                <p className="mt-3 text-sm text-gray-300 text-center h-24">
                  Borrow DOLA for a fixed-rate for an unlimited duration with
                  DOLA Borrowing Rights.
                </p>
                <a
                  href="#"
                  className="text-xs font-semibold border px-4 py-2 rounded-full hover:text-purple-600 hover:border-purple-600 text-white bottom-0  "
                >
                  I want to Borrow
                </a>
              </figure>
              <figure className="   bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100 rounded-md px-6 py-4 mb-2 hover:bg-gray-800">
                <img src="./Dola.svg" />
                <p className="mt-5 text-lg  leading-6 text-white text-center uppercase font-extrabold   ">
                  Earn
                </p>
                <p className="mt-3 text-sm text-gray-300 text-center h-24">
                  Earn attractive returns when you provide liquidity to a
                  trading pair on Curve, Convex, Balancer and others.
                </p>
                <a
                  href="#"
                  className="text-xs font-semibold border px-4 py-2 rounded-full hover:text-purple-600 hover:border-purple-600 text-white bottom-0 "
                >
                  I want to Earn
                </a>
              </figure>
              <figure className="  bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100 rounded-md px-6 py-4 mb-2 hover:bg-gray-800 ">
                <img src="./Dola.svg" />
                <p className="mt-5 text-lg  leading-6 text-white text-center uppercasefont-extrabold ">
                  Real Yield
                </p>
                <p className="mt-3 text-sm text-gray-300  h-24 text-center">
                  Buy INV and stake on FiRM to earn DBR real yield, you direclty
                  benefit from FiRM's success. Participate in Governance.
                </p>
                <a
                  href="#"
                  className="text-xs font-semibold border px-4 py-2 rounded-full hover:text-purple-600 hover:border-purple-600 text-white bottom-0 "
                >
                  I want to stake INV
                </a>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AnimationComponent;
