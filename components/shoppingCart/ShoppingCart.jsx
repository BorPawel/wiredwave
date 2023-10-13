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
    <div className="w-screen min-h-screen bg-dark fixed right-0 top-0 z-50 flex-center overflow-auto">
      <div className="w-[1400px] flex flex-col h-screen">
        <div className="flex-center h-[250px] mt-6">
          <h2>Your Cart</h2>
        </div>
        <div className="text-3xl p-2 pl-4 my-6 cursor-pointer">
          <IoIosArrowBack onClick={() => showCartHandler()} />
        </div>
        <div className="flex flex-col md:flex-row h-screen gap-4">
          <div className="md:w-8/12 flex flex-grow">
            {cartItems.length === 0 ? (
              <div className="w-full h-full flex-center">
                Your Cart is Empty
              </div>
            ) : (
              <div className="w-full h-full flex flex-col gap-4">
                {cartItems.map((item, index) => (
                  <div className="flex w-full bg-grey rounded-[20px] p-2" key={index}>
                    <img
                      src={urlFor(item.image && item.image[0])}
                      className="h-20 lg:h-32"
                    />
                    <div className="flex items-center justify-between w-full px-2 md:px-6">
                      <div className="flex flex-col">
                        <p className="font-bold">{item.name}</p>
                        <p className="font-thin">Color:</p>{item.color}
                        <p className="block md:hidden font-thin">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>

                      <div className="hidden md:flex justify-between items-center gap-2">
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
                      <div className="md:flex hidden">
                        <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <div className="hidden md:flex">
                        <FaTrashAlt
                          className="text-red-600 cursor-pointer "
                          onClick={() => deleteItemFromCart(item)}
                        />
                      </div>

                      <div className="flex md:hidden justify-between flex-col h-full p-2 items-end">
                      <FaTrashAlt
                          className="text-red-600 cursor-pointer "
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
                ))}
              </div>
            )}
          </div>
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
              <ButtonFull
                buttonText={`Pay $${totalPrice.toFixed(2)}`}
                className="self-end p-6 px-16 w-full md:rounded-t-[20px] md:rounded-[20px]"
              ></ButtonFull>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
