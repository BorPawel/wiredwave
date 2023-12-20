'use client'
import React, { useEffect, useRef, useState } from "react";


const Navigation = ({setTabToggle}) => {
  const mainDescClass = "m-2 hover:text-blue cursor-pointer";
  //const navArray = ["Description", "Specification", "Reviews"];
  const [toggle, setToggle] = useState("Specification");

  const itemsRef = useRef([]);

  
  const toggleHandler = (id) => {
    const animation_line = document.querySelector(".animation_line");
    const current_item = itemsRef.current[id];
    animation_line.style.width = `${current_item.clientWidth}px`;
    animation_line.style.left = `${current_item.offsetLeft}px`;

    itemsRef.current.forEach(item => item.classList.remove('active'))
    current_item.classList.add('active')

    setTabToggle(current_item.children[0].innerText)
  };

  useEffect(() => {
    const animation_line = document.querySelector(".animation_line");
    animation_line.style.width = `${itemsRef.current[0].clientWidth}px`;
    animation_line.style.left = `${itemsRef.current[0].offsetLeft}px`;
    itemsRef.current[0].classList.add('active')

  }, []);

  const navArray = ['Description', "Specification", 'Reviews']
  return (
    <div className="w-full flex items-center justify-center">
      <ul className="flex gap-4 relative mt-8 md:gap-8 lg:gap-12  z-0 nav_container">
        <div className=" absolute h-[2px] bg-blue bottom-0 animation_line duration-300"></div>
        {navArray.map((item, index) => (
          <li
            className={`${mainDescClass} nav_items z-10`}
            key={index}
            onClick={() => toggleHandler(index)}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <p className="md:text-xl ">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Navigation