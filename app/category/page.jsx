import Header from "@/components/categoriesPage/Header/Header";
import ProductWrapper from "@/components/categoriesPage/ProductWrapper/ProductWrapper";

import { client } from "@/sanity/lib/client";
import React from "react";

const Page = async () => {
  const data = await getData();


  return (
    <div className="m-auto w-full max-w-[1600px] flex flex-col p-4 mt-32 text-white">
      <Header />

      <ProductWrapper data={data} />
    </div>
  );
};

const getData = async () => {
  try {
    const productQuery = '*[_type == "product"]';
    const products = await client.fetch(productQuery);

    return products;
  } catch (error) {
    console.error("failed to fetch", error);
  }
};

export default Page;
