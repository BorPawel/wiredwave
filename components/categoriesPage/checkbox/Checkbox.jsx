import React, {  } from "react";

const Checkbox = ({text, isChecked, onChange}) => {
 
  return (
    <div>
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
