"use client";
import React from "react";
import { urlFor } from "@/sanity/lib/client";
import Button from "@/components/reusable/button/Button";

const ModalProductGallery = ({ image }) => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        {image.map((item, index) => (
          <div>
            <img
              key={index}
              alt=""
              src={item.image && urlFor(item.image).width(200)}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <img alt="" src={image[0].image && urlFor(image[0].image).width(500)} />
        <div className="flex justify-center items-center h-full gap-4 flex-col">
            <p className="text-white">Colors:</p>
          <div className="flex gap-4">
            {image.map((color, index) => (
              <div
                className="  rounded-full"
                style={{
                  backgroundColor: color.color.hex,
                  width: "50px",
                  height: "50px",
                }}
              >
                {" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProductGallery;
