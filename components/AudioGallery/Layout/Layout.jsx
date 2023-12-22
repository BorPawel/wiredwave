'use client'
import { urlFor } from "@/sanity/lib/client";
import React from "react";

const Layout = ({ product }) => {
  return (
    <div className="w-full lg:w-1/2 ">
      <div className="grid grid-cols-3 gap-4 aspect-video &:rounded-[20px] gallery_wrapper">
      {product.map((item, index) =>
          index <= 3 ? (
            <div className={index === 0 || index === 3 ? "col-span-2 flex-center" : "flex-center"}>
              <img src={urlFor(item.image && item.image[0]).width(200)}/>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Layout;
