import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Link from 'next/link'
const ProductGrid = ({ products, checkedValue }) => {
  return products ? (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products?.product.map((item) =>
        item.category === checkedValue ? (
          <Link href={`/product/${item.category.toLowerCase()}/${item.slug.current}`}>
            <ProductCard item={item} />
          </Link>
        ) : null
      )}
    </div>
  ) : null;
};

export default ProductGrid;
