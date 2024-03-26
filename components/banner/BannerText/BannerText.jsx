"use client";
import React from "react";
import { motion } from "framer-motion";
const BannerText = ({ text }) => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
  
      <motion.h1
        className={` absolute z-[-1] hidden md:block  md:top-[30%] lg:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:text-[9rem] lg:text-[18vw] md:tracking-wider font-bold text-[#121212] `}
      
      variants={sentence}
      initial="hidden"
      animate="visible"
      >
        {text.split("").map((char, index) => (
          <motion.span key={char + "-" + index} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

  );
};

export default BannerText;
