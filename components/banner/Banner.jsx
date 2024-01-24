
import React from "react";
import { Circles } from "../reusable/circles/Circles";
import BannerImage from "./BannerImage/BannerImage";
import BannerInfo from "./BannerInfo/BannerInfo";
import BannerText from "./BannerText/BannerText";
import { getData } from "@/lib/getData/getData";
const Banner = async () => {
  const data = await getData('banner');

  return (
    <div className="w-full min-h-[500px] md:min-h-[800px] rounded-3xl flex flex-col lg:flex-row relative z-0 overflow-hidden md:overflow-visible mt-24 test  max-w-[1600px] ">
      
      <Circles />
      <BannerText text="Wireless" />
      <BannerInfo banner={data?.banner[0]} />
      <BannerImage banner={data?.banner[0]} />
    </div>
  );
};

export default Banner;
