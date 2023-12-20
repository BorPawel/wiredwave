import { urlFor } from "@/sanity/lib/client";
import React from "react";
import BannerText from "../BannerText/BannerText";

const BannerImage = ({banner}) => {
  return (
    <div className="lg:w-6/12 order-1 lg:order-2 flex justify-center items-center z-0 relative">
      <BannerText isHidden={true} text='Wireless'/>
      <img
        src={urlFor(banner.image && banner.image[0]).width(700)}
        alt=""
        className=""
      />
    </div>
  );
};

export default BannerImage;
