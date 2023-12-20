import React from 'react'
import moment from 'moment';

const SaleInfo = ({sale}) => {

    const { saleName, precent, startDate, endDate } = sale;
    const dateStart = moment(startDate).format("MMM Do");
    const dateEnd = moment(endDate).format("MMM Do");
  
  return (
    <div className="z-20 flex justify-center items-center flex-col w-full md:w-1/3 h-[200px] md:h-[400px] text-white">
      <div>
        <p>Up to {precent}%</p>
        <h2 className="text-6xl">{saleName}</h2>
        <p>
          <span>{dateStart}</span> - <span>{dateEnd}</span>
        </p>
      </div>
    </div>
  )
}

export default SaleInfo