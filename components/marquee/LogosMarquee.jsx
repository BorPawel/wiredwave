import { urlFor } from "@/sanity/lib/client";
import React from "react";

export function LogosMarquee({ logos }) {
  return (
    <div className="hidden md:flex w-full h-[200px] border-y-[1px] border-grey  my-36 overflow-hidden">
      <div className="w-[1300px] flex  logos_wrapper gap-8 marquee1">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={urlFor(logo.images)}
            className="logos w-[200px] object-contain "
          />
        ))}
      </div>
      <div className="w-[1300px] flex  logos_wrapper gap-8 marquee2">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={urlFor(logo.images)}
            className="logos w-[200px] object-contain  "
          />
        ))}
      </div>
    </div>
  );
}
