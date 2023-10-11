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
    <div className="w-screen bg-[rgba(0,0,0,0.5)] fixed right-0 top-0 z-50 flex items-end justify-end ">
      <div className="h-screen w-[700px] bg-grey relative flex justify-between flex-col ">
        <div className="flex flex-col gap-6 p-2 relative mt-6 ">
          <div className="pl-2">
            <IoIosArrowBack
              className="text-3xl  cursor-pointer "
              onClick={showCartHandler}
            />

          </div>
          {cartItems.map(
            (item, index) =>
              item && (
                <div key={index} className="flex relative  flex-col p-2">
                  <div className="flex relative w-full gap-4">
                    <img
                      src={urlFor(item.image && item.image[0])}
                      className="h-20"
                    />
                    <div className="w-full flex flex-col justify-evenly">
                      <div className="flex justify-between  items-center">
                        <p className="text-lg text-blue">{item.name}</p>
                        <FaTrashAlt
                          className="text-red-600 cursor-pointer"
                          onClick={() => deleteItemFromCart(item)}
                        />
                      </div>

                      <div className="flex items-center justify-between ">
                        <div className="flex w-16 justify-between items-center gap-2">
                          <p className="text-sm">Quantity: </p>
                          <span
                            onClick={decQty}
                            className=" p-2 cursor-pointer hover:text-red-600"
                          >
                            {" "}
                            <AiOutlineMinus
                              onClick={() => decQtyInCart(item)}
                            />
                          </span>
                          <span className="w-1/3 flex justify-center items-center">
                            {item.quantity}
                          </span>
                          <span className=" p-2 cursor-pointer hover:text-green-600">
                            <AiOutlinePlus onClick={() => incQtyInCart(item)} />
                          </span>
                        </div>
                        <p>
                          ${Math.round(item.price * item.quantity * 100) / 100}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p>Picked color: </p>
                        <div
                          className={`w-6 h-6 rounded-full`}
                          style={{
                            backgroundColor: item.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>

      
        
          <ButtonFull buttonText={`Pay $${Math.round(totalPrice * 100) / 100}`} className="p-6 px-16 w-full rounded-none rounded-t-[20px]"></ButtonFull>
      
      </div>
    </div>
  );
};

export default ShoppingCart;
