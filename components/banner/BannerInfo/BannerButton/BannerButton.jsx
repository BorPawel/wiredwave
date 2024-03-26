"use client"
import Button from "@/components/reusable/button/Button";
import Link from "next/link";
import { motion } from "framer-motion";
export const BannerButton = ({ lowerCategory, slug, buttonText }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9 }}
  >
    <Link href={`/product/${lowerCategory}/${slug}`}>
      <Button buttonText={buttonText} type="full" />
    </Link>
  </motion.div>
);
