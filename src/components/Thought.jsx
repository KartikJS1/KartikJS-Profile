import React from "react";
import "./thought.css";
const Thought = () => {
  return (
    <div className="w-full flex flex-col items-center px-4">
      <p className="thought text-lg italic text-gray-700 text-center">
        “You are the architect of your destiny.”
      </p>
      <p className="author text-gray-500 italic text-sm ml-20 mt-0.5">
        - Satguru Shri Wamanrao Pai
      </p>
    </div>
  );
};

export default Thought;
