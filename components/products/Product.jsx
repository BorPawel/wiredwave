import Link from 'next/link'
import React from 'react'

import { urlFor } from '@/sanity/lib/client'
const Product = ({product: {name, image, slug, price}}) => {
  return (
    <div className="w-[300px] min-h-[450px] bg-grey rounded-3xl flex flex-col justify-center p-6">
      <Link href={`/product/${slug}`}>
        <img src={urlFor(image[0])} alt="" className="w-full h-full object-contain"/>
      </Link>
      <div className="">
        
      </div>
    </div>
  )
}

export default Product