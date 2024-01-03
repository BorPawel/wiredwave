"use client";
import { urlFor } from "@/sanity/lib/client";
import React from "react";

const Layout = ({ product }) => {
  return (
    <div className="w-full h-full max-w-[1200px] ">


      <div class="grid grid-cols-2 grid-rows-4 gap-4 h-screen lg:h-[190vh]">
        <div class="col-span-2 row-span-2 bg-blue ">Element 1</div>

        <div class="col-span-1 row-span-2 bg-red-200">Element 2</div>

        <div class="col-start-2 row-start-3 bg-green-200">Element 3</div>

        <div class="col-start-2 row-start-4 bg-yellow-200">Element 4</div>
      </div>
    </div>
  );
};

export default Layout;
