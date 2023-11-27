import { Colors } from "@/components/product_details/colors/Colors";
import { Reviews } from "@/components/product_details/reviews/Reviews";
import { urlFor } from "@/sanity/lib/client";
import React from "react";

const LeftTooltip = ({filterProducts, bigIndex}) => {
  return (
    <div
      className={`absolute w-1/3 h-full bg-dark left-0 top-0 z-10 flex flex-col gap-8`}
    >
      <div>
        <p className="hidden md:block text-sm md:w-3/4 pr-2 my-6">
          {filterProducts[bigIndex]?.shortDesc}
        </p>
        <Reviews
          stars={filterProducts[bigIndex]?.stars}
          reviews={filterProducts[bigIndex]?.reviews}
        />
      </div>

      <span className="h-[2px] w-full md:w-3/4 mb-8 md:mt-3 bg-grey"></span>
      <div className="flex w-full gap-2 items-start flex-wrap">
        {filterProducts[bigIndex].image?.map((img, index) => (
          <img
            src={urlFor(img && img)}
            alt=""
            key={index}
            className="w-20 md:w-28 small_img bg-grey rounded-[20px]"
            onMouseEnter={() => toggleProduct(img, index)}
          />
        ))}
      </div>
      <div className="flex flex-col items-start mb-4 w-full">
        {filterProducts[bigIndex]?.colors && (
          <Colors colors={filterProducts[bigIndex]?.colors} />
        )}
      </div>
    </div>
  );
};

export default LeftTooltip;
