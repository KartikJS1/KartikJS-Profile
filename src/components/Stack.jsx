import React from "react";
import "./stack.css";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";
import dotnetIcon from "../assets/dotnet.png";
import databaseIcon from "../assets/database.png";
import dockerIcon from "../assets/docker.png";
const icons = [
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  dotnetIcon,
  databaseIcon,
  dockerIcon,
];

const Stack = () => {
  return (
    <div className="border border-gray-100 ">
      <p className="stackTitle text-2xl font-semibold mb-3 border-b border-gray-100">
        Stack
      </p>
      <div className="overflow-hidden whitespace-nowrap relative">
        <div className="scroll-container flex gap-8 mb-1">
          {icons.concat(icons).map((icon, index) => (
            <img
              key={index}
              src={icon}
              className="h-12 w-12 object-contain"
              alt="stack-icon"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
