import React from "react";
import { motion } from "framer-motion";

const Security = () => {
  return (
    <div className="relative items-center w-full px-5  mx-auto md:px-12 lg:px-16 max-w-7xl ">
      <div className="grid grid-rows-1 lg:grid-rows-3 gap-5 ">
        <div className=" shadow-lg text-white text-lg font-bold text-center p-2 rounded-lg   lg:h-44 h-46 ">
          <div>
            <h1 className="text-center text-4xl font-extrabold  lg:text-3xl mb-16 md:text-left sm:text-left">
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
        <div className="shadow-lg bg-white text-green-500 text-lg font-bold text-center p-10 rounded-lg lg:col-span-3 "></div>

        <div className="  shadow-lg   text-lg font-bold text-center p-1 rounded-lg  lg:col-span-2 mt-4  ">
          <div>
            <h1 className=" text-xl font-medium text-left text-white w-2/3">
              Designed from the ground up with security in mind and now backing
              it up with third party security professionals.{" "}
            </h1>
            <h1 className=" text-base font-thin text-left text-gray-200 w-2/3">
              We know the importance of security, especially for new lending
              protocols. Read our audit reports or work with us as we expand our
              third party security efforts.
            </h1>
          </div>
        </div>

        <div className="shadow-lg text-lg font-bold text-center rounded-lg lg:col-span-3 mb-8  ">
          <div className="grid grid-cols-3 gap-6 ">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <div className="shadow-lg text-lg font-bold text-center rounded-lg bg-zinc-900 hover:bg-zinc-800 ">
                <img src="./SECURITY PARTNERS-01.svg" className="  " />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <div className="shadow-lg text-lg font-bold text-center  rounded-lg bg-zinc-900 hover:bg-zinc-800   ">
                <img src="./SECURITY PARTNERS-02.svg" className="  " />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <div className="shadow-lg text-lg font-bold text-center  rounded-lg bg-zinc-900 hover:bg-zinc-800   ">
                <img src="./SECURITY PARTNERS-03.svg" className="  " />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <div className="shadow-lg text-lg font-bold text-center rounded-lg bg-zinc-900 hover:bg-zinc-800   ">
                <img src="./SECURITY PARTNERS-04.svg" className="  " />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <div className="shadow-lg text-lg font-bold text-center  rounded-lg bg-zinc-900  hover:bg-zinc-800  ">
                <img src="./SECURITY PARTNERS-05.svg" className="  " />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <div className="shadow-lg text-lg font-bold text-center  rounded-lg bg-zinc-900 hover:bg-zinc-800   ">
                <img src="./SECURITY PARTNERS-06.svg" className="  " />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="shadow-lg  bg-zinc-800 text-white hover:text-blue-400 text-lg font-bold text-center p-10 rounded-lg hover:bg-zinc-900  ">
          <div>
            <h1 className="text-left text-5xl">2 </h1>
            <h1 className="text-left text-3xl">Full Audits </h1>
          </div>
        </div>
        <div className="shadow-lg  bg-zinc-800 text-white hover:text-blue-400 text-lg font-bold text-center p-10 rounded-lg lg:col-span-2 hover:bg-zinc-900 ">
          <h1 className="text-left text-5xl">87% </h1>
          <h1 className="text-left text-3xl">Defi safety score </h1>
        </div>
      </div>
    </div>
  );
};

export default Security;
