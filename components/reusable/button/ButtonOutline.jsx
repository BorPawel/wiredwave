import React from "react";

const ButtonOutline = ({ buttonText, onClick, className }) => {
  return (
    <button
      className={`border-2 border-blue text-blue font-bold rounded-[30px] ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default ButtonOutline;
