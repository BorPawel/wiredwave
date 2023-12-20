import React from "react";
export function Circles() {
    const circle =
    "rounded-full border-solid border-2 border-blue absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]";
  return <div className="hidden lg:block absolute top-[35%] left-[70%]">
        <span className={`w-[20px] h-[20px] ${circle} bg-blue drop-shadow-smallCircle`}></span>
        <span className={`w-[10vw] h-[10vw] ${circle} border-[8px] drop-shadow-inner`}></span>
        <span className={`w-[25vw] h-[25vw] ${circle} border-[6px] drop-shadow-inner `}></span>
        <span className={`w-[35vw] h-[35vw] ${circle} border-[4px] drop-shadow-inner opacity-60`}></span>
        <span className={`w-[50vw] h-[50vw] ${circle} order-[1px] drop-shadow-outer opacity-20`}></span>
      </div>;
}
  