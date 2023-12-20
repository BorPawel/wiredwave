import { StateContext } from "@/context/StateContext";
import React from "react";

const Provider = ({ children }) => {
  return <StateContext>{children}</StateContext>;
};

export default Provider;
