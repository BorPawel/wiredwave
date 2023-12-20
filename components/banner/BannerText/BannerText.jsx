// BannerText.jsx
import React from 'react';

const BannerText = ({ text, isHidden }) => (
  <h1 className={`${isHidden ? 'hidden' : ''} absolute z-[-1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:text-[9rem] lg:text-[20vw] md:tracking-wider font-bold text-grey`}>
    {text}
  </h1>
);

export default BannerText;