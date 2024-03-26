"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Circles() {
  const circle =
    "rounded-full border-solid border-2 border-blue absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]";
  return (
    <motion.div
    
    className="hidden lg:block absolute top-[35%] left-[70%]">
      <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ delay: 0.1 }}
        className={`w-[20px] h-[20px] ${circle} bg-blue drop-shadow-smallCircle`}
      ></motion.span>
      <motion.span
       initial={{ opacity: 0 }}
       animate={{ opacity: 1}}
       transition={{ delay: 0.2 }}
        className={`w-[10vw] h-[10vw] ${circle} border-[8px] drop-shadow-inner`}
      ></motion.span>
      <motion.span
       initial={{ opacity: 0 }}
       animate={{ opacity: 1}}
       transition={{ delay: 0.3 }}
        className={`w-[22vw] h-[22vw] ${circle} border-[6px] drop-shadow-inner `}
      ></motion.span>
      <motion.span
       initial={{ opacity: 0 }}
       animate={{ opacity: 1}}
       transition={{ delay: 0.4 }}
        className={`w-[35vw] h-[35vw] ${circle} border-[4px] drop-shadow-inner opacity-60`}
      ></motion.span>
      <motion.span
       initial={{ opacity: 0 }}
       animate={{ opacity: 1}}
       transition={{ delay: 0.5 }}
        className={`w-[50vw] h-[50vw] ${circle} order-[1px] drop-shadow-outer opacity-20`}
      ></motion.span>
    </motion.div>
  );
}
