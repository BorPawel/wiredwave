import React from "react";
import Layout from "../Layout/Layout";

const GamingShowcase = ({ product }) => {
  return (
    <div className="m-auto w-full max-w-[1600px] flex p-2">
      <div className="w-full lg:w-1/2 flex-center">
        <p className="w-3/4 text-center text-md">
          {" "}
          Elevate your gaming experience with headphones engineered for the
          serious gamer. Featuring surround sound capabilities, noise-canceling
          microphones, and comfortable.
        </p>
      </div>
      <Layout product={product} />
    </div>
  );
};

export default GamingShowcase;
