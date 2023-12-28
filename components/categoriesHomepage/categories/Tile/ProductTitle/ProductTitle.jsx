import React from "react";

const ProductTitle = ({ title }) => {
  const formattedTitle =
    title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  const chars = formattedTitle.split("");
  return (
    <div className="h-1/4  flex justify-center items-center w-full absolute duration-300 bottom-[40%]  -z-1  md:group-hover:z-20">
      <div className="w-full p-3 flex justify-center items-center duration-300 gap-2 md:gap-5 lg:gap-7  group-hover:gap-2">
        {chars.map((char, index) => (
          <span
            key={index}
            className="text-xl md:text-2xl lg:text-4xl text-blue md:text-grey font-extrabold md:group-hover:text-3xl lg:group-hover:text-5xl duration-300 group-hover:[text-shadow:_0px_0px_22px_black] group-hover:text-blue"
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductTitle;
