"use client";
import { urlFor } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useNextSanityImage } from "next-sanity-image";
import NextImage from "@/components/reusable/NextImage/NextImage";

const ProductImage = ({ image }) => {
  const imageProps = useNextSanityImage(client, image, {
    fit: "max",
  });
  return (
    <div className="scale-50 lg:scale-100 lg:h-3/4 md:z-10">
      <NextImage
        image={image}
        className="max-w-[300px] group-hover:scale-125 duration-300 opacity-50 md:opacity-100 md:group-hover:opacity-50"
        alt="category image"
        width={300}
        height={300}
      />
   
    </div>
  );
};

export default ProductImage;
