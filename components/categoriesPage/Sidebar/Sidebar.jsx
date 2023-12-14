import React from 'react';
import Checkbox from './checkbox/Checkbox';
import PriceRange from './PriceRange/PriceRange';


const Sidebar = ({ categoryArr, selectedCheckbox, handleCheckboxChange }) => {
    
  return (
    <div className="w-[250px] flex flex-col gap-2 ">
      {categoryArr.map((item) => (
        <Checkbox
          key={item}
          text={item}
          isChecked={selectedCheckbox === item}
          onChange={() => handleCheckboxChange(item)}
        />
      ))}
      <PriceRange />
      {/* <ClearButton /> */}
    </div>
  );
};

export default Sidebar;
