"use client";
import React from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
const AnimationComponent = () => {
  return (
    <motion.div variants={navVariants} initial="hidden" whileInView="show">
      <div className="content-center mx-w-8xl 	 ">
        <h1 className=" text-5xl  lg:text-8xl font-black text-left text-white mt-10">
          Try Inverse
        </h1>
        <h3 className="text-base font-light text-left ml-4  text-white lg:ml-48 ">
          Put our protocol to work for you
        </h3>

        <section className="flex items-center w-full">
          <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-8xl">
            <div className="grid grid-cols-1 gap-16 py-12 md:grid-cols-3 sm:grid-cols-1">
              <figure className="bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100  rounded-3xl p-6">
                <img src="./Dola.svg" />
                <p className="mt-5 text-lg font-medium leading-6 text-white text-center  ">
                  Borrow
                </p>
                <p className="mt-3 text-base text-gray-300 text-center mb-10">
                  Borrow DOLA for a fixed-rate for an unlimited duration with
                  DOLA Borrowing Rights.
                </p>
                <a
                  href="#"
                  className="text-xs font-semibold border px-4 py-2 rounded-full hover:text-purple-600 hover:border-purple-600 text-white  "
                >
                  Learn more
                </a>
              </figure>
              <figure className="   bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100 rounded-3xl p-6">
                <img src="./Dola.svg" />
                <p className="mt-5 text-lg font-medium leading-6 text-white text-center  ">
                  Earn
                </p>
                <p className="mt-3 text-base text-gray-300 text-center mb-4">
                  Earn attractive returns when you provide liquidity to a
                  trading pair on Curve, Convex, Balancer and others.
                </p>
                <a
                  href="#"
                  className="text-xs font-semibold border px-4 py-2 rounded-full hover:text-purple-600 hover:border-purple-600 text-white "
                >
                  Learn more
                </a>
              </figure>
              <figure className="  bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100 rounded-3xl p-6">
                <img src="./Dola.svg" />
                <p className="mt-5 text-lg font-medium leading-6 text-white text-center   ">
                  Real Yield
                </p>
                <p className="mt-3 text-base text-gray-300 text-center mb-4">
                  Buy INV and stake on FiRM to earn DBR real yield, you direclty
                  benefit from FiRM's success. Participate in Governance.
                </p>
                <a
                  href="#"
                  className="text-xs font-semibold border px-4 py-2 rounded-full hover:text-purple-600 hover:border-purple-600 text-white "
                >
                  Learn more
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
