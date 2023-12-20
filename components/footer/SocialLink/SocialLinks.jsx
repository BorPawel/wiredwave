import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';

const SocialLinks = () => {
  return (
    <div className="w-full flex-center gap-4 flex-col border-t-[1px] lg:p-8 border-grey">
      <ul className="flex gap-6 text-2xl">
        <li><BsFacebook/></li>
        <li><BsInstagram/></li>
        <li><AiFillTwitterCircle/></li>
      </ul>
    </div>
  );
};

export default SocialLinks;
