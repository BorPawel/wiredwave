import React from "react";

const IsSubscribe = ({ isSubscribe }) => {
  return isSubscribe ? (
    <div className="flex flex-col w-full items-start">
      <label htmlFor="subscribe"></label>
      <input
        className=" bg-dark border-[1px] border-white h-8 rounded-md p-4"
        type="text"
        name="subscribe"
      />
      <button className=" mt-4 border-2 px-12 py-[10px] rounded-xl bg-blue border-blue">
        Subscribe
      </button>
    </div>
  ) : null;
};

export default IsSubscribe;
