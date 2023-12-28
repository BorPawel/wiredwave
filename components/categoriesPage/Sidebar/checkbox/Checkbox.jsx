import React from "react";

const Checkbox = ({value, isChecked, onChange}) => {
 
  return (
    <div className="flex justify-start items-center gap-2 ">
       <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        value={value.toLowerCase()}
      />
      <span className="text-sm md:text-md">{value}</span>
    </div>
  );
};

export default Checkbox;
