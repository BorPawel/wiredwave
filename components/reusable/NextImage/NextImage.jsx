import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useNextSanityImage } from "next-sanity-image";

const NextImage = ({ image, className, alt, width, height,onMouseEnter }) => {
  const imageProps = useNextSanityImage(client, image, {
    fit: "max",
  });
  return (
    <Image
      {...imageProps}
      className={className}
      alt={alt}
      width={width}
      height={height}
      onMouseEnter={onMouseEnter}
    />
  );
};

export default NextImage;
