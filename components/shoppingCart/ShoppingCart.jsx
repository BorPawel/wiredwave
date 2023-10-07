import React from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/sanity/lib/client";
import Quantity from "../reusable/Quantity";

import { FaTrashAlt } from "react-icons/fa";
const ShoppingCart = () => {
  const {
    showCartHandler,
    cartItems,
    totalPrice,
    deleteItemFromCart,
    decQty,
    incQtyInCart,
  } = useStateContext();
  return (
    <div className="w-screen bg-[rgba(0,0,0,0.5)] fixed right-0 top-0 z-50 flex items-end justify-end ">
      <div className="h-screen w-[700px] bg-grey relative flex justify-between flex-col ">
        <AiOutlineArrowLeft
          className="text-3xl text-blue cursor-pointer absolute top-4 left-4 z-10"
          onClick={showCartHandler}
        />
        <div className="flex flex-col gap-6 p-2 relative mt-6 ">
          {cartItems.map((item, index) => (
            <div key={index} className="flex relative  flex-col p-2">
              <div className="flex relative w-full gap-4">
                <img
                  src={urlFor(item.image && item.image[0])}
                  className="w-36"
                />
                <div className="w-full flex flex-col justify-evenly">
                  <div className="flex justify-between  items-center">
                    <p className="text-2xl text-blue">{item.name}</p>
                    <FaTrashAlt
                      className="text-red-600 cursor-pointer"
                      onClick={() => deleteItemFromCart(item)}
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="lg:text-2xl font-bold">${item.price}</p>
                    <p>
                      Total: $
                      {Math.round(item.price * item.quantity * 100) / 100}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <p>Quantity: </p>
                    <div className="flex w-16 justify-between items-center gap-2">
                      <span
                        onClick={decQty}
                        className=" p-2 cursor-pointer hover:text-red-600"
                      >
                        {" "}
                        <AiOutlineMinus />
                      </span>
                      <span className="w-1/3 flex justify-center items-center">
                        {item.quantity}
                      </span>
                      <span className=" p-2 cursor-pointer hover:text-green-600">
                        <AiOutlinePlus onClick={() => incQtyInCart(item)} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center items-center flex-col bg-dark h-44">
          <h5>Total Price: ${Math.round(totalPrice * 100) / 100}</h5>
          <button>Pay with Stripe</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
