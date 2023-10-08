import React from "react";
export function Colors({ colors }) {
  return (
    <div className="flex-center gap-4 ">
      <p>Available colors:</p>
      <div className="flex-center gap-6">
        {colors?.map((color, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full`}
            style={{
              backgroundColor: color,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
