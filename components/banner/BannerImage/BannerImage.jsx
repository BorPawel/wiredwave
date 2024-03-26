"use client";

import React from "react";

import NextImage from "@/components/reusable/NextImage/NextImage";
import { motion } from "framer-motion";
const BannerImage = ({ banner }) => {
  return (
    <motion.div
      initial={{x: 900}}
      animate={{x: 0}}
      transition={{delay: 0.8}}
      className="lg:w-6/12 order-1 lg:order-2 flex justify-center items-center z-0 relative"
    >
      <NextImage
        image={banner.image[0]}
        alt="banner image"
        className="object-cover object-center rounded"
        width={700}
        height={700}
      />
    </motion.div>
  );
};

export default BannerImage;
