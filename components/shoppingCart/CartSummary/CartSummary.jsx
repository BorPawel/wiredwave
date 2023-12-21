import Button from "@/components/reusable/button/Button";
import { useStateContext } from "@/context/StateContext";
import React from "react";

const CartSummary = () => {
  const { totalPrice } = useStateContext();
  return (
    <div className=" md:w-4/12">
      <div className="bg-grey rounded-[20px] flex flex-col justify-between flex-grow">
        <h5 className="p-6">Order Summary </h5>
        <div className="border-y-[1px]  gap-2 flex flex-col  w-full p-6">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>Free</p>
          </div>
        </div>
        <div className="flex justify-between p-6">
          <h5>Total</h5>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <Button
          buttonText={`Pay $${totalPrice.toFixed(2)}`}
          className="w-full "
        ></Button>
      </div>
    </div>
  );
};

export default CartSummary;
