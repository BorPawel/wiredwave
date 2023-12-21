import Header from "@/components/categoriesPage/Header/Header";
import ProductWrapper from "@/components/categoriesPage/ProductWrapper/ProductWrapper";
import { getData } from "@/lib/getData/getData";


import React from "react";

const Page = async () => {
  const data = await getData('product');


  return (
    <div className="m-auto w-full max-w-[1600px] flex flex-col p-4 mt-32 text-white">
      <Header />

      <ProductWrapper data={data} />
    </div>
  );
};



export default Page;
