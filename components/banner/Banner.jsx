"use client";
import React from "react";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import ButtonFull from "@/components/reusable/button/Button";
import { Circles } from "../reusable/circles/Circles";
const Banner = ({ banner }) => {
  const lowerCategory = banner.category.toLowerCase();
  console.log(lowerCategory)

  return (
    <div className="w-full min-h-[500px] md:min-h-[800px] rounded-3xl flex flex-col lg:flex-row relative z-0 overflow-hidden md:overflow-visible mt-24">
      <Circles />
      <h1 className="hidden lg:block absolute z-[-1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:text-[9rem] lg:text-[20vw] md:tracking-wider font-bold text-grey">
        {banner.bigText}
      </h1>
      <div className="lg:w-6/12  order-2 lg:order-1 p-4 px-8 md:pl-16 flex flex-col gap-8 items-center justify-center ">
        <div className=" flex flex-col h-3/4 justify-center gap-6">
          <div>
            <h1 className="w-full text-blue font-bold text-4xl md:text-7xl ">
              {banner.name}
            </h1>
          </div>
          <div className="w-full md:w-4/5">
            <p className="text-sm text-left font-thin leading-6 text-[#a0a0a0]">
              {banner.desc}
            </p>
          </div>
          <h2 className="font-medium drop-shadow-glow">${banner.price}</h2>
          <Link href={`/product/${lowerCategory}/${banner.slug.current}`}>
            <ButtonFull buttonText={banner.buttonText} type="full" />
          </Link>
        </div>
      </div>
      <div className="lg:w-6/12 order-1 lg:order-2 flex justify-center items-center z-0 relative">
        <h1 className="lg:hidden absolute z-[-1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[22vw] md:tracking-wider font-bold text-grey">
          {banner.bigText}
        </h1>
        <img
          src={urlFor(banner.image && banner.image[0]).width(700)}
          alt=""
          className=""
        />
      </div>
    </div>
  );
};

export default Banner;
