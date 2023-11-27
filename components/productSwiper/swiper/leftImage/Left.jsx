import { urlFor } from "@/sanity/lib/client";
import React from "react";

const Left = ({filterProducts, smallLeftIndex}) => {
  return (
    <div className="h-[200px] w-[200px] relative z-0">
      {" "}
      <img src={urlFor(filterProducts[smallLeftIndex]?.image[0])} />
      <span className="absolute w-full h-[50px] bg-grey -bottom-2 rounded-[50%] -z-10 left-[50%] translate-x-[-50%] shadow-inner-and-outer"></span>
    </div>
  );
};

export default Left;
