"use client";
import React from "react";
import { urlFor } from "@/sanity/lib/client";

const ModalProductGallery = ({ image }) => {
  return (
    <div className="flex flex-col w-full md:w-1/2 modal_container">
      {image ? (
        <div className="flex flex-col">
          <div className="w-full flex items-center justify-center">
            <img
              alt=""
              src={image[0]?.image && urlFor(image[0].image).width(500)}
            />{" "}
          </div>
        </div>
      ) : (
        <div className=" h-[500px] text-white bg-slate-900 justify-center items-center flex">
          {" "}
          No Image
        </div>
      )}
      {image ? (
        <div className="flex justify-center items-center">
          {image?.map((item, index) => (
            <div>
              <img
                key={index}
                alt=""
                src={item?.image && urlFor(item.image).width(100)}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ModalProductGallery;
