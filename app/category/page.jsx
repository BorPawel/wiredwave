import Header from "@/components/categoriesPage/Header/Header";
import ProductGrid from "@/components/categoriesPage/ProductGrid/ProductGrid";
import ProductWrapper from "@/components/categoriesPage/ProductWrapper/ProductWrapper";
import Sidebar from "@/components/categoriesPage/Sidebar/Sidebar";

import React from "react";

const Page = ({ searchParams }) => {
  return (
    <div className="m-auto w-full  flex flex-col p-4 mt-16 text-white min-h-[1100px]">
      <Header />
      <div className="block md:hidden">
        <Sidebar />
      </div>
      <ProductWrapper>
        <ProductGrid params={searchParams} />
      </ProductWrapper>
    </div>
  );
};

export default Page;
