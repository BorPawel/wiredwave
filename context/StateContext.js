import React, {useState, createContext, useContext, useEffect} from 'react';
import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
    const [firstHalfProductList, setFirstHalfProductList] = useState([]);

    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState(0    );
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState();
    const [qty, setQty] = useState(1);

    const showCartHandler = () => {
        if(!showCart)
        {
            document.querySelector('body').style.overflow = 'hidden'

        }else{
            document.querySelector('body').style.overflow = 'auto'

        }
        setShowCart(prev => !prev)

    }
    return(
        <Context.Provider
        value={{
            showCart,
            showCartHandler,
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

export const useStateContext = () => useContext(Context)