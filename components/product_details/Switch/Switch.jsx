'use client'
import React, { useState } from "react";
import Description from "../description/Description";
import Navigation  from "../navigation/Navigation";
import { SpecTable } from "../spec_table/SpecTable";

const Switch = ({ product }) => {
  const [tabToggle, setTabToggle] = useState("Description");
  return (
    <>
      <Navigation setTabToggle={setTabToggle} />
      <div className="w-full min-h-[1000px] text-xl text-white flex justify-center ">
        {(() => {
          switch (tabToggle) {
            case "Description":
              return (
                <div className="flex flex-col gap-4 w-[1000px]">
                  <Description
                    longDesc={product?.longDesc}
                    multipleDesc={product?.multipleDesc}
                  />
                </div>
              );
            case "Specification":
              return (
                <div className="w-[1200px] flex-center mb-12">
                  <SpecTable product={product} className="h-16" />
                </div>
              );
            case "Reviews":
              return <div>Reviews comming soon</div>;
            default:
              return <div>default</div>;
          }
        })()}
      </div>
    </>
  );
};

export default Switch;
