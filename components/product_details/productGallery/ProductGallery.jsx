"use client";
import React, { useEffect, useState } from "react";

import NextImage from "@/components/reusable/NextImage/NextImage";
export function ProductGallery({ images }) {
  const [bigImage, setBigImage] = useState(images[0].image);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const smallImgStyles = "w-20 md:w-28 lg:w-32 bg-grey rounded-[20px]";
  const toggleProduct = (image, index) => {
    setBigImage(image);
    setActiveImageIndex(index);
  };

  useEffect(() => {
    setBigImage(images[0].image);
    setActiveImageIndex(0);
  }, [images]);

  return (
    <div className="flex flex-col lg:w-7/12 gap-2 p-2">
      <div className=" flex-center">
        <NextImage
          image={bigImage}
          alt="big Image"
          className="rounded-[20px]  w-[600px]"
          width={600}
          height={600}
        />
      </div>
      <div className="w-full flex-center gap-2 md:gap-4 lg:gap-6">
        {images?.map((img, index) => (
          <NextImage
            image={img.image}
            alt="small Image"
            className={
              index === activeImageIndex
                ? `small_img_active ${smallImgStyles}`
                : `${smallImgStyles} small_img`
            }
            onMouseEnter={() => toggleProduct(img.image, index)}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
}
