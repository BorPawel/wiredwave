"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { motion, useInView } from "framer-motion";
import TopLight from "../categoriesHomepage/categories/Tile/ProductTitle/Lights/TopLight/TopLight";
import BottomLight from "../categoriesHomepage/categories/Tile/ProductTitle/Lights/BottomLight/BottomLight";

const IntersectionHeader = () => {
  // const { scrollYProgress } = useScroll();
  const refHeader = useRef(null);
  const refContainer = useRef(null);

  const isInViewHeader = useInView(refHeader, {
    margin: "-100px",
    once: true,
  });
  const isInViewContainer = useInView(refContainer, {
    margin: "-200px",
    once: true,
  });

  const cardInfo = [
    {
      title: "Free shipping",
      description:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
      title: "Secure Payment",
      description:
        "Experience worry-free transactions with our secure payment options.",
    },
    {
      title: "Love to help",
      description:
        "Our dedicated team is here to assist you every step of the way.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <section className=" mx-auto max-w-screen-xl min-h-[1000px] text-white  mt-32 relative flex gap-16 justify-center items-center flex-col z-0">
      <div className="absolute left-1/2  -z-10 -translate-x-1/2 w-4/5 md:h-[400px] rounded-[100%]  bg-blue opacity-5 blur-[90px] pointer-events-none h-1/2"></div>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={
          isInViewHeader ? { opacity: 1, y: -20 } : { opacity: 0, y: 50 }
        }
        transition={{ duration: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
        ref={refHeader}
        class="font-bold text-center mb-8"
      >
        <span className="text-blue">Empowered</span> Purchasing Place
      </motion.h2>

      <div
      
        className="grid gird-cols-1 lg:grid-cols-3  gap-8"
      >
        {cardInfo.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={isInViewContainer ? { opacity: 1} : { opacity: 0}}
            transition={{ delay: 0.2 * index, duration: 0.2 }}
            ref={refContainer}
            className="flex flex-col relative justify-center  items-center gap-8 px-6 py-12 rounded-xl border border-grey h-[300px] overflow-hidden"
          >
            <TopLight />
            <h3 className="font-semibold">{card.title}</h3>
            <p className="text-center opacity-50">{card.description}</p>
            <BottomLight />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IntersectionHeader;
