"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Navbarcomponents from "../components/navbar/NavbarCompoents";
import Navbarcomponents2 from "./navbar/NavbarComponents2";
import Image from "next/image";
interface VariantsInterface extends Variants {
  hidden: { opacity: number; scaleX?: number; scaleY?: number };
  show: { opacity: number; scaleX?: number; scaleY?: number };
}

const Navbar: React.FC = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  const [isFirstOpen, setIsFirstOpen] = useState(true);

  useEffect(() => {
    if (
      !isOpen1 &&
      !isOpen2 &&
      !isOpen3 &&
      !isOpen4 &&
      !isOpen5 &&
      !isOpen6 &&
      !isOpen7 &&
      !isOpen8 &&
      !isOpen9
    ) {
      setIsFirstOpen(true);
    } else {
      setIsFirstOpen(false);
    }
  }, [
    isOpen1,
    isOpen2,
    isOpen3,
    isOpen4,
    isOpen5,
    isOpen6,
    isOpen7,
    isOpen8,
    isOpen9,
  ]);

  const scaleVariants: VariantsInterface = {
    hidden: { scaleX: 0, scaleY: 0, opacity: 0 },
    show: { scaleX: 1, scaleY: 1, opacity: 1 },
  };

  const opacityVariants: VariantsInterface = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const renderDropdown = (isOpen: boolean, Component: React.FC) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={isFirstOpen ? scaleVariants : opacityVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            <div className="absolute left-0 bg-gray-800 z-50 flex rounded-xl mt-5 ">
              <Component />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="relative items-center w-full   mx-auto md:px-12 lg:px-16 max-w-7xl text-white mt-10">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between py-1 ">
          <div>
            <img src="logo.svg" className="sm:w-60 lg:w-72 w-36" />
          </div>
          <div className="hidden sm:hidden lg:flex md:hidden sm:items-center ">
            <div
              className="relative"
              onMouseEnter={() => setIsOpen1(true)}
              onMouseLeave={() => setIsOpen1(false)}
            >
              <a
                href="#"
                className="text-white text-sm font-semibold hover:text-purple-600 mr-4 "
              >
                Borrow
              </a>
              {renderDropdown(isOpen1, Navbarcomponents)}{" "}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIsOpen2(true)}
              onMouseLeave={() => setIsOpen2(false)}
            >
              <a
                href="#"
                className="text-white text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Stake
              </a>
              {renderDropdown(isOpen2, Navbarcomponents2)}{" "}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIsOpen3(true)}
              onMouseLeave={() => setIsOpen3(false)}
            >
              <a
                href="#"
                className="text-white text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Bond
              </a>
              {renderDropdown(isOpen3, Navbarcomponents2)}{" "}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIsOpen4(true)}
              onMouseLeave={() => setIsOpen4(false)}
            >
              <a
                href="#"
                className="text-white text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Earn
              </a>
              {renderDropdown(isOpen4, Navbarcomponents)}{" "}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsOpen5(true)}
              onMouseLeave={() => setIsOpen5(false)}
            >
              <a
                href="#"
                className="text-white text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Swap
              </a>
              {renderDropdown(isOpen5, Navbarcomponents)}{" "}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsOpen6(true)}
              onMouseLeave={() => setIsOpen6(false)}
            >
              <a
                href="#"
                className="text-white text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Learn
              </a>
              {renderDropdown(isOpen6, Navbarcomponents)}{" "}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsOpen7(true)}
              onMouseLeave={() => setIsOpen7(false)}
            >
              <a
                href="#"
                className="text-white text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Blog
              </a>
              {renderDropdown(isOpen7, Navbarcomponents)}{" "}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsOpen8(true)}
              onMouseLeave={() => setIsOpen8(false)}
            >
              <a
                href="#"
                className="text-white text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Transparency
              </a>
              {renderDropdown(isOpen8, Navbarcomponents)}{" "}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsOpen9(true)}
              onMouseLeave={() => setIsOpen9(false)}
            >
              <a
                href="#"
                className="text-white text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Governance
              </a>
              {renderDropdown(isOpen9, Navbarcomponents)}{" "}
            </div>
          </div>

          <div className=" sm:flex sm:items-center">
            <a
              href="#"
              className="text-xs font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600 "
            >
              Open App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
