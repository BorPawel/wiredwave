import React, { useEffect, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useStateContext } from "@/context/StateContext";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Image from "next/image";

import logo from "../../assets/logo/logo.png";
import Link from "next/link";
const Navbar = () => {
  const { showCartHandler, cartItems, showCart, totalQuantities } =
    useStateContext();
  const [scrollDir, setScrollDir] = useState("scrolling up");
  const [isSearchbarFocused, setIsSearchbarFocused] = useState(false)
  const navRef = useRef(null);
  const searchbarRef = useRef(null);
  const searchInputRef = useRef(null);
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    if (scrollDir === "scrolling down") {
      navRef.current.style.transform = "translate3d(0,-100%,0)";
      navRef.current.style.transition = "transform 0.3s";
    } else {
      navRef.current.style.transform = "translate3d(0,0,0)";
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  const toggleSearchbar = () => {
    setIsSearchbarFocused(prev => !prev);
    if(isSearchbarFocused){
      searchbarRef.current.style.width = '60px'


    }else{
      searchbarRef.current.style.width = '400px'
     
      
    }
  }
  return (
    <nav
      className="w-full flex justify-between items-center p-4 md:p-2 px-8 md:px-12 fixed z-50 duration-600 nav_active "
      ref={navRef}
    >
      <div className="flex-center">
        <Link href='/'>
          <Image src={logo} width={100} className="w-12 lg:w-24" />
        </Link>
      </div>
      <div className="flex gap-4 md:gap-6 lg:gap-8">
        <div className="bg-grey p-3 rounded-full  flex justify-around"  ref={searchbarRef}>
          <BiSearchAlt className="text-2xl md:text-3xl lg:text-4xl cursor-pointer" onClick={toggleSearchbar}/>
          {isSearchbarFocused ? <input className="w-[300px] rounded-[20px] bg-dark px-2 border-[1px]" ref={searchInputRef}/> : null }
        </div>
        <div className="bg-grey p-3 rounded-full relative">
          {" "}
          <AiOutlineShoppingCart
            className="text-2xl md:text-3xl lg:text-4xl cursor-pointer"
            onClick={showCartHandler}
          />{" "}
          <span className="absolute w-6 flex justify-center items-center rounded-full bg-blue top-0 right-0">
            {totalQuantities}
          </span>
        </div>
      </div>
      {showCart && <ShoppingCart />}
    </nav>
  );
};

export default Navbar;
