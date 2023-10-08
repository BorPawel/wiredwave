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
       {bluetooth && <tr>
          <td>Wireless Connectivity</td>
          <td>{bluetooth?.toFixed(1)}</td>
        </tr>}
      {  batteryLife && <tr>
          <td>BatteryLife</td>
          <td>Up to {batteryLife} hours</td>
        </tr>}
       { driverSize &&  <tr>
          <td>Audio Driver Size</td>
          <td>{driverSize}</td>
        </tr>}
        { soundQuality && <tr>
          <td>Sound Quality</td>
          <td>{soundQuality}</td>
        </tr>}
       {noiseCancel && <tr>
          <td>Noise Cancellation</td>
          <td>{noiseCancel}</td>
        </tr>}
      {portability &&  <tr>
          <td>Portability</td>
          <td>{portability}</td>
        </tr>}
        { connector && <tr>
          <td>Connector</td>
          <td>{connector}</td>
        </tr>}
        { comfort && <tr>
          <td>Comfort</td>
          <td>{comfort}</td>
        </tr>}
       { micro && <tr>
          <td>Microphone</td>
          <td>{micro}</td>
        </tr>}
       { controls && <tr>
          <td>Controls</td>
          <td>{controls}</td>
        </tr>}
        { chargingTime && <tr>
          <td>Charging Time</td>
          <td>{chargingTime}</td>
        </tr>}
     { durability &&   <tr>
          <td>Durability</td>
          <td>{durability}</td>
        </tr>}
       { freq && <tr>
          <td>Headphone frequency response</td>
          <td>{freq}</td>
        </tr>}
      </tbody>
    </table>
  );
}
