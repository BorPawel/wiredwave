import React, {useState, createContext, useContext, useEffect} from 'react';
import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
    const [firstHalfProductList, setFirstHalfProductList] = useState([]);

    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState();
    const [qty, setQty] = useState(1);

    return(
        <Context.Provider
        value={{
            showCart,
            firstHalfProductList,
            cartItems,
            totalPrice,
            totalQuantities,
            qty
        }}
        >
            {children}
        </Context.Provider>
    )
}