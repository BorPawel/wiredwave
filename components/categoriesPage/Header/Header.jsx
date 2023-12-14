import React from 'react';
import SortButton from './SortButton/SortButton';

const Header = () => {
  return (
    <div>
      <div>Main / Categories</div>
      <div className="w-full py-10 flex justify-between items-center">
        <h4>Category</h4>
       <SortButton />
      </div>
    </div>
  );
};
export default Header