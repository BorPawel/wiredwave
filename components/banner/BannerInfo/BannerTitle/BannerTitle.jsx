"use client";
import { motion } from "framer-motion";
export const BannerTitle = ({ name }) => (
  <motion.h1 
  
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="w-full text-blue font-bold text-4xl md:text-7xl ">{name}</motion.h1>
);
