import React from "react";
import { BsBatteryFull, BsFillMicFill } from "react-icons/bs";
import { FaBluetooth } from "react-icons/fa";
export function Specs({ batteryLife, bluetooth, micro }) {
  return (
    <div className="flex gap-2">
     {bluetooth && <div className="flex justify-center items-center text-xl border-2 p-2 text-blue rounded-xl bg-grey border-grey gap-2">
        <FaBluetooth />
        {bluetooth?.toFixed(1)}
      </div>}
      {batteryLife && <div className="flex justify-center items-center text-xl border-2 p-2 text-blue rounded-xl bg-grey border-grey gap-2">
        <BsBatteryFull className="-rotate-90" />
        {batteryLife}h
      </div>}
     { micro && <div className="flex justify-center items-center text-xl border-2 p-2 text-blue rounded-xl bg-grey border-grey gap-2">
        <BsFillMicFill />
      </div>}
    </div>
  );
}
