import React from "react";

const Colors = ({ product, setPickedColor, pickedColor }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <p>Color:</p>
      <div className="flex gap-2 justify-center items-center">
        {product?.colorImageArray?.map((color, i) => (
          <div
            key={i}
            className={
              pickedColor === color.color.hex
                ? "w-8 h-8 rounded-full  cursor-pointer"
                : "w-6 h-6 rounded-full  cursor-pointer"
            }
            style={{ backgroundColor: color.color.hex }}
            onClick={() => setPickedColor(color.color.hex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
