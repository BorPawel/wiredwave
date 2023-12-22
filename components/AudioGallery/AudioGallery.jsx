import React from "react";
import WirelessShowcase from "./WirelessShowcase/WirelessShowcase";
import GamingShowcase from "./GamingShowcase/GamingShowcase";
import EarphonesShowcase from "./EarphonesShowcase/EarphonesShowcase";

const AudioGallery = ({products}) => {
  return (
    <section className="m-auto w-full max-w-[1600px] text-white my-32 flex flex-col gap-60">
        <WirelessShowcase  product={products.filter(item => item.category === 'Wireless')}/>
        <GamingShowcase product={products.filter(item => item.category === 'Gaming')}/>
        <EarphonesShowcase product={products.filter(item => item.category === 'Earphones')}/>
    </section>
  );
};

export default AudioGallery;
