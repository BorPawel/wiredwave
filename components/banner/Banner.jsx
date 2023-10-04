import React from "react";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import HeadingText from "../heading/HeadingText";
import Link from "next/link";
const Banner = ({
  banner: { smallText, desc, bigText, image, buttonText, slug },
}) => {
  return (
    <div className="w-full bg-grey min-h-[500px] md:min-h-[600px] rounded-3xl flex flex-col lg:flex-row">
      <div className="lg:w-7/12 order-2 lg:order-1 p-4 px-8 md:pl-16 flex flex-col justify-between lg:justify-around items-center lg:items-start gap-8">
        <div className=" flex flex-col">
          <div>
            <h5 className="w-full">{smallText}</h5>
            <h1>{bigText}</h1>
          </div>
          <div className="w-full md:w-4/5">
            <h5>Description</h5>
            <p className="text-sm text-left font-thin">{desc}</p>
          </div>
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
      <div className="lg:w-5/12 order-1 lg:order-2 flex justify-center items-center">
        <Link href={`/product/${slug.current}`}>
          <img src={urlFor(image && image[0]).width(700)} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
