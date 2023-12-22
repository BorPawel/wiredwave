import React from "react";
import Tile from "./Tile/Tile";

const Categories = ({products}) => {
  const categoryArr = [
    "Wireless",
    "Gaming",
    "Earphones",
    "Speakers",
    "Watches",
  ];


  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
      {categoryArr.map((item, index) => (
        <div
          className={
            index === 0 ? "border-t border-b border-grey B col-span-2 h-[200px] md:h-[400px]  rounded-[30px] " : "border-b border-t border-grey  col-span-1 h-[200px] md:h-[400px]  rounded-[30px]"
          }
          key={index}
        >
          <Tile products={products} category={item}/>
        </div>
      ))}
    </div>
  );
};

export default Categories;
