import Button from "@/components/reusable/button/Button";
import React from "react";
import SaleActionTitle from "./SaleActionTitle/SaleActionTitle";
import Link from 'next/link'
const SaleAction = ({ slug, category }) => {
  return (
    <div className="z-20 flex-center gap-6 flex-col w-full md:w-1/3 h-[200px] md:h-[400px] mt-6 md:mt-0">
      <SaleActionTitle />
      <Link href={`/product/${category}/${slug}`}>
        <Button buttonText="Shop Now" type="outline" />
      </Link>
    </div>
  );
};

export default SaleAction;
