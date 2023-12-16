import { urlFor } from "@/sanity/lib/client";
import React from "react";

const Tile = ({ products, category }) => {
  const findProduct = products?.find((item) => item.category === category);
  const chars = findProduct?.category.split("");
  return findProduct  ? (
    <div className="flex flex-col w-full h-full items-center justify-center p-2 relative overflow-hidden group z-0 ">
      <div className="h-3/4 z-10">
        <img
          src={urlFor(findProduct?.image && findProduct?.image[0])}
          className="max-w-[300px] group-hover:scale-125 duration-300"
        />
      </div>

      <div className="h-1/4  flex justify-center items-center w-full absolute duration-300 bottom-[40%] -z-1 group-hover:z-20">
        <div className="w-full p-3 flex justify-center items-center duration-300 gap-8 group-hover:gap-2">
          {chars?.map((char) => (
            <span className="text-4xl text-dark font-extrabold group-hover:text-black group-hover:text-5xl duration-300 group-hover:[text-shadow:_1px_1px_2px_white]">
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  ) : null
};

export default Tile;
