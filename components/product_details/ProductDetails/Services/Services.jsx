import React from 'react'
import { BiSupport } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import FreeShipping from "@/components/svg/FreeShipping";
const Services = () => {
  return (
    <div className="w-full grid grid-cols-2 place-items-center lg:place-items-start gap-4">
    <span className="flex-center gap-3">
      <FreeShipping />
      <p>Free Shipping</p>
    </span>
    <span className="flex-center gap-3">
      <LiaShippingFastSolid className="text-[35px]" />
      <p>24h delivery</p>
    </span>
    <span className="flex-center gap-3">
      <MdOutlineSecurity className="text-[35px]" />
      <p>All time security</p>
    </span>
    <span className="flex-center gap-3">
      <BiSupport className="text-[35px]" />
      <p>Support help</p>
    </span>
  </div>
  )
}

export default Services