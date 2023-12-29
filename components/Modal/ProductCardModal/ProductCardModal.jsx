import { ProductGallery } from '@/components/product_details/productGallery/ProductGallery'
import React from 'react'
import ModalProductGallery from './ModalProductGallery/ModalProductGallery'

const ProductCardModal =  ({product}) => {
   
  return (
    <div className="flex">
       <ModalProductGallery image={product?.colorImageArray} />
       <div></div>
    </div>
  )
}

export default ProductCardModal