import React from "react";
import { motion } from "framer-motion";

const Navbarcomponents: React.FC = () => {
  return (
    <motion.div
      initial={{ x: -30 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="relative flex items-center w-max  rounded-xl bg-black p-2  ">
        <div className="relative items-center w-full mx-auto max-w-md">
          <div className="relative flex-col items-start m-auto align-middle ">
            <div className="grid  lg:grid-cols-2 ">
              <div className="relative items-center m-auto lg:inline-flex md:order-first bg-gray ">
                <div className="  py-3 text-center lg:text-left ">
                  <div className="mx-auto  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-1">
                    <div className="grid gap-10 row-gap-1 sm:grid-rows-4 lg:grid-rows-4 ">
                      <div className=" sm:px-0">
                        <h6 className="mb-2 text-sm font-bold leading-5 text-left">
                          Firm
                        </h6>
                      </div>
                      <div className=" text-center sm:px-0">
                        <h6 className="mb-2 text-sm font-bold leading-5  text-left">
                          Firm Rewards
                        </h6>
                      </div>
                      <div className=" text-center sm:px-0">
                        <h6 className="mb-2 text-sm font-bold leading-5  text-left">
                          Frontier (deprecated)
                        </h6>
                      </div>
                      <div className=" text-center sm:px-0">
                        <h6 className="mb-2 text-sm font-bold leading-5  text-left">
                          Frontier - Debt Converter
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" relative m-auto w-full bottom-0 aspect-square ">
                <img
                  className="object-cover object-center  w-full mx-auto  lg:ml-auto"
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

export default Navbarcomponents;
