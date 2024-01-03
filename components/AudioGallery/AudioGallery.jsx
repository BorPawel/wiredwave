import React from "react";
import WirelessShowcase from "./WirelessShowcase/WirelessShowcase";
import GamingShowcase from "./GamingShowcase/GamingShowcase";
import EarphonesShowcase from "./EarphonesShowcase/EarphonesShowcase";
import { getData } from "@/lib/getData/getData";

const AudioGallery = async () => {
  const data = await getData( 'product');
  return (
    <section className="m-auto w-full max-w-[1600px] text-white my-32 flex flex-col gap-60">
        <WirelessShowcase  product={data.product.filter(item => item.category === 'Wireless')}/>
        {/* <GamingShowcase product={data.product.filter(item => item.category === 'Gaming')}/>
        <EarphonesShowcase product={data.product.filter(item => item.category === 'Earphones')}/> */}
    </section>
  );
};

export default AudioGallery;
