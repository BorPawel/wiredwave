import React from "react";
import moment from "moment";
import SaleInfo from "./SaleInfo/SaleInfo";
import SaleImage from "./SaleImage/SaleImage";
import SaleAction from "./SaleAction/SaleAction";
moment.locale("en");
const SaleBanner = ({ sale }) => {
  if(!sale){
    return <div>No sale</div>
  }
  const saleData = sale[0];

  return (
    <div className="min-w-[320px] w-full p-2 my-32">
      <div className="min-h-[400px]  bg-grey rounded-[30px] relative overflow-hidden flex flex-col md:flex-row justify-between">
        <div className="bg-blue w-[200px] h-full absolute left-[50%] translate-x-[-50%] -skew-x-[40deg] -z-1"></div>
        <SaleInfo sale={saleData} />
        <SaleImage image={saleData.image} />
        <SaleAction />
      </div>
    </div>
  );
};

export default SaleBanner;
