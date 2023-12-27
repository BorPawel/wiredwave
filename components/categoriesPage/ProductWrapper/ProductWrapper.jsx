"use client";
import React, { Suspense, useState } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import Sidebar from "../Sidebar/Sidebar";

const ProductWrapper = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <Suspense fallback={<div>Loading</div>}>{children}</Suspense>
    </div>
  );
};

export default ProductWrapper;
