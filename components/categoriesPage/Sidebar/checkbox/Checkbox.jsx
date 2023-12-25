import React from "react";

const Checkbox = ({value, isChecked, onChange}) => {
 
  return (
    <div className="flex justify-start items-center  gap-2 ">
       <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        value={value.toLowerCase()}
      />
      <span>{value}</span>
    </div>
  );
};

export default Checkbox;
