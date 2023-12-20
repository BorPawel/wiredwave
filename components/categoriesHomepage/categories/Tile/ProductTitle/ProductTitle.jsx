import React from "react";

const ProductTitle = ({ title }) => {
  const chars = title.split("");
  return (
    <div className="h-1/4  flex justify-center items-center w-full absolute duration-300 bottom-[40%] -z-1 group-hover:z-20">
      <div className="w-full p-3 flex justify-center items-center duration-300 gap-8 group-hover:gap-2">
        {chars.map((char, index) => (
          <span
            key={index}
            className="text-4xl text-dark font-extrabold group-hover:text-black group-hover:text-5xl duration-300 group-hover:[text-shadow:_1px_1px_2px_white]"
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductTitle;
