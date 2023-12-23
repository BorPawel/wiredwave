"use client";
import React from "react";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import ButtonFull from "@/components/reusable/button/Button";
import { Circles } from "../reusable/circles/Circles";
import BannerImage from "./BannerImage/BannerImage";
import BannerInfo from "./BannerInfo/BannerInfo";
import BannerText from "./BannerText/BannerText";
const Banner = ({ banner }) => {
  return (
    <div className="w-full min-h-[500px] md:min-h-[800px] rounded-3xl flex flex-col lg:flex-row relative z-0 overflow-hidden md:overflow-visible mt-24 test">
      
      <Circles />
      
      <BannerText text="Wireless" isHidden={false} />
      <BannerInfo banner={banner} />
      <BannerImage banner={banner} />
    </div>
  );
};

export default Banner;
