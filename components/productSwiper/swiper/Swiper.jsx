import React from 'react'
import Left from './leftImage/Left'
import Center from './centerImage/Center'
import Right from './rightImage/Right'

const Swiper = ({filterProducts, smallLeftIndex, toggleTooltip, bigIndex, smallRightIndex, category}) => {
  return (
    <div className="w-full flex justify-around items-center h-[400px] ">
        <Left filterProducts={filterProducts} smallLeftIndex={smallLeftIndex}/>
        <Center toggleTooltip={toggleTooltip} bigIndex={bigIndex} filterProducts={filterProducts} category={category}/>
        <Right smallRightIndex={smallRightIndex} filterProducts={filterProducts} />
    </div>
  )
}

export default Swiper