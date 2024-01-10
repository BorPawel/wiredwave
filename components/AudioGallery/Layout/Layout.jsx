"use client";
import { urlFor } from "@/sanity/lib/client";
import React from "react";

const Layout = ({ gallery }) => {
  console.log(gallery)
  return (
    <div className="w-full h-full max-w-[1200px] ">
      <div class="grid grid-cols-2 grid-rows-4 gap-4 h-screen lg:h-[190vh]">
        <div class="col-span-2 row-span-2 bg-neutral-950 flex ">
          {" "}
          <img
            src={urlFor(gallery.bigImage)}
            className="w-full aspect-square"
          />
        </div>

        <div class="col-span-1 row-span-2 bg-neutral-950 flex ">
          <img src={urlFor(gallery.longImage)} className="w-full" />
        </div>

        <div class="col-start-2 row-start-3 bg-neutral-950 flex">
          {" "}
          <img src={urlFor(gallery.smallFirst)} className="w-full " />
        </div>

        <div class="col-start-2 row-start-4 bg-neutral-950 flex">
          {" "}
          <img src={urlFor(gallery.smallSecond)} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
