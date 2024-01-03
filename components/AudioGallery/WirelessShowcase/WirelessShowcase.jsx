import React from "react";
import Layout from "../Layout/Layout";

const WirelessShowcase = ({ product }) => {
  return (
    <div className="m-auto w-full flex flex-col lg:flex-row justify-center">
      <Layout product={product} />

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
