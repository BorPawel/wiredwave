"use client";
import React from "react";
import Image from "next/image";

import BgHeader from "@/assets/images/bg-header.png";
import { motion, useScroll, useTransform } from "framer-motion";
import TopLight from "../categoriesHomepage/categories/Tile/ProductTitle/Lights/TopLight/TopLight";
import BottomLight from "../categoriesHomepage/categories/Tile/ProductTitle/Lights/BottomLight/BottomLight";

const IntersectionHeader = () => {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], [400, -600]);
  const x2 = useTransform(scrollYProgress, [1, 0], [600, -300]);

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
      title: "Love to help you",
      description:
        "Our dedicated team is here to assist you every step of the way.",
    },
  ];
  return (
    <section className=" mx-auto max-w-screen-xl min-h-[1000px] text-white  my-32 relative flex gap-8 justify-center items-center flex-col z-0">
      <div className="absolute left-1/2  -z-10 -translate-x-1/2 w-4/5 md:h-[400px] rounded-[100%]  bg-blue opacity-5 blur-[90px] pointer-events-none h-1/2"></div>
      {/* <div className="max-w-[1600px] w-full flex flex-col items-center gap-4 justify-center  h-full overflow-hidden">
        <h2
          style={{
            x: x1,
          }}
          className=" text-center"
        >
          Immerse Yourself in Sound Excellence!
        </h2>
        <p
          style={{
            x: x2,
          }}
          className=" lg:w-1/2 text-center"
        >
          Elevate your audio experience with our premium collection of
          headphones, designed to deliver unparalleled sound quality and
          comfort.
        </p>
      </div> */}
      
      <h2 class="font-bold text-center mb-8">Experience Hassle-Free <br/> Shopping</h2>

      <div className="grid gird-cols-1 lg:grid-cols-3  gap-8">
        {cardInfo.map((card, index) => (
         
            <div className="flex flex-col relative justify-center max-w-[400px] items-center gap-8 px-6 py-12 rounded-xl border border-grey h-[300px] overflow-hidden">
              <TopLight/>
              <h4 className="font-semibold">{card.title}</h4>
              <p className="text-center opacity-50">{card.description}</p>
              <BottomLight/>
            </div>
        
        ))}
      </div>
    </section>
  );
};

export default IntersectionHeader;
