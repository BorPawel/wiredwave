import React from "react";
import WirelessShowcase from "./WirelessShowcase/WirelessShowcase";
import GamingShowcase from "./GamingShowcase/GamingShowcase";
import EarphonesShowcase from "./EarphonesShowcase/EarphonesShowcase";

const AudioGallery = () => {
  return (
    <section className="m-auto w-full max-w-[1600px] text-white my-32 flex flex-col gap-60">
        <WirelessShowcase />
        <GamingShowcase />
        <EarphonesShowcase />
    </section>
  );
};

export default AudioGallery;
