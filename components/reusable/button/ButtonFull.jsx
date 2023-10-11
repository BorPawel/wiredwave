import React from "react";

const ButtonFull = ({ buttonText, onClick, className }) => {
  return (
    <button
      className={`bg-blue rounded-[30px] font-bold ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default ButtonFull;
