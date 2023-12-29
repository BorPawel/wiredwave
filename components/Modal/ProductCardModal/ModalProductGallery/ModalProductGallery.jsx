"use client";
import React from "react";
import { urlFor } from "@/sanity/lib/client";
import Button from "@/components/reusable/button/Button";

const ModalProductGallery = ({ image }) => {
  return (
    <div className="flex flex-col w-1/2 modal_container">
      {image ? (
        <div className="flex flex-col">
          <div className="w-full flex items-center justify-center">
            <img
              alt=""
              src={image[0]?.image && urlFor(image[0].image).width(500)}
            />{" "}
          </div>

          {/* <div className="flex justify-center items-center h-full gap-4 flex-col">
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
        </div> */}
        </div>
      ) : (
        <div className=" h-[500px] text-white bg-slate-900 justify-center items-center flex"> No Image</div>
      )}
    {image ?   <div className="flex justify-center items-center">
        {image?.map((item, index) => (
          <div>
            <img
              key={index}
              alt=""
              src={item?.image && urlFor(item.image).width(100)}
            />
          </div>
        ))}
      </div> : null}
    </div>
  );
};

export default ModalProductGallery;
