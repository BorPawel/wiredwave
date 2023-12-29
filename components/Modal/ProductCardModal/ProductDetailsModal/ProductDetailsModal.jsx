import React from 'react'
import ColorOptions from '../ColorOptions/ColorOptions'
import Quantity from '@/components/reusable/Quantity'
import Button from '@/components/reusable/button/Button'
import CTAButtons from '../CTAButtons/CTAButtons'

const ProductDetailsModal = ({product}) => {
  return (
    <div className="flex text-white w-full md:w-1/2 justify-start gap-6 flex-col items-center px-4 ">
        <h4 className="mt-12">{product.name}</h4>
        <p className="text-sm text-center">{product.shortDesc}</p>
        <span className="w-full h-[1px] bg-grey "></span>
        <ColorOptions colorImageArray={product?.colorImageArray} />

        <div className="flex justify-center items-center">
          <p>Quantity: </p>
          <Quantity />
        </div>

        <div className="w-full h-[1px] bg-grey "></div>
        <div className="flex w-full justify-center items-center  px-4">
          <p className="text-4xl drop-shadow-glow">${product.price}</p>
        </div>
        <CTAButtons product={product} />
      </div>
  )
}

export default ProductDetailsModal