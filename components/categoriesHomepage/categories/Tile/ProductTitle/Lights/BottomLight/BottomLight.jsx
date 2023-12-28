import React from "react";

const BottomLight = () => {
  return (
    <>
      <div
        className="-bottom-1 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px] user-select-none center pointer-events-none absolute max-w-full -translate-x-1/2 translate-y-1/2"
        style={{
          background:
            "conic-gradient(from 270deg at 50% 50%, #00000000 50%, #000 50%),radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)",
        }}
      ></div>
      <div
        aria-hidden="true"
        class="left-1/2 bottom-0 w-[300px] max-w-[300px] user-select-none center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>
    </>
  );
};

export default BottomLight;
