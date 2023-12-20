import React from "react";
import FooterSection from "./FooterSection/FooterSection";
import SocialLinks from "./SocialLink/SocialLinks";
import Copyright from "./Copyright/Copyright";

const Footer = () => {
  return (
    <footer className="w-full min-h-[400px] pb-0 p-6 mt-12 flex justify-between flex-col border-t-[1px] border-grey text-white">
      <div className="p-6 flex flex-col md:flex-row justify-around gap-6 items-center lg:items-start">
        <FooterSection
          title="About Us"
          content="At WiredWave, we're your trusted destination for innovative electronics, where quality meets convenience."
        />

        <FooterSection
          title="Contact Us"
          content={[
            "Phone: +48 123456789",
            "E-mail: wiredwave@gmail.com",
            "Durham, 1870 Jennifer Lane",
          ]}
        />

        <FooterSection
          title="Helpful Links"
          links={["Support", "Services", "Privacy Policy", "Terms & Condition"]}
        />

        <FooterSection title="Subscribe for more info" isSubscribe />
      </div>

      <SocialLinks />
      <Copyright />
    </footer>
  );
};

export default Footer;
