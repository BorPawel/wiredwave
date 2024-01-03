import React from "react";

import Title from "./Title/Title";
import Content from "./Content/Content";
import Links from "./Links/Links";
import IsSubscribe from "./IsSubscribe/IsSubscribe";

const FooterSection = ({ title, content, links, isSubscribe }) => {
  return (
    <div className="lg:w-1/4 w-full flex flex-col gap-4 items-center lg:items-start">
      <Title title={title} />
    
      <Content content={content} />

      <Links links={links} />

     <IsSubscribe isSubscribe={isSubscribe}/>
    </div>
  );
};

export default FooterSection;
