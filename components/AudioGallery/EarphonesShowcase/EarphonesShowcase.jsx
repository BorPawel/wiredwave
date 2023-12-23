import React from "react";
import Layout from "../Layout/Layout";

const EarphonesShowcase = ({ product }) => {
  return (
    <div className="m-auto w-full max-w-[1600px] flex p-2">
      <Layout product={product} />
      <div className="w-1/2 flex-center ">
        <p>
          Discover the perfect blend of style and sound with our premium
          earphones. Designed for those who appreciate the finer details, these
          earphones deliver exceptional audio quality in a sleek, compact form.
        </p>
      </div>
    </div>
  );
};

export default EarphonesShowcase;
