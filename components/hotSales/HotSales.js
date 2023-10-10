import Product from "@/components/products/Product";
import React from "react";

const HotSales = ({ products }) => {
  return (
    <div className="min-h-[700px] flex flex-col gap-20 mt-24 p-2">
      <h2 className="flex-center font-bold text-center">Checkout our hot selling products</h2>
      <div className="flex items-center flex-col md:flex-row justify-between md:justify-around lg:justify-between flex-wrap gap-6 p-4">
        {products.map(
          (product, index) => product.hot && <Product key={index} product={product} />
        )}
      </div>
    </div>
  );
};

export default HotSales;
