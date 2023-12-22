import React from "react";
import Layout from "../Layout/Layout";

const EarphonesShowcase = ({product}) => {
  return (
    <div className="m-auto w-full max-w-[1600px] flex p-2">
       <Layout product={product}/>
      <div></div>
    </div>
  );
};

export default EarphonesShowcase;
