import { urlFor } from "@/sanity/lib/client";
import React from "react";
import moment from "moment";

import Button from "@/components/reusable/button/Button";
moment.locale("en");
const SaleBanner = ({ sale }) => {
  if(!sale){
    return <div>No sale</div>
  }
  const { saleName, image, precent, startDate, endDate } = sale[0];
  const dateStart = moment(startDate).format("MMM Do");
  const dateEnd = moment(endDate).format("MMM Do");
  const className = "w-full md:w-1/3 h-[200px] md:h-[400px]";
  return (
    <div className="min-w-[320px] w-full p-2 my-32">
      <div className="min-h-[400px]  bg-grey rounded-[30px] relative overflow-hidden flex flex-col md:flex-row justify-between">
        <div className="bg-blue w-[200px] h-full absolute left-[50%] translate-x-[-50%] -skew-x-[40deg] -z-1"></div>

        <div
          className={`z-20  flex justify-center items-center flex-col ${className}`}
        >
          <div>
            <p>Up to {precent}%</p>
            <h2 className="text-6xl">{saleName}</h2>
            <p>
              <span>{dateStart}</span> - <span >{dateEnd}</span>
            </p>
          </div>
        </div>
        <div className={`flex justify-center items-center ${className}`}>
          <img
            src={urlFor(image && image)}
            alt=""
            className=" z-20 h-[300px] md:h-auto md:w-full"
          />
        </div>
        <div className={`z-20 flex-center gap-6 flex-col ${className} mt-6 md:mt-0`}>
          {" "}
          <h5 className="text-center ">Time to Shine: Fall Watch Discounts Await!</h5>
          <Button buttonText='Show Now' type='outline'/>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
