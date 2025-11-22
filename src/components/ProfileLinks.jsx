import React from "react";
import linkdienImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";
import leetcodeImg from "../assets/leetcode.svg";

const ProfileLinks = () => {
  return (
    <div className="flex justify-between items-center gap-6 p-4 border border-gray-100 rounded-xl">
      <div className="flex gap-5 items-center justify-between">
        <img src={githubImg} className="w-13 h-13" alt="" />
        <a
          target="blank"
          href="https://github.com/KartikJS1"
          className="font-semibold text-md cursor-pointer"
        >
          Github
        </a>
      </div>
      <div className="flex gap-5 items-center justify-between">
        <img src={linkdienImg} className="w-13 h-13" alt="" />
        <a
          target="blank"
          href="https://www.linkedin.com/in/kartik-ramesh-chavan-12b132229"
          className="font-semibold text-md cursor-pointer"
        >
          Linkdien
        </a>
      </div>
      <div className="flex gap-5 items-center justify-between">
        <img src={leetcodeImg} className="w-13 h-13" alt="" />
        <a
          target="blank"
          href="https://leetcode.com/u/kartikrameshchavan2003"
          className="font-semibold text-md cursor-pointer"
        >
          Leetcode
        </a>
      </div>
    </div>
  );
};

export default ProfileLinks;
