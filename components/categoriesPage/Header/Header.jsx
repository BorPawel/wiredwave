'use client'
import React from 'react';
import SortButton from './SortButton/SortButton';
import BackButton from '@/components/product_details/BackButton/BackButton';

const Header = () => {
  return (
    <div className="w-full justify-center items-center mt-6 lg:mt-24">
      
      <div className=" flex w-full justify-center mb-6 lg:mb-24 items-center">
      <BackButton />
        <h4>Category</h4>
       {/* <SortButton /> */}
      </div>
    </div>
  );
};
export default Header