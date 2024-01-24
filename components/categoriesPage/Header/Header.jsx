'use client'
import React from 'react';
import SortButton from './SortButton/SortButton';
import BackButton from '@/components/product_details/BackButton/BackButton';

const Header = () => {
  return (
    <div className="w-full justify-center items-center mt-24">
      <BackButton />
      <div className=" flex w-full justify-center mb-6 lg:mb-24 items-center">
        <h4>Category</h4>
       {/* <SortButton /> */}
      </div>
    </div>
  );
};
export default Header