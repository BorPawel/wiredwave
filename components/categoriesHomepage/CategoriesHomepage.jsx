import React from "react";
import CategoryHeader from "./header/CategoryHeader";
import Categories from "./categories/Categories";
import { getData } from "@/lib/getData/getData";

const CategoriesHomepage = async () => {
  const data = await getData( 'product');
  return (
    <div className="flex flex-col gap-8 p-4 text-white mt-12 w-full ">
      <CategoryHeader />
      <Categories products={data.product}/>
    </div>
  );
};

export default CategoriesHomepage;
