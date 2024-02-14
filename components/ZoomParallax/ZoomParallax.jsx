'use client'
import React, { useEffect, useRef } from "react";
import img1 from "@/assets/parallax/1.jpg";
import img2 from "@/assets/parallax/2.webp";
import img3 from "@/assets/parallax/3.jpg";
import img4 from "@/assets/parallax/4.jpg";
import img5 from "@/assets/parallax/5.webp";
import img6 from "@/assets/parallax/6.jpg";
import img7 from "@/assets/parallax/7.jpg";
import img8 from "@/assets/parallax/8.webp";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image"
import Lenis from '@studio-freight/lenis'


const ZoomParallax = () => {
  


  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });


  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale10 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale11 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const images = [
    {
      img: img1,
      scale: scale4,
      styles: {
        top: "0",
        left: "0",
      },
    },
    {
      img: img2,
      scale: scale5,
      styles: {
        top: "-29.5vh",
        left: "25vw",
      },
    },
    {
      img: img3,
      scale: scale6,
      styles: {
        top: "29vh",
        left: "-5vw",
      },
    },
    {
      img: img4,
      scale: scale7,
      styles: {
        top: "27vh",
        left: "15vw",
      },
    },
    {
      img: img5,
      scale: scale8,
      styles: {
        top: "0",
        left: "17vw",
      },
    },
    {
      img: img6,
      scale: scale9,
      styles: {
        top: "19vh",
        left: "-20vw",
      },
    },
    {
      img: img7,
      scale: scale10,
      styles: {
        top: "-10vh",
        left: "-12vw",
       
      },
    },
    {
      img: img8,
      scale: scale11,
      styles: {
        top: "-30vh",
        left: "6vw",
      },
    },
  ];


  useEffect(() =>{
    const lenis = new Lenis()

    function raf(time){
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  },[])
  return (
    <div ref={container}  className="hidden md:block h-[300vh] w-full relative my-64">
      <div className="sticky h-[100vh] top-0  overflow-hidden">
        {images.map((image) => (
          <motion.div style={{
            scale: image.scale
          }} className="w-full h-full absolute flex justify-center items-center">
            <div className="relative w-[25vw] h-[25vh]" style={{
                top: image.styles.top,
                left: image.styles.left,
            }}>
                <Image fill src={image.img}  alt="" objectFit="contain"/>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ZoomParallax;
