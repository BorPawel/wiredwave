import React from "react";

import { AiOutlineCheck } from "react-icons/ai";
export function Colors({ colors, setProductColor }) {
  const checkColorHandler = (id) => {
    const colors = document.querySelectorAll('.product_color');

    colors.forEach(color => color)
  }
  return (
    <div className="flex-center gap-4 ">
      <p>Available colors:</p>
      <div className="flex-center gap-6">
        {colors?.map((color, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full cursor-pointer flex-center hover:scale-110 product_color `}
            style={{
              backgroundColor: color,

            }}
            onClick={() => setProductColor(color)}
          >
         
          </div>
        ))}
      </div>
    </div>
  );
}
