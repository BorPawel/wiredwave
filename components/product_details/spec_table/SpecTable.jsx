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
}) {
  return (
    <table className="w-full lg:w-3/4 spec_table">
      <thead>
        <tr className="text-left text-xl md:text-2xl lg:text-3xl">
          <th >Features</th>
          <th>Specification</th>
        </tr>
      </thead>
      <tbody  className="text-sm">
        <tr>
          <td>Wireless Connectivity</td>
          <td>{bluetooth.toFixed(1)}</td>
        </tr>
        <tr>
          <td>BatteryLife</td>
          <td>{batteryLife}</td>
        </tr>
        <tr>
          <td>Audio Driver Size</td>
          <td>{driverSize}</td>
        </tr>
        <tr>
          <td>Sound Quality</td>
          <td>{soundQuality}</td>
        </tr>
        <tr>
          <td>Noise Cancellation</td>
          <td>{noiseCancel}</td>
        </tr>
        <tr>
          <td>Portability</td>
          <td>{portability}</td>
        </tr>
        <tr>
          <td>Connector</td>
          <td>{connector}</td>
        </tr>
        <tr>
          <td>Comfort</td>
          <td>{comfort}</td>
        </tr>
        <tr>
          <td>Microphone</td>
          <td>{micro}</td>
        </tr>
        <tr>
          <td>Controls</td>
          <td>{controls}</td>
        </tr>
        <tr>
          <td>Charging Time</td>
          <td>{chargingTime}</td>
        </tr>
        <tr>
          <td>Durability</td>
          <td>{durability}</td>
        </tr>
        <tr>
          <td>Headphone frequency response</td>
          <td>{freq}</td>
        </tr>
      </tbody>
    </table>
  );
}
