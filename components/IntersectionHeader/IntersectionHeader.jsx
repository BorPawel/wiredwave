'use client'
import React from "react";
import Image from "next/image";

import BgHeader from "@/assets/images/bg-header.png";
import { motion, useScroll } from "framer-motion"

const IntersectionHeader = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="hidden m-auto w-full max-w-[1600px] min-h-[1000px] text-white  my-32 image-container overflow-clip relative md:grid place-items-center z-0">
      <div className="absolute w-full h-full  z-10 inset-blur"></div>
      {/* <Image src={BgHeader} className="opacity-40 blur-effect absolute -z-1 " /> */}
      <motion.div style={{
        transition: scrollYProgress  
      }}
      className="w-3/4 h-full z-20 flex flex-col justify-center items-center">
        <span className="text-[6rem]  font-semibold leading-loose big-text">
          Unlock Sonic Brilliance
        </span>
        <span className="text-[3rem]  big-text">
          Discover Headphones That Resonate with You
        </span>
      </motion.div>
    </div>
  );
};

export default IntersectionHeader;
