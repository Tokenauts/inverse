"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
interface TabName {
  tabName: "DEX" | "YIELD" | "CEX" | "INTERFACE" | "WALLETS";
}

const SwitchFeature: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabName["tabName"]>("DEX");

  const handleTabClick = (tabName: TabName["tabName"]) => {
    setSelectedTab(tabName);
  };

  return (
    <div
      className="h-screen lg:w-screen lg:h-screen "
      style={{
        backgroundImage: "url('./grid.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // change this to "cover" to ensure the image covers the full area
        backgroundPosition: "center", // adjust as needed
      }}
    >
      <div className="relative items-center w-full  gap-4 px-5  mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div
          className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 z-10"
          style={{ zIndex: 2 }}
        >
          <h1 className="lg:text-6xl text-white font-black text-4xl mt-8   ">
            Our Ecosystem
          </h1>
          <div className="inline-flex border items-center mt-10 text-white  rounded-3xl cursor-pointer mx-auto px-2 bg-zinc-900 bg-opacity-50 lg:px-4 py-2">
            <span
              onClick={() => handleTabClick("DEX")}
              className={`lg:px-4 lg:py-2 rounded-full px-2 text-xs    ${
                selectedTab === "DEX"
                  ? " bg-violet-500 border text-white font-light rounded-full text-xs lg:text-base "
                  : " text-w"
              }`}
            >
              DEX
            </span>

            <span
              onClick={() => handleTabClick("CEX")}
              className={`lg:px-4 lg:py-2 rounded-full px-2 text-xs  ${
                selectedTab === "CEX"
                  ? " bg-violet-500 border text-white font-light rounded-full text-xs lg:text-base"
                  : " text-w"
              }`}
            >
              CEX
            </span>
            <span
              onClick={() => handleTabClick("YIELD")}
              className={`lg:px-4 lg:py-2 rounded-full px-2 text-xs ${
                selectedTab === "YIELD"
                  ? " bg-violet-500 border text-white font-light rounded-full text-xs lg:text-base"
                  : " text-w"
              }`}
            >
              Yield
            </span>
            <span
              onClick={() => handleTabClick("INTERFACE")}
              className={`lg:px-4 lg:py-2 rounded-full px-2  text-xs ${
                selectedTab === "INTERFACE"
                  ? " bg-violet-500 border text-white font-light rounded-full text-xs lg:text-base"
                  : "text-w"
              }`}
            >
              Interface
            </span>
            <span
              onClick={() => handleTabClick("WALLETS")}
              className={`lg:px-4 lg:py-2 rounded-full px-2 text-xs ${
                selectedTab === "WALLETS"
                  ? " bg-violet-500 border text-white font-light rounded-full text-xs lg:text-base"
                  : "text-w"
              }`}
            >
              Wallets
            </span>
          </div>
        </div>
        {selectedTab === "DEX" && (
          <div>
            <div className="grid grid-cols-3 gap-4 p-5  max-w-xl mx-auto mt-16 ">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-01.svg" className="  " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg text-lg font-bold text-center p-4  md:p-8 lg:p-10 rounded-lg">
                  <img src="./DEX-02.svg" className=" " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-03.svg" className="" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg">
                  <img src="./DEX-04.svg" className=" " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center  p-4   md:p-8 lg:p-10 rounded-lg">
                  <img src="./DEX-05.svg" className=" " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg">
                  <img src="./DEX-06.svg" className="" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg">
                  <img src="./DEX-07.svg" className="" />
                </div>
              </motion.div>
            </div>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <a
                href="#"
                className="text-xs font-semibold border px-4 py-2 bg-white rounded-full hover:text-purple-600 hover:border-purple-600 text-black bottom-0 "
              >
                Become a partner
              </a>
            </motion.a>
          </div>
        )}
        {selectedTab === "YIELD" && (
          <div>
            <div className="grid grid-cols-3 gap-4 p-5  max-w-xl mx-auto mt-16 ">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./YEILD-01.svg" className="  " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg">
                  <img src="./YEILD-02.svg" className=" " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./YEILD-03.svg" className="" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./YEILD-04.svg" className=" " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./YEILD-05.svg" className=" " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./YEILD-06.svg" className="" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./YEILD-07.svg" className="" />
                </div>
              </motion.div>
            </div>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <a
                href="#"
                className="text-xs font-semibold border px-4 py-2 bg-white rounded-full hover:text-purple-600 hover:border-purple-600 text-black bottom-0 "
              >
                Become a partner
              </a>
            </motion.a>
          </div>
        )}
        {selectedTab === "CEX" && (
          <div>
            <div className="grid grid-cols-3 gap-4 p-5  max-w-xl mx-auto mt-16 ">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./CEX-01.svg" className="  " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./CEX-02.svg" className=" " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./CEX-03.svg" className="" />
                </div>
              </motion.div>
            </div>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <a
                href="#"
                className="text-xs font-semibold border px-4 py-2 bg-white rounded-full hover:text-purple-600 hover:border-purple-600 text-black bottom-0 "
              >
                Become a partner
              </a>
            </motion.a>
          </div>
        )}
        {selectedTab === "INTERFACE" && (
          <div>
            <div className="grid grid-cols-3 gap-4 p-5  max-w-xl mx-auto mt-12 ">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-01.svg" className="  " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-02.svg" className=" " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-03.svg" className="" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-04.svg" className=" " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-05.svg" className=" " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-06.svg" className="" />
                </div>
              </motion.div>
            </div>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <a
                href="#"
                className="text-xs font-semibold border px-4 py-2 bg-white rounded-full hover:text-purple-600 hover:border-purple-600 text-black bottom-0 "
              >
                Become a partner
              </a>
            </motion.a>
          </div>
        )}
        {selectedTab === "WALLETS" && (
          <div>
            <div className="grid grid-cols-3 gap-4 p-5  max-w-xl mx-auto mt-16 ">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-01.svg" className="  " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-02.svg" className=" " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-03.svg" className="" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-04.svg" className=" " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-05.svg" className=" " />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-06.svg" className="" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="shadow-lg  text-lg font-bold text-center p-4   md:p-8 lg:p-10 rounded-lg ">
                  <img src="./DEX-07.svg" className="" />
                </div>
              </motion.div>
            </div>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <a
                href="#"
                className="text-xs font-semibold border px-4 py-2 bg-white rounded-full hover:text-purple-600 hover:border-purple-600 text-black bottom-0 "
              >
                Become a partner
              </a>
            </motion.a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SwitchFeature;
