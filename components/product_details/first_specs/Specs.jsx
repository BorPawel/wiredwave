import React from "react";
import { BsBatteryFull, BsFillMicFill } from "react-icons/bs";
import { FaBluetooth } from "react-icons/fa";
import { BiEqualizer } from "react-icons/bi";
import { AiFillSound } from "react-icons/ai";

export function Specs({ batteryLife, bluetooth, driverSize, freq }) {
  const textStyles = "text-xs font-bold flex flex-wrap text-white lg:text-lg";
  const specContainer =
    "flex justify-center items-center text-xl  p-2 text-blue rounded-xl  gap-2 lg:flex-col";
  const iconsStyles = "text-2xl lg:text-4xl";
  const iconsArray = [
    <FaBluetooth className={iconsStyles} />,
    <BsBatteryFull className={`-rotate-90 ${iconsStyles}`} />,
    <AiFillSound className={iconsStyles} />,
    <BiEqualizer className={iconsStyles} />,
  ];

  const iconsLabel = [
    `Bluetooth ${bluetooth.toFixed(1)}`,
    `Up to ${batteryLife} hours`,
    `${driverSize}`,
    `${freq}`,
  ];

  return (
    <div className="grid grid-cols-2 gap-6 p-4 lg:flex lg:items-center lg:justify-center lg:gap-12 mt-8">
      {iconsArray.map((icon, index) => (
        <div className={specContainer}>
          <div className="bg-black p-2 lg:p-4 rounded-lg">{icon}</div>
          <p className={textStyles}>{iconsLabel[index]}</p>
        </div>
      ))}
    </div>
  );
}
