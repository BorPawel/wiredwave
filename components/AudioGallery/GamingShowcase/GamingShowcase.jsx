import React from "react";
import Layout from "../Layout/Layout";

const GamingShowcase = ({product}) => {
  return (
    <div className="m-auto w-full max-w-[1600px] flex p-2">
      <div className="w-full lg:w-1/2"></div>
     <Layout product={product}/>
    </div>
  );
};

export default GamingShowcase;
