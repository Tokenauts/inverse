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
    <div className="relative items-center w-full px-5 lg:py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
      <h1 className="lg:text-7xl text-white font-black text-4xl  ">
        Our Ecosystem
      </h1>
      <div className="inline-flex bg-purple-200 items-center mt-10  rounded-3xl cursor-pointer dark:text-gray-800  mx-auto  lg:px-2  p-2 lg:p-1">
        <span
          onClick={() => handleTabClick("DEX")}
          className={`lg:px-4 lg:py-2 rounded-full px-2 text-xs   ${
            selectedTab === "DEX"
              ? "bg-purple-500 text-white font-light rounded-full text-xs lg:text-base"
              : "dark:bg-gray-300"
          }`}
        >
          DEX
        </span>
        <span
          onClick={() => handleTabClick("YIELD")}
          className={`lg:px-4 lg:py-2 rounded-full px-2 text-xs ${
            selectedTab === "YIELD"
              ? "bg-purple-500 text-white rounded-full text-xs lg:text-base"
              : "dark:bg-gray-300"
          }`}
        >
          YIELD
        </span>
        <span
          onClick={() => handleTabClick("CEX")}
          className={`lg:px-4 lg:py-2 rounded-full px-2 text-xs  ${
            selectedTab === "CEX"
              ? "bg-purple-500 text-white rounded-full text-xs lg:text-base"
              : "dark:bg-gray-300"
          }`}
        >
          CEX
        </span>
        <span
          onClick={() => handleTabClick("INTERFACE")}
          className={`lg:px-4 lg:py-2 rounded-full px-2  text-xs ${
            selectedTab === "INTERFACE"
              ? "bg-purple-500 text-white rounded-full text-xs lg:text-base"
              : "dark:bg-gray-300"
          }`}
        >
          INTERFACE
        </span>
        <span
          onClick={() => handleTabClick("WALLETS")}
          className={`lg:px-4 lg:py-2 rounded-full px-2 text-xs ${
            selectedTab === "WALLETS"
              ? "bg-purple-500 text-white rounded-full text-xs lg:text-base"
              : "dark:bg-gray-300"
          }`}
        >
          WALLETS
        </span>
      </div>
      {selectedTab === "DEX" && (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-7 gap-2 md:gap-4 lg:gap-6 p-5 mt-10">
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <div className=" text-green-500 text-lg font-bold text-center p-8 rounded-lg">
                <img src="./vite.svg" className="w-full" />
              </div>
            </motion.button>
            <div className=" text-green-500 text-lg font-bold text-center p-14 rounded-lg">
              2
            </div>
            <div className=" text-green-500 text-lg font-bold text-center p-14 rounded-lg">
              3
            </div>
            <div className=" text-green-500 text-lg font-bold text-center p-14 rounded-lg">
              4
            </div>
            <div className=" text-green-500 text-lg font-bold text-center p-14 rounded-lg">
              4
            </div>
            <div className=" text-green-500 text-lg font-bold text-center p-14 rounded-lg">
              4
            </div>
            <div className=" text-green-500 text-lg font-bold text-center p-14 rounded-lg">
              4
            </div>
          </div>
          <a
            href="#"
            className="text-xs font-semibold border px-4 py-2 rounded-full hover:text-purple-600 hover:border-purple-600 text-white "
          >
            Become a partner
          </a>
        </div>
      )}
      {selectedTab === "YIELD" && (
        <div className="text-white">
          <section className="relative flex items-center w-full">
            <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
              <div className="relative flex-col items-start m-auto align-middle">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                  <div className="relative items-center gap-12 m-auto lg:inline-flex">
                    <div className="max-w-xl text-center lg:text-left">
                      <div>
                        <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                          I am a short heading
                        </p>
                        <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                          Use this paragraph to share information about your
                          company or products. Make it engaging and interesting,
                          and showcase your brand's personality. Thanks for
                          visiting our website!
                        </p>
                      </div>
                      <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                        <a
                          className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                          href="#"
                        >
                          <span>Read more</span>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="order-first block w-full mt-12 aspect-square lg:mt-0 lg:order-first">
                    <img
                      className="object-cover object-center w-full mx-auto bg-gray-300 lg:ml-auto"
                      alt="hero"
                      src="https://d33wubrfki0l68.cloudfront.net/ded521c426f480d4e473a11836c6ab8e7e948c84/95877/images/placeholders/square3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      {selectedTab === "CEX" && (
        <div className="text-white">This is the Yearly tab</div>
      )}
      {selectedTab === "INTERFACE" && (
        <div className="text-white">This is the Yearly tab</div>
      )}
      {selectedTab === "WALLETS" && (
        <div className="text-white">This is the Yearly tab</div>
      )}
    </div>
  );
};

export default SwitchFeature;
