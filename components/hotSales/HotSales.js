import Product from "@/components/products/Product";
import React from "react";

const HotSales = ({ products , text}) => {
  return (
    <div className="min-h-[700px] flex flex-col gap-16 mt-24 p-2  overflow-hidden">
      <h2 className="flex-center  text-center">{text}</h2>
      <div className="flex items-center flex-col w-[200%] md:flex-row marque justify-between md:justify-around lg:justify-between gap-6">
        {products.map(
          (product, index) => product.hot && <Product key={index} product={product} />
        )}
         {products.map(
          (product, index) => product.hot && <Product key={index} product={product} />
        )}
      </div>
    </div>
  );
};

export default HotSales;
