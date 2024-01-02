"use client";
import Button from "@/components/reusable/button/Button";
import { useStateContext } from "@/context/StateContext";
import React from "react";
import { useRouter } from "next/navigation";
const CTAButtons = ({ product }) => {
  const { addItemToCart, qty, color } = useStateContext();
  const router = useRouter();
 
  return (
    <div className="flex flex-col lg:flex-row h-full justify-center items-center gap-4 p-4">
      <Button
        buttonText="Add to Card"
        onClick={() => addItemToCart(product, qty, color)}
      />
      <Button
        buttonText="Go to product"
        onClick={() =>  router.forward()}
      />
    </div>
  );
};

export default CTAButtons;
