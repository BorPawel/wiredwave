// BannerInfo.jsx
import React from "react";
import { BannerTitle } from "./BannerTitle/BannerTitle";
import { BannerDescription } from "./BannerDescription/BannerDescription";
import { BannerPrice } from "./BannerPrice/BannerPrice";
import { BannerButton } from "./BannerButton/BannerButton";

const BannerInfo = ({ banner }) => {
  const lowerCategory = banner.category.toLowerCase();
  return (
    <div className="lg:w-6/12  order-2 lg:order-1 p-4 px-8 md:pl-16 flex flex-col gap-8 items-center justify-center ">
      <div className=" flex flex-col h-3/4 justify-center gap-6">
        <BannerTitle name={banner.name} />
        <BannerDescription desc={banner.desc} />
        <BannerPrice price={banner.price} />
        <BannerButton
          lowerCategory={lowerCategory}
          slug={banner.slug.current}
          buttonText={banner.buttonText}
        />
      </div>
    </div>
  );
};

export default BannerInfo;
