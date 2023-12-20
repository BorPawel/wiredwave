

import React from "react";
import ProductImage from "./ProductImage/ProductImage";
import ProductTitle from "./ProductTitle/ProductTitle";

const Tile = ({ products, category }) => {
  const findProduct = products?.find((item) => item.category === category);

  return findProduct ? (
    <div className="flex flex-col w-full h-full items-center justify-center p-2 relative overflow-hidden group z-0 cursor-pointer ">
      <ProductImage image={findProduct?.image && findProduct?.image[0]} />
      <ProductTitle title={findProduct?.category} />
    </div>
  ) : null;
};

export default Tile;
