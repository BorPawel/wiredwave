import React, { useState, createContext, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [firstHalfProductList, setFirstHalfProductList] = useState([]);

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [category, setCategory] = useState("Wireless");

  const categoryHandler = (category, id) => {
    const categories = document.querySelectorAll(".categories");
    categories.forEach((item) => {
      item.classList.remove("active");
    });

    categories[id].classList.add("active");
    setCategory(category);
  };

  const showCartHandler = () => {
    if (!showCart) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
    setShowCart((prev) => !prev);
  };

  const incQty = () => {
    setQty((prev) => prev + 1);
  };
  const decQty = () => {
    setQty((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const addItemToCart = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const deleteItemFromCart = (product) => {
    const findProduct = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prev) => prev - findProduct.price * findProduct.quantity);
    setTotalQuantities((prev) => prev - findProduct.quantity);
    const updatedCartItems = cartItems.filter(
      (item) => item._id !== product._id
    );
    setCartItems(updatedCartItems);
  };

  const incQtyInCart = (product) => {
    const findProduct = cartItems.find((item) => item._id === product._id);
    const newCartItem = cartItems.filter(
      (item) => item._id !== findProduct._id
    );
    setTotalQuantities((prev) => prev + 1);
    setCartItems([
      ...newCartItem,
      { ...findProduct, quantity: findProduct.quantity + 1 },
    ]);
    setTotalPrice((prev) => prev + findProduct.price);
  };

  const decQtyInCart = (product) => {
    const findProduct = cartItems.find((item) => item._id === product._id);
    const newCartItem = cartItems.filter(
      (item) => item._id !== findProduct._id
    );
    if (findProduct.quantity > 1) {
      setTotalQuantities((prev) => prev - 1);
      setCartItems([
        ...newCartItem,
        { ...findProduct, quantity: findProduct.quantity - 1 },
      ]);
      setTotalPrice((prev) => prev - findProduct.price);
    }else{
      deleteItemFromCart(product)
    }
  };
  return (
    <Context.Provider
      value={{
        showCart,
        showCartHandler,
        firstHalfProductList,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        addItemToCart,
        deleteItemFromCart,
        incQtyInCart,
        categoryHandler,
        category,
        decQtyInCart
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
