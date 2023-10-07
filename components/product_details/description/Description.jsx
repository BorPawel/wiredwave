import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
export function Description({ longDesc }) {
  const [isToggled, setIsToggled] = useState(false);

  const toggleDescription = () => {
    setIsToggled((prev) => !prev);
    const desc = document.querySelector(".description");
    if (!isToggled) {
      desc.style.maxHeight = desc.scrollHeight + 12 + "px";
      desc.style.paddingTop = "8px";
    } else {
      desc.style.maxHeight = "0";
      desc.style.paddingTop = "0";
    }
  };

  return (
    <div className="min-h-[500px] w-full ">
      <div
        className="border-y-2  border-grey p-2 cursor-pointer flex flex-col"
        onClick={toggleDescription}
      >
        <div className="flex justify-between items-center ">
          <button className="text-xl md:text-2xl lg:text-3xl">
            Description
          </button>
          {!isToggled ? (
            <AiOutlinePlus className="text-xl md:text-2xl lg:text-3xl" />
          ) : (
            <AiOutlineMinus className="text-xl md:text-2xl lg:text-3xl" />
          )}
        </div>
        <p className="description text-sm max-h-0 overflow-hidden duration-200 ">
          {longDesc}
        </p>
      </div>

      <div>asdasdasd</div>
    </div>
  );
}
