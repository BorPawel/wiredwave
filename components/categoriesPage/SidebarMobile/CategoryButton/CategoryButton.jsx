import React from "react";

const CategoryButton = ({ text, active, onClick }) => {
  return (
    <button
      className={
        active
          ? `bg-blue p-2 px-4 rounded-2xl font-bold text-black`
          : `border-2 border-blue p-2 px-4 rounded-2xl font-normal`
      }
      onClick={onClick}
    >
     
        {text}
    
    </button>
  );
};

export default CategoryButton;
