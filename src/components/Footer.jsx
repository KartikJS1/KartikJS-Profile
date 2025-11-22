import React from "react";
import githubIcon from "../assets/icons8-github.svg";
import linkedIn from "../assets/linkedin.png";
// import mailIcon from "../assets/mail.png";

const Footer = () => {
  return (
    <footer className="w-full p-3 border-t border-gray-200 bg-white">
      <p className="text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Kartik Ramesh Chavan. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
