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
    <div className="flex lg:flex-col lg:w-6/12 gap-2 p-2">
      <div className="w-28 lg:w-32 flex flex-col lg:flex-row lg:order-2 gap-4">
        {image?.map((img, index) => (
          <img
            src={urlFor(img && img)}
            alt=""
            key={index}
            className="small_img bg-grey rounded-[20px]"
            onMouseEnter={() => toggleProduct(img, index)}
          />
        ))}
      </div>
      <div className=" flex lg:order-1">
        <img
          src={urlFor(bigImage)}
          alt=""
          className="rounded-[20px] bg-grey w-[600px]"
        />
      </div>
    </div>
  );
}
