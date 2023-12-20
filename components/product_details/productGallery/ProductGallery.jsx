'use client'
import React, { useEffect, useState } from "react";
  
import { urlFor } from "@/sanity/lib/client";
export function ProductGallery({ image }) {
  
  const [bigImage, setBigImage] = useState(image[0]);
  const toggleProduct = (image, index) => {
    setBigImage(image);

    const smallImg = document.querySelectorAll(".small_img");
    smallImg.forEach((img) => {
      img.classList.remove("small_img_active");
    });
    smallImg[index].classList.add("small_img_active");
  };
  useEffect(() => {
    document
      .querySelectorAll(".small_img")[0]
      .classList.add("small_img_active");
  }, []);
  return (
    <div className="flex flex-col lg:w-7/12 gap-2 p-2">
     
      <div className=" flex-center">
        <img
          src={urlFor(bigImage)}
          alt=""
          className="rounded-[20px]  w-[600px]"
        />
      </div>
       <div className="w-full flex-center gap-2 md:gap-4 lg:gap-6">
        {image?.map((img, index) => (
          <img
            src={urlFor(img && img)}
            alt=""
            key={index}
            className="w-20 md:w-28 lg:w-32 small_img bg-grey rounded-[20px]"
            onMouseEnter={() => toggleProduct(img, index)}
          />
        ))}
      </div>
    </div>
  );
}
