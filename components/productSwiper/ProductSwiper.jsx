import React from 'react'

const ProductSwiper = ({ products, category }) => {
  return (
    <div>
        <h3 className="w-full flex-center">{category}</h3>
        <div className="w-full flex justify-around items-center h-[350px] bg-grey">
            <div className="bg-green-600 h-[200px] w-[200px]"></div>
            <div className="bg-red-600 h-full w-[350px]"></div>
            <div className="bg-orange-500 h-[200px] w-[200px]"></div>
        </div>
        <div className="flex w-full justify-around">
            <div className="w-[200px] flex-center">prev</div>
            <div className="w-[350px] flex-center flex-col">
                <p>Jabra Elite 45h</p>
                <p>$ 299</p>
            </div>
            <div className="w-[200px] flex-center">next</div>
        </div>
    </div>
  )
}

export default ProductSwiper