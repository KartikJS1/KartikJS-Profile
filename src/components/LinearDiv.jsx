import React from "react";

const LinearDiv = () => {
  return (
    <div className="relative h-8 w-full border-x border-b border-gray-100 overflow-hidden">
      <div
        className="
          absolute inset-0
          bg-[repeating-linear-gradient(315deg,#d9d9d9_0,#d9d9d9_1px,transparent_1px,transparent_10px)]
        "
      ></div>
    </div>
  );
};

export default LinearDiv;
