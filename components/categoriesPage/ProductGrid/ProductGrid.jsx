import { getCategoryWithParams } from "@/lib/getData/getData";
import React from "react";
import Link from 'next/link'
import ProductCard from "../ProductCard/ProductCard";
const ProductGrid = async ({ params }) => {
  const products = await getCategoryWithParams(params);

 
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((item) => (
        <Link
          href={`/product/${item.category.toLowerCase()}/${item.slug.current}`}
        >
          <ProductCard item={item} />
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
