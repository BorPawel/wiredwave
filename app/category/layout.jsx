import React from "react";

const CategoryLayout = ({ children, modal }) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default CategoryLayout;
