import React, { useState } from "react";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import HeadingText from "../heading/HeadingText";
import Link from "next/link";
const Banner = ({
  banner: { smallText, desc, bigText, image, buttonText, slug, price, name },
}) => {
  const circle ="rounded-full border-solid border-2 border-blue absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
  return (
    <div className="w-full min-h-[500px] md:min-h-[800px] rounded-3xl flex flex-col lg:flex-row relative z-0 ">
      <div className="hidden lg:block absolute top-[35%] left-[75%]">
        <span className={`w-[20px] h-[20px] ${circle} bg-blue drop-shadow-smallCircle`}></span>
        <span className={`w-[10vw] h-[10vw] ${circle} border-[8px] drop-shadow-inner`}></span>
        <span className={`w-[25vw] h-[25vw] ${circle} border-[6px] drop-shadow-inner `}></span>
        <span className={`w-[35vw] h-[35vw] ${circle} border-[4px] drop-shadow-inner opacity-60`}></span>
        <span className={`w-[50vw] h-[50vw] ${circle} order-[1px] drop-shadow-outer opacity-20`}></span>
      </div>
      <h1 className="hidden md:block absolute z-[-1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:text-[9rem] lg:text-[20vw] md:tracking-wider font-bold text-grey">
        {bigText}
      </h1>
      <div className="lg:w-6/12  order-2 lg:order-1 p-4 px-8 md:pl-16 flex flex-col gap-8 items-center lg:items-start justify-center">
        <div className=" flex flex-col h-3/4 justify-center gap-6">
          <div>
            <h1 className="w-full text-blue font-bold text-4xl md:text-7xl ">
              {name}
            </h1>
            {/* <h1   >{bigText}</h1> */}
          </div>
          <div className="w-full md:w-4/5">
            <p className="text-sm text-left font-thin leading-6 text-[#a0a0a0]">
              {desc}
            </p>
          </div>
          <h2 className="font-bold drop-shadow-glow">${price}</h2>
          <Link href={`/product/${slug.current}`}>
            <button
              type="button"
              className="w-64 rounded-[90px] bg-transparent  border-blue border-solid border-2 text-2xl p-4"
            >
              {buttonText}{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:w-6/12 order-1 lg:order-2 flex justify-center items-center z-0 relative">
        <h1 className="md:hidden absolute z-[-1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-8xl md:text-[9rem] lg:text-[10vw] md:tracking-wider font-bold text-grey">
          {bigText}
        </h1>
        <img src={urlFor(image && image[0]).width(700)} alt="" className="" />
      </div>
    </div>
  );
};

export default Banner;
