import React from "react";
export function SpecTable({
  product: {
    bluetooth,
    batteryLife,
    driverSize,
    soundQuality,
    noiseCancel,
    portability,
    comfort,
    connector,
    micro,
    controls,
    chargingTime,
    durability,
    freq,
  },
  className,
  type
}) {
  const specArray = [
    `Bluetooth ${bluetooth?.toFixed(1)}`,
    `Up to ${batteryLife} hours`,
    driverSize,
    soundQuality,
    noiseCancel,
    portability,
    comfort,
    connector,
    micro,
    controls,
    chargingTime,
    durability,
    freq,
  ];
  const specLabelArray = [
    `Wireless Connectivity`,
    `Battery Life`,
    `Audio Driver Size`,
    `Sound Quality`,
    `Noise Cancellation`,
    `Portability`,
    `Comfort`,
    `Connector`,
    `Microphone`,
    `Controls`,
    `Charging Time`,
    `Durability`,
    `Headphone frequency response`,
  ];

  const style = type === 'tooltip' ? 'lg:w-full' : 'lg:w-3/4'
  return (
    <table className={`w-full ${style} spec_table`}>
      <thead>
        <tr className="text-left text-xl md:text-2xl lg:text-3xl">
          <th >Feature</th>
          <th >Specification</th>
        </tr>
      </thead>
      <tbody className="text-sm ">
        {specArray.map((item, index) => (
          <tr key={index}>
            <td className={`${className}`}>{specLabelArray[index]}</td>
            <td>{item}</td>
          </tr>
        ))}

      </tbody>
    </table>
  );
}
