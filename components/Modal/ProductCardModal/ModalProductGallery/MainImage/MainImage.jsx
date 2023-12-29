
import React from 'react'
import { urlFor } from "@/sanity/lib/client";
const MainImage = ({ image }) => {
    if (!image) {
      return (
        <div className="h-[500px] text-white bg-slate-900 justify-center items-center flex">
          No Image
        </div>
      );
    }
  
    return (
      <div className="flex flex-col">
        <div className="w-full flex items-center justify-center">
          <img
            alt=""
            src={image[0]?.image && urlFor(image[0].image).width(500)}
          />
        </div>
      </div>
    );
  };


export default MainImage