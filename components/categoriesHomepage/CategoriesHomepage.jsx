import React from "react";
import CategoryHeader from "./header/CategoryHeader";
import Categories from "./categories/Categories";

const CategoriesHomepage = ({products}) => {
  return (
    <div className="flex flex-col gap-12 p-4 text-white">
      <CategoryHeader />
      <Categories products={products}/>
    </div>
  );
};

export default CategoriesHomepage;
