import React from "react";

const Links = ({ links }) => {
  return links ? (
    <ul className="text-sm flex flex-col w-full gap-[3px]">
      {links.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  ) : null;
};

export default Links;
