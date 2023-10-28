import { urlFor } from "@/sanity/lib/client";
import React, { useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
const ProductSwiper = ({ products, category }) => {
  const filterProducts = products.filter(
    (product) => category === product.category && product
  );

  const [smallLeftIndex, setSmallLeftIndex] = useState(0);
  const [bigIndex, setBigIndex] = useState(1);
  const [smallRightIndex, setSmallRightIndex] = useState(2);
  const [lastIndex, setLastIndex] = useState(filterProducts.length);
    console.log(lastIndex)
  const swipeNext = () => {
      setSmallLeftIndex((prev) => (prev+1 >=  lastIndex ? 0 : prev + 1));
      setBigIndex((prev) => (prev+1 >=  lastIndex ? 0 : prev + 1));
      setSmallRightIndex((prev) => (prev+1 >=  lastIndex ? 0 : prev + 1));
};
return (
    <div>
      <h3 className="w-full flex-center">{category}</h3>
      <div className="w-full flex justify-around items-center h-[400px] ">
        <div className="h-[200px] w-[200px] relative z-0">
          {" "}
          <img src={urlFor(filterProducts[smallLeftIndex]?.image[0])} />
          <span className="absolute w-full h-[50px] bg-grey bottom-0 rounded-[50%] -z-10 left-[50%] translate-x-[-50%]"></span>
        </div>
        <div className=" h-[350px] w-[350px] p-4 relative z-0">
          <img
            src={urlFor(filterProducts[bigIndex].image[0])}
            className="z-2"
          />
          <span className="absolute w-full h-[100px] bg-grey bottom-2 rounded-[50%] -z-10 left-[50%] translate-x-[-50%]"></span>
        </div>
        <div className=" h-[200px] w-[200px] relative z-0">
          {" "}
          <img src={urlFor(filterProducts[smallRightIndex].image[0])} />
          <span className="absolute w-full h-[50px] bg-grey bottom-0 rounded-[50%] -z-10 left-[50%] translate-x-[-50%]"></span>
        </div>
      </div>
      <div className="flex w-full justify-around">
        <div className="w-[200px] flex-center">
          <button
            type="button"
            className="bg-grey w-14 h-14 flex-center rounded-full"
          >
            <BiSolidLeftArrow className="text-3xl " />
          </button>
        </div>
        <div className="w-[350px] flex-center flex-col">
          <p>Jabra Elite 45h</p>
          <p>$ 299</p>
        </div>
        <div className="w-[200px] flex-center">
          <button
            type="button"
            className="bg-grey w-14 h-14 flex-center rounded-full"
            onClick={swipeNext}
          >
            <BiSolidRightArrow className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSwiper;
