import React from "react";
import { AiOutlineCopyrightCircle, AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="w-full min-h-[400px] pb-0 p-6 mt-12 flex justify-between flex-col  border-t-[1px] border-grey">
      <div className="p-6 flex flex-col md:flex-row justify-around gap-6">
        <div className="lg:w-1/4 flex flex-col gap-4">
          <h3>WiredWave</h3>
          <div>
            <h5>About Us</h5>
            <p className="flex flex-wrap w-3/4 text-sm">
              At WiredWave, we're your trusted destination for innovative
              electronics, where quality meets convenience.
            </p>
          </div>
        </div>
        <div>
          <h5>Contact Us</h5>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Phone: +48 123456789</p>
            <p className="text-sm">E-mail: wiredwave@gmail.com</p>
            <p className="text-sm">Durham, 1870 Jennifer Lane</p>
          </div>
        </div>
        <div>
          <h5>Helpful Links</h5>
          <ul className="text-sm flex flex-col gap-2">
            <li>Support</li>
            <li>Services</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h5>Subscribe for more info</h5>
          <input />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="w-full flex-center gap-4 flex-col border-t-[1px] p-6 lg:p-8 ">
        <ul className="flex gap-6 text-2xl">
          <li><BsFacebook/></li>
          <li><BsInstagram/></li>
          <li><AiFillTwitterCircle/></li>
        </ul>
        <div className="flex-center  gap-2 ">
          <AiOutlineCopyrightCircle />
          <p className="text-sm"> 2023 WiredWave All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
