"use client";
import Quantity from "@/components/reusable/Quantity";
import Button from "@/components/reusable/button/Button";
import { useStateContext } from "@/context/StateContext";
import React, { useState } from "react";
import Colors from "./Colors/Colors";

const AddToCard = ({ product }) => {
  const { addItemToCart, qty, color } = useStateContext();

  const [pickedColor, setPickedColor] = useState(product?.colorImageArray[0]?.color?.hex)
  
  return (
    <div className="flex flex-col gap-8 w-full  ">
      <div className="flex justify-start items-center gap-2">
        <p>Quantity:</p>  
        <Quantity />
      </div>
      <Colors product={product} setPickedColor={setPickedColor} pickedColor={pickedColor}/>
      <p className="font-bold w-1/2 text-5xl">${product?.price}</p>
      <div className="flex justify-around lg:justify-start items-center w-full lg:items-start gap-2  lg:gap-10 flex-wrap ">
        <Button
          buttonText="Add to Cart"
          onClick={() => addItemToCart(product, qty, pickedColor)}
        />
        {/* <Button buttonText="Buy Now" /> */}
      </div>
    </div>
  );
};

export default AddToCard;
