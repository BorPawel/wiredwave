"use client";
import React from "react";
import Image from "next/image";

import BgHeader from "@/assets/images/bg-header.png";
import { motion, useScroll, useTransform } from "framer-motion";

const IntersectionHeader = () => {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], [400, -600]);
  const x2 = useTransform(scrollYProgress, [1, 0], [600, -300]);

  return (
    <div className=" m-auto w-full min-h-[1000px] text-white  my-32 overflow-clip relative md:grid place-items-center z-0">
     
      <div className="w-full flex flex-col items-center justify-evenly  h-full overflow-hidden">
        <motion.span
          style={{
            x: x1,
          }}
          className="text-[10vw] whitespace-nowrap"
        >
          Unlock Sonic Brilliance
        </motion.span>
        <motion.span
          style={{
            x: x2,
          }}
          className="text-[4vw] whitespace-nowrap"
        >
          Discover Headphones That Resonate with You
        </motion.span>
      </div>
    </div>
  );
};

export default IntersectionHeader;
