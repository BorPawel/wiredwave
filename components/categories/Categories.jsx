import React, { useEffect, useRef, useState } from "react";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { urlFor } from "@/sanity/lib/client";

const Categories = ({ products }) => {
  const categoriesArray = [
    "Wireless",
    "Gaming",
    "Earphones",
    "Speakers",
    "Watches",
  ];

  const { categoryHandler, category } = useStateContext();

  const categoryRef = useRef(null);

  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const itemsRef = useRef([]);
  const [tabToggle, setTabToggle] = useState("Wireless");
  const handleTouchStart = (e) => {
    console.log(e.touches[0].clientX);
    setStartPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0].clientX - startPosition < 0) {
      categoryRef.current.style.transform = `translate3d(${
        e.touches[0].clientX - startPosition
      }px,0,0)`;
    } else {
      categoryRef.current.style.transform = `translate3d(${
        e.touches[0].clientX - startPosition
      }px,0,0)`;
    }

    setCurrentPosition(e.touches[0].clientX - startPosition);
  };

  const handleTouchEnd = (e) => {
    console.log(e.changedTouches[0].clientX);
  };
  useEffect(() => {
    categoryRef.current.addEventListener("touchstart", handleTouchStart);
    // categoryRef.current.addEventListener("touchmove", handleTouchMove);
    categoryRef.current.addEventListener("touchend", handleTouchEnd);
  }, [currentPosition]);

  const handleClick = (category, id) => {
    categoryHandler(category);

    const animation_line = document.querySelector(".animation_line");
    const current_item = itemsRef.current[id];
    animation_line.style.width = `${current_item.clientWidth}px`;
    animation_line.style.left = `${current_item.offsetLeft}px`;

    itemsRef.current.forEach((item) => item.classList.remove("active"));
    current_item.classList.add("active");

    setTabToggle(current_item.children[0].innerText);
  };

  useEffect(() => {
    const animation_line = document.querySelector(".animation_line");
    animation_line.style.width = `${itemsRef.current[0].clientWidth}px`;
    animation_line.style.left = `${itemsRef.current[0].offsetLeft}px`;
    itemsRef.current[0].classList.add("active");
  }, []);

  return (
    <div
      className="w-[500px] md:w-full flex my-16 md:text-lg p-2  pl-16 md:pl-0"
      ref={categoryRef}
    >
      <ul className="w-full flex gap-12 justify-center md:justify-evenly relative items-center cursor-pointer">
        <div className=" absolute h-[2px] bg-blue bottom-0 animation_line duration-300 "></div>
        {categoriesArray.map((category, index) => (
          <li
            className=""
            onClick={() => handleClick(category, index)}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <p>{category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
