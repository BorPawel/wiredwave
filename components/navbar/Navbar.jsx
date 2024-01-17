"use client";
import React, { useContext, useEffect, useRef, useState } from "react";

import { useStateContext } from "@/context/StateContext";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import ShoppingCartIcon from "./ShopingCartIcon/ShoppingCartIcon";
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import SearchOverlay from "./SearchOverlay/SearchOverlay";
const Navbar = () => {
  const { showCart,showSearchOverlay } = useStateContext();
  const [scrollDir, setScrollDir] = useState("scrolling up");

  const navRef = useRef(null);

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

  return (
    <nav
      className="w-full flex justify-between items-center  md:p-2 px-8 py-2 md:px-20 fixed z-40 duration-600 nav_active  top-0 bg-dark text-white "
      ref={navRef}
    >
      <Logo />
      <NavigationButtons />
      <div className="flex gap-4 md:gap-6 lg:gap-8">
        {/* <SearchBar /> */}

        <ShoppingCartIcon />
      </div>
      {showCart && <ShoppingCart />}
      {/* {showSearchOverlay && <SearchOverlay />} */}
    </nav>
  );
};

export default Navbar;
