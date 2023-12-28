import React from "react";
import ProductImage from "./ProductImage/ProductImage";
import ProductTitle from "./ProductTitle/ProductTitle";
import TopLight from "./ProductTitle/Lights/TopLight/TopLight";
import BottomLight from "./ProductTitle/Lights/BottomLight/BottomLight";

const Tile = ({ products, category }) => {
  const findProduct = products?.find((item) => item.category === category.toLowerCase());

  return findProduct ? (
    <div className="flex flex-col w-full h-full items-center justify-center p-2 relative overflow-hidden group z-0 cursor-pointer bg-[#050505] rounded-[30px]">
     <TopLight />
      <ProductImage image={findProduct?.image && findProduct?.image[0]} />
      <ProductTitle title={findProduct?.category} />
      <BottomLight />
    </div>
  ) : null;
};

export default Tile;
