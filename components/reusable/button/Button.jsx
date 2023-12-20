import React from "react";

const Button = ({ buttonText, onClick , className}) => {
 
  return (
    <button
      className={` relative rounded-[20px] flex font-bold w-[250px] h-16 overflow-hidden group border-blue  border-[1px] ${className}`}
      onClick={onClick}
    >
      <span
        className={`absolute flex-center w-full h-full  text-2xl text-blue  group-hover:translate-y-[-100%] duration-500`}
      >
        {buttonText} 
      </span>
      <span
        className={`absolute flex-center bg-blue text-white w-full h-full  -bottom-[100%] group-hover:translate-y-[-100%] duration-500`}
      >
        {buttonText}
      </span>
    </button>
  );
};

export default Button;
