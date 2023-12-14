import { urlFor } from '@/sanity/lib/client';
import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div className="aspect-square">
      <div className="w-full h-full p-4 shadow rounded flex justify-center items-center">
        <img src={urlFor(item.image && item.image[0])} alt={item.name} />
      </div>
    </div>
  );
};

export default ProductCard;
