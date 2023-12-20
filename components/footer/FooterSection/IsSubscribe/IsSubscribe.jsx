import React from "react";

const IsSubscribe = ({ isSubscribe }) => {
  return isSubscribe ? (
    <div className="flex flex-col items-start">
      <input
        className="w-full bg-dark border-[1px] border-white h-8 rounded-md p-4"
        type="text"
      />
      <button className="mx-auto mt-4 border-2 px-12 py-[10px] rounded-xl bg-blue border-blue">
        Subscribe
      </button>
    </div>
  ) : null;
};

export default IsSubscribe;
