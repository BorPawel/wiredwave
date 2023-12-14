import Checkbox from "@/components/categoriesPage/checkbox/Checkbox";
import { client } from "@/sanity/lib/client";
import React, { useState } from "react";

const Categories = ({ products }) => {
  const categoryArr = [
    "Wireless",
    "Gaming",
    "Earphones",
    "Speakers",
    "Watches",
  ];

  const [selectedCheckbox, setSelectedCheckbox] = useState('Wireless');
  const [checkedValue, setCheckedValue] = useState("Wireless");
  const handleCheckboxChange = (selectedItem) => {
    setSelectedCheckbox(selectedItem);
    setCheckedValue(selectedItem);
  };

  return (
    <div className="min-h-[1000px] flex flex-col mt-12 p-2">
      <div>
        <div>Main / Categories</div>
        <div className="w-full bg-black py-4 flex justify-between ite">
          <div>Categories</div>
          <div>Sort</div>
        </div>
      </div>
      <div className="flex">
        <div>
          {categoryArr.map((item) => (
            <Checkbox
              key={item}
              text={item}
              isChecked={selectedCheckbox === item}
              onChange={() => handleCheckboxChange(item)}
            />
          ))}
        </div>
        <div>
          {products.map((item) =>
            item.category === checkedValue ? <div>{item.name}</div> : null
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const saleQuery = '*[_type == "sale"]';
  const sale = await client.fetch(saleQuery);

  return {
    props: {
      products,

      sale,
    },
  };
};

export default Categories;
