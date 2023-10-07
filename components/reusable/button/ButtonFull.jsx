import React from "react";

const Button = ({ buttonText, onClick, className }) => {
  return (
    <button
      className={`bg-blue rounded-[30px] font-bold ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
