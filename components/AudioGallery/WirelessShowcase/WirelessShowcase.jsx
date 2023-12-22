import React from "react";
import Layout from "../Layout/Layout";

const WirelessShowcase = ({ product }) => {
  return (
    <div className="m-auto w-full max-w-[1600px] flex p-2">
      <Layout product={product} />

      <div></div>
    </div>
  );
};

export default WirelessShowcase;
