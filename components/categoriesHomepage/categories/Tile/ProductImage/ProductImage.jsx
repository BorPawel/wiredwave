"use client";
import { urlFor } from '@/sanity/lib/client'
import React from 'react'

const ProductImage = ({image}) => {
  return (
    <div className="scale-50 lg:scale-100 lg:h-3/4 md:z-10">
    <img
      src={urlFor(image)}
      className="max-w-[300px] group-hover:scale-125 duration-300 opacity-50 md:opacity-100 md:group-hover:opacity-50"
    />
  </div>
  )
}

export default ProductImage