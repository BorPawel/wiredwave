import Modal from '@/components/Modal/Modal'
import ProductCardModal from '@/components/Modal/ProductCardModal/ProductCardModal'
import { getDataWithParams } from '@/lib/getData/getData';
import React from 'react'

const Page = async ({ params }) => {
  const product = await getDataWithParams(params);
  return (
   <Modal>
     <ProductCardModal product={product} />
   </Modal>
  )
}

export default Page