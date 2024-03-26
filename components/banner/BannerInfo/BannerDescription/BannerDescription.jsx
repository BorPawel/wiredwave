"use client";
import { motion } from "framer-motion";
export const BannerDescription = ({ desc }) => (
    <div className="w-full md:w-4/5">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      className="text-sm text-left font-thin leading-6 text-[#a0a0a0]">
        {desc}
      </motion.p>
    </div>
  );