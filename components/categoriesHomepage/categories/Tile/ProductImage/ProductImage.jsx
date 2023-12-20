"use client";
import { urlFor } from '@/sanity/lib/client'
import React from 'react'

const ProductImage = ({image}) => {
  return (
    <div className="h-3/4 z-10">
    <img
      src={urlFor(image)}
      className="max-w-[300px] group-hover:scale-125 duration-300 group-hover:opacity-50"
    />
  </div>
  )
}

export default ProductImage