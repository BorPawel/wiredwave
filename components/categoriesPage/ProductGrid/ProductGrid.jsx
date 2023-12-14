import React from 'react';
import ProductCard from '../ProductCard/ProductCard';


const ProductGrid = ({ products, checkedValue }) => {
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((item) =>
        item.category === checkedValue ? <ProductCard item={item} /> : null
      )}
    </div>
  );
};

export default ProductGrid;
