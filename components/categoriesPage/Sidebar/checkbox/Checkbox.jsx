import React, {  } from "react";

const Checkbox = ({text, isChecked, onChange}) => {
 
  return (
    <div className="flex justify-start items-center  gap-2 text-lg">
       <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <label>{text}</label>
    </div>
  );
};

export default Checkbox;
