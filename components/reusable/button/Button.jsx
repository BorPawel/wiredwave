import React from "react";

const Button = ({ buttonText, onClick, type }) => {
  const btnStroke = type === 'full' ? 'bg-blue text-white' : 'border-[1px] border-blue text-blue' 
  return (
    <button
      className={`${btnStroke } rounded-[20px] font-bold px-20 py-5 hover:scale-110  duration-300`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
