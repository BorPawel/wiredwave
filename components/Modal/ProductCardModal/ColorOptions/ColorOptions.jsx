import React from "react";

const ColorOptions = ({ colorImageArray }) => {
  return (
    <div className="flex  items-center  gap-4 flex-col">
      <p className="text-white">Colors:</p>
      <div className="flex gap-4">
        {colorImageArray ? (
          colorImageArray.map((item, index) => (
            <div
              key={index}
              className="rounded-full"
              style={{
                backgroundColor: item.color.hex,
                width: "50px",
                height: "50px",
              }}
            ></div>
          ))
        ) : (
          <div>No colors</div>
        )}
      </div>
    </div>
  );
};

export default ColorOptions;
