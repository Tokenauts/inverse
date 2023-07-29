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
    <div className="relative items-center w-full  gap-4 px-5 lg:py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
      <img
        src="grid.svg"
        className="absolute opacity-60 mix-blend-plus-lighter w-full h-full "
        style={{ zIndex: -1 }}
      />
      <div className="grid grid-cols-2 z-10" style={{ zIndex: 2 }}>
        <h1 className="lg:text-6xl text-white font-black text-4xl mt-8   ">
          Our Ecosystem
        </h1>
        <div className="inline-flex border items-center mt-10 text-white  rounded-3xl cursor-pointer mx-auto px-2 bg-gray-700     lg:px-4 py-2">
          <span
            onClick={() => handleTabClick("DEX")}
            className={`lg:px-4 lg:py-2 rounded-full px-2 text-xs    ${
              selectedTab === "DEX"
                ? " bg-violet-500 border text-white font-light rounded-full text-xs lg:text-base"
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
          <div className="grid grid-cols-3 gap-4 p-5  max-w-xl mx-auto ">
            <div className="shadow-lg text-lg font-bold text-center  p-10 rounded-lg row-span-1">
              <img src="./DEX-01.svg" className="  " />
            </div>
            <div className="shadow-lg text-lg font-bold text-center p-10 rounded-lg">
              <img src="./DEX-02.svg" className=" " />
            </div>
            <div className="shadow-lg text-lg font-bold text-center p-10 rounded-lg row-span-1">
              <img src="./DEX-03.svg" className="" />
            </div>
            <div className="shadow-lg  text-lg font-bold text-center p-10 rounded-lg">
              <img src="./DEX-04.svg" className=" " />
            </div>
            <div className="shadow-lg  text-lg font-bold text-center p-10 rounded-lg col-span-1">
              <img src="./DEX-05.svg" className=" " />
            </div>
            <div className="shadow-lg  text-lg font-bold text-center p-10 rounded-lg col-span-1">
              <img src="./DEX-06.svg" className="" />
            </div>
          </div>
        </div>
      )}
      {selectedTab === "YIELD" && (
        <div>
          <div className="grid grid-cols-3 gap-4 p-5">
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-1">
              1
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
              2
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-1">
              3
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
              4
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-1">
              5
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-1">
              6
            </div>
          </div>
        </div>
      )}
      {selectedTab === "CEX" && (
        <div>
          <div className="grid grid-cols-3 gap-4 p-5">
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-1">
              1
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
              2
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-1">
              3
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
              4
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-1">
              5
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-1">
              6
            </div>
          </div>
        </div>
      )}
      {selectedTab === "INTERFACE" && (
        <div>
          <div className="grid grid-cols-3 gap-4 p-5">
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-1">
              1
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
              2
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-1">
              3
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
              4
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-1">
              5
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-1">
              6
            </div>
          </div>
        </div>
      )}
      {selectedTab === "WALLETS" && (
        <div>
          <div className="grid grid-cols-3 gap-4 p-5">
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-1">
              1
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
              2
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-1">
              3
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
              4
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-1">
              5
            </div>
            <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-1">
              6
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwitchFeature;
