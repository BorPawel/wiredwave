"use client";
import { urlFor } from "@/sanity/lib/client";
import React from "react";

const Layout = ({ product }) => {
  return (
    <div className="w-full lg:w-1/2  ">
      <div className="grid grid-cols-3 gap-4 aspect-video &:rounded-[20px]  gallery_wrapper ">
        {product.map((item, index) =>
          index <= 3 ? (
            <div
              className={
                index === 0 || index === 3
                  ? "col-span-2 flex-center relative overflow-hidden border-grey border-b border-t"
                  : "flex-center relative overflow-hidden border-grey border-b border-t"
              }
            >
              <div
                class="left-1/2 top-0 w-[300px] max-w-[300px] user-select-none center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
                }}
              ></div>
              <div
                className="-top-1 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px] user-select-none center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
                style={{
                  background:
                    "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%),radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)",
                }}
              ></div>

              <img src={urlFor(item.image && item.image[0]).width(200)} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Layout;
