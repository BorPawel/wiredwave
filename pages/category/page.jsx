import Header from "@/components/categoriesPage/Header/Header";
import ProductGrid from "@/components/categoriesPage/ProductGrid/ProductGrid";
import Sidebar from "@/components/categoriesPage/Sidebar/Sidebar";
import Checkbox from "@/components/categoriesPage/Sidebar/checkbox/Checkbox";
import { client, urlFor } from "@/sanity/lib/client";
import React, { useState } from "react";

const Categories = ({ products }) => {
  const categoryArr = [
    "Wireless",
    "Gaming",
    "Earphones",
    "Speakers",
    "Watches",
  ];
  const [selectedCheckbox, setSelectedCheckbox] = useState("Wireless");
  const [checkedValue, setCheckedValue] = useState("Wireless");

  const handleCheckboxChange = (selectedItem) => {
    setSelectedCheckbox(selectedItem);
    setCheckedValue(selectedItem);
  };

  return (
    <div className="min-h-[1000px] flex flex-col p-4">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Sidebar
          categoryArr={categoryArr}
          selectedCheckbox={selectedCheckbox}
          handleCheckboxChange={handleCheckboxChange}
        />
        {/* <ProductGrid products={products} checkedValue={checkedValue} /> */}
      </div>
    </div>
  );
};

// export const getServerSideProps = async () => {
//   const productQuery = '*[_type == "product"]';
//   const products = await client.fetch(productQuery);

//   const saleQuery = '*[_type == "sale"]';
//   const sale = await client.fetch(saleQuery);

//   return {
//     props: {
//       products,

//       sale,
//     },
//   };
// };

export default Categories;
