import React from "react";
import ReactDOM from "react-dom";
import { useStateContext } from "@/context/StateContext";
import CartSummary from "./CartSummary/CartSummary";
import CartHeader from "./CartHeader/CartHeader";
import CartItem from "./CartItem/CartItem";
const ShoppingCart = () => {
  const { cartItems } = useStateContext();

  return ReactDOM.createPortal(
    <div className="w-screen min-h-screen bg-dark fixed right-0 top-0 z-50 flex-center overflow-auto text-white">
      <div className="w-[1400px] flex flex-col h-screen">
        <CartHeader />
        <div className="flex flex-col md:flex-row h-screen gap-4">
          <div className="md:w-8/12 flex flex-grow">
            {cartItems.length === 0 ? (
              <div className="w-full h-full flex-center">
                Your Cart is Empty
              </div>
            ) : (
              <div className="w-full h-full  gap-4 grid grid-cols-1 md:flex md:flex-col">
                {cartItems.map((item, index) => (
                  <CartItem item={item} index={index} />
                ))}
              </div>
            )}
          </div>
          <CartSummary />
        </div>
      </div>
    </div>,
    document.getElementById("shopping-cart-portal")
  );
};

export default ShoppingCart;
