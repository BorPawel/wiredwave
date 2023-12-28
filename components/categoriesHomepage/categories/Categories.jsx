import React from "react";
import Tile from "./Tile/Tile";
import Link from 'next/link'
const Categories = ({ products }) => {
  const categoryArr = ["Wireless", "Gaming", "Clip-On", "Open-Ear", "Earbuds"];
  console.log(products)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
      {categoryArr.map((item, index) => (
        <div
          className={
            index === 0
              ? "border-t border-b border-grey col-span-2 h-[200px] md:h-[400px]  rounded-[30px] "
              : "border-b border-t border-grey  col-span-1 h-[200px] md:h-[400px]  rounded-[30px]"
          }
          key={index}
        >
          <Link href={`/category?category=${item.toLowerCase()}`}>
            <Tile products={products} category={item} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
