import React from "react";

const Description = ({ longDesc, multipleDesc }) => {
  return (
    <>
      {longDesc
        ? longDesc
        : multipleDesc?.map((item, index) => (
            <div key={index}>
              <h4>{item.header}</h4>
              <p>{item.sectionDesc}</p>
            </div>
          ))}
    </>
  );
};

export default Description;
