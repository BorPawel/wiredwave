"use client";
import React from "react";
import MainImage from "./MainImage/MainImage";
import ImageThumbnails from "./ImageThumbnails/ImageThumbnails";


const ModalProductGallery = ({ image }) => {
  return (
    <div className="flex flex-col w-full md:w-1/2 modal_container">
      <MainImage image={image} />
      <ImageThumbnails images={image} />
    </div>
  );
};

export default ModalProductGallery;
