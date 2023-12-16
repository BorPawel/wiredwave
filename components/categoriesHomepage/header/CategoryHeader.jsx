import React from "react";
import Link from 'next/link'
const CategoryHeader = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <h4>Shop by Categories</h4>
      <Link href='/category'>
        <p>Show all</p>
      </Link>
    </div>
  );
};

export default CategoryHeader;
