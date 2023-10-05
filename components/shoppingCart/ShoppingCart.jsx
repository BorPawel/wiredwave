import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/sanity/lib/client";
import Quantity from "../reusable/Quantity";

import { FaTrashAlt } from "react-icons/fa";
const ShoppingCart = () => {
  const { showCartHandler, cartItems,totalPrice,deleteItemFromCart } = useStateContext();
  return (
    <div className="w-screen bg-[rgba(0,0,0,0.5)] fixed right-0 top-0 z-100 flex items-end justify-end">
      <div className="h-screen w-[600px] bg-grey relative p-6 flex justify-between flex-col">
        <AiOutlineArrowLeft
          className="text-3xl text-blue cursor-pointer absolute"
          onClick={showCartHandler}
        />
        <div className="flex flex-col gap-6 p-2">
          {cartItems.map((item, index) => (
            <div key={index} className="flex">
              <img src={urlFor(item?.image && item.image[0])} className="w-36" />
                <div>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <Quantity/>
                </div>
                <FaTrashAlt onClick={() => deleteItemFromCart(item)}/>
            </div>
          ))}
        </div>


        <div className="w-full flex justify-center items-center flex-col bg-dark h-44">
            <h5>Total Price: ${totalPrice}</h5>
            <button>Pay with Stripe</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;