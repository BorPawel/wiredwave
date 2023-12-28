
import Header from "@/components/categoriesPage/Header/Header";
import ProductGrid from "@/components/categoriesPage/ProductGrid/ProductGrid";
import ProductWrapper from "@/components/categoriesPage/ProductWrapper/ProductWrapper";

import React from "react";

const Page = ({searchParams}) => {


  return (
    <div className="m-auto w-full max-w-[1600px] flex flex-col p-4 mt-32 text-white min-h-[1100px]">
      <Header />
      <ProductWrapper>
        <ProductGrid params={searchParams}/>
      </ProductWrapper>
    </div>
  );
};

export default Page;
