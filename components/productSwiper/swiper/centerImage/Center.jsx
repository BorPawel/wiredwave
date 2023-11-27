import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/client";

const Center = ({filterProducts, bigIndex, toggleTooltip, category}) => {

  return (
    <div className=" h-[350px] w-[350px] p-4 relative z-0 ">
      <Link
        href={`/product/${category.toLowerCase()}/${
          filterProducts[bigIndex].slug.current
        }`}
      >
        <img
          src={urlFor(filterProducts[bigIndex]?.image[0])}
          className="z-2"
          onMouseEnter={toggleTooltip}
          onMouseLeave={toggleTooltip}
        />
      </Link>

      <span className="absolute w-full h-[100px] bg-grey bottom-2 rounded-[50%] -z-10 left-[50%] translate-x-[-50%]  shadow-inner-and-outer"></span>
    </div>
  );
};

export default Center;
