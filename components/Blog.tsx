"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import cardContents from "./content";

const navVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

// Define animations for the cards
const cardVariants = {
  hover: { scale: 1.02 },
};

const Blog: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const gap = 16; // 1rem in px
      carouselRef.current.scrollLeft +=
        direction === "right" ? cardWidth + gap : -(cardWidth + gap);
    }
  };

  useEffect(() => {
    if (carouselRef.current && carouselRef.current.children.length > 0) {
      const gap = 16; // 1rem in px
      const cardWidth = (window.innerWidth - gap * 3) / 4;
      setCardWidth(cardWidth);
    }
  }, []);

  return (
    <motion.div variants={navVariants} initial="hidden" animate="show">
      <div className="relative items-center w-full px-5 lg:py-24 mx-auto md:px-12 lg:px-16 max-w-8xl">
        <h1 className="text-5xl lg:text-6xl font-black text-left text-white mt-10">
          The Latest Alpha...
        </h1>

        <section className="flex items-center w-full">
          <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20">
            <div
              className="flex space-x-4 overflow-x-scroll no-scrollbar"
              ref={carouselRef}
            >
              {cardContents.map((card, index) => (
                <motion.div
                  key={index}
                  className="inline-block flex-none w-96 p-2"
                  variants={cardVariants} // Apply animations
                  whileHover="hover" // Apply scale effect on hover
                  transition={{ duration: 0.3 }} // Transition duration
                >
                  <div className="block rounded-lg border">
                    <a href="#!">
                      <img
                        className="rounded-t-lg"
                        src={card.imgLink}
                        alt={card.title}
                      />
                    </a>
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {card.title}
                      </h5>
                      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {card.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between w-full mt-4">
              <button
                className="bg-blue-500 text-white p-2 rounded-lg"
                onClick={() => scroll("left")}
              >
                Previous
              </button>
              <button
                className="bg-blue-500 text-white p-2 rounded-lg"
                onClick={() => scroll("right")}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Blog;
