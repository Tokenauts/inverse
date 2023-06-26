import React from "react";
import { motion } from "framer-motion";

const Navbarcomponents2: React.FC = () => {
  return (
    <motion.div
      initial={{ x: -20 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative flex items-center w-max bg-gray-500 rounded-xl">
        <div className="relative items-center w-full mx-auto   max-w-xl">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid  gap-6 lg:grid-cols-2">
              <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first ">
                <div className=" text-center lg:text-left ">
                  <div className="mx-auto  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-10">
                    <div className="grid gap-10 row-gap-5 sm:grid-rows-4 lg:grid-rows-4">
                      <div className="px-12 text-center sm:px-0">
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                          Shameless
                        </h6>
                        <div className="mb-2 text-gray-700">
                          I will remember and recover, not forgive and forget.
                        </div>
                      </div>
                      <div className="px-12 text-center sm:px-0">
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                          Honest
                        </h6>
                        <div className="mb-2 text-gray-700">
                          I have nothing to lose but something to gain.
                        </div>
                      </div>
                      <div className="px-12 text-center sm:px-0">
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                          Beautiful
                        </h6>
                        <div className="mb-2 text-gray-700">
                          White is not always light and black is not always
                          dark.
                        </div>
                      </div>
                      <div className="px-12 text-center sm:px-0">
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                          Fantastic
                        </h6>
                        <div className="mb-2 text-gray-700">
                          The meaning of life is to give life meaning.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" block w-full bottom-0 aspect-square ">
                <h1 className="text-white font-medium text-5xl mt-5">Borrow</h1>
                <img
                  className="object-cover object-center mt-32 w-full mx-auto bg-gray-300 lg:ml-auto"
                  alt="hero"
                  src="https://d33wubrfki0l68.cloudfront.net/6163c5a4083dab2763aa0f2aa9e6bded23630eb7/935d6/images/placeholders/square2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Navbarcomponents2;
