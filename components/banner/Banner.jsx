import React, { useState } from "react";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import HeadingText from "../heading/HeadingText";
import Link from "next/link";
const Banner = ({
  banner: { smallText, desc, bigText, image, buttonText, slug, price },
}) => {
  const [halfText, setHalfText] = useState();
  return (
    <div className="w-full min-h-[500px] md:min-h-[800px] rounded-3xl flex flex-col lg:flex-row relative z-0">
       <h1 className="hidden md:block absolute z-[-1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:text-[9rem] lg:text-[20vw] md:tracking-wider font-bold text-grey">{bigText}</h1>
      <div className="lg:w-6/12  order-2 lg:order-1 p-4 px-8 md:pl-16 flex flex-col justify-between lg:justify-around items-center lg:items-start gap-8">
        <div className=" flex flex-col justify-evenly h-1/2">
          <div>
            <h1 className="w-full text-blue font-bold text-4xl md:text-6xl">{smallText}</h1>
            {/* <h1   >{bigText}</h1> */}
          </div>
          <div className="w-full md:w-4/5">
            <h5>Description</h5>
            <p className="text-sm text-left font-thin">{desc}</p>
          </div>
          <h4>${price}</h4>
        </div>

        <button
          type="button"
          className="hidden md:block w-64 rounded-2xl bg-blue text-2xl p-4"
        >
          {buttonText}
        </button>
        <button
          type="button"
          className="md:hidden rounded-full bg-blue w-16 h-16 flex justify-center items-center"
        >
          <AiOutlineShoppingCart className="text-3xl" />
        </button>
      </div>
      <div className="lg:w-6/12 order-1 lg:order-2 flex justify-center items-center z-0 relative">
        <Link href={`/product/${slug.current}`}>
        <h1 className="md:hidden absolute z-[-1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-8xl md:text-[9rem] lg:text-[10vw] md:tracking-wider font-bold text-grey">{bigText}</h1>
          <img src={urlFor(image && image[0]).width(700)} alt="" className=""/>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
