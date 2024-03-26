"use client";
import { motion } from "framer-motion";
export const BannerPrice = ({ price }) => (
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
    className="font-medium drop-shadow-glow text-white"
  >
    ${price}
  </motion.h2>
);
