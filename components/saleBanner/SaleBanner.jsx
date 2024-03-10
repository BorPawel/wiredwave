import React from "react";
import moment from "moment";
import SaleInfo from "./SaleInfo/SaleInfo";
import SaleImage from "./SaleImage/SaleImage";
import SaleAction from "./SaleAction/SaleAction";
import { getData } from "@/lib/getData/getData";
moment.locale("en");
const SaleBanner = async ( ) => {

  const data = await getData('sale');
  if(!data.sale){
    return <div>No sale</div>
  }
  const saleData = data.sale[0];
  const lowerCategory = saleData.category.toLowerCase();
  return (
    <div className="min-w-[320px] w-full p-2 my-32">
      <div className="min-h-[400px]  border-grey border-y-2 relative overflow-hidden flex flex-col md:flex-row justify-between">
        <div className="bg-blue w-[200px] h-full absolute left-[50%] translate-x-[-50%] -skew-x-[40deg] -z-1"></div>
        <SaleInfo sale={saleData} />
        <SaleImage image={saleData.image} />
        <SaleAction slug={saleData.slug.current} category={lowerCategory}/>
      </div>
    </div>
  );
};

export default SaleBanner;
