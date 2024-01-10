import React from "react";
import Layout from "../Layout/Layout";
import { getData } from "@/lib/getData/getData";

const WirelessShowcase = async ({ product }) => {
  const data = await getData('gallery');
  // console.log(data.gallery[0].longImage)
  return (
    <div className="m-auto w-full flex flex-col lg:flex-row justify-center">
      <Layout gallery={data.gallery[0]} />

      {/* <div className="w-full lg:w-1/2 flex-center flex-col gap-6">
        
        <p className="w-full lg:w-3/4 text-center text-md">
          {" "}
          Experience the ultimate freedom with our top-tier wireless headphones.
          Immerse yourself in crystal-clear audio without the constraints of
          cables. 
        </p>
      </div> */}
    </div>
  );
};

export default WirelessShowcase;
