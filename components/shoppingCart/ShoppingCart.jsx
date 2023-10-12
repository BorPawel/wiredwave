import React from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/sanity/lib/client";
import Quantity from "../reusable/Quantity";
import { IoIosArrowBack } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import ButtonFull from "@/components/reusable/button/ButtonFull";
const ShoppingCart = () => {
  const {
    showCartHandler,
    cartItems,
    totalPrice,
    deleteItemFromCart,
    decQty,
    incQtyInCart,
    decQtyInCart,
  } = useStateContext();
  return (
    <div className="w-screen bg-dark fixed right-0 top-0 z-50 flex-center ">
      <div className="h-screen w-[1400px] relative flex justify-between flex-col ">
        <div className="flex flex-col gap-6 p-2 relative mt-6 ">
          <IoIosArrowBack
            className="text-4xl pl-2 cursor-pointer "
            onClick={showCartHandler}
          />

          {cartItems.map(
            (item, index) =>
              item && (
                <div className="flex">
                  <img
                    src={urlFor(item.image && item.image[0])}
                    className="h-20"
                  />
                  <div className="flex w-full justify-between px-4">
                    <div className="flex flex-col justify-between">
                      <p className="text-lg text-blue">{item.name}</p>

                      <div className="flex gap-2 items-center">
                        <p>Color: </p>
                        <div
                          className={`w-6 h-6 rounded-full`}
                          style={{
                            backgroundColor: item.color,
                          }}
                        ></div>
                      </div>
                      <p>
                        ${Math.round(item.price * item.quantity * 100) / 100}
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-between pt-2">
                      <FaTrashAlt
                        className="text-red-600 cursor-pointer"
                        onClick={() => deleteItemFromCart(item)}
                      />

                      <div className="flex justify-between items-center gap-2">
                        <span
                          onClick={decQty}
                          className="cursor-pointer hover:text-red-600"
                        >
                          {" "}
                          <AiOutlineMinus onClick={() => decQtyInCart(item)} />
                        </span>
                        <span className="w-1/3 flex justify-center items-center mx-[2px]">
                          {item.quantity}
                        </span>
                        <span className="cursor-pointer hover:text-green-600">
                          <AiOutlinePlus onClick={() => incQtyInCart(item)} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>

        <ButtonFull
          buttonText={`Pay $${Math.round(totalPrice * 100) / 100}`}
          className="block md:hidden p-6 px-16 w-full rounded-none rounded-t-[20px]"
        ></ButtonFull>
      </div>
    </div>
  );
};

export default ShoppingCart;
