import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full min-h-[350px] pb-0 p-6 mt-12 flex justify-between flex-col border-t-[1px] border-grey">
      <div className="p-6 flex  justify-between">
        <div>
          <h3>WiredWave</h3>
          <div>
            <h5>About Us</h5>
            <p>asdasdndfkjndfskvlmsdklvmkj| dsvdmsflkmsdlkfmsdlkfml</p>
          </div>
        </div>
        <div>
          <h5>Contact Us</h5>
          <p>Phone: +99999999</p>
          <p>Mail: +99999999</p>
        </div>
        <div>
          <h5>Helpful Links</h5>
          <ul>
            <li>Support</li>
            <li>Services</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        <div>
          <h5>Subscribe for more info</h5>
          <input />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="w-full  border-t-[1px] p-12   relative">
        <ul className="flex gap-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <li>fb</li>
          <li>Twitter</li>
          <li>IG</li>
        </ul>
        <div className="flex-center  gap-2 absolute top-[50%] translate-y-[-50%] right-6">
          <AiOutlineCopyrightCircle />
          <p> 2023 WiredWave All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
