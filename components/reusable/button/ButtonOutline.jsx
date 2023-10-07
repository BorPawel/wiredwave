import React from "react";

const ButtonOutline = ({ buttonText, onClick }) => {
  return (
    <button
      className="p-4 w-40 border-2 border-blue text-blue font-bold rounded-[30px]"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default ButtonOutline;
