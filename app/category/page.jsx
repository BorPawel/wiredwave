import Header from "@/components/categoriesPage/Header/Header";
import ProductGrid from "@/components/categoriesPage/ProductGrid/ProductGrid";
import ProductWrapper from "@/components/categoriesPage/ProductWrapper/ProductWrapper";
import Sidebar from "@/components/categoriesPage/Sidebar/Sidebar";
import SidebarMobile from "@/components/categoriesPage/SidebarMobile/SidebarMobile";

import React from "react";

const Page = ({ searchParams }) => {
  return (
    <div className="m-auto  max-w-[1600px] flex flex-col p-4 mt-16 text-white min-h-[1100px]">
      <Header />
      <div className="block md:hidden">
        {/* <Sidebar /> */}
        <SidebarMobile />
      </div>
      <ProductWrapper>
        <ProductGrid params={searchParams} />
      </ProductWrapper>
    </div>
  );
};

export default Page;
