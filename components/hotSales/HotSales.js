import Product from "@/components/products/Product";
import React from "react";

const HotSales = ({ products }) => {
  return (
    <div className="min-h-[700px] flex items-center flex-col md:flex-row justify-between md:justify-around lg:justify-between flex-wrap gap-6 p-4">
      {products.map(
        (product, index) => product.hot && <Product product={product} />
      )}
    </div>
  );
};

export default HotSales;
