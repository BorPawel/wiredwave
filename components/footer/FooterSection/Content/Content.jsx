import React from "react";

const Content = ({ content }) => {
  return content ? (typeof content === "string" ? (
    <p className="flex flex-wrap w-full lg:w-3/4 text-sm">{content}</p>
  ) : (
    <div className="flex w-full flex-col gap-[3px]">
      {content &&
        content.map((item, index) => (
          <p key={index} className="text-sm">
            {item}
          </p>
        ))}
    </div>
  )) : null
};

export default Content;
