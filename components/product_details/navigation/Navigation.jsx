import React, { useEffect, useState } from "react";
export function Navigation() {
  const mainDescClass = "m-2 hover:text-blue cursor-pointer";
  const navArray = ["Specification", "Reviews"];
  const [toggle, setToggle] = useState("Specification");
  const toggleHandler = (id) => {
    const nav_items = document.querySelectorAll('.nav_items');
    nav_items.forEach(item => item.classList.remove('active'))

    nav_items[id].classList.add('active')

  };
  useEffect(() => {
    const nav_items = document.querySelectorAll('.nav_items');
    nav_items[0].classList.add('active')
  }, []);
  return (
    <ul className="w-full flex items-center justify-center gap-12">
      {navArray.map((item, index) => (
        <li className={`${mainDescClass} nav_items`} key={index} onClick={() => toggleHandler(index)}>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
}
