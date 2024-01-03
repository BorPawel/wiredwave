'use client'
import React from 'react';
import SortButton from './SortButton/SortButton';
import BackButton from '@/components/product_details/BackButton/BackButton';

const Header = () => {
  return (
    <div>
      <BackButton />
      <div className="w-full py-14 flex justify-between items-center">
        <h4>Category</h4>
       <SortButton />
      </div>
    </div>
  );
};
export default Header